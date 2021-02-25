export default {
    displayName: "select",
    name: "select",
    homepage: "https://www.carbondesignsystem.com/components/select"
}

export const variants = [
{
displayName:"select",
picture:{
src:"./pictures/select/select.png",
width:542,
height:128},
snippet:{
html:`

<div class="bx--form-item">
  <div
    class="bx--select">
    <label for="select-id" class="bx--label">Select label</label>
      <div class="bx--select-input__wrapper" >
        <select id="select-id" class="bx--select-input">
          <option class="bx--select-option" value=""  disabled selected hidden>
            Choose an option
          </option>
          <option class="bx--select-option" value="solong" >
            A much longer option that is worth having around to check how text flows
          </option>
          <optgroup class="bx--select-optgroup" label="Category 1">
            <option class="bx--select-option" value="option1" >
              Option 1
            </option>
            <option class="bx--select-option" value="option2" >
              Option 2
            </option>
          </optgroup>
          <optgroup class="bx--select-optgroup" label="Category 2">
            <option class="bx--select-option" value="option1" >
              Option 1
            </option>
            <option class="bx--select-option" value="option2" >
              Option 2
            </option>
          </optgroup>
        </select>
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--select__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
      </div>
    </div>
  </div>
</div>

<div class="bx--form-item">
  <div
    class="bx--select bx--select--disabled">
    <label for="select-id-disabled" class="bx--label bx--label--disabled">Select
      label</label>
      <div class="bx--select-input__wrapper" >
        <select id="select-id-disabled" class="bx--select-input" disabled>

          <option class="bx--select-option" value=""  disabled selected hidden>Choose an option </option>  
          <option class="bx--select-option" value="solong" >A much longer option that is worth having around to check how text flows </option>            <optgroup class="bx--select-optgroup" label="Category 1">
            <option class="bx--select-option" value="option1" >Option 1 </option>             <option class="bx--select-option" value="option2" >Option 2 </option>  </optgroup>            <optgroup class="bx--select-optgroup" label="Category 2">
            <option class="bx--select-option" value="option1" >Option 1 </option>             <option class="bx--select-option" value="option2" >Option 2 </option>  </optgroup>   </select>
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--select__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
      </div>
    </div>
  </div>
</div>
`}},
{
displayName:"helpertext",
picture:{
src:"./pictures/select/helpertext.png",
width:542,
height:168},
snippet:{
html:`

<div class="bx--form-item">
  <div
    class="bx--select">
    <label for="select-id" class="bx--label">Select label</label>
      <div class="bx--select-input__wrapper" >
        <select id="select-id" class="bx--select-input">
          <option class="bx--select-option" value=""  disabled selected hidden>
            Choose an option
          </option>
          <option class="bx--select-option" value="solong" >
            A much longer option that is worth having around to check how text flows
          </option>
          <optgroup class="bx--select-optgroup" label="Category 1">
            <option class="bx--select-option" value="option1" >
              Option 1
            </option>
            <option class="bx--select-option" value="option2" >
              Option 2
            </option>
          </optgroup>
          <optgroup class="bx--select-optgroup" label="Category 2">
            <option class="bx--select-option" value="option1" >
              Option 1
            </option>
            <option class="bx--select-option" value="option2" >
              Option 2
            </option>
          </optgroup>
        </select>
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--select__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
      </div>
      <div class="bx--form__helper-text">Optional helper text.</div>
    </div>
  </div>
</div>

<div class="bx--form-item">
  <div
    class="bx--select bx--select--disabled">
    <label for="select-id-disabled" class="bx--label bx--label--disabled">Select
      label</label>
      <div class="bx--select-input__wrapper" >
        <select id="select-id-disabled" class="bx--select-input" disabled>

          <option class="bx--select-option" value=""  disabled selected hidden>Choose an option </option>  
          <option class="bx--select-option" value="solong" >A much longer option that is worth having around to check how text flows </option>            <optgroup class="bx--select-optgroup" label="Category 1">
            <option class="bx--select-option" value="option1" >Option 1 </option>             <option class="bx--select-option" value="option2" >Option 2 </option>  </optgroup>            <optgroup class="bx--select-optgroup" label="Category 2">
            <option class="bx--select-option" value="option1" >Option 1 </option>             <option class="bx--select-option" value="option2" >Option 2 </option>  </optgroup>   </select>
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--select__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
      </div>
      <div class="bx--form__helper-text">Optional helper text.</div>
    </div>
  </div>
</div>
`}},
{
displayName:"helpertextinline",
picture:{
src:"./pictures/select/helpertextinline.png",
width:649,
height:96},
snippet:{
html:`

<div class="bx--form-item">
  <div
    class="bx--select bx--select--inline">
    <label for="select-id" class="bx--label">Select label</label>
    <div class="bx--select-input--inline__wrapper">
      <div class="bx--select-input__wrapper" >
        <select id="select-id" class="bx--select-input">
          <option class="bx--select-option" value=""  disabled selected hidden>
            Choose an option
          </option>
          <option class="bx--select-option" value="solong" >
            A much longer option that is worth having around to check how text flows
          </option>
          <optgroup class="bx--select-optgroup" label="Category 1">
            <option class="bx--select-option" value="option1" >
              Option 1
            </option>
            <option class="bx--select-option" value="option2" >
              Option 2
            </option>
          </optgroup>
          <optgroup class="bx--select-optgroup" label="Category 2">
            <option class="bx--select-option" value="option1" >
              Option 1
            </option>
            <option class="bx--select-option" value="option2" >
              Option 2
            </option>
          </optgroup>
        </select>
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--select__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
      </div>
    </div>
    <div class="bx--form__helper-text">Optional helper text.</div>
  </div>
</div>

<div class="bx--form-item">
  <div
    class="bx--select bx--select--inline bx--select--disabled">
    <label for="select-id-disabled" class="bx--label bx--label--disabled">Select
      label</label>
    <div class="bx--select-input--inline__wrapper">
      <div class="bx--select-input__wrapper" >
        <select id="select-id-disabled" class="bx--select-input" disabled>

          <option class="bx--select-option" value=""  disabled selected hidden>Choose an option </option>  
          <option class="bx--select-option" value="solong" >A much longer option that is worth having around to check how text flows </option>            <optgroup class="bx--select-optgroup" label="Category 1">
            <option class="bx--select-option" value="option1" >Option 1 </option>             <option class="bx--select-option" value="option2" >Option 2 </option>  </optgroup>            <optgroup class="bx--select-optgroup" label="Category 2">
            <option class="bx--select-option" value="option1" >Option 1 </option>             <option class="bx--select-option" value="option2" >Option 2 </option>  </optgroup>   </select>
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--select__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
      </div>
    </div>
    <div class="bx--form__helper-text">Optional helper text.</div>
  </div>
</div>
`}},
{
displayName:"inline",
picture:{
src:"./pictures/select/inline.png",
width:593,
height:80},
snippet:{
html:`

<div class="bx--form-item">
  <div
    class="bx--select bx--select--inline">
    <label for="select-id" class="bx--label">Select label</label>
    <div class="bx--select-input--inline__wrapper">
      <div class="bx--select-input__wrapper" >
        <select id="select-id" class="bx--select-input">
          <option class="bx--select-option" value=""  disabled selected hidden>
            Choose an option
          </option>
          <option class="bx--select-option" value="solong" >
            A much longer option that is worth having around to check how text flows
          </option>
          <optgroup class="bx--select-optgroup" label="Category 1">
            <option class="bx--select-option" value="option1" >
              Option 1
            </option>
            <option class="bx--select-option" value="option2" >
              Option 2
            </option>
          </optgroup>
          <optgroup class="bx--select-optgroup" label="Category 2">
            <option class="bx--select-option" value="option1" >
              Option 1
            </option>
            <option class="bx--select-option" value="option2" >
              Option 2
            </option>
          </optgroup>
        </select>
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--select__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
      </div>
    </div>
  </div>
</div>

<div class="bx--form-item">
  <div
    class="bx--select bx--select--inline bx--select--disabled">
    <label for="select-id-disabled" class="bx--label bx--label--disabled">Select
      label</label>
    <div class="bx--select-input--inline__wrapper">
      <div class="bx--select-input__wrapper" >
        <select id="select-id-disabled" class="bx--select-input" disabled>

          <option class="bx--select-option" value=""  disabled selected hidden>Choose an option </option>  
          <option class="bx--select-option" value="solong" >A much longer option that is worth having around to check how text flows </option>            <optgroup class="bx--select-optgroup" label="Category 1">
            <option class="bx--select-option" value="option1" >Option 1 </option>             <option class="bx--select-option" value="option2" >Option 2 </option>  </optgroup>            <optgroup class="bx--select-optgroup" label="Category 2">
            <option class="bx--select-option" value="option1" >Option 1 </option>             <option class="bx--select-option" value="option2" >Option 2 </option>  </optgroup>   </select>
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--select__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
      </div>
    </div>
  </div>
</div>
`}},
{
displayName:"inlineinvalid",
picture:{
src:"./pictures/select/inlineinvalid.png",
width:617,
height:120},
snippet:{
html:`

<div class="bx--form-item">
  <div
    class="bx--select bx--select--inline bx--select--invalid">
    <label for="select-id" class="bx--label">Select label</label>
    <div class="bx--select-input--inline__wrapper">
      <div class="bx--select-input__wrapper" data-invalid>
        <select id="select-id" class="bx--select-input">
          <option class="bx--select-option" value=""  disabled selected hidden>
            Choose an option
          </option>
          <option class="bx--select-option" value="solong" >
            A much longer option that is worth having around to check how text flows
          </option>
          <optgroup class="bx--select-optgroup" label="Category 1">
            <option class="bx--select-option" value="option1" >
              Option 1
            </option>
            <option class="bx--select-option" value="option2" >
              Option 2
            </option>
          </optgroup>
          <optgroup class="bx--select-optgroup" label="Category 2">
            <option class="bx--select-option" value="option1" >
              Option 1
            </option>
            <option class="bx--select-option" value="option2" >
              Option 2
            </option>
          </optgroup>
        </select>
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--select__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--select__invalid-icon" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8,1C4.2,1,1,4.2,1,8s3.2,7,7,7s7-3.1,7-7S11.9,1,8,1z M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2	c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z"></path><path d="M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8	c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z" data-icon-path="inner-path" opacity="0"></path></svg>
      </div>
      <div class="bx--form-requirement">
        Validation message here
      </div>
    </div>
  </div>
</div>

<div class="bx--form-item">
  <div
    class="bx--select bx--select--inline bx--select--invalid bx--select--disabled">
    <label for="select-id-disabled" class="bx--label bx--label--disabled">Select
      label</label>
    <div class="bx--select-input--inline__wrapper">
      <div class="bx--select-input__wrapper" data-invalid>
        <select id="select-id-disabled" class="bx--select-input" disabled>

          <option class="bx--select-option" value=""  disabled selected hidden>Choose an option </option>  
          <option class="bx--select-option" value="solong" >A much longer option that is worth having around to check how text flows </option>            <optgroup class="bx--select-optgroup" label="Category 1">
            <option class="bx--select-option" value="option1" >Option 1 </option>             <option class="bx--select-option" value="option2" >Option 2 </option>  </optgroup>            <optgroup class="bx--select-optgroup" label="Category 2">
            <option class="bx--select-option" value="option1" >Option 1 </option>             <option class="bx--select-option" value="option2" >Option 2 </option>  </optgroup>   </select>
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--select__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
      </div>
      <div class="bx--form-requirement">
        Validation message here
      </div>
    </div>
  </div>
</div>
`}},
{
displayName:"inlineinvalidhelpertext",
picture:{
src:"./pictures/select/inlineinvalidhelpertext.png",
width:673,
height:122},
snippet:{
html:`

<div class="bx--form-item">
  <div
    class="bx--select bx--select--inline bx--select--invalid">
    <label for="select-id" class="bx--label">Select label</label>
    <div class="bx--select-input--inline__wrapper">
      <div class="bx--select-input__wrapper" data-invalid>
        <select id="select-id" class="bx--select-input">
          <option class="bx--select-option" value=""  disabled selected hidden>
            Choose an option
          </option>
          <option class="bx--select-option" value="solong" >
            A much longer option that is worth having around to check how text flows
          </option>
          <optgroup class="bx--select-optgroup" label="Category 1">
            <option class="bx--select-option" value="option1" >
              Option 1
            </option>
            <option class="bx--select-option" value="option2" >
              Option 2
            </option>
          </optgroup>
          <optgroup class="bx--select-optgroup" label="Category 2">
            <option class="bx--select-option" value="option1" >
              Option 1
            </option>
            <option class="bx--select-option" value="option2" >
              Option 2
            </option>
          </optgroup>
        </select>
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--select__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--select__invalid-icon" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8,1C4.2,1,1,4.2,1,8s3.2,7,7,7s7-3.1,7-7S11.9,1,8,1z M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2	c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z"></path><path d="M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8	c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z" data-icon-path="inner-path" opacity="0"></path></svg>
      </div>
      <div class="bx--form-requirement">
        Validation message here
      </div>
    </div>
    <div class="bx--form__helper-text">Optional helper text.</div>
  </div>
</div>

<div class="bx--form-item">
  <div
    class="bx--select bx--select--inline bx--select--invalid bx--select--disabled">
    <label for="select-id-disabled" class="bx--label bx--label--disabled">Select
      label</label>
    <div class="bx--select-input--inline__wrapper">
      <div class="bx--select-input__wrapper" data-invalid>
        <select id="select-id-disabled" class="bx--select-input" disabled>

          <option class="bx--select-option" value=""  disabled selected hidden>Choose an option </option>  
          <option class="bx--select-option" value="solong" >A much longer option that is worth having around to check how text flows </option>            <optgroup class="bx--select-optgroup" label="Category 1">
            <option class="bx--select-option" value="option1" >Option 1 </option>             <option class="bx--select-option" value="option2" >Option 2 </option>  </optgroup>            <optgroup class="bx--select-optgroup" label="Category 2">
            <option class="bx--select-option" value="option1" >Option 1 </option>             <option class="bx--select-option" value="option2" >Option 2 </option>  </optgroup>   </select>
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--select__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
      </div>
      <div class="bx--form-requirement">
        Validation message here
      </div>
    </div>
    <div class="bx--form__helper-text">Optional helper text.</div>
  </div>
</div>
`}},
{
displayName:"inlinelightinvalid",
picture:{
src:"./pictures/select/inlinelightinvalid.png",
width:617,
height:120},
snippet:{
html:`

<div class="bx--form-item">
  <div
    class="bx--select bx--select--inline bx--select--light bx--select--invalid">
    <label for="select-id" class="bx--label">Select label</label>
    <div class="bx--select-input--inline__wrapper">
      <div class="bx--select-input__wrapper" data-invalid>
        <select id="select-id" class="bx--select-input">
          <option class="bx--select-option" value=""  disabled selected hidden>
            Choose an option
          </option>
          <option class="bx--select-option" value="solong" >
            A much longer option that is worth having around to check how text flows
          </option>
          <optgroup class="bx--select-optgroup" label="Category 1">
            <option class="bx--select-option" value="option1" >
              Option 1
            </option>
            <option class="bx--select-option" value="option2" >
              Option 2
            </option>
          </optgroup>
          <optgroup class="bx--select-optgroup" label="Category 2">
            <option class="bx--select-option" value="option1" >
              Option 1
            </option>
            <option class="bx--select-option" value="option2" >
              Option 2
            </option>
          </optgroup>
        </select>
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--select__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--select__invalid-icon" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8,1C4.2,1,1,4.2,1,8s3.2,7,7,7s7-3.1,7-7S11.9,1,8,1z M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2	c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z"></path><path d="M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8	c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z" data-icon-path="inner-path" opacity="0"></path></svg>
      </div>
      <div class="bx--form-requirement">
        Validation message here
      </div>
    </div>
  </div>
</div>

<div class="bx--form-item">
  <div
    class="bx--select bx--select--inline bx--select--light bx--select--invalid bx--select--disabled">
    <label for="select-id-disabled" class="bx--label bx--label--disabled">Select
      label</label>
    <div class="bx--select-input--inline__wrapper">
      <div class="bx--select-input__wrapper" data-invalid>
        <select id="select-id-disabled" class="bx--select-input" disabled>

          <option class="bx--select-option" value=""  disabled selected hidden>Choose an option </option>  
          <option class="bx--select-option" value="solong" >A much longer option that is worth having around to check how text flows </option>            <optgroup class="bx--select-optgroup" label="Category 1">
            <option class="bx--select-option" value="option1" >Option 1 </option>             <option class="bx--select-option" value="option2" >Option 2 </option>  </optgroup>            <optgroup class="bx--select-optgroup" label="Category 2">
            <option class="bx--select-option" value="option1" >Option 1 </option>             <option class="bx--select-option" value="option2" >Option 2 </option>  </optgroup>   </select>
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--select__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
      </div>
      <div class="bx--form-requirement">
        Validation message here
      </div>
    </div>
  </div>
</div>
`}},
{
displayName:"invalid",
picture:{
src:"./pictures/select/invalid.png",
width:574,
height:168},
snippet:{
html:`

<div class="bx--form-item">
  <div
    class="bx--select bx--select--invalid">
    <label for="select-id" class="bx--label">Select label</label>
      <div class="bx--select-input__wrapper" data-invalid>
        <select id="select-id" class="bx--select-input">
          <option class="bx--select-option" value=""  disabled selected hidden>
            Choose an option
          </option>
          <option class="bx--select-option" value="solong" >
            A much longer option that is worth having around to check how text flows
          </option>
          <optgroup class="bx--select-optgroup" label="Category 1">
            <option class="bx--select-option" value="option1" >
              Option 1
            </option>
            <option class="bx--select-option" value="option2" >
              Option 2
            </option>
          </optgroup>
          <optgroup class="bx--select-optgroup" label="Category 2">
            <option class="bx--select-option" value="option1" >
              Option 1
            </option>
            <option class="bx--select-option" value="option2" >
              Option 2
            </option>
          </optgroup>
        </select>
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--select__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--select__invalid-icon" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8,1C4.2,1,1,4.2,1,8s3.2,7,7,7s7-3.1,7-7S11.9,1,8,1z M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2	c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z"></path><path d="M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8	c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z" data-icon-path="inner-path" opacity="0"></path></svg>
      </div>
      <div class="bx--form-requirement">
        Validation message here
      </div>
    </div>
  </div>
</div>

<div class="bx--form-item">
  <div
    class="bx--select bx--select--invalid bx--select--disabled">
    <label for="select-id-disabled" class="bx--label bx--label--disabled">Select
      label</label>
      <div class="bx--select-input__wrapper" data-invalid>
        <select id="select-id-disabled" class="bx--select-input" disabled>

          <option class="bx--select-option" value=""  disabled selected hidden>Choose an option </option>  
          <option class="bx--select-option" value="solong" >A much longer option that is worth having around to check how text flows </option>            <optgroup class="bx--select-optgroup" label="Category 1">
            <option class="bx--select-option" value="option1" >Option 1 </option>             <option class="bx--select-option" value="option2" >Option 2 </option>  </optgroup>            <optgroup class="bx--select-optgroup" label="Category 2">
            <option class="bx--select-option" value="option1" >Option 1 </option>             <option class="bx--select-option" value="option2" >Option 2 </option>  </optgroup>   </select>
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--select__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
      </div>
      <div class="bx--form-requirement">
        Validation message here
      </div>
    </div>
  </div>
</div>
`}},
{
displayName:"light",
picture:{
src:"./pictures/select/light.png",
width:542,
height:128},
snippet:{
html:`

<div class="bx--form-item">
  <div
    class="bx--select bx--select--light">
    <label for="select-id" class="bx--label">Select label</label>
      <div class="bx--select-input__wrapper" >
        <select id="select-id" class="bx--select-input">
          <option class="bx--select-option" value=""  disabled selected hidden>
            Choose an option
          </option>
          <option class="bx--select-option" value="solong" >
            A much longer option that is worth having around to check how text flows
          </option>
          <optgroup class="bx--select-optgroup" label="Category 1">
            <option class="bx--select-option" value="option1" >
              Option 1
            </option>
            <option class="bx--select-option" value="option2" >
              Option 2
            </option>
          </optgroup>
          <optgroup class="bx--select-optgroup" label="Category 2">
            <option class="bx--select-option" value="option1" >
              Option 1
            </option>
            <option class="bx--select-option" value="option2" >
              Option 2
            </option>
          </optgroup>
        </select>
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--select__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
      </div>
    </div>
  </div>
</div>

<div class="bx--form-item">
  <div
    class="bx--select bx--select--light bx--select--disabled">
    <label for="select-id-disabled" class="bx--label bx--label--disabled">Select
      label</label>
      <div class="bx--select-input__wrapper" >
        <select id="select-id-disabled" class="bx--select-input" disabled>

          <option class="bx--select-option" value=""  disabled selected hidden>Choose an option </option>  
          <option class="bx--select-option" value="solong" >A much longer option that is worth having around to check how text flows </option>            <optgroup class="bx--select-optgroup" label="Category 1">
            <option class="bx--select-option" value="option1" >Option 1 </option>             <option class="bx--select-option" value="option2" >Option 2 </option>  </optgroup>            <optgroup class="bx--select-optgroup" label="Category 2">
            <option class="bx--select-option" value="option1" >Option 1 </option>             <option class="bx--select-option" value="option2" >Option 2 </option>  </optgroup>   </select>
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--select__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
      </div>
    </div>
  </div>
</div>
`}},
{
displayName:"lightinvalid",
picture:{
src:"./pictures/select/lightinvalid.png",
width:574,
height:168},
snippet:{
html:`

<div class="bx--form-item">
  <div
    class="bx--select bx--select--light bx--select--invalid">
    <label for="select-id" class="bx--label">Select label</label>
      <div class="bx--select-input__wrapper" data-invalid>
        <select id="select-id" class="bx--select-input">
          <option class="bx--select-option" value=""  disabled selected hidden>
            Choose an option
          </option>
          <option class="bx--select-option" value="solong" >
            A much longer option that is worth having around to check how text flows
          </option>
          <optgroup class="bx--select-optgroup" label="Category 1">
            <option class="bx--select-option" value="option1" >
              Option 1
            </option>
            <option class="bx--select-option" value="option2" >
              Option 2
            </option>
          </optgroup>
          <optgroup class="bx--select-optgroup" label="Category 2">
            <option class="bx--select-option" value="option1" >
              Option 1
            </option>
            <option class="bx--select-option" value="option2" >
              Option 2
            </option>
          </optgroup>
        </select>
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--select__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--select__invalid-icon" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8,1C4.2,1,1,4.2,1,8s3.2,7,7,7s7-3.1,7-7S11.9,1,8,1z M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2	c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z"></path><path d="M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8	c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z" data-icon-path="inner-path" opacity="0"></path></svg>
      </div>
      <div class="bx--form-requirement">
        Validation message here
      </div>
    </div>
  </div>
</div>

<div class="bx--form-item">
  <div
    class="bx--select bx--select--light bx--select--invalid bx--select--disabled">
    <label for="select-id-disabled" class="bx--label bx--label--disabled">Select
      label</label>
      <div class="bx--select-input__wrapper" data-invalid>
        <select id="select-id-disabled" class="bx--select-input" disabled>

          <option class="bx--select-option" value=""  disabled selected hidden>Choose an option </option>  
          <option class="bx--select-option" value="solong" >A much longer option that is worth having around to check how text flows </option>            <optgroup class="bx--select-optgroup" label="Category 1">
            <option class="bx--select-option" value="option1" >Option 1 </option>             <option class="bx--select-option" value="option2" >Option 2 </option>  </optgroup>            <optgroup class="bx--select-optgroup" label="Category 2">
            <option class="bx--select-option" value="option1" >Option 1 </option>             <option class="bx--select-option" value="option2" >Option 2 </option>  </optgroup>   </select>
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--select__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
      </div>
      <div class="bx--form-requirement">
        Validation message here
      </div>
    </div>
  </div>
</div>
`}}
]