export default {
    displayName: "tabs",
    name: "tabs",
    homepage: "https://www.carbondesignsystem.com/components/tabs"
}

export const variants = [
{
displayName:"tabs",
picture:{
src:"./pictures/tabs/tabs.png",
width:64,
height:40},
snippet:{
html:`

<div data-tabs class="bx--tabs">
  <div class="bx--tabs-trigger" tabindex="0">
    <a href="javascript:void(0)" class="bx--tabs-trigger-text" tabindex="-1"></a>
    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
  </div>
  <ul class="bx--tabs__nav bx--tabs__nav--hidden" role="tablist">
    <li
      class="bx--tabs__nav-item bx--tabs__nav-item--selected "
      data-target=".tab-1-default" role="tab"  aria-selected="true"  >
      <a tabindex="0" id="tab-link-1-default" class="bx--tabs__nav-link" href="javascript:void(0)" role="tab"
        aria-controls="tab-panel-1-default">Tab label 1</a>
    </li>
    <li
      class="bx--tabs__nav-item "
      data-target=".tab-2-default" role="tab"  >
      <a tabindex="0" id="tab-link-2-default" class="bx--tabs__nav-link" href="javascript:void(0)" role="tab"
        aria-controls="tab-panel-2-default">Tab label 2</a>
    </li>
    <li
      class="bx--tabs__nav-item "
      data-target=".tab-3-default" role="tab"  >
      <a tabindex="0" id="tab-link-3-default" class="bx--tabs__nav-link" href="javascript:void(0)" role="tab"
        aria-controls="tab-panel-3-default">Tab label 3</a>
    </li>
    <li
      class="bx--tabs__nav-item  bx--tabs__nav-item--disabled "
      data-target=".tab-4-default" role="tab"  
      aria-disabled="true" >
      <a tabindex="0" id="tab-link-4-default" class="bx--tabs__nav-link" href="javascript:void(0)" role="tab"
        aria-controls="tab-panel-4-default">Tab label 4</a>
    </li>
  </ul>
</div>
`}},
{
displayName:"container",
picture:{
src:"./pictures/tabs/container.png",
width:64,
height:40},
snippet:{
html:`

<div data-tabs class="bx--tabs bx--tabs--container">
  <div class="bx--tabs-trigger" tabindex="0">
    <a href="javascript:void(0)" class="bx--tabs-trigger-text" tabindex="-1"></a>
    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
  </div>
  <ul class="bx--tabs__nav bx--tabs__nav--hidden" role="tablist">
    <li
      class="bx--tabs__nav-item bx--tabs__nav-item--selected "
      data-target=".tab-1-container" role="tab"  aria-selected="true"  >
      <a tabindex="0" id="tab-link-1-container" class="bx--tabs__nav-link" href="javascript:void(0)" role="tab"
        aria-controls="tab-panel-1-container">Tab label 1</a>
    </li>
    <li
      class="bx--tabs__nav-item "
      data-target=".tab-2-container" role="tab"  >
      <a tabindex="0" id="tab-link-2-container" class="bx--tabs__nav-link" href="javascript:void(0)" role="tab"
        aria-controls="tab-panel-2-container">Tab label 2</a>
    </li>
    <li
      class="bx--tabs__nav-item "
      data-target=".tab-3-container" role="tab"  >
      <a tabindex="0" id="tab-link-3-container" class="bx--tabs__nav-link" href="javascript:void(0)" role="tab"
        aria-controls="tab-panel-3-container">Tab label 3</a>
    </li>
    <li
      class="bx--tabs__nav-item  bx--tabs__nav-item--disabled "
      data-target=".tab-4-container" role="tab"  
      aria-disabled="true" >
      <a tabindex="0" id="tab-link-4-container" class="bx--tabs__nav-link" href="javascript:void(0)" role="tab"
        aria-controls="tab-panel-4-container">Tab label 4</a>
    </li>
  </ul>
</div>
`}}
]