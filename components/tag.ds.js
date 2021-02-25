export default {
    displayName: "tag",
    name: "tag",
    homepage: "https://www.carbondesignsystem.com/components/tag"
}

export const variants = [
{
displayName:"tag",
picture:{
src:"./pictures/tag/tag.png",
width:600,
height:64},
snippet:{
html:`

<div>
  <button class="bx--tag bx--tag--red">
    <span class="bx--tag__label">Red</span>
  </button>
  <button class="bx--tag bx--tag--magenta">
    <span class="bx--tag__label">Magenta</span>
  </button>
  <button class="bx--tag bx--tag--purple">
    <span class="bx--tag__label">Purple</span>
  </button>
  <button class="bx--tag bx--tag--blue">
    <span class="bx--tag__label">Blue</span>
  </button>
  <button class="bx--tag bx--tag--cyan">
    <span class="bx--tag__label">Cyan</span>
  </button>
  <button class="bx--tag bx--tag--teal">
    <span class="bx--tag__label">Teal</span>
  </button>
  <button class="bx--tag bx--tag--green">
    <span class="bx--tag__label">Green</span>
  </button>
  <button class="bx--tag bx--tag--gray">
    <span class="bx--tag__label">Gray</span>
  </button>
  <button class="bx--tag bx--tag--cool-gray">
    <span class="bx--tag__label">Cool-Gray</span>
  </button>
  <button class="bx--tag bx--tag--warm-gray">
    <span class="bx--tag__label">Warm-Gray</span>
  </button>
</div>

<div>
</div>
`}},
{
displayName:"filter",
picture:{
src:"./pictures/tag/filter.png",
width:69,
height:32},
snippet:{
html:`

<div>
</div>

<div>
  <div class="bx--tag bx--tag--filter" title="Clear filter">
    <span class="bx--tag__label">filter</span>
    <button class="bx--tag__close-icon">
      <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true"><path d="M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"></path></svg>
    </button>
  </div>
</div>
`}}
]