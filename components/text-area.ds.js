export default {
    displayName: "text-area",
    name: "text-area",
    homepage: "https://www.carbondesignsystem.com/components/text-area"
}

export const variants = [
{
displayName:"text-area",
picture:{
src:"./pictures/text-area/text-area.png",
width:508,
height:644},
snippet:{
html:`

<div class="bx--form-item">
  <label for="text-area-2" class="bx--label">Text Area label</label>
  <div class="bx--text-area__wrapper">
    <textarea id="text-area-2"
      class="bx--text-area bx--text-area--v2"
      rows="4" cols="50" placeholder="Placeholder text."></textarea>
  </div>
</div>

<div class="bx--form-item">
  <label for="text-area-3" class="bx--label">Text Area label</label>
  <div class="bx--text-area__wrapper" data-invalid>
    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--text-area__invalid-icon" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8,1C4.2,1,1,4.2,1,8s3.2,7,7,7s7-3.1,7-7S11.9,1,8,1z M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2	c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z"></path><path d="M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8	c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z" data-icon-path="inner-path" opacity="0"></path></svg>
    <textarea id="text-area-3"
      class="bx--text-area bx--text-area--invalid bx--text-area--v2"
      rows="4" cols="50" placeholder="Placeholder text."></textarea>
  </div>
  <div class="bx--form-requirement">
    Validation message here
  </div>
</div>

<div class="bx--form-item">
  <label for="text-area-4" class="bx--label">Text Area label</label>
  <div class="bx--text-area__wrapper">
    <textarea id="text-area-4"
      class="bx--text-area bx--text-area--v2"
      rows="4" cols="50" placeholder="Placeholder text."></textarea>
  </div>
  <div class="bx--form__helper-text">
    Optional helper text goes here
  </div>
</div>

<div class="bx--form-item">
  <label for="text-area-5" class="bx--label bx--label--disabled">Text Area label</label>
  <div class="bx--text-area__wrapper">
    <textarea id="text-area-5" class="bx--text-area bx--text-area--v2" rows="4"
      cols="50" placeholder="Placeholder text." disabled></textarea>
  </div>
  <div class="bx--form__helper-text bx--form__helper-text--disabled">
    Optional helper text goes here
  </div>
</div>
`}},
{
displayName:"light",
picture:{
src:"./pictures/text-area/light.png",
width:508,
height:644},
snippet:{
html:`

<div class="bx--form-item">
  <label for="text-area-2" class="bx--label">Text Area label</label>
  <div class="bx--text-area__wrapper">
    <textarea id="text-area-2"
      class="bx--text-area bx--text-area--v2 bx--text-area--light"
      rows="4" cols="50" placeholder="Placeholder text."></textarea>
  </div>
</div>

<div class="bx--form-item">
  <label for="text-area-3" class="bx--label">Text Area label</label>
  <div class="bx--text-area__wrapper" data-invalid>
    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--text-area__invalid-icon" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8,1C4.2,1,1,4.2,1,8s3.2,7,7,7s7-3.1,7-7S11.9,1,8,1z M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2	c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z"></path><path d="M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8	c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z" data-icon-path="inner-path" opacity="0"></path></svg>
    <textarea id="text-area-3"
      class="bx--text-area bx--text-area--invalid bx--text-area--v2 bx--text-area--light"
      rows="4" cols="50" placeholder="Placeholder text."></textarea>
  </div>
  <div class="bx--form-requirement">
    Validation message here
  </div>
</div>

<div class="bx--form-item">
  <label for="text-area-4" class="bx--label">Text Area label</label>
  <div class="bx--text-area__wrapper">
    <textarea id="text-area-4"
      class="bx--text-area bx--text-area--v2 bx--text-area--light"
      rows="4" cols="50" placeholder="Placeholder text."></textarea>
  </div>
  <div class="bx--form__helper-text">
    Optional helper text goes here
  </div>
</div>

<div class="bx--form-item">
  <label for="text-area-5" class="bx--label bx--label--disabled">Text Area label</label>
  <div class="bx--text-area__wrapper">
    <textarea id="text-area-5" class="bx--text-area bx--text-area--v2 bx--text-area--light" rows="4"
      cols="50" placeholder="Placeholder text." disabled></textarea>
  </div>
  <div class="bx--form__helper-text bx--form__helper-text--disabled">
    Optional helper text goes here
  </div>
</div>
`}}
]