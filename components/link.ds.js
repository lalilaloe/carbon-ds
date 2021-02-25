export default {
    displayName: "link",
    name: "link",
    homepage: "https://www.carbondesignsystem.com/components/link"
}

export const variants = [
{
displayName:"link",
picture:{
src:"./pictures/link/link.png",
width:253,
height:54},
snippet:{
html:`

<a href="#"
  class="bx--link">Link</a>
<a href="http://www.google.com"
  class="bx--link bx--link--visited ">Link</a>
<a class="bx--link" aria-disabled="true">Placeholder
  link</a>
<p class="bx--link--disabled">Disabled Link</p>
<div style="width:200px">
  <a href="#" class="bx--link">Text wrap example for
    hover, focus, and active state testing.</a>
</div>
`}},
{
displayName:"inline",
picture:{
src:"./pictures/link/inline.png",
width:253,
height:54},
snippet:{
html:`

<a href="#"
  class="bx--link bx--link--inline">Link</a>
<a href="http://www.google.com"
  class="bx--link bx--link--visited  bx--link--inline">Link</a>
<a class="bx--link bx--link--inline" aria-disabled="true">Placeholder
  link</a>
<p class="bx--link--disabled bx--link--inline">Disabled Link</p>
<div style="width:200px">
  <a href="#" class="bx--link bx--link--inline">Text wrap example for
    hover, focus, and active state testing.</a>
</div>
`}}
]