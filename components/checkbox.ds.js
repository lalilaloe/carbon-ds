export default {
    displayName: "checkbox",
    name: "checkbox",
    homepage: "https://www.carbondesignsystem.com/components/checkbox"
}

export const variants = [
{
displayName:"input-+-label",
picture:{
src:"./pictures/checkbox/checkbox-input-+-label.png",
width:82,
height:24},
snippet:{
html:`
  <div class="bx--form-item bx--checkbox-wrapper">
    <input id="bx--checkbox-new" class="bx--checkbox" type="checkbox" value="new"
      name="checkbox" checked>
    <label for="bx--checkbox-new" class="bx--checkbox-label">Checkbox</label>
  </div>
  `}},
{
displayName:"input-+-label-indeterminate",
picture:{
src:"./pictures/checkbox/checkbox-input-+-label-indeterminate.png",
width:177,
height:24},
snippet:{
html:`
  <div class="bx--form-item bx--checkbox-wrapper">
    <input id="bx--checkbox-ind" class="bx--checkbox" type="checkbox" value="new"
      name="checkbox" aria-checked="mixed">
    <label for="bx--checkbox-ind" class="bx--checkbox-label">Indeterminate checkbox</label>
  </div>
  `}},
{
displayName:"input-+-label-checked-disabled",
picture:{
src:"./pictures/checkbox/checkbox-input-+-label-checked-disabled.png",
width:82,
height:24},
snippet:{
html:`
  <div class="bx--form-item bx--checkbox-wrapper">
    <input id="bx--checkbox-new--disabled" class="bx--checkbox" type="checkbox" value="new"
      name="checkbox" checked disabled>
    <label for="bx--checkbox-new--disabled" class="bx--checkbox-label">Checkbox</label>
  </div>
  `}},
{
displayName:"input-+-label-indeterminate-disabled",
picture:{
src:"./pictures/checkbox/checkbox-input-+-label-indeterminate-disabled.png",
width:177,
height:24},
snippet:{
html:`
  <div class="bx--form-item bx--checkbox-wrapper">
    <input id="bx--checkbox-ind--disabled" class="bx--checkbox" type="checkbox" value="new"
      name="checkbox" aria-checked="mixed" disabled>
    <label for="bx--checkbox-ind--disabled" class="bx--checkbox-label">Indeterminate
      checkbox</label>
  </div>
  `}},
{
displayName:"input-+-label-disabled",
picture:{
src:"./pictures/checkbox/checkbox-input-+-label-disabled.png",
width:141,
height:24},
snippet:{
html:`
  <div class="bx--form-item bx--checkbox-wrapper">
    <input id="bx--checkbox-disabled" class="bx--checkbox" type="checkbox" value="new"
      name="checkbox" disabled>
    <label for="bx--checkbox-disabled" class="bx--checkbox-label">Disabled checkbox</label>
  </div>
</fieldset>
<fieldset class="bx--fieldset">
  <legend class="bx--label">Checkbox (label > input)</legend>
  `}},
{
displayName:"input-+-label-disabled",
picture:{
src:"./pictures/checkbox/checkbox-input-+-label-disabled.png",
width:141,
height:24},
snippet:{
html:`
  <div class="bx--form-item bx--checkbox-wrapper">
    <label for="bx--checkbox-new2" class="bx--checkbox-label">
      <input id="bx--checkbox-new2" class="bx--checkbox" type="checkbox" value="yellow"
        name="checkbox" checked>
      Checkbox
    </label>
  </div>
  `}},
{
displayName:"label-around-input",
picture:{
src:"./pictures/checkbox/checkbox-label-around-input.png",
width:177,
height:24},
snippet:{
html:`
  <div class="bx--form-item bx--checkbox-wrapper">
    <label for="bx--checkbox-ind2" class="bx--checkbox-label"
      data-contained-checkbox-state="mixed">
      <input id="bx--checkbox-ind2" class="bx--checkbox" type="checkbox" value="yellow"
        name="checkbox" aria-checked="mixed">
      Indeterminate checkbox
    </label>
  </div>
  `}},
{
displayName:"label-around-input-indeterminate",
picture:{
src:"./pictures/checkbox/checkbox-label-around-input-indeterminate.png",
width:82,
height:24},
snippet:{
html:`
  <div class="bx--form-item bx--checkbox-wrapper">
    <label for="bx--checkbox-new2--disabled" class="bx--checkbox-label">
      <input id="bx--checkbox-new2--disabled" class="bx--checkbox" type="checkbox"
        value="yellow" name="checkbox" checked disabled>
      Checkbox
    </label>
  </div>
  `}},
{
displayName:"label-around-input-checked-disabled",
picture:{
src:"./pictures/checkbox/checkbox-label-around-input-checked-disabled.png",
width:177,
height:24},
snippet:{
html:`
  <div class="bx--form-item bx--checkbox-wrapper">
    <label for="bx--checkbox-ind2--disabled" class="bx--checkbox-label"
      data-contained-checkbox-state="mixed">
      <input id="bx--checkbox-ind2--disabled" class="bx--checkbox" type="checkbox"
        value="yellow" name="checkbox" aria-checked="mixed" disabled>
      Indeterminate checkbox
    </label>
  </div>
  `}},
{
displayName:"label-around-input-indeterminate-disabled",
picture:{
src:"./pictures/checkbox/checkbox-label-around-input-indeterminate-disabled.png",
width:141,
height:24},
snippet:{
html:`
  <div class="bx--form-item bx--checkbox-wrapper">
    <label for="bx--checkbox-disabled2" class="bx--checkbox-label">
      <input id="bx--checkbox-disabled2" class="bx--checkbox" type="checkbox" value="yellow"
        name="checkbox" disabled>
      Disabled checkbox
    </label>
  </div>
</fieldset>
`}}
]