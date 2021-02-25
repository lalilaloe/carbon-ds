export default {
    displayName: "form",
    name: "form",
    homepage: "https://www.carbondesignsystem.com/components/form"
}

export const variants = [
{
displayName:"form",
picture:{
src:"./pictures/form/form.png",
width:600,
height:394},
snippet:{
html:`

<div class="bx--form-item">
  <label for="text-input-3" class="bx--label">Text Input label</label>
  <input id="text-input-3" type="text"
    class="bx--text-input"
    placeholder="Optional placeholder text">
  <div class="bx--form__helper-text">
    Optional helper text here; if message is more than one line text should wrap (~100 character count maximum)
  </div>
</div>
<div class="bx--form-item">
  <label for="text-area-2" class="bx--label">Text Area label</label>
  <textarea id="text-area-2" class="bx--text-area"
    rows="4" cols="50" placeholder="Placeholder text."></textarea>
  <div class="bx--form__helper-text">
    Optional helper text here; if message is more than one line text should wrap (~100 character count maximum)
  </div>
</div>
<div class="bx--form-item">
  <div
    class="bx--select">
    <label for="select-id" class="bx--label">Select label</label>
    <div class="bx--select-input__wrapper">
      <select  id="select-id"
        class="bx--select-input ">

        <option class="bx--select-option" value=""  disabled selected hidden>Choose an option </option>  
        <option class="bx--select-option" value="solong" >A much longer option that is worth having around to check how text flows </option>          <optgroup class="bx--select-optgroup" label="Category 1">
          <option class="bx--select-option" value="option1" >Option 1 </option>           <option class="bx--select-option" value="option2" >Option 2 </option>  </optgroup>          <optgroup class="bx--select-optgroup" label="Category 2">
          <option class="bx--select-option" value="option1" >Option 1 </option>           <option class="bx--select-option" value="option2" >Option 2 </option>  </optgroup>   </select>
      <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--select__arrow" width="10" height="6" viewBox="0 0 10 6" aria-hidden="true"><path d="M5 6L0 1 0.7 0.3 5 4.6 9.3 0.3 10 1z"></path></svg>
    </div>
  </div>
</div>
<div class="bx--form-item">
  <button class="bx--btn bx--btn--primary" type="button">Submit</button>
</div>
`}},
{
displayName:"light",
picture:{
src:"./pictures/form/light.png",
width:600,
height:394},
snippet:{
html:`

<div class="bx--form-item">
  <label for="text-input-3" class="bx--label">Text Input label</label>
  <input id="text-input-3" type="text"
    class="bx--text-input bx--text-input--light"
    placeholder="Optional placeholder text">
  <div class="bx--form__helper-text">
    Optional helper text here; if message is more than one line text should wrap (~100 character count maximum)
  </div>
</div>
<div class="bx--form-item">
  <label for="text-area-2" class="bx--label">Text Area label</label>
  <textarea id="text-area-2" class="bx--text-area bx--text-area--light"
    rows="4" cols="50" placeholder="Placeholder text."></textarea>
  <div class="bx--form__helper-text">
    Optional helper text here; if message is more than one line text should wrap (~100 character count maximum)
  </div>
</div>
<div class="bx--form-item">
  <div
    class="bx--select bx--select--light">
    <label for="select-id" class="bx--label">Select label</label>
    <div class="bx--select-input__wrapper">
      <select  id="select-id"
        class="bx--select-input ">

        <option class="bx--select-option" value=""  disabled selected hidden>Choose an option </option>  
        <option class="bx--select-option" value="solong" >A much longer option that is worth having around to check how text flows </option>          <optgroup class="bx--select-optgroup" label="Category 1">
          <option class="bx--select-option" value="option1" >Option 1 </option>           <option class="bx--select-option" value="option2" >Option 2 </option>  </optgroup>          <optgroup class="bx--select-optgroup" label="Category 2">
          <option class="bx--select-option" value="option1" >Option 1 </option>           <option class="bx--select-option" value="option2" >Option 2 </option>  </optgroup>   </select>
      <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--select__arrow" width="10" height="6" viewBox="0 0 10 6" aria-hidden="true"><path d="M5 6L0 1 0.7 0.3 5 4.6 9.3 0.3 10 1z"></path></svg>
    </div>
  </div>
</div>
<div class="bx--form-item">
  <button class="bx--btn bx--btn--primary" type="button">Submit</button>
</div>
`}}
]