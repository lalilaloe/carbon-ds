export default {
    displayName: "list-box",
    name: "list-box",
    homepage: "https://www.carbondesignsystem.com/components/list-box"
}

export const variants = [
{
displayName:"list-box",
picture:{
src:"./pictures/list-box/list-box.png",
width:181,
height:420},
snippet:{
html:`

<div class="bx--form-item">
  <div class="bx--list-box__wrapper ">
    <label class="bx--label">List box label</label>
    <div
      class="bx--list-box">
      <div role="button" class="bx--list-box__field" tabindex="0" aria-label="open menu"
        aria-expanded="false" aria-haspopup="true">
        <span class="bx--list-box__label">List box options</span>
        <div class="bx--list-box__menu-icon">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-label="Open menu" width="16" height="16" viewBox="0 0 16 16" role="img"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
        </div>
      </div>
    </div>
    <div class="bx--form__helper-text">Optional helper text here</div>
  </div>
</div>

<div class="bx--form-item">
  <div class="bx--list-box__wrapper ">
    <label class="bx--label">List box label</label>
    <div
      class="bx--list-box"
      data-invalid>
      <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--list-box__invalid-icon" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8,1C4.2,1,1,4.2,1,8s3.2,7,7,7s7-3.1,7-7S11.9,1,8,1z M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2	c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z"></path><path d="M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8	c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z" data-icon-path="inner-path" opacity="0"></path></svg>
      <div role="button" class="bx--list-box__field" tabindex="0" aria-label="open menu"
        aria-expanded="false" aria-haspopup="true">
        <span class="bx--list-box__label">List box options</span>
        <div class="bx--list-box__menu-icon">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-label="Open menu" width="16" height="16" viewBox="0 0 16 16" role="img"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
        </div>
      </div>
    </div>
    <div class="bx--form-requirement">
      Validation message here
    </div>
  </div>
</div>

<div class="bx--form-item">
  <div class="bx--list-box__wrapper ">
    <label class="bx--label bx--label--disabled">List box label</label>
    <div
      class="bx--list-box bx--list-box--disabled"
      data-invalid>
      <div role="button" class="bx--list-box__field" tabindex="0" aria-label="open menu"
        aria-expanded="false" aria-haspopup="true">
        <span class="bx--list-box__label">List box options</span>
        <div class="bx--list-box__menu-icon">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-label="Open menu" width="16" height="16" viewBox="0 0 16 16" role="img"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
        </div>
      </div>
    </div>
    <div class="bx--form-requirement">
      Validation message here
    </div>
  </div>
</div>

<div class="bx--form-item">
  <div class="bx--list-box__wrapper ">
    <label class="bx--label bx--label--disabled">List box label</label>
    <div
      class="bx--list-box bx--list-box--disabled">
      <div role="button" class="bx--list-box__field" tabindex="0" aria-label="open menu"
        aria-expanded="false" aria-haspopup="true">
        <span class="bx--list-box__label">List box options</span>
        <div class="bx--list-box__menu-icon">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-label="Open menu" width="16" height="16" viewBox="0 0 16 16" role="img"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
        </div>
      </div>
    </div>
    <div class="bx--form__helper-text bx--form__helper-text--disabled">Optional helper text
      here
    </div>
  </div>
</div>

<div class="bx--form-item">
  <div class="bx--list-box__wrapper ">
    <label class="bx--label">List box label</label>
    <div
      class="bx--list-box bx--list-box--expanded">
      <div role="button" class="bx--list-box__field" tabindex="0" aria-label="close menu"
        aria-expanded="true" aria-haspopup="true">
        <span class="bx--list-box__label">List box options</span>
        <div class="bx--list-box__menu-icon bx--list-box__menu-icon--open">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-label="Close menu" width="16" height="16" viewBox="0 0 16 16" role="img"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
        </div>
      </div>
      <ul class="bx--list-box__menu" role="combobox">
        <li
          class="bx--list-box__menu-item bx--list-box__menu-item--active bx--list-box__menu-item--highlighted"
          id="downshift-1-item-0">
          <div class="bx--list-box__menu-item__option" tabindex="0">
            Option 1
            <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" class="bx--list-box__menu-item__selected-icon" width="16" height="16" viewBox="0 0 32 32"><path d="M13 24L4 15 5.414 13.586 13 21.171 26.586 7.586 28 9 13 24z"></path></svg>
          </div>
        </li>
        <li
          class="bx--list-box__menu-item"
          id="downshift-1-item-1">
          <div class="bx--list-box__menu-item__option" tabindex="0">
            Option 2
            <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" class="bx--list-box__menu-item__selected-icon" width="16" height="16" viewBox="0 0 32 32"><path d="M13 24L4 15 5.414 13.586 13 21.171 26.586 7.586 28 9 13 24z"></path></svg>
          </div>
        </li>
        <li
          class="bx--list-box__menu-item"
          id="downshift-1-item-2">
          <div class="bx--list-box__menu-item__option" tabindex="0">
            Option 3
            <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" class="bx--list-box__menu-item__selected-icon" width="16" height="16" viewBox="0 0 32 32"><path d="M13 24L4 15 5.414 13.586 13 21.171 26.586 7.586 28 9 13 24z"></path></svg>
          </div>
        </li>
        <li
          class="bx--list-box__menu-item"
          id="downshift-1-item-3">
          <div class="bx--list-box__menu-item__option" tabindex="0">
            Option 4
            <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" class="bx--list-box__menu-item__selected-icon" width="16" height="16" viewBox="0 0 32 32"><path d="M13 24L4 15 5.414 13.586 13 21.171 26.586 7.586 28 9 13 24z"></path></svg>
          </div>
        </li>
        <li
          class="bx--list-box__menu-item"
          id="downshift-1-item-4">
          <div class="bx--list-box__menu-item__option" tabindex="0">
            An example option that is really long to show what should be done to handle long text
            <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" class="bx--list-box__menu-item__selected-icon" width="16" height="16" viewBox="0 0 32 32"><path d="M13 24L4 15 5.414 13.586 13 21.171 26.586 7.586 28 9 13 24z"></path></svg>
          </div>
        </li>
      </ul>
    </div>
    <div class="bx--form__helper-text">Optional helper text
      here
    </div>
  </div>
</div>
`}},
{
displayName:"inline",
picture:{
src:"./pictures/list-box/inline.png",
width:254,
height:252},
snippet:{
html:`

<div class="bx--form-item">
  <div class="bx--list-box__wrapper bx--list-box__wrapper--inline">
    <label class="bx--label">List box label</label>
    <div
      class="bx--list-box bx--list-box--inline">
      <div role="button" class="bx--list-box__field" tabindex="0" aria-label="open menu"
        aria-expanded="false" aria-haspopup="true">
        <span class="bx--list-box__label">List box options</span>
        <div class="bx--list-box__menu-icon">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-label="Open menu" width="16" height="16" viewBox="0 0 16 16" role="img"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="bx--form-item">
  <div class="bx--list-box__wrapper bx--list-box__wrapper--inline">
    <label class="bx--label">List box label</label>
    <div
      class="bx--list-box bx--list-box--inline"
      data-invalid>
      <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--list-box__invalid-icon" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8,1C4.2,1,1,4.2,1,8s3.2,7,7,7s7-3.1,7-7S11.9,1,8,1z M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2	c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z"></path><path d="M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8	c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z" data-icon-path="inner-path" opacity="0"></path></svg>
      <div role="button" class="bx--list-box__field" tabindex="0" aria-label="open menu"
        aria-expanded="false" aria-haspopup="true">
        <span class="bx--list-box__label">List box options</span>
        <div class="bx--list-box__menu-icon">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-label="Open menu" width="16" height="16" viewBox="0 0 16 16" role="img"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
        </div>
      </div>
    </div>
    <div class="bx--form-requirement">
      Validation message here
    </div>
  </div>
</div>

<div class="bx--form-item">
  <div class="bx--list-box__wrapper bx--list-box__wrapper--inline">
    <label class="bx--label bx--label--disabled">List box label</label>
    <div
      class="bx--list-box bx--list-box--disabled bx--list-box--inline"
      data-invalid>
      <div role="button" class="bx--list-box__field" tabindex="0" aria-label="open menu"
        aria-expanded="false" aria-haspopup="true">
        <span class="bx--list-box__label">List box options</span>
        <div class="bx--list-box__menu-icon">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-label="Open menu" width="16" height="16" viewBox="0 0 16 16" role="img"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
        </div>
      </div>
    </div>
    <div class="bx--form-requirement">
      Validation message here
    </div>
  </div>
</div>

<div class="bx--form-item">
  <div class="bx--list-box__wrapper bx--list-box__wrapper--inline">
    <label class="bx--label bx--label--disabled">List box label</label>
    <div
      class="bx--list-box bx--list-box--disabled bx--list-box--inline">
      <div role="button" class="bx--list-box__field" tabindex="0" aria-label="open menu"
        aria-expanded="false" aria-haspopup="true">
        <span class="bx--list-box__label">List box options</span>
        <div class="bx--list-box__menu-icon">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-label="Open menu" width="16" height="16" viewBox="0 0 16 16" role="img"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="bx--form-item">
  <div class="bx--list-box__wrapper bx--list-box__wrapper--inline">
    <label class="bx--label">List box label</label>
    <div
      class="bx--list-box bx--list-box--expanded bx--list-box--inline">
      <div role="button" class="bx--list-box__field" tabindex="0" aria-label="close menu"
        aria-expanded="true" aria-haspopup="true">
        <span class="bx--list-box__label">List box options</span>
        <div class="bx--list-box__menu-icon bx--list-box__menu-icon--open">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-label="Close menu" width="16" height="16" viewBox="0 0 16 16" role="img"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
        </div>
      </div>
      <ul class="bx--list-box__menu" role="combobox">
        <li
          class="bx--list-box__menu-item bx--list-box__menu-item--active bx--list-box__menu-item--highlighted"
          id="downshift-1-item-0">
          <div class="bx--list-box__menu-item__option" tabindex="0">
            Option 1
            <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" class="bx--list-box__menu-item__selected-icon" width="16" height="16" viewBox="0 0 32 32"><path d="M13 24L4 15 5.414 13.586 13 21.171 26.586 7.586 28 9 13 24z"></path></svg>
          </div>
        </li>
        <li
          class="bx--list-box__menu-item"
          id="downshift-1-item-1">
          <div class="bx--list-box__menu-item__option" tabindex="0">
            Option 2
            <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" class="bx--list-box__menu-item__selected-icon" width="16" height="16" viewBox="0 0 32 32"><path d="M13 24L4 15 5.414 13.586 13 21.171 26.586 7.586 28 9 13 24z"></path></svg>
          </div>
        </li>
        <li
          class="bx--list-box__menu-item"
          id="downshift-1-item-2">
          <div class="bx--list-box__menu-item__option" tabindex="0">
            Option 3
            <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" class="bx--list-box__menu-item__selected-icon" width="16" height="16" viewBox="0 0 32 32"><path d="M13 24L4 15 5.414 13.586 13 21.171 26.586 7.586 28 9 13 24z"></path></svg>
          </div>
        </li>
        <li
          class="bx--list-box__menu-item"
          id="downshift-1-item-3">
          <div class="bx--list-box__menu-item__option" tabindex="0">
            Option 4
            <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" class="bx--list-box__menu-item__selected-icon" width="16" height="16" viewBox="0 0 32 32"><path d="M13 24L4 15 5.414 13.586 13 21.171 26.586 7.586 28 9 13 24z"></path></svg>
          </div>
        </li>
        <li
          class="bx--list-box__menu-item"
          id="downshift-1-item-4">
          <div class="bx--list-box__menu-item__option" tabindex="0">
            An example option that is really long to show what should be done to handle long text
            <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" class="bx--list-box__menu-item__selected-icon" width="16" height="16" viewBox="0 0 32 32"><path d="M13 24L4 15 5.414 13.586 13 21.171 26.586 7.586 28 9 13 24z"></path></svg>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
`}},
{
displayName:"light",
picture:{
src:"./pictures/list-box/light.png",
width:181,
height:420},
snippet:{
html:`

<div class="bx--form-item">
  <div class="bx--list-box__wrapper ">
    <label class="bx--label">List box label</label>
    <div
      class="bx--list-box bx--list-box--light">
      <div role="button" class="bx--list-box__field" tabindex="0" aria-label="open menu"
        aria-expanded="false" aria-haspopup="true">
        <span class="bx--list-box__label">List box options</span>
        <div class="bx--list-box__menu-icon">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-label="Open menu" width="16" height="16" viewBox="0 0 16 16" role="img"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
        </div>
      </div>
    </div>
    <div class="bx--form__helper-text">Optional helper text here</div>
  </div>
</div>

<div class="bx--form-item">
  <div class="bx--list-box__wrapper ">
    <label class="bx--label">List box label</label>
    <div
      class="bx--list-box bx--list-box--light"
      data-invalid>
      <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--list-box__invalid-icon" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8,1C4.2,1,1,4.2,1,8s3.2,7,7,7s7-3.1,7-7S11.9,1,8,1z M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2	c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z"></path><path d="M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8	c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z" data-icon-path="inner-path" opacity="0"></path></svg>
      <div role="button" class="bx--list-box__field" tabindex="0" aria-label="open menu"
        aria-expanded="false" aria-haspopup="true">
        <span class="bx--list-box__label">List box options</span>
        <div class="bx--list-box__menu-icon">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-label="Open menu" width="16" height="16" viewBox="0 0 16 16" role="img"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
        </div>
      </div>
    </div>
    <div class="bx--form-requirement">
      Validation message here
    </div>
  </div>
</div>

<div class="bx--form-item">
  <div class="bx--list-box__wrapper ">
    <label class="bx--label bx--label--disabled">List box label</label>
    <div
      class="bx--list-box bx--list-box--disabled bx--list-box--light"
      data-invalid>
      <div role="button" class="bx--list-box__field" tabindex="0" aria-label="open menu"
        aria-expanded="false" aria-haspopup="true">
        <span class="bx--list-box__label">List box options</span>
        <div class="bx--list-box__menu-icon">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-label="Open menu" width="16" height="16" viewBox="0 0 16 16" role="img"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
        </div>
      </div>
    </div>
    <div class="bx--form-requirement">
      Validation message here
    </div>
  </div>
</div>

<div class="bx--form-item">
  <div class="bx--list-box__wrapper ">
    <label class="bx--label bx--label--disabled">List box label</label>
    <div
      class="bx--list-box bx--list-box--disabled bx--list-box--light">
      <div role="button" class="bx--list-box__field" tabindex="0" aria-label="open menu"
        aria-expanded="false" aria-haspopup="true">
        <span class="bx--list-box__label">List box options</span>
        <div class="bx--list-box__menu-icon">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-label="Open menu" width="16" height="16" viewBox="0 0 16 16" role="img"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
        </div>
      </div>
    </div>
    <div class="bx--form__helper-text bx--form__helper-text--disabled">Optional helper text
      here
    </div>
  </div>
</div>

<div class="bx--form-item">
  <div class="bx--list-box__wrapper ">
    <label class="bx--label">List box label</label>
    <div
      class="bx--list-box bx--list-box--expanded bx--list-box--light">
      <div role="button" class="bx--list-box__field" tabindex="0" aria-label="close menu"
        aria-expanded="true" aria-haspopup="true">
        <span class="bx--list-box__label">List box options</span>
        <div class="bx--list-box__menu-icon bx--list-box__menu-icon--open">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-label="Close menu" width="16" height="16" viewBox="0 0 16 16" role="img"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
        </div>
      </div>
      <ul class="bx--list-box__menu" role="combobox">
        <li
          class="bx--list-box__menu-item bx--list-box__menu-item--active bx--list-box__menu-item--highlighted"
          id="downshift-1-item-0">
          <div class="bx--list-box__menu-item__option" tabindex="0">
            Option 1
            <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" class="bx--list-box__menu-item__selected-icon" width="16" height="16" viewBox="0 0 32 32"><path d="M13 24L4 15 5.414 13.586 13 21.171 26.586 7.586 28 9 13 24z"></path></svg>
          </div>
        </li>
        <li
          class="bx--list-box__menu-item"
          id="downshift-1-item-1">
          <div class="bx--list-box__menu-item__option" tabindex="0">
            Option 2
            <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" class="bx--list-box__menu-item__selected-icon" width="16" height="16" viewBox="0 0 32 32"><path d="M13 24L4 15 5.414 13.586 13 21.171 26.586 7.586 28 9 13 24z"></path></svg>
          </div>
        </li>
        <li
          class="bx--list-box__menu-item"
          id="downshift-1-item-2">
          <div class="bx--list-box__menu-item__option" tabindex="0">
            Option 3
            <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" class="bx--list-box__menu-item__selected-icon" width="16" height="16" viewBox="0 0 32 32"><path d="M13 24L4 15 5.414 13.586 13 21.171 26.586 7.586 28 9 13 24z"></path></svg>
          </div>
        </li>
        <li
          class="bx--list-box__menu-item"
          id="downshift-1-item-3">
          <div class="bx--list-box__menu-item__option" tabindex="0">
            Option 4
            <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" class="bx--list-box__menu-item__selected-icon" width="16" height="16" viewBox="0 0 32 32"><path d="M13 24L4 15 5.414 13.586 13 21.171 26.586 7.586 28 9 13 24z"></path></svg>
          </div>
        </li>
        <li
          class="bx--list-box__menu-item"
          id="downshift-1-item-4">
          <div class="bx--list-box__menu-item__option" tabindex="0">
            An example option that is really long to show what should be done to handle long text
            <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" class="bx--list-box__menu-item__selected-icon" width="16" height="16" viewBox="0 0 32 32"><path d="M13 24L4 15 5.414 13.586 13 21.171 26.586 7.586 28 9 13 24z"></path></svg>
          </div>
        </li>
      </ul>
    </div>
    <div class="bx--form__helper-text">Optional helper text
      here
    </div>
  </div>
</div>
`}}
]