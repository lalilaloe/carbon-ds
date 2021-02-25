# Carbon design system

Carbon-ds is a package that describes components taken from IBM's Carbon design system, so that a design tool like Hadron can use it to provide a design experience with its components.

All credits go to [IBM](https://www.carbondesignsystem.com/), i just made it usable as design system in Hadron.

## Theme Options
You can use the different design themes available at [Carbon Design kits](https://www.carbondesignsystem.com/designing/kits/sketch), for this collection the default white theme is used. In the future might release screenshots for other themes in other branches for example.

## Installation

Add carbon-ds as a dependency to your project

```bash
npm install carbon-ds
```

## Converting components with variants from IBM's examples (carbon-components/html)

Of course not everything was done by hand, i created a small script to automatically generate the design systems json files and take screenshots of the  elements.

To run the script yourself execute the following commands.

*Requirements*
- run ```firefox.exe -headless -marionette -safe-mode``` or set ```marionette.enabled``` to ```true``` in ```about:config```
- you can use chrome by changing the import to ```const foxr = require('puppeteer'); ``` See
[https://github.com/puppeteer/puppeteer](https://github.com/puppeteer/puppeteer)

```bash
# install dependencies (seperate npm project, might be transfered to own repo in the future)
cd convert
npm install

# start converting
npm start

# to clean up the files after conversion
npm run prettier

# if you want to check if the files are exported correctly
npm run lint
```

## Contributing
Requests are welcome. Especially when using the convert script for another project, we might be able to make it universal and move it to a repo of it's own. Please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)