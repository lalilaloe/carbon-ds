export default {
    displayName: "combo-box",
    name: "combo-box",
    homepage: "https://www.carbondesignsystem.com/components/combo-box"
}

export const variants = [
{
displayName:"combo-box",
picture:{
src:"./pictures/combo-box/combo-box.png",
width:296,
height:820},
snippet:{
html:`

<div class="bx--form-item">
  <div class="bx--list-box__wrapper">
    <label class="bx--label">Combo box label</label>
    <div
      class="bx--combo-box bx--list-box">
      <div role="combobox" class="bx--list-box__field" aria-label="open menu" aria-expanded="false"
        aria-haspopup="listbox">
        <input class="bx--text-input" aria-autocomplete="list" aria-expanded="false" autocomplete="off"
          value="" id="downshift-input-2" placeholder="Filter..." aria-label="Filter...">
        <div class="bx--list-box__menu-icon">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-label="Open menu" width="16" height="16" viewBox="0 0 16 16" role="img"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
        </div>
      </div>
    </div>
    <div class="bx--form__helper-text">Optional helper text here</div>
  </div>
</div>

<div class="bx--form-item">
  <div class="bx--list-box__wrapper">
    <label class="bx--label">Combo box label</label>
    <div
      class="bx--combo-box bx--list-box">
      <div role="combobox" class="bx--list-box__field" aria-label="open menu" aria-expanded="false"
        aria-haspopup="listbox">
        <input class="bx--text-input" aria-autocomplete="list" aria-expanded="false" autocomplete="off"
          value="This is not a value." id="downshift-input-2" placeholder="Filter..." aria-label="Filter...">
        <div class="bx--list-box__selection" role="button">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" title="Clear all" aria-label="Clear all" width="16" height="16" viewBox="0 0 32 32" role="img"><path d="M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"></path></svg>
        </div>
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
    <label class="bx--label">Combo box label</label>
    <div
      class="bx--combo-box bx--list-box"
      data-invalid>
      <div role="combobox" class="bx--list-box__field" aria-label="open menu" aria-expanded="false"
        aria-haspopup="listbox">
        <input class="bx--text-input" aria-autocomplete="list" aria-expanded="false" autocomplete="off"
          value="" id="downshift-input-2" placeholder="Filter..." aria-label="Filter...">
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--list-box__invalid-icon" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8,1C4.2,1,1,4.2,1,8s3.2,7,7,7s7-3.1,7-7S11.9,1,8,1z M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2	c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z"></path><path d="M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8	c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z" data-icon-path="inner-path" opacity="0"></path></svg>
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
    <label class="bx--label">Combo box label</label>
    <div
      class="bx--combo-box bx--list-box"
      data-invalid>
      <div role="combobox" class="bx--list-box__field" aria-label="open menu" aria-expanded="false"
        aria-haspopup="listbox">
        <input class="bx--text-input" aria-autocomplete="list" aria-expanded="false" autocomplete="off"
          value="This is not a value." id="downshift-input-2" placeholder="Filter..." aria-label="Filter...">
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--list-box__invalid-icon" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8,1C4.2,1,1,4.2,1,8s3.2,7,7,7s7-3.1,7-7S11.9,1,8,1z M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2	c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z"></path><path d="M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8	c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z" data-icon-path="inner-path" opacity="0"></path></svg>
        <div class="bx--list-box__selection" role="button">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" title="Clear all" aria-label="Clear all" width="16" height="16" viewBox="0 0 32 32" role="img"><path d="M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"></path></svg>
        </div>
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
    <label class="bx--label bx--label--disabled">Combo box label</label>
    <div
      class="bx--combo-box bx--list-box bx--list-box--disabled"
      data-invalid>
      <div role="combobox" class="bx--list-box__field" aria-label="open menu" aria-expanded="false"
        aria-haspopup="true" disabled>
        <input class="bx--text-input" aria-autocomplete="list" aria-expanded="false" autocomplete="off"
          value="" id="downshift-input-2" placeholder="Filter..." disabled>
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--list-box__invalid-icon" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8,1C4.2,1,1,4.2,1,8s3.2,7,7,7s7-3.1,7-7S11.9,1,8,1z M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2	c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z"></path><path d="M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8	c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z" data-icon-path="inner-path" opacity="0"></path></svg>
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
    <label class="bx--label bx--label--disabled">Combo box label</label>
    <div
      class="bx--combo-box bx--list-box bx--list-box--disabled"
      data-invalid>
      <div role="combobox" class="bx--list-box__field" aria-label="open menu" aria-expanded="false"
        aria-haspopup="true" disabled>
        <input class="bx--text-input" aria-autocomplete="list" aria-expanded="false" autocomplete="off"
          value="This is not a value" id="downshift-input-2" placeholder="Filter..." disabled>
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--list-box__invalid-icon" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8,1C4.2,1,1,4.2,1,8s3.2,7,7,7s7-3.1,7-7S11.9,1,8,1z M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2	c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z"></path><path d="M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8	c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z" data-icon-path="inner-path" opacity="0"></path></svg>
        <div class="bx--list-box__selection" role="button">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" title="Clear all" aria-label="Clear all" width="16" height="16" viewBox="0 0 32 32" role="img"><path d="M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"></path></svg>
        </div>
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
    <label class="bx--label bx--label--disabled">Combo box label</label>
    <div
      class="bx--combo-box bx--list-box bx--list-box--disabled">
      <div role="combobox" class="bx--list-box__field" aria-label="open menu" aria-expanded="false"
        aria-haspopup="true" disabled>
        <input class="bx--text-input" aria-autocomplete="list" aria-expanded="false" autocomplete="off"
          value="" id="downshift-input-2" placeholder="Filter..." disabled>
        <div class="bx--list-box__menu-icon">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-label="Open menu" width="16" height="16" viewBox="0 0 16 16" role="img"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="bx--form-item">
  <div class="bx--list-box__wrapper ">
    <label class="bx--label">Combo box label</label>
    <div
      class="bx--combo-box bx--list-box bx--list-box--expanded">
      <div role="combobox" class="bx--list-box__field" aria-label="close menu" aria-expanded="true"
        aria-haspopup="listbox">
        <input class="bx--text-input" aria-autocomplete="list" aria-expanded="false" autocomplete="off"
          value="" id="downshift-input-2" placeholder="Filter..." aria-label="Filter..." aria-owns="list-box__menu-0">
        <div class="bx--list-box__menu-icon bx--list-box__menu-icon--open">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-label="Close menu" width="16" height="16" viewBox="0 0 16 16" role="img"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
        </div>
      </div>
      <ul class="bx--list-box__menu" role="listbox" id="list-box__menu-0" aria-label="Filter...">
        <li
          class="bx--list-box__menu-item"
          id="downshift-1-item-0">
          <div class="bx--list-box__menu-item__option" tabindex="0">
            Option 1
          </div>
        </li>
        <li
          class="bx--list-box__menu-item"
          id="downshift-1-item-1">
          <div class="bx--list-box__menu-item__option" tabindex="0">
            Option 2
          </div>
        </li>
        <li
          class="bx--list-box__menu-item bx--list-box__menu-item--highlighted"
          id="downshift-1-item-2">
          <div class="bx--list-box__menu-item__option" tabindex="0">
            Option 3
          </div>
        </li>
        <li
          class="bx--list-box__menu-item"
          id="downshift-1-item-3">
          <div class="bx--list-box__menu-item__option" tabindex="0">
            Option 4
          </div>
        </li>
        <li
          class="bx--list-box__menu-item"
          id="downshift-1-item-4">
          <div class="bx--list-box__menu-item__option" tabindex="0">
            An example option that is really long to show what should be done to handle long text
          </div>
        </li>
      </ul>
    </div>
    <div class="bx--form__helper-text">Optional helper text
      here
    </div>
  </div>
</div>

<div class="bx--form-item">
  <div class="bx--list-box__wrapper ">
    <label class="bx--label">Combo box label</label>
    <div
      class="bx--combo-box bx--list-box bx--list-box--expanded">
      <div role="combobox" class="bx--list-box__field" aria-label="close menu" aria-expanded="true"
        aria-haspopup="listbox">
        <input class="bx--text-input" aria-autocomplete="list" aria-expanded="false" autocomplete="off"
          value="Option 3" id="downshift-input-2" placeholder="Filter..." aria-label="Filter..."
          aria-owns="list-box__menu-1">
        <div role="button" class="bx--list-box__selection" title="Clear selected item">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-label="Clear text input" width="16" height="16" viewBox="0 0 32 32" role="img"><path d="M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"></path></svg>
        </div>
        <div class="bx--list-box__menu-icon bx--list-box__menu-icon--open">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-label="Close menu" width="16" height="16" viewBox="0 0 16 16" role="img"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
        </div>
      </div>
      <ul class="bx--list-box__menu" role="listbox" id="list-box__menu-1" aria-label="Filter...">
        <li
          class="bx--list-box__menu-item"
          id="downshift-1-item-0">
          <div class="bx--list-box__menu-item__option" tabindex="0">
            Option 1
          </div>
        </li>
        <li
          class="bx--list-box__menu-item"
          id="downshift-1-item-1">
          <div class="bx--list-box__menu-item__option" tabindex="0">
            Option 2
          </div>
        </li>
        <li
          class="bx--list-box__menu-item bx--list-box__menu-item--highlighted"
          id="downshift-1-item-2">
          <div class="bx--list-box__menu-item__option" tabindex="0">
            Option 3
          </div>
        </li>
        <li
          class="bx--list-box__menu-item"
          id="downshift-1-item-3">
          <div class="bx--list-box__menu-item__option" tabindex="0">
            Option 4
          </div>
        </li>
        <li
          class="bx--list-box__menu-item"
          id="downshift-1-item-4">
          <div class="bx--list-box__menu-item__option" tabindex="0">
            An example option that is really long to show what should be done to handle long text
          </div>
        </li>
      </ul>
    </div>
    <div class="bx--form__helper-text">Optional helper text
      here
    </div>
  </div>
</div>

<div class="bx--form-item">
  <div class="bx--list-box__wrapper ">
    <label class="bx--label">Combo box label</label>
    <div
      class="bx--combo-box bx--list-box"
      data-invalid>
      <div role="combobox" class="bx--list-box__field" aria-label="open menu" aria-expanded="false"
        aria-haspopup="listbox">
        <input class="bx--text-input" aria-autocomplete="list" aria-expanded="false" autocomplete="off"
          value="Option 3" id="downshift-input-2" placeholder="Filter..." aria-label="Filter..."
          aria-owns="list-box__menu-2">
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--list-box__invalid-icon" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8,1C4.2,1,1,4.2,1,8s3.2,7,7,7s7-3.1,7-7S11.9,1,8,1z M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2	c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z"></path><path d="M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8	c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z" data-icon-path="inner-path" opacity="0"></path></svg>
        <div role="button" class="bx--list-box__selection" title="Clear selected item">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-label="Clear text input" width="16" height="16" viewBox="0 0 32 32" role="img"><path d="M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"></path></svg>
        </div>
        <div class="bx--list-box__menu-icon bx--list-box__menu-icon--open">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-label="Close menu" width="16" height="16" viewBox="0 0 16 16" role="img"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
        </div>
      </div>
      <ul class="bx--list-box__menu" role="listbox" id="list-box__menu-2" aria-label="Filter...">
        <li
          class="bx--list-box__menu-item"
          id="downshift-1-item-0">
          <div class="bx--list-box__menu-item__option" tabindex="0">
            Option 1
          </div>
        </li>
        <li
          class="bx--list-box__menu-item"
          id="downshift-1-item-1">
          <div class="bx--list-box__menu-item__option" tabindex="0">
            Option 2
          </div>
        </li>
        <li
          class="bx--list-box__menu-item bx--list-box__menu-item--highlighted"
          id="downshift-1-item-2">
          <div class="bx--list-box__menu-item__option" tabindex="0">
            Option 3
          </div>
        </li>
        <li
          class="bx--list-box__menu-item"
          id="downshift-1-item-3">
          <div class="bx--list-box__menu-item__option" tabindex="0">
            Option 4
          </div>
        </li>
        <li
          class="bx--list-box__menu-item"
          id="downshift-1-item-4">
          <div class="bx--list-box__menu-item__option" tabindex="0">
            An example option that is really long to show what should be done to handle long text
          </div>
        </li>
      </ul>
    </div>
    <div class="bx--form-requirement">
      Validation message here
    </div>
  </div>
</div>
`}},
{
displayName:"light",
picture:{
src:"./pictures/combo-box/light.png",
width:296,
height:820},
snippet:{
html:`

<div class="bx--form-item">
  <div class="bx--list-box__wrapper">
    <label class="bx--label">Combo box label</label>
    <div
      class="bx--combo-box bx--list-box bx--list-box--light">
      <div role="combobox" class="bx--list-box__field" aria-label="open menu" aria-expanded="false"
        aria-haspopup="listbox">
        <input class="bx--text-input" aria-autocomplete="list" aria-expanded="false" autocomplete="off"
          value="" id="downshift-input-2" placeholder="Filter..." aria-label="Filter...">
        <div class="bx--list-box__menu-icon">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-label="Open menu" width="16" height="16" viewBox="0 0 16 16" role="img"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
        </div>
      </div>
    </div>
    <div class="bx--form__helper-text">Optional helper text here</div>
  </div>
</div>

<div class="bx--form-item">
  <div class="bx--list-box__wrapper">
    <label class="bx--label">Combo box label</label>
    <div
      class="bx--combo-box bx--list-box bx--list-box--light">
      <div role="combobox" class="bx--list-box__field" aria-label="open menu" aria-expanded="false"
        aria-haspopup="listbox">
        <input class="bx--text-input" aria-autocomplete="list" aria-expanded="false" autocomplete="off"
          value="This is not a value." id="downshift-input-2" placeholder="Filter..." aria-label="Filter...">
        <div class="bx--list-box__selection" role="button">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" title="Clear all" aria-label="Clear all" width="16" height="16" viewBox="0 0 32 32" role="img"><path d="M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"></path></svg>
        </div>
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
    <label class="bx--label">Combo box label</label>
    <div
      class="bx--combo-box bx--list-box bx--list-box--light"
      data-invalid>
      <div role="combobox" class="bx--list-box__field" aria-label="open menu" aria-expanded="false"
        aria-haspopup="listbox">
        <input class="bx--text-input" aria-autocomplete="list" aria-expanded="false" autocomplete="off"
          value="" id="downshift-input-2" placeholder="Filter..." aria-label="Filter...">
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--list-box__invalid-icon" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8,1C4.2,1,1,4.2,1,8s3.2,7,7,7s7-3.1,7-7S11.9,1,8,1z M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2	c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z"></path><path d="M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8	c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z" data-icon-path="inner-path" opacity="0"></path></svg>
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
    <label class="bx--label">Combo box label</label>
    <div
      class="bx--combo-box bx--list-box bx--list-box--light"
      data-invalid>
      <div role="combobox" class="bx--list-box__field" aria-label="open menu" aria-expanded="false"
        aria-haspopup="listbox">
        <input class="bx--text-input" aria-autocomplete="list" aria-expanded="false" autocomplete="off"
          value="This is not a value." id="downshift-input-2" placeholder="Filter..." aria-label="Filter...">
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--list-box__invalid-icon" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8,1C4.2,1,1,4.2,1,8s3.2,7,7,7s7-3.1,7-7S11.9,1,8,1z M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2	c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z"></path><path d="M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8	c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z" data-icon-path="inner-path" opacity="0"></path></svg>
        <div class="bx--list-box__selection" role="button">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" title="Clear all" aria-label="Clear all" width="16" height="16" viewBox="0 0 32 32" role="img"><path d="M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"></path></svg>
        </div>
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
    <label class="bx--label bx--label--disabled">Combo box label</label>
    <div
      class="bx--combo-box bx--list-box bx--list-box--disabled bx--list-box--light"
      data-invalid>
      <div role="combobox" class="bx--list-box__field" aria-label="open menu" aria-expanded="false"
        aria-haspopup="true" disabled>
        <input class="bx--text-input" aria-autocomplete="list" aria-expanded="false" autocomplete="off"
          value="" id="downshift-input-2" placeholder="Filter..." disabled>
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--list-box__invalid-icon" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8,1C4.2,1,1,4.2,1,8s3.2,7,7,7s7-3.1,7-7S11.9,1,8,1z M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2	c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z"></path><path d="M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8	c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z" data-icon-path="inner-path" opacity="0"></path></svg>
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
    <label class="bx--label bx--label--disabled">Combo box label</label>
    <div
      class="bx--combo-box bx--list-box bx--list-box--disabled bx--list-box--light"
      data-invalid>
      <div role="combobox" class="bx--list-box__field" aria-label="open menu" aria-expanded="false"
        aria-haspopup="true" disabled>
        <input class="bx--text-input" aria-autocomplete="list" aria-expanded="false" autocomplete="off"
          value="This is not a value" id="downshift-input-2" placeholder="Filter..." disabled>
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--list-box__invalid-icon" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8,1C4.2,1,1,4.2,1,8s3.2,7,7,7s7-3.1,7-7S11.9,1,8,1z M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2	c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z"></path><path d="M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8	c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z" data-icon-path="inner-path" opacity="0"></path></svg>
        <div class="bx--list-box__selection" role="button">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" title="Clear all" aria-label="Clear all" width="16" height="16" viewBox="0 0 32 32" role="img"><path d="M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"></path></svg>
        </div>
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
    <label class="bx--label bx--label--disabled">Combo box label</label>
    <div
      class="bx--combo-box bx--list-box bx--list-box--disabled bx--list-box--light">
      <div role="combobox" class="bx--list-box__field" aria-label="open menu" aria-expanded="false"
        aria-haspopup="true" disabled>
        <input class="bx--text-input" aria-autocomplete="list" aria-expanded="false" autocomplete="off"
          value="" id="downshift-input-2" placeholder="Filter..." disabled>
        <div class="bx--list-box__menu-icon">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-label="Open menu" width="16" height="16" viewBox="0 0 16 16" role="img"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="bx--form-item">
  <div class="bx--list-box__wrapper ">
    <label class="bx--label">Combo box label</label>
    <div
      class="bx--combo-box bx--list-box bx--list-box--expanded bx--list-box--light">
      <div role="combobox" class="bx--list-box__field" aria-label="close menu" aria-expanded="true"
        aria-haspopup="listbox">
        <input class="bx--text-input" aria-autocomplete="list" aria-expanded="false" autocomplete="off"
          value="" id="downshift-input-2" placeholder="Filter..." aria-label="Filter..." aria-owns="list-box__menu-0">
        <div class="bx--list-box__menu-icon bx--list-box__menu-icon--open">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-label="Close menu" width="16" height="16" viewBox="0 0 16 16" role="img"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
        </div>
      </div>
      <ul class="bx--list-box__menu" role="listbox" id="list-box__menu-0" aria-label="Filter...">
        <li
          class="bx--list-box__menu-item"
          id="downshift-1-item-0">
          <div class="bx--list-box__menu-item__option" tabindex="0">
            Option 1
          </div>
        </li>
        <li
          class="bx--list-box__menu-item"
          id="downshift-1-item-1">
          <div class="bx--list-box__menu-item__option" tabindex="0">
            Option 2
          </div>
        </li>
        <li
          class="bx--list-box__menu-item bx--list-box__menu-item--highlighted"
          id="downshift-1-item-2">
          <div class="bx--list-box__menu-item__option" tabindex="0">
            Option 3
          </div>
        </li>
        <li
          class="bx--list-box__menu-item"
          id="downshift-1-item-3">
          <div class="bx--list-box__menu-item__option" tabindex="0">
            Option 4
          </div>
        </li>
        <li
          class="bx--list-box__menu-item"
          id="downshift-1-item-4">
          <div class="bx--list-box__menu-item__option" tabindex="0">
            An example option that is really long to show what should be done to handle long text
          </div>
        </li>
      </ul>
    </div>
    <div class="bx--form__helper-text">Optional helper text
      here
    </div>
  </div>
</div>

<div class="bx--form-item">
  <div class="bx--list-box__wrapper ">
    <label class="bx--label">Combo box label</label>
    <div
      class="bx--combo-box bx--list-box bx--list-box--expanded bx--list-box--light">
      <div role="combobox" class="bx--list-box__field" aria-label="close menu" aria-expanded="true"
        aria-haspopup="listbox">
        <input class="bx--text-input" aria-autocomplete="list" aria-expanded="false" autocomplete="off"
          value="Option 3" id="downshift-input-2" placeholder="Filter..." aria-label="Filter..."
          aria-owns="list-box__menu-1">
        <div role="button" class="bx--list-box__selection" title="Clear selected item">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-label="Clear text input" width="16" height="16" viewBox="0 0 32 32" role="img"><path d="M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"></path></svg>
        </div>
        <div class="bx--list-box__menu-icon bx--list-box__menu-icon--open">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-label="Close menu" width="16" height="16" viewBox="0 0 16 16" role="img"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
        </div>
      </div>
      <ul class="bx--list-box__menu" role="listbox" id="list-box__menu-1" aria-label="Filter...">
        <li
          class="bx--list-box__menu-item"
          id="downshift-1-item-0">
          <div class="bx--list-box__menu-item__option" tabindex="0">
            Option 1
          </div>
        </li>
        <li
          class="bx--list-box__menu-item"
          id="downshift-1-item-1">
          <div class="bx--list-box__menu-item__option" tabindex="0">
            Option 2
          </div>
        </li>
        <li
          class="bx--list-box__menu-item bx--list-box__menu-item--highlighted"
          id="downshift-1-item-2">
          <div class="bx--list-box__menu-item__option" tabindex="0">
            Option 3
          </div>
        </li>
        <li
          class="bx--list-box__menu-item"
          id="downshift-1-item-3">
          <div class="bx--list-box__menu-item__option" tabindex="0">
            Option 4
          </div>
        </li>
        <li
          class="bx--list-box__menu-item"
          id="downshift-1-item-4">
          <div class="bx--list-box__menu-item__option" tabindex="0">
            An example option that is really long to show what should be done to handle long text
          </div>
        </li>
      </ul>
    </div>
    <div class="bx--form__helper-text">Optional helper text
      here
    </div>
  </div>
</div>

<div class="bx--form-item">
  <div class="bx--list-box__wrapper ">
    <label class="bx--label">Combo box label</label>
    <div
      class="bx--combo-box bx--list-box bx--list-box--light"
      data-invalid>
      <div role="combobox" class="bx--list-box__field" aria-label="open menu" aria-expanded="false"
        aria-haspopup="listbox">
        <input class="bx--text-input" aria-autocomplete="list" aria-expanded="false" autocomplete="off"
          value="Option 3" id="downshift-input-2" placeholder="Filter..." aria-label="Filter..."
          aria-owns="list-box__menu-2">
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--list-box__invalid-icon" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8,1C4.2,1,1,4.2,1,8s3.2,7,7,7s7-3.1,7-7S11.9,1,8,1z M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2	c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z"></path><path d="M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8	c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z" data-icon-path="inner-path" opacity="0"></path></svg>
        <div role="button" class="bx--list-box__selection" title="Clear selected item">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-label="Clear text input" width="16" height="16" viewBox="0 0 32 32" role="img"><path d="M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"></path></svg>
        </div>
        <div class="bx--list-box__menu-icon bx--list-box__menu-icon--open">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-label="Close menu" width="16" height="16" viewBox="0 0 16 16" role="img"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
        </div>
      </div>
      <ul class="bx--list-box__menu" role="listbox" id="list-box__menu-2" aria-label="Filter...">
        <li
          class="bx--list-box__menu-item"
          id="downshift-1-item-0">
          <div class="bx--list-box__menu-item__option" tabindex="0">
            Option 1
          </div>
        </li>
        <li
          class="bx--list-box__menu-item"
          id="downshift-1-item-1">
          <div class="bx--list-box__menu-item__option" tabindex="0">
            Option 2
          </div>
        </li>
        <li
          class="bx--list-box__menu-item bx--list-box__menu-item--highlighted"
          id="downshift-1-item-2">
          <div class="bx--list-box__menu-item__option" tabindex="0">
            Option 3
          </div>
        </li>
        <li
          class="bx--list-box__menu-item"
          id="downshift-1-item-3">
          <div class="bx--list-box__menu-item__option" tabindex="0">
            Option 4
          </div>
        </li>
        <li
          class="bx--list-box__menu-item"
          id="downshift-1-item-4">
          <div class="bx--list-box__menu-item__option" tabindex="0">
            An example option that is really long to show what should be done to handle long text
          </div>
        </li>
      </ul>
    </div>
    <div class="bx--form-requirement">
      Validation message here
    </div>
  </div>
</div>
`}}
]