export default {
    displayName: "tooltip",
    name: "tooltip",
    homepage: "https://www.carbondesignsystem.com/components/tooltip"
}

export const variants = [
{
displayName:"Using-the-trigger-label-as-the-tooltip-label-(can-be-repetitive-for-screen-reader-users)",
picture:{
src:"./pictures/tooltip/tooltip-Using-the-trigger-label-as-the-tooltip-label-(can-be-repetitive-for-screen-reader-users).png",
width:97,
height:19},
snippet:{
html:`
<div id="example-zvgkbz3l9sn-label" class="bx--tooltip__label">
  Tooltip label
  <button aria-expanded="false" aria-labelledby="example-zvgkbz3l9sn-label" data-tooltip-trigger data-tooltip-target="#example-zvgkbz3l9sn"
    class="bx--tooltip__trigger" aria-controls="example-zvgkbz3l9sn">
    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8.5 11L8.5 6.5 6.5 6.5 6.5 7.5 7.5 7.5 7.5 11 6 11 6 12 10 12 10 11zM8 3.5c-.4 0-.8.3-.8.8S7.6 5 8 5c.4 0 .8-.3.8-.8S8.4 3.5 8 3.5z"></path><path d="M8,15c-3.9,0-7-3.1-7-7s3.1-7,7-7s7,3.1,7,7S11.9,15,8,15z M8,2C4.7,2,2,4.7,2,8s2.7,6,6,6s6-2.7,6-6S11.3,2,8,2z"></path></svg>
  </button>
</div>
<div id="example-zvgkbz3l9sn" aria-hidden="true" data-floating-menu-direction="bottom" class="bx--tooltip">
  <span class="bx--tooltip__caret"></span>
  <div class="bx--tooltip__content" tabindex="-1" role="dialog" aria-describedby="example-zvgkbz3l9sn-body" aria-labelledby="example-zvgkbz3l9sn-label">
    <p id="example-zvgkbz3l9sn-body" >This is some tooltip text. This box shows the maximum amount of text that should appear inside. If more room is
      needed please use a modal instead.</p>
    <div class="bx--tooltip__footer">
      <a href="#" class="bx--link">Learn More</a>
      <button class="bx--btn bx--btn--primary bx--btn--sm"
        type="button">Create</button>
    </div>
  </div>
  <!-- Note: focusable span allows for focus wrap feature within Tooltips -->
  <span tabindex="0"></span>
</div>

`}},
{
displayName:"Using-the-trigger-label-as-the-tooltip-label-(can-be-repetitive-for-screen-reader-users)",
picture:{
src:"./pictures/tooltip/tooltip-Using-the-trigger-label-as-the-tooltip-label-(can-be-repetitive-for-screen-reader-users).png",
width:97,
height:19},
snippet:{
html:`
<div id="example-8f4atdgw5s8-label" class="bx--tooltip__label">
  Tooltip label
  <button aria-expanded="false" aria-labelledby="example-8f4atdgw5s8-label" data-tooltip-trigger data-tooltip-target="#example-8f4atdgw5s8"
    class="bx--tooltip__trigger" aria-controls="example-8f4atdgw5s8">
    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8.5 11L8.5 6.5 6.5 6.5 6.5 7.5 7.5 7.5 7.5 11 6 11 6 12 10 12 10 11zM8 3.5c-.4 0-.8.3-.8.8S7.6 5 8 5c.4 0 .8-.3.8-.8S8.4 3.5 8 3.5z"></path><path d="M8,15c-3.9,0-7-3.1-7-7s3.1-7,7-7s7,3.1,7,7S11.9,15,8,15z M8,2C4.7,2,2,4.7,2,8s2.7,6,6,6s6-2.7,6-6S11.3,2,8,2z"></path></svg>
  </button>
</div>
<div id="example-8f4atdgw5s8" aria-hidden="true" data-floating-menu-direction="bottom" class="bx--tooltip">
  <span class="bx--tooltip__caret"></span>
  <div class="bx--tooltip__content" tabindex="-1" role="dialog" aria-labelledby="example-8f4atdgw5s8-heading" aria-describedby="example-8f4atdgw5s8-body">
    <h4 id="example-8f4atdgw5s8-heading" class="bx--tooltip__heading">Heading within a Tooltip</h4>
    <p id="example-8f4atdgw5s8-body" >This is some tooltip text. This box shows the maximum amount of text that should appear inside. If more room is
      needed please use a modal instead.</p>
  </div>
  <span tabindex="0"></span>
</div>

`}},
{
displayName:"Using-the-trigger-label-as-the-tooltip-label-(can-be-repetitive-for-screen-reader-users)",
picture:{
src:"./pictures/tooltip/tooltip-Using-the-trigger-label-as-the-tooltip-label-(can-be-repetitive-for-screen-reader-users).png",
width:97,
height:19},
snippet:{
html:`
<div id="example-fmta7q5sb9a-label" class="bx--tooltip__label">
  Tooltip label
  <div tabindex="0" aria-expanded="false" aria-labelledby="example-fmta7q5sb9a-label" data-tooltip-trigger data-tooltip-target="#example-fmta7q5sb9a"
    role="button" class="bx--tooltip__trigger" aria-controls="example-fmta7q5sb9a">
    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8.5 11L8.5 6.5 6.5 6.5 6.5 7.5 7.5 7.5 7.5 11 6 11 6 12 10 12 10 11zM8 3.5c-.4 0-.8.3-.8.8S7.6 5 8 5c.4 0 .8-.3.8-.8S8.4 3.5 8 3.5z"></path><path d="M8,15c-3.9,0-7-3.1-7-7s3.1-7,7-7s7,3.1,7,7S11.9,15,8,15z M8,2C4.7,2,2,4.7,2,8s2.7,6,6,6s6-2.7,6-6S11.3,2,8,2z"></path></svg>
  </div>
</div>
<div id="example-fmta7q5sb9a" aria-hidden="true" data-floating-menu-direction="bottom" class="bx--tooltip">
  <span class="bx--tooltip__caret"></span>
  <div class="bx--tooltip__content" tabindex="-1" role="dialog" aria-describedby="example-fmta7q5sb9a-body" aria-label="Tooltip label">
    <p id="example-fmta7q5sb9a-body" >This is some tooltip text. This box shows the maximum amount of text that should appear inside. If more room is
      needed
      please use a modal instead.</p>
    <div class="bx--tooltip__footer">
      <a href="#" class="bx--link">Learn More</a>
      <button class="bx--btn bx--btn--primary bx--btn--sm"
        type="button">Create</button>
    </div>
  </div>
  <span tabindex="0"></span>
</div>
`}},
{
displayName:"definition",
picture:{
src:"./pictures/tooltip/definition.png",
width:190,
height:51},
snippet:{
html:`
<div class="bx--tooltip--definition bx--tooltip--a11y" data-tooltip-definition>
  <button aria-describedby="example-start"
    class="bx--tooltip__trigger bx--tooltip--a11y bx--tooltip__trigger--definition bx--tooltip--bottom bx--tooltip--align-start">
    Definition Tooltip (start aligned)
  </button>
  <div class="bx--assistive-text" id="example-start" role="tooltip">Brief description of the dotted,
    underlined word
    above.</div>
</div>
<br>
<div class="bx--tooltip--definition bx--tooltip--a11y" data-tooltip-definition>
  <button aria-describedby="example-center"
    class="bx--tooltip__trigger bx--tooltip--a11y bx--tooltip__trigger--definition bx--tooltip--bottom bx--tooltip--align-center">
    Definition Tooltip (center aligned)
  </button>
  <div class="bx--assistive-text" id="example-center" role="tooltip">Brief description of the dotted,
    underlined word
    above.</div>
</div>
<br>
<div class="bx--tooltip--definition bx--tooltip--a11y" data-tooltip-definition>
  <button aria-describedby="example-end"
    class="bx--tooltip__trigger bx--tooltip--a11y bx--tooltip__trigger--definition bx--tooltip--bottom bx--tooltip--align-end">
    Definition Tooltip (end aligned)
  </button>
  <div class="bx--assistive-text" id="example-end" role="tooltip">Brief description of the dotted,
    underlined word
    above.</div>
</div>
`}},
{
displayName:"icon",
picture:{
src:"./pictures/tooltip/icon.png",
width:74,
height:196},
snippet:{
html:`
<p>start</p>
<br>
<button
  class="bx--tooltip__trigger bx--tooltip--a11y bx--tooltip--left bx--tooltip--align-start"
  data-tooltip-icon>
  <span class="bx--assistive-text">Filter</span>
  <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true"><path d="M18,28H14a2,2,0,0,1-2-2V18.41L4.59,11A2,2,0,0,1,4,9.59V6A2,2,0,0,1,6,4H26a2,2,0,0,1,2,2V9.59A2,2,0,0,1,27.41,11L20,18.41V26A2,2,0,0,1,18,28ZM6,6V9.59l8,8V26h4V17.59l8-8V6Z"></path></svg>
</button>
<button
  class="bx--tooltip__trigger bx--tooltip--a11y bx--tooltip--top bx--tooltip--align-start"
  data-tooltip-icon>
  <span class="bx--assistive-text">Filter</span>
  <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true"><path d="M18,28H14a2,2,0,0,1-2-2V18.41L4.59,11A2,2,0,0,1,4,9.59V6A2,2,0,0,1,6,4H26a2,2,0,0,1,2,2V9.59A2,2,0,0,1,27.41,11L20,18.41V26A2,2,0,0,1,18,28ZM6,6V9.59l8,8V26h4V17.59l8-8V6Z"></path></svg>
</button>
<button
  class="bx--tooltip__trigger bx--tooltip--a11y bx--tooltip--bottom bx--tooltip--align-start"
  data-tooltip-icon>
  <span class="bx--assistive-text">Filter</span>
  <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true"><path d="M18,28H14a2,2,0,0,1-2-2V18.41L4.59,11A2,2,0,0,1,4,9.59V6A2,2,0,0,1,6,4H26a2,2,0,0,1,2,2V9.59A2,2,0,0,1,27.41,11L20,18.41V26A2,2,0,0,1,18,28ZM6,6V9.59l8,8V26h4V17.59l8-8V6Z"></path></svg>
</button>
<button
  class="bx--tooltip__trigger bx--tooltip--a11y bx--tooltip--right bx--tooltip--align-start"
  data-tooltip-icon>
  <span class="bx--assistive-text">Filter</span>
  <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true"><path d="M18,28H14a2,2,0,0,1-2-2V18.41L4.59,11A2,2,0,0,1,4,9.59V6A2,2,0,0,1,6,4H26a2,2,0,0,1,2,2V9.59A2,2,0,0,1,27.41,11L20,18.41V26A2,2,0,0,1,18,28ZM6,6V9.59l8,8V26h4V17.59l8-8V6Z"></path></svg>
</button>
<br>
<br>
<p>center</p>
<br>
<button class="bx--tooltip__trigger bx--tooltip--a11y bx--tooltip--left"
  data-tooltip-icon>
  <span class="bx--assistive-text">Filter</span>
  <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true"><path d="M18,28H14a2,2,0,0,1-2-2V18.41L4.59,11A2,2,0,0,1,4,9.59V6A2,2,0,0,1,6,4H26a2,2,0,0,1,2,2V9.59A2,2,0,0,1,27.41,11L20,18.41V26A2,2,0,0,1,18,28ZM6,6V9.59l8,8V26h4V17.59l8-8V6Z"></path></svg>
</button>
<button class="bx--tooltip__trigger bx--tooltip--a11y bx--tooltip--top"
  data-tooltip-icon>
  <span class="bx--assistive-text">Filter</span>
  <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true"><path d="M18,28H14a2,2,0,0,1-2-2V18.41L4.59,11A2,2,0,0,1,4,9.59V6A2,2,0,0,1,6,4H26a2,2,0,0,1,2,2V9.59A2,2,0,0,1,27.41,11L20,18.41V26A2,2,0,0,1,18,28ZM6,6V9.59l8,8V26h4V17.59l8-8V6Z"></path></svg>
</button>
<button class="bx--tooltip__trigger bx--tooltip--a11y bx--tooltip--bottom"
  data-tooltip-icon>
  <span class="bx--assistive-text">Filter</span>
  <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true"><path d="M18,28H14a2,2,0,0,1-2-2V18.41L4.59,11A2,2,0,0,1,4,9.59V6A2,2,0,0,1,6,4H26a2,2,0,0,1,2,2V9.59A2,2,0,0,1,27.41,11L20,18.41V26A2,2,0,0,1,18,28ZM6,6V9.59l8,8V26h4V17.59l8-8V6Z"></path></svg>
</button>
<button class="bx--tooltip__trigger bx--tooltip--a11y bx--tooltip--right"
  data-tooltip-icon>
  <span class="bx--assistive-text">Filter</span>
  <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true"><path d="M18,28H14a2,2,0,0,1-2-2V18.41L4.59,11A2,2,0,0,1,4,9.59V6A2,2,0,0,1,6,4H26a2,2,0,0,1,2,2V9.59A2,2,0,0,1,27.41,11L20,18.41V26A2,2,0,0,1,18,28ZM6,6V9.59l8,8V26h4V17.59l8-8V6Z"></path></svg>
</button>
<br>
<br>
<p>end</p>
<br>
<button
  class="bx--tooltip__trigger bx--tooltip--a11y bx--tooltip--left bx--tooltip--align-end"
  data-tooltip-icon>
  <span class="bx--assistive-text">Filter</span>
  <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true"><path d="M18,28H14a2,2,0,0,1-2-2V18.41L4.59,11A2,2,0,0,1,4,9.59V6A2,2,0,0,1,6,4H26a2,2,0,0,1,2,2V9.59A2,2,0,0,1,27.41,11L20,18.41V26A2,2,0,0,1,18,28ZM6,6V9.59l8,8V26h4V17.59l8-8V6Z"></path></svg>
</button>
<button
  class="bx--tooltip__trigger bx--tooltip--a11y bx--tooltip--top bx--tooltip--align-end"
  data-tooltip-icon>
  <span class="bx--assistive-text">Filter</span>
  <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true"><path d="M18,28H14a2,2,0,0,1-2-2V18.41L4.59,11A2,2,0,0,1,4,9.59V6A2,2,0,0,1,6,4H26a2,2,0,0,1,2,2V9.59A2,2,0,0,1,27.41,11L20,18.41V26A2,2,0,0,1,18,28ZM6,6V9.59l8,8V26h4V17.59l8-8V6Z"></path></svg>
</button>
<button
  class="bx--tooltip__trigger bx--tooltip--a11y bx--tooltip--bottom bx--tooltip--align-end"
  data-tooltip-icon>
  <span class="bx--assistive-text">Filter</span>
  <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true"><path d="M18,28H14a2,2,0,0,1-2-2V18.41L4.59,11A2,2,0,0,1,4,9.59V6A2,2,0,0,1,6,4H26a2,2,0,0,1,2,2V9.59A2,2,0,0,1,27.41,11L20,18.41V26A2,2,0,0,1,18,28ZM6,6V9.59l8,8V26h4V17.59l8-8V6Z"></path></svg>
</button>
<button
  class="bx--tooltip__trigger bx--tooltip--a11y bx--tooltip--right bx--tooltip--align-end"
  data-tooltip-icon>
  <span class="bx--assistive-text">Filter</span>
  <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true"><path d="M18,28H14a2,2,0,0,1-2-2V18.41L4.59,11A2,2,0,0,1,4,9.59V6A2,2,0,0,1,6,4H26a2,2,0,0,1,2,2V9.59A2,2,0,0,1,27.41,11L20,18.41V26A2,2,0,0,1,18,28ZM6,6V9.59l8,8V26h4V17.59l8-8V6Z"></path></svg>
</button>
`}}
]