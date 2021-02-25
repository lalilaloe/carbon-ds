export default {
    displayName: "content-switcher",
    name: "content-switcher",
    homepage: "https://www.carbondesignsystem.com/components/content-switcher"
}

export const variants = [
{
displayName:"content-switcher",
picture:{
src:"./pictures/content-switcher/content-switcher.png",
width:357,
height:40},
snippet:{
html:`

<div data-content-switcher class="bx--content-switcher" role="tablist" aria-label="Demo switch content">
  <button class="bx--content-switcher-btn bx--content-switcher--selected"
    data-target=".demo--panel--opt-1" role="tab"  aria-selected="true"  >
    <span class=bx--content-switcher__label>First section</span>
  </button>
  <button class="bx--content-switcher-btn"
    data-target=".demo--panel--opt-2" role="tab"  >
    <span class=bx--content-switcher__label>Second section</span>
  </button>
  <button class="bx--content-switcher-btn"
    data-target=".demo--panel--opt-3" role="tab"  >
    <span class=bx--content-switcher__label>Third section</span>
  </button>
</div>
`}},
{
displayName:"disabled",
picture:{
src:"./pictures/content-switcher/disabled.png",
width:357,
height:40},
snippet:{
html:`

<div data-content-switcher class="bx--content-switcher" role="tablist" aria-label="Demo switch content">
  <button class="bx--content-switcher-btn bx--content-switcher--selected"
    data-target=".demo--panel--opt-1" role="tab"  aria-selected="true"   disabled >
    <span class=bx--content-switcher__label>First section</span>
  </button>
  <button class="bx--content-switcher-btn"
    data-target=".demo--panel--opt-2" role="tab"   disabled >
    <span class=bx--content-switcher__label>Second section</span>
  </button>
  <button class="bx--content-switcher-btn"
    data-target=".demo--panel--opt-3" role="tab"   disabled >
    <span class=bx--content-switcher__label>Third section</span>
  </button>
</div>
`}}
]