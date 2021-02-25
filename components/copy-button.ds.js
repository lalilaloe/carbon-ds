export default {
    displayName: "copy-button",
    name: "copy-button",
    homepage: "https://www.carbondesignsystem.com/components/copy-button"
}

export const variants = [
{
displayName:"copy-button",
picture:{
src:"./pictures/copy-button/copy-button.png",
width:40,
height:40},
snippet:{
html:`

<button data-copy-btn class="bx--copy-btn" type="button" tabindex="0">
  <span class="bx--assistive-text bx--copy-btn__feedback">Copied!</span>
  <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--snippet__icon" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true"><path d="M28,10V28H10V10H28m0-2H10a2,2,0,0,0-2,2V28a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V10a2,2,0,0,0-2-2Z"></path><path d="M4,18H2V4A2,2,0,0,1,4,2H18V4H4Z"></path></svg>
</button>
`}}
]