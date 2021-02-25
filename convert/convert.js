const fs = require('fs');
const jsonfile = require('jsonfile');
const foxr = require('foxr').default
const path = require('path');
const slash = require('slash');
const he = require('he');
const sizeOf = require('image-size');
const parseHtml = require('node-html-parser').default;
const serveStatic = require('serve-static');
const connect = require('connect');

function getComponents(dir) {
    const components = []
    for (const file of fs.readdirSync(dir)) {
        if (fs.statSync(path.join(dir, file)).isDirectory()) {
            const subDir = path.join(dir, file)
            for (const componentfile of fs.readdirSync(subDir)) {
                if (fs.statSync(path.join(subDir, componentfile)).isFile()
                    && componentfile.split(".").pop() === "html") {
                    components.push({
                        name: componentfile.split(".").shift(),
                        path: path.join(subDir, componentfile)
                    })
                }
            }
        } else {
            if (fs.statSync(path.join(dir, file)).isFile()
                && file.split(".").pop() == "html") {
                components.push({
                    name: file.split(".").shift(),
                    path: path.join(dir, file)
                })
            }
        }
    }
    return components
}

async function takeScreenshot(component, variant, screenshotUrl, target, subvariant = false, child = false) {

    const screenshotPath = path.join(screenshotDir, component)
    const screenshotFileName = variant + ".png"
    const screenshotFullPath = path.join(screenshotPath, screenshotFileName)

    if (!fs.existsSync(screenshotFullPath)) {
        //if (await page.url() != screenshotUrl) { // If not already on page
        //console.log("     Browsing to:", screenshotUrl);
        page.removeAllListeners(); // Avoid MaxListenersExceededWarning that crashes the script when used in large badges

        await page.goto(screenshotUrl, { waitUntil: 'load', timeout: 0 }).catch(error => {
            console.log("ERROR: Can't reach page", screenshotUrl)
        })
        //}

        await page.evaluate(() => {
            var bodyHtml = document.body.innerHTML;
            var newBody = bodyHtml.replace(/< !--The markup below is for demonstration purposes only-- > ((.*\n)*)/, '')
                .replace(/<!-- The markup below is for demonstration purposes only -->((.*\n)*)/, '')
            document.body.innerHTML = newBody
            var s = document.createElement("script");
            s.type = "text/javascript";
            s.src = "file:///C:/dev/repo/personal/carbon-ds/node_modules/carbon-components/scripts/carbon-components.min.js";
            document.head.appendChild(s);
            var css = document.createElement("link");
            css.rel = "stylesheet";
            css.href = "file:///C:/dev/repo/personal/carbon-ds/node_modules/carbon-components/css/carbon-components.min.css";
            document.head.appendChild(css);
            return new Promise(r => setTimeout(r, 500)) // Wait for page to be ready
        });

        let element;
        const modal = await page.evaluate(function (target) {
            var element = document.querySelector(target)
            element.style.display = "inline-block" // Changes preview container size to fit component size
            var modal = document.querySelector('.bx--modal')
            if (modal) {
                document.querySelector('button').remove()
                modal.style.visibility = "visible"
                modal.style.opacity = 1
                var modalContainer = document.querySelector('.bx--modal-container')
                if (modalContainer) {
                    modalContainer.style.position = "static";
                    modalContainer.style.width = "84%";
                    modalContainer.style.height = "auto";
                    modalContainer.style["max-height"] = "90%";
                    return new Promise((resolve, reject) => {
                        setTimeout(() => {
                            resolve(true);
                        }, 500);
                    });
                }
            }
        }, target)
        element = await page.$(modal ? '.bx--modal' : target)

        if (!fs.existsSync(screenshotPath)) {
            fs.mkdirSync(screenshotPath, { recursive: true });
        }

        //await page.screenshot({ path: screenshotFullPath })
        if (element) {
            await element.screenshot({ path: screenshotFullPath })
            //console.log("     Screenshot:", screenshotFullPath)
            process.stdout.cursorTo(0);
            process.stdout.write(` ✅ ${subvariant ? child ? '  -' : ' -' : '-'} ` + variant + "\n\033[0G"); // The last bit replaces the whole line
        } else {
            process.stdout.cursorTo(0);
            process.stdout.write(` ❌ ${subvariant ? child ? '  -' : ' -' : '-'} ` + variant + "\n\033[0G")
            return false;
        }
    } else {
        //console.log("     Screenshot exist:", screenshotFullPath)
        process.stdout.cursorTo(0);
        process.stdout.write(` ❎ ${subvariant ? child ? '  -' : ' -' : '-'} ` + variant + "\n\033[0G");
    }
    return screenshotFullPath
}

async function notReady(component) {
    {
        if (!await page.$("body")) {
            return true
        }
    }
    return false
}

async function ready(component) {
    while (await notReady(component)) {
        await new Promise(r => setTimeout(r, 500)) // Wait for page to be ready
    }
}

function getSnippet(screenshotFullPath, htmlCode, variantName) {
    const imageSize = sizeOf(screenshotFullPath);
    const html = `\`${htmlCode.toString()}\``
    return {
        name: variantName,
        screenshot: {
            url: slash(screenshotFullPath.replace(rootDir, '')).replace('/components/', ''),
            width: imageSize.width,
            height: imageSize.height
        },
        html: html
    }
}

function buildComponentJson(component) {
    return `export default {
    displayName: "${component.name}",
    name: "${component.name.toLowerCase()}",
    homepage: "https://www.carbondesignsystem.com/components/${component.name}"
}

${buildVariantJson(component)}`
}

function buildVariantJson(component) {
    const variants = []
    component.variants.forEach(variant => {
        variants.push(objectToString(
            {
                displayName: variant.name,
                picture: {
                    src: `./${variant.screenshot.url}`.replace("//", "/"), // Compatible with windows replacint double slashes
                    width: variant.screenshot.width,
                    height: variant.screenshot.height
                },
                snippet: {
                    html: "html",
                }
            }).replace("\"html\"", variant.html)) // The replace is done to avoid qoutes bing added/processed by objectToString
    });
    return `export const variants = [
${variants.join(',\n')}
]`;
}

function objectToString(input) {
    return JSON.stringify(input).replace(/"([^"]+)":/g, '\n$1:');
}

function launchAssetsServer(port = 8000) {
    connect()
        .use(serveStatic(componentDir))
        .listen(port);

    console.log('Asset server listening on port', port);
}

const rootDir = path.resolve(__dirname, '..');
const componentDir = path.join(rootDir, "/node_modules/carbon-components/html")
const screenshotDir = path.join(rootDir, "/components/pictures");

(async () => {
    // await foxr.launch({
    //     executablePath: 'C:/Program Files/Firefox Developer Edition/firefox.exe'
    // })
    launchAssetsServer();
    const defaultViewport = {
        width: 600,
        height: 480
    }
    browser = await foxr.connect({
        defaultViewport: defaultViewport
    })
    pages = await browser.pages()
    page = pages[0]; // await browser.newPage() // << gives me an error

    const components = getComponents(componentDir).filter(c => !c.name.match('loading'))// for testing use .slice(0, 5); or .filter(c => c == 'name') to limit number of components processed
    // button--danger
    console.log("Components found", components.length)
    console.log("Ready to process 🚀:")
    console.log(components.map(c => c.name))

    const outputComponents = {};
    let currentComponent;

    for (const component of components.sort((a, b) => a.name.localeCompare(b.name))) {

        component.rawPageData = fs.readFileSync(component.path, "utf-8").replace(/< !--The markup below is for demonstration purposes only-- > ((.*\n)*)/, '')
            .replace(/<!-- The markup below is for demonstration purposes only -->((.*\n)*)/, '') // Remove examples
        component.pageData = component.rawPageData
            .replace(/<!--[\s\S]*?-->/g, '') // Remove comments
        component.parsedHtml = parseHtml(component.pageData);
        let componentName = component.name
        let variantName = component.name
        if (component.name.match(/--/g)) {
            const fileName = component.name.split('--')
            componentName = fileName.shift()
            variantName = fileName.join('-')
        }
        if (currentComponent === componentName) {
            //process.stdout.write("   - " + variantName + '\n') // Log variant name 
        } else {
            if (currentComponent) {
                const outputComponent = outputComponents[currentComponent];
                const outputComponentPath = path.join(rootDir, "components", currentComponent + ".ds.js");
                fs.writeFileSync(outputComponentPath, buildComponentJson(outputComponent));
                console.log("\n 🎉Succesfull output:", currentComponent, outputComponentPath, "\n");
            } else if (component.name.match(/--/g)) { // If component name is not named, example only button-- variants. Then use prefix as new component name
                const fileName = component.name.split('--')
                componentName = fileName.shift()
                variantName = fileName.join('-')
            }
            currentComponent = componentName
            console.log("*", componentName)

        }


        const variantSnippets = []
        // const variants = component.parsedHtml
        //     .childNodes.filter(c => c.classNames && c.classNames.includes("pi-draggable"));

        const variants = component.rawPageData.split(/<!--(?! Note).*-->/)
        const variantNames = component.rawPageData.match(/<!--(?! Note).*-->/g)
        let variantFirst = variants.shift()
        while (!variantFirst.replace(/<!--[\s\S]*?-->/g, '').replace(/\/n/, '').trim()) {
            if (variants[0].replace(/<!--[\s\S]*?-->/g, '').replace(/\/n/, '').trim()) {
                variantFirst = variants[0]
            } else { // Next
                variantFirst = variants.shift()
            }
        }
        const wrapper = parseHtml(variantFirst).childNodes[1]
        if (wrapper && wrapper.tagName) wrapper.removeChild(wrapper.childNodes[1])

        const screenshotUrl = slash(`file:///${component.path.replace("/mnt/c", "C:")}`)

        let count = 0;
        let wrapperCount = 0;
        let wrapperName = '';
        if (!variants.length || component.name.match(/data-table|tile|date-picker/)) { // Ignore data-table and others = false positive on variants
            screenshotFullPath = await takeScreenshot(componentName, variantName, screenshotUrl, 'body')
            variantSnippets.push(getSnippet(screenshotFullPath, component.pageData, variantName))
        } else {
            wrapperName = variantNames[count].replace(/<!--|-->/g, '').replace(/\//, '-');
            process.stdout.write("   > " + wrapperName + "\n") // Log variant name 
            for (const variant of variants) {
                wrapper.removeChild(wrapper.childNodes[1])
                // variant.classNames.splice(variant.classNames.indexOf("pi-draggable"), 1)
                // variant.rawAttrs = variant.rawAttrs.replace("pi-draggable", "") // Remove draggable class
                let variantHtmlRaw = variant.replace(new RegExp(`.*${wrapper.tagName}.*|.*legend.*`, 'g'), '').trim()
                wrapper.appendChild(parseHtml(variantHtmlRaw))
                const variantHtml = wrapper.toString()
                const variantName = variantNames[count].replace(/<!--|-->/g, '').trim().replace(/ /g, '-').replace('>', 'around') // .replace(variantNames[0].replace(/<!--|-->/g, ''), '')
                const variantFileName = (component.name + (variantName ? "-" + variantName : '')).replace(/\//, '-') // Replace /s in filename
                //process.stdout.write("   - " + variantFileName + "\n") // Log variant name 
                const target = wrapper.childNodes[1].firstChild?.tagName // wrapper.childNodes[1].firstChild.classNames.length ? wrapper.childNodes[1].firstChild.classNames.join('.') : wrapper.childNodes[1].firstChild.tagName
                let variantTarget = wrapper.tagName
                for (let index = 1; index < wrapperCount + 1; index++) {
                    variantTarget += " ~ " + wrapper.tagName
                }
                if (target) {
                    variantTarget += " " + target
                    for (let index = 1; index < count + 1; index++) {
                        variantTarget += " ~ " + target // Using ~ selector to select child number by target classes
                    }
                }
                screenshotFullPath = await takeScreenshot(component.name, variantFileName, screenshotUrl, variantTarget)
                variantSnippets.push(getSnippet(screenshotFullPath, variant, (variantName ? variantName : variantFileName)))

                if (variant.match(new RegExp(`.*<${wrapper.tagName}.*`)) && variantNames[count + 1]) {
                    wrapperName = variantNames[count + 1].replace(/<!--|-->/g, '').replace(/\//, '-');
                    process.stdout.write("   > " + wrapperName + "\n") // Log Wrapper name
                    wrapperCount++
                    variantNames.splice(0, count)
                    count = 0
                } else {
                    count++
                }
            }
        }

        if (componentName === variantName || !outputComponents[componentName]) {
            const outputComponent = {
                name: componentName,
                path: component.path,
                variants: variantSnippets
            }
            outputComponents[componentName] = outputComponent
        } else {
            outputComponents[componentName].variants = [...outputComponents[componentName].variants, ...variantSnippets]
        }
    }
    console.log(" 🎉 The End 🥚 ")

    //await browser.close();
})()