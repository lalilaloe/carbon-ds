export default {
    displayName: "dropdown",
    name: "dropdown",
    homepage: "https://www.carbondesignsystem.com/components/dropdown"
}

export const variants = [
{
displayName:"dropdown",
picture:{
src:"./pictures/dropdown/dropdown.png",
width:600,
height:452},
snippet:{
html:`
<div class="bx--form-item">
  <div class="bx--dropdown__wrapper ">
    <span id="example-fr1491jxtdt-label" class="bx--label">Dropdown label</span>
    <div data-dropdown data-value
      class="bx--dropdown   ">
      <button class="bx--dropdown-text" aria-haspopup="true" aria-expanded="false"
        aria-controls="example-fr1491jxtdt-menu"
        aria-labelledby="example-fr1491jxtdt-label example-fr1491jxtdt-value" type="button">
        <span class="bx--dropdown-text__inner" id="example-fr1491jxtdt-value"> Dropdown
          option </span>
        <span class="bx--dropdown__arrow-container">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--dropdown__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
        </span>
      </button>
      <ul class="bx--dropdown-list" id="example-fr1491jxtdt-menu" role="menu" tabindex="-1"
        id="example-fr1491jxtdt-menu" aria-hidden="true" aria-labelledby="example-fr1491jxtdt-label">
        <li data-option data-value="all" class="bx--dropdown-item" title="Option 1">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="true"
            id="example-fr1491jxtdt-item0">Option 1</a>
        </li>
        <li data-option data-value="cloudFoundry" class="bx--dropdown-item" title="Option 2">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-fr1491jxtdt-item1">Option 2</a>
        </li>
        <li data-option data-value="staging" class="bx--dropdown-item" title="Option 3">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-fr1491jxtdt-item2">Option 3</a>
        </li>
        <li data-option data-value="dea" class="bx--dropdown-item" title="Option 4">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-fr1491jxtdt-item3">Option 4</a>
        </li>
        <li data-option data-value="router" class="bx--dropdown-item" title="Option 5">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-fr1491jxtdt-item4">Option 5</a>
        </li>
        <li data-option data-value="loremipsum" class="bx--dropdown-item" title="An example option that is really long to show what should be done to handle long text">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-fr1491jxtdt-item5">An example option that is really long to show what should be done to handle long text</a>
        </li>
      </ul>
    </div>
    <div class="bx--form__helper-text">Optional helper text.</div>
  </div>
</div>

<div class="bx--form-item">
  <div class="bx--dropdown__wrapper ">
    <span id="example-syjaqx60sj-label" class="bx--label">Dropdown label</span>
    <div data-dropdown data-value
      class="bx--dropdown   ">
      <button class="bx--dropdown-text" aria-haspopup="true" aria-expanded="false"
        aria-controls="example-syjaqx60sj-menu" aria-labelledby="example-syjaqx60sj-label example-syjaqx60sj-value"
        type="button">
        <span class="bx--dropdown-text__inner" id="example-syjaqx60sj-value"> Dropdown
          option </span>
        <span class="bx--dropdown__arrow-container">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--dropdown__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
        </span>
      </button>
      <ul class="bx--dropdown-list" role="menu" tabindex="-1" id="example-syjaqx60sj-menu"
        aria-hidden="true" aria-labelledby="example-syjaqx60sj-label">
        <li data-option data-value="all" class="bx--dropdown-item" title="Option 1">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="true"
            id="example-syjaqx60sj-item0">Option 1</a>
        </li>
        <li data-option data-value="cloudFoundry" class="bx--dropdown-item" title="Option 2">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-syjaqx60sj-item1">Option 2</a>
        </li>
        <li data-option data-value="staging" class="bx--dropdown-item" title="Option 3">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-syjaqx60sj-item2">Option 3</a>
        </li>
        <li data-option data-value="dea" class="bx--dropdown-item" title="Option 4">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-syjaqx60sj-item3">Option 4</a>
        </li>
        <li data-option data-value="router" class="bx--dropdown-item" title="Option 5">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-syjaqx60sj-item4">Option 5</a>
        </li>
        <li data-option data-value="loremipsum" class="bx--dropdown-item" title="An example option that is really long to show what should be done to handle long text">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-syjaqx60sj-item5">An example option that is really long to show what should be done to handle long text</a>
        </li>
      </ul>
    </div>
    <div class="bx--form__helper-text">Optional helper text here; if message is more than one line text
      should wrap (~100 character count maximum)</div>
  </div>
</div>

<div class="bx--form-item">
  <div class="bx--dropdown__wrapper ">
    <span id="example-yji4pyidrze-label" class="bx--label bx--label--disabled"
      aria-disabled="true">Dropdown label</span>
    <div data-dropdown data-value
      class="bx--dropdown bx--dropdown--disabled">
      <button disabled class="bx--dropdown-text" aria-haspopup="true" aria-expanded="false"
        aria-controls="example-yji4pyidrze-menu"
        aria-labelledby="example-yji4pyidrze-label example-yji4pyidrze-value" type="button">
        <span class="bx--dropdown-text__inner" id="example-yji4pyidrze-value">
          Dropdown option </span>
        <span class="bx--dropdown__arrow-container">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--dropdown__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
        </span>
      </button>
      
      <ul class="bx--dropdown-list" id="example-yji4pyidrze-menu" role="menu"
        id="example-yji4pyidrze-menu" aria-hidden="true" aria-labelledby="example-yji4pyidrze-label">
        <li data-option data-value="all" class="bx--dropdown-item" title="Option 1">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="true"
            id="example-yji4pyidrze-item0">Option 1</a>
        </li>
        <li data-option data-value="cloudFoundry" class="bx--dropdown-item" title="Option 2">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-yji4pyidrze-item1">Option 2</a>
        </li>
        <li data-option data-value="staging" class="bx--dropdown-item" title="Option 3">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-yji4pyidrze-item2">Option 3</a>
        </li>
        <li data-option data-value="dea" class="bx--dropdown-item" title="Option 4">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-yji4pyidrze-item3">Option 4</a>
        </li>
        <li data-option data-value="router" class="bx--dropdown-item" title="Option 5">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-yji4pyidrze-item4">Option 5</a>
        </li>
        <li data-option data-value="loremipsum" class="bx--dropdown-item" title="An example option that is really long to show what should be done to handle long text">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-yji4pyidrze-item5">An example option that is really long to show what should be done to handle long text</a>
        </li>
      </ul>
    </div>
    <div class="bx--form__helper-text bx--form__helper-text--disabled" aria-disabled="true">
      Optional helper text
      here; if message is more than one line text
      should wrap (~100 character count maximum)</div>
  </div>
</div>

<div class="bx--form-item">
  <div
    class="bx--dropdown__wrapper ">
    <span id="example-k0xqctw3v0f-label" class="bx--label">Dropdown label</span>
    <div data-dropdown data-value
      class="bx--dropdown bx--dropdown--invalid  "
      data-invalid>
      <button class="bx--dropdown-text" aria-haspopup="true" aria-expanded="false"
        aria-controls="example-k0xqctw3v0f-menu"
        aria-labelledby="example-k0xqctw3v0f-label example-k0xqctw3v0f-value" type="button">
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--dropdown__invalid-icon" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8,1C4.2,1,1,4.2,1,8s3.2,7,7,7s7-3.1,7-7S11.9,1,8,1z M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2	c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z"></path><path d="M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8	c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z" data-icon-path="inner-path" opacity="0"></path></svg>
        <span class="bx--dropdown-text__inner" id="example-k0xqctw3v0f-value"> Dropdown
          option </span>
        <span class="bx--dropdown__arrow-container">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--dropdown__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
        </span>
      </button>
      <ul class="bx--dropdown-list" id="example-k0xqctw3v0f-menu" role="menu" tabindex="-1"
        id="example-k0xqctw3v0f-menu" aria-hidden="true" aria-labelledby="example-k0xqctw3v0f-label">
        <li data-option data-value="all" class="bx--dropdown-item" title="Option 1">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="true"
            id="example-k0xqctw3v0f-item0">Option 1</a>
        </li>
        <li data-option data-value="cloudFoundry" class="bx--dropdown-item" title="Option 2">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-k0xqctw3v0f-item1">Option 2</a>
        </li>
        <li data-option data-value="staging" class="bx--dropdown-item" title="Option 3">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-k0xqctw3v0f-item2">Option 3</a>
        </li>
        <li data-option data-value="dea" class="bx--dropdown-item" title="Option 4">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-k0xqctw3v0f-item3">Option 4</a>
        </li>
        <li data-option data-value="router" class="bx--dropdown-item" title="Option 5">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-k0xqctw3v0f-item4">Option 5</a>
        </li>
        <li data-option data-value="loremipsum" class="bx--dropdown-item" title="An example option that is really long to show what should be done to handle long text">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-k0xqctw3v0f-item5">An example option that is really long to show what should be done to handle long text</a>
        </li>
      </ul>
    </div>
    <div class="bx--form-requirement">
      This is a validation message
    </div>
  </div>
</div>

<div class="bx--form-item">
  <div class="bx--dropdown__wrapper ">
    <span id="example-fr1491jxtdt-label" class="bx--label">Dropdown label</span>
    <div data-dropdown data-value
      class="bx--dropdown  bx--dropdown--show-selected   ">
      <button class="bx--dropdown-text" aria-haspopup="true" aria-expanded="false"
        aria-controls="example-fr1491jxtdt-menu"
        aria-labelledby="example-fr1491jxtdt-label example-fr1491jxtdt-value" type="button">
        <span class="bx--dropdown-text__inner" id="example-fr1491jxtdt-value"> Dropdown
          option </span>
        <span class="bx--dropdown__arrow-container">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--dropdown__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
        </span>
      </button>
      <ul class="bx--dropdown-list" id="example-fr1491jxtdt-menu" role="menu" tabindex="-1"
        id="example-fr1491jxtdt-menu" aria-hidden="true" aria-labelledby="example-fr1491jxtdt-label">
        <li data-option data-value="all" class="bx--dropdown-item" title="Option 1">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="true"
            id="example-fr1491jxtdt-item0">Option 1</a>
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" class="bx--list-box__menu-item__selected-icon" width="16" height="16" viewBox="0 0 32 32"><path d="M13 24L4 15 5.414 13.586 13 21.171 26.586 7.586 28 9 13 24z"></path></svg>
        </li>
        <li data-option data-value="cloudFoundry" class="bx--dropdown-item" title="Option 2">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-fr1491jxtdt-item1">Option 2</a>
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" class="bx--list-box__menu-item__selected-icon" width="16" height="16" viewBox="0 0 32 32"><path d="M13 24L4 15 5.414 13.586 13 21.171 26.586 7.586 28 9 13 24z"></path></svg>
        </li>
        <li data-option data-value="staging" class="bx--dropdown-item" title="Option 3">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-fr1491jxtdt-item2">Option 3</a>
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" class="bx--list-box__menu-item__selected-icon" width="16" height="16" viewBox="0 0 32 32"><path d="M13 24L4 15 5.414 13.586 13 21.171 26.586 7.586 28 9 13 24z"></path></svg>
        </li>
        <li data-option data-value="dea" class="bx--dropdown-item" title="Option 4">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-fr1491jxtdt-item3">Option 4</a>
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" class="bx--list-box__menu-item__selected-icon" width="16" height="16" viewBox="0 0 32 32"><path d="M13 24L4 15 5.414 13.586 13 21.171 26.586 7.586 28 9 13 24z"></path></svg>
        </li>
        <li data-option data-value="router" class="bx--dropdown-item" title="Option 5">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-fr1491jxtdt-item4">Option 5</a>
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" class="bx--list-box__menu-item__selected-icon" width="16" height="16" viewBox="0 0 32 32"><path d="M13 24L4 15 5.414 13.586 13 21.171 26.586 7.586 28 9 13 24z"></path></svg>
        </li>
        <li data-option data-value="loremipsum" class="bx--dropdown-item" title="An example option that is really long to show what should be done to handle long text">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-fr1491jxtdt-item5">An example option that is really long to show what should be done to handle long text</a>
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" class="bx--list-box__menu-item__selected-icon" width="16" height="16" viewBox="0 0 32 32"><path d="M13 24L4 15 5.414 13.586 13 21.171 26.586 7.586 28 9 13 24z"></path></svg>
        </li>
      </ul>
    </div>
    <div class="bx--form__helper-text">Optional helper text.</div>
  </div>
</div>
`}},
{
displayName:"inline",
picture:{
src:"./pictures/dropdown/inline.png",
width:335,
height:256},
snippet:{
html:`
<div class="bx--form-item">
  <div class="bx--dropdown__wrapper bx--dropdown__wrapper--inline">
    <span id="example-fr1491jxtdt-label" class="bx--label">Dropdown label</span>
    <div data-dropdown data-dropdown-type="inline"  data-value
      class="bx--dropdown   bx--dropdown--inline">
      <button class="bx--dropdown-text" aria-haspopup="true" aria-expanded="false"
        aria-controls="example-fr1491jxtdt-menu"
        aria-labelledby="example-fr1491jxtdt-label example-fr1491jxtdt-value" type="button">
        <span class="bx--dropdown-text__inner" id="example-fr1491jxtdt-value">Inline Dropdown label</span>
        <span class="bx--dropdown__arrow-container">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--dropdown__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
        </span>
      </button>
      <ul class="bx--dropdown-list" id="example-fr1491jxtdt-menu" role="menu" tabindex="-1"
        id="example-fr1491jxtdt-menu" aria-hidden="true" aria-labelledby="example-fr1491jxtdt-label">
        <li data-option data-value="all" class="bx--dropdown-item" title="Option 1">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="true"
            id="example-fr1491jxtdt-item0">Option 1</a>
        </li>
        <li data-option data-value="cloudFoundry" class="bx--dropdown-item" title="Option 2">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-fr1491jxtdt-item1">Option 2</a>
        </li>
        <li data-option data-value="staging" class="bx--dropdown-item" title="Option 3">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-fr1491jxtdt-item2">Option 3</a>
        </li>
        <li data-option data-value="dea" class="bx--dropdown-item" title="Option 4">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-fr1491jxtdt-item3">Option 4</a>
        </li>
        <li data-option data-value="router" class="bx--dropdown-item" title="Option 5">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-fr1491jxtdt-item4">Option 5</a>
        </li>
        <li data-option data-value="loremipsum" class="bx--dropdown-item" title="An example option that is really long to show what should be done to handle long text">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-fr1491jxtdt-item5">An example option that is really long to show what should be done to handle long text</a>
        </li>
      </ul>
    </div>
  </div>
</div>


<div class="bx--form-item">
  <div class="bx--dropdown__wrapper bx--dropdown__wrapper--inline">
    <span id="example-yji4pyidrze-label" class="bx--label bx--label--disabled"
      aria-disabled="true">Dropdown label</span>
    <div data-dropdown data-dropdown-type="inline"  data-value
      class="bx--dropdown bx--dropdown--inline bx--dropdown--disabled">
      <button disabled class="bx--dropdown-text" aria-haspopup="true" aria-expanded="false"
        aria-controls="example-yji4pyidrze-menu"
        aria-labelledby="example-yji4pyidrze-label example-yji4pyidrze-value" type="button">
        <span class="bx--dropdown-text__inner" id="example-yji4pyidrze-value">Inline Dropdown label</span>
        <span class="bx--dropdown__arrow-container">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--dropdown__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
        </span>
      </button>
      
      <ul class="bx--dropdown-list" id="example-yji4pyidrze-menu" role="menu"
        id="example-yji4pyidrze-menu" aria-hidden="true" aria-labelledby="example-yji4pyidrze-label">
        <li data-option data-value="all" class="bx--dropdown-item" title="Option 1">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="true"
            id="example-yji4pyidrze-item0">Option 1</a>
        </li>
        <li data-option data-value="cloudFoundry" class="bx--dropdown-item" title="Option 2">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-yji4pyidrze-item1">Option 2</a>
        </li>
        <li data-option data-value="staging" class="bx--dropdown-item" title="Option 3">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-yji4pyidrze-item2">Option 3</a>
        </li>
        <li data-option data-value="dea" class="bx--dropdown-item" title="Option 4">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-yji4pyidrze-item3">Option 4</a>
        </li>
        <li data-option data-value="router" class="bx--dropdown-item" title="Option 5">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-yji4pyidrze-item4">Option 5</a>
        </li>
        <li data-option data-value="loremipsum" class="bx--dropdown-item" title="An example option that is really long to show what should be done to handle long text">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-yji4pyidrze-item5">An example option that is really long to show what should be done to handle long text</a>
        </li>
      </ul>
    </div>
  </div>
</div>

<div class="bx--form-item">
  <div
    class="bx--dropdown__wrapper bx--dropdown__wrapper--inline bx--dropdown__wrapper--inline--invalid">
    <span id="example-k0xqctw3v0f-label" class="bx--label">Dropdown label</span>
    <div data-dropdown data-dropdown-type="inline"  data-value
      class="bx--dropdown bx--dropdown--invalid   bx--dropdown--inline"
      data-invalid>
      <button class="bx--dropdown-text" aria-haspopup="true" aria-expanded="false"
        aria-controls="example-k0xqctw3v0f-menu"
        aria-labelledby="example-k0xqctw3v0f-label example-k0xqctw3v0f-value" type="button">
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--dropdown__invalid-icon" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8,1C4.2,1,1,4.2,1,8s3.2,7,7,7s7-3.1,7-7S11.9,1,8,1z M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2	c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z"></path><path d="M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8	c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z" data-icon-path="inner-path" opacity="0"></path></svg>
        <span class="bx--dropdown-text__inner" id="example-k0xqctw3v0f-value">Inline Dropdown label</span>
        <span class="bx--dropdown__arrow-container">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--dropdown__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
        </span>
      </button>
      <ul class="bx--dropdown-list" id="example-k0xqctw3v0f-menu" role="menu" tabindex="-1"
        id="example-k0xqctw3v0f-menu" aria-hidden="true" aria-labelledby="example-k0xqctw3v0f-label">
        <li data-option data-value="all" class="bx--dropdown-item" title="Option 1">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="true"
            id="example-k0xqctw3v0f-item0">Option 1</a>
        </li>
        <li data-option data-value="cloudFoundry" class="bx--dropdown-item" title="Option 2">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-k0xqctw3v0f-item1">Option 2</a>
        </li>
        <li data-option data-value="staging" class="bx--dropdown-item" title="Option 3">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-k0xqctw3v0f-item2">Option 3</a>
        </li>
        <li data-option data-value="dea" class="bx--dropdown-item" title="Option 4">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-k0xqctw3v0f-item3">Option 4</a>
        </li>
        <li data-option data-value="router" class="bx--dropdown-item" title="Option 5">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-k0xqctw3v0f-item4">Option 5</a>
        </li>
        <li data-option data-value="loremipsum" class="bx--dropdown-item" title="An example option that is really long to show what should be done to handle long text">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-k0xqctw3v0f-item5">An example option that is really long to show what should be done to handle long text</a>
        </li>
      </ul>
      <div class="bx--form-requirement">
        This is not a validation message
      </div>
    </div>
  </div>
</div>

<div class="bx--form-item">
  <div class="bx--dropdown__wrapper bx--dropdown__wrapper--inline">
    <span id="example-fr1491jxtdt-label" class="bx--label">Dropdown label</span>
    <div data-dropdown data-dropdown-type="inline"  data-value
      class="bx--dropdown  bx--dropdown--show-selected   bx--dropdown--inline">
      <button class="bx--dropdown-text" aria-haspopup="true" aria-expanded="false"
        aria-controls="example-fr1491jxtdt-menu"
        aria-labelledby="example-fr1491jxtdt-label example-fr1491jxtdt-value" type="button">
        <span class="bx--dropdown-text__inner" id="example-fr1491jxtdt-value">Inline Dropdown label</span>
        <span class="bx--dropdown__arrow-container">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--dropdown__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
        </span>
      </button>
      <ul class="bx--dropdown-list" id="example-fr1491jxtdt-menu" role="menu" tabindex="-1"
        id="example-fr1491jxtdt-menu" aria-hidden="true" aria-labelledby="example-fr1491jxtdt-label">
        <li data-option data-value="all" class="bx--dropdown-item" title="Option 1">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="true"
            id="example-fr1491jxtdt-item0">Option 1</a>
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" class="bx--list-box__menu-item__selected-icon" width="16" height="16" viewBox="0 0 32 32"><path d="M13 24L4 15 5.414 13.586 13 21.171 26.586 7.586 28 9 13 24z"></path></svg>
        </li>
        <li data-option data-value="cloudFoundry" class="bx--dropdown-item" title="Option 2">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-fr1491jxtdt-item1">Option 2</a>
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" class="bx--list-box__menu-item__selected-icon" width="16" height="16" viewBox="0 0 32 32"><path d="M13 24L4 15 5.414 13.586 13 21.171 26.586 7.586 28 9 13 24z"></path></svg>
        </li>
        <li data-option data-value="staging" class="bx--dropdown-item" title="Option 3">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-fr1491jxtdt-item2">Option 3</a>
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" class="bx--list-box__menu-item__selected-icon" width="16" height="16" viewBox="0 0 32 32"><path d="M13 24L4 15 5.414 13.586 13 21.171 26.586 7.586 28 9 13 24z"></path></svg>
        </li>
        <li data-option data-value="dea" class="bx--dropdown-item" title="Option 4">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-fr1491jxtdt-item3">Option 4</a>
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" class="bx--list-box__menu-item__selected-icon" width="16" height="16" viewBox="0 0 32 32"><path d="M13 24L4 15 5.414 13.586 13 21.171 26.586 7.586 28 9 13 24z"></path></svg>
        </li>
        <li data-option data-value="router" class="bx--dropdown-item" title="Option 5">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-fr1491jxtdt-item4">Option 5</a>
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" class="bx--list-box__menu-item__selected-icon" width="16" height="16" viewBox="0 0 32 32"><path d="M13 24L4 15 5.414 13.586 13 21.171 26.586 7.586 28 9 13 24z"></path></svg>
        </li>
        <li data-option data-value="loremipsum" class="bx--dropdown-item" title="An example option that is really long to show what should be done to handle long text">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-fr1491jxtdt-item5">An example option that is really long to show what should be done to handle long text</a>
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" class="bx--list-box__menu-item__selected-icon" width="16" height="16" viewBox="0 0 32 32"><path d="M13 24L4 15 5.414 13.586 13 21.171 26.586 7.586 28 9 13 24z"></path></svg>
        </li>
      </ul>
    </div>
  </div>
</div>
`}},
{
displayName:"light",
picture:{
src:"./pictures/dropdown/light.png",
width:600,
height:452},
snippet:{
html:`
<div class="bx--form-item">
  <div class="bx--dropdown__wrapper ">
    <span id="example-fr1491jxtdt-label" class="bx--label">Dropdown label</span>
    <div data-dropdown data-value
      class="bx--dropdown  bx--dropdown--light ">
      <button class="bx--dropdown-text" aria-haspopup="true" aria-expanded="false"
        aria-controls="example-fr1491jxtdt-menu"
        aria-labelledby="example-fr1491jxtdt-label example-fr1491jxtdt-value" type="button">
        <span class="bx--dropdown-text__inner" id="example-fr1491jxtdt-value"> Dropdown
          option </span>
        <span class="bx--dropdown__arrow-container">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--dropdown__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
        </span>
      </button>
      <ul class="bx--dropdown-list" id="example-fr1491jxtdt-menu" role="menu" tabindex="-1"
        id="example-fr1491jxtdt-menu" aria-hidden="true" aria-labelledby="example-fr1491jxtdt-label">
        <li data-option data-value="all" class="bx--dropdown-item" title="Option 1">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="true"
            id="example-fr1491jxtdt-item0">Option 1</a>
        </li>
        <li data-option data-value="cloudFoundry" class="bx--dropdown-item" title="Option 2">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-fr1491jxtdt-item1">Option 2</a>
        </li>
        <li data-option data-value="staging" class="bx--dropdown-item" title="Option 3">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-fr1491jxtdt-item2">Option 3</a>
        </li>
        <li data-option data-value="dea" class="bx--dropdown-item" title="Option 4">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-fr1491jxtdt-item3">Option 4</a>
        </li>
        <li data-option data-value="router" class="bx--dropdown-item" title="Option 5">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-fr1491jxtdt-item4">Option 5</a>
        </li>
        <li data-option data-value="loremipsum" class="bx--dropdown-item" title="An example option that is really long to show what should be done to handle long text">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-fr1491jxtdt-item5">An example option that is really long to show what should be done to handle long text</a>
        </li>
      </ul>
    </div>
    <div class="bx--form__helper-text">Optional helper text.</div>
  </div>
</div>

<div class="bx--form-item">
  <div class="bx--dropdown__wrapper ">
    <span id="example-syjaqx60sj-label" class="bx--label">Dropdown label</span>
    <div data-dropdown data-value
      class="bx--dropdown  bx--dropdown--light ">
      <button class="bx--dropdown-text" aria-haspopup="true" aria-expanded="false"
        aria-controls="example-syjaqx60sj-menu" aria-labelledby="example-syjaqx60sj-label example-syjaqx60sj-value"
        type="button">
        <span class="bx--dropdown-text__inner" id="example-syjaqx60sj-value"> Dropdown
          option </span>
        <span class="bx--dropdown__arrow-container">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--dropdown__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
        </span>
      </button>
      <ul class="bx--dropdown-list" role="menu" tabindex="-1" id="example-syjaqx60sj-menu"
        aria-hidden="true" aria-labelledby="example-syjaqx60sj-label">
        <li data-option data-value="all" class="bx--dropdown-item" title="Option 1">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="true"
            id="example-syjaqx60sj-item0">Option 1</a>
        </li>
        <li data-option data-value="cloudFoundry" class="bx--dropdown-item" title="Option 2">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-syjaqx60sj-item1">Option 2</a>
        </li>
        <li data-option data-value="staging" class="bx--dropdown-item" title="Option 3">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-syjaqx60sj-item2">Option 3</a>
        </li>
        <li data-option data-value="dea" class="bx--dropdown-item" title="Option 4">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-syjaqx60sj-item3">Option 4</a>
        </li>
        <li data-option data-value="router" class="bx--dropdown-item" title="Option 5">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-syjaqx60sj-item4">Option 5</a>
        </li>
        <li data-option data-value="loremipsum" class="bx--dropdown-item" title="An example option that is really long to show what should be done to handle long text">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-syjaqx60sj-item5">An example option that is really long to show what should be done to handle long text</a>
        </li>
      </ul>
    </div>
    <div class="bx--form__helper-text">Optional helper text here; if message is more than one line text
      should wrap (~100 character count maximum)</div>
  </div>
</div>

<div class="bx--form-item">
  <div class="bx--dropdown__wrapper ">
    <span id="example-yji4pyidrze-label" class="bx--label bx--label--disabled"
      aria-disabled="true">Dropdown label</span>
    <div data-dropdown data-value
      class="bx--dropdown bx--dropdown--light bx--dropdown--disabled">
      <button disabled class="bx--dropdown-text" aria-haspopup="true" aria-expanded="false"
        aria-controls="example-yji4pyidrze-menu"
        aria-labelledby="example-yji4pyidrze-label example-yji4pyidrze-value" type="button">
        <span class="bx--dropdown-text__inner" id="example-yji4pyidrze-value">
          Dropdown option </span>
        <span class="bx--dropdown__arrow-container">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--dropdown__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
        </span>
      </button>
      
      <ul class="bx--dropdown-list" id="example-yji4pyidrze-menu" role="menu"
        id="example-yji4pyidrze-menu" aria-hidden="true" aria-labelledby="example-yji4pyidrze-label">
        <li data-option data-value="all" class="bx--dropdown-item" title="Option 1">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="true"
            id="example-yji4pyidrze-item0">Option 1</a>
        </li>
        <li data-option data-value="cloudFoundry" class="bx--dropdown-item" title="Option 2">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-yji4pyidrze-item1">Option 2</a>
        </li>
        <li data-option data-value="staging" class="bx--dropdown-item" title="Option 3">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-yji4pyidrze-item2">Option 3</a>
        </li>
        <li data-option data-value="dea" class="bx--dropdown-item" title="Option 4">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-yji4pyidrze-item3">Option 4</a>
        </li>
        <li data-option data-value="router" class="bx--dropdown-item" title="Option 5">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-yji4pyidrze-item4">Option 5</a>
        </li>
        <li data-option data-value="loremipsum" class="bx--dropdown-item" title="An example option that is really long to show what should be done to handle long text">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-yji4pyidrze-item5">An example option that is really long to show what should be done to handle long text</a>
        </li>
      </ul>
    </div>
    <div class="bx--form__helper-text bx--form__helper-text--disabled" aria-disabled="true">
      Optional helper text
      here; if message is more than one line text
      should wrap (~100 character count maximum)</div>
  </div>
</div>

<div class="bx--form-item">
  <div
    class="bx--dropdown__wrapper ">
    <span id="example-k0xqctw3v0f-label" class="bx--label">Dropdown label</span>
    <div data-dropdown data-value
      class="bx--dropdown bx--dropdown--invalid  bx--dropdown--light"
      data-invalid>
      <button class="bx--dropdown-text" aria-haspopup="true" aria-expanded="false"
        aria-controls="example-k0xqctw3v0f-menu"
        aria-labelledby="example-k0xqctw3v0f-label example-k0xqctw3v0f-value" type="button">
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--dropdown__invalid-icon" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8,1C4.2,1,1,4.2,1,8s3.2,7,7,7s7-3.1,7-7S11.9,1,8,1z M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2	c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z"></path><path d="M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8	c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z" data-icon-path="inner-path" opacity="0"></path></svg>
        <span class="bx--dropdown-text__inner" id="example-k0xqctw3v0f-value"> Dropdown
          option </span>
        <span class="bx--dropdown__arrow-container">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--dropdown__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
        </span>
      </button>
      <ul class="bx--dropdown-list" id="example-k0xqctw3v0f-menu" role="menu" tabindex="-1"
        id="example-k0xqctw3v0f-menu" aria-hidden="true" aria-labelledby="example-k0xqctw3v0f-label">
        <li data-option data-value="all" class="bx--dropdown-item" title="Option 1">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="true"
            id="example-k0xqctw3v0f-item0">Option 1</a>
        </li>
        <li data-option data-value="cloudFoundry" class="bx--dropdown-item" title="Option 2">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-k0xqctw3v0f-item1">Option 2</a>
        </li>
        <li data-option data-value="staging" class="bx--dropdown-item" title="Option 3">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-k0xqctw3v0f-item2">Option 3</a>
        </li>
        <li data-option data-value="dea" class="bx--dropdown-item" title="Option 4">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-k0xqctw3v0f-item3">Option 4</a>
        </li>
        <li data-option data-value="router" class="bx--dropdown-item" title="Option 5">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-k0xqctw3v0f-item4">Option 5</a>
        </li>
        <li data-option data-value="loremipsum" class="bx--dropdown-item" title="An example option that is really long to show what should be done to handle long text">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-k0xqctw3v0f-item5">An example option that is really long to show what should be done to handle long text</a>
        </li>
      </ul>
    </div>
    <div class="bx--form-requirement">
      This is a validation message
    </div>
  </div>
</div>

<div class="bx--form-item">
  <div class="bx--dropdown__wrapper ">
    <span id="example-fr1491jxtdt-label" class="bx--label">Dropdown label</span>
    <div data-dropdown data-value
      class="bx--dropdown  bx--dropdown--show-selected  bx--dropdown--light ">
      <button class="bx--dropdown-text" aria-haspopup="true" aria-expanded="false"
        aria-controls="example-fr1491jxtdt-menu"
        aria-labelledby="example-fr1491jxtdt-label example-fr1491jxtdt-value" type="button">
        <span class="bx--dropdown-text__inner" id="example-fr1491jxtdt-value"> Dropdown
          option </span>
        <span class="bx--dropdown__arrow-container">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--dropdown__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
        </span>
      </button>
      <ul class="bx--dropdown-list" id="example-fr1491jxtdt-menu" role="menu" tabindex="-1"
        id="example-fr1491jxtdt-menu" aria-hidden="true" aria-labelledby="example-fr1491jxtdt-label">
        <li data-option data-value="all" class="bx--dropdown-item" title="Option 1">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="true"
            id="example-fr1491jxtdt-item0">Option 1</a>
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" class="bx--list-box__menu-item__selected-icon" width="16" height="16" viewBox="0 0 32 32"><path d="M13 24L4 15 5.414 13.586 13 21.171 26.586 7.586 28 9 13 24z"></path></svg>
        </li>
        <li data-option data-value="cloudFoundry" class="bx--dropdown-item" title="Option 2">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-fr1491jxtdt-item1">Option 2</a>
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" class="bx--list-box__menu-item__selected-icon" width="16" height="16" viewBox="0 0 32 32"><path d="M13 24L4 15 5.414 13.586 13 21.171 26.586 7.586 28 9 13 24z"></path></svg>
        </li>
        <li data-option data-value="staging" class="bx--dropdown-item" title="Option 3">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-fr1491jxtdt-item2">Option 3</a>
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" class="bx--list-box__menu-item__selected-icon" width="16" height="16" viewBox="0 0 32 32"><path d="M13 24L4 15 5.414 13.586 13 21.171 26.586 7.586 28 9 13 24z"></path></svg>
        </li>
        <li data-option data-value="dea" class="bx--dropdown-item" title="Option 4">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-fr1491jxtdt-item3">Option 4</a>
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" class="bx--list-box__menu-item__selected-icon" width="16" height="16" viewBox="0 0 32 32"><path d="M13 24L4 15 5.414 13.586 13 21.171 26.586 7.586 28 9 13 24z"></path></svg>
        </li>
        <li data-option data-value="router" class="bx--dropdown-item" title="Option 5">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-fr1491jxtdt-item4">Option 5</a>
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" class="bx--list-box__menu-item__selected-icon" width="16" height="16" viewBox="0 0 32 32"><path d="M13 24L4 15 5.414 13.586 13 21.171 26.586 7.586 28 9 13 24z"></path></svg>
        </li>
        <li data-option data-value="loremipsum" class="bx--dropdown-item" title="An example option that is really long to show what should be done to handle long text">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-fr1491jxtdt-item5">An example option that is really long to show what should be done to handle long text</a>
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" class="bx--list-box__menu-item__selected-icon" width="16" height="16" viewBox="0 0 32 32"><path d="M13 24L4 15 5.414 13.586 13 21.171 26.586 7.586 28 9 13 24z"></path></svg>
        </li>
      </ul>
    </div>
    <div class="bx--form__helper-text">Optional helper text.</div>
  </div>
</div>
`}},
{
displayName:"up",
picture:{
src:"./pictures/dropdown/up.png",
width:600,
height:452},
snippet:{
html:`
<div class="bx--form-item">
  <div class="bx--dropdown__wrapper ">
    <span id="example-fr1491jxtdt-label" class="bx--label">Dropdown label</span>
    <div data-dropdown data-value
      class="bx--dropdown bx--dropdown--up  ">
      <button class="bx--dropdown-text" aria-haspopup="true" aria-expanded="false"
        aria-controls="example-fr1491jxtdt-menu"
        aria-labelledby="example-fr1491jxtdt-label example-fr1491jxtdt-value" type="button">
        <span class="bx--dropdown-text__inner" id="example-fr1491jxtdt-value"> Dropdown
          option </span>
        <span class="bx--dropdown__arrow-container">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--dropdown__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
        </span>
      </button>
      <ul class="bx--dropdown-list" id="example-fr1491jxtdt-menu" role="menu" tabindex="-1"
        id="example-fr1491jxtdt-menu" aria-hidden="true" aria-labelledby="example-fr1491jxtdt-label">
        <li data-option data-value="all" class="bx--dropdown-item" title="Option 1">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="true"
            id="example-fr1491jxtdt-item0">Option 1</a>
        </li>
        <li data-option data-value="cloudFoundry" class="bx--dropdown-item" title="Option 2">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-fr1491jxtdt-item1">Option 2</a>
        </li>
        <li data-option data-value="staging" class="bx--dropdown-item" title="Option 3">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-fr1491jxtdt-item2">Option 3</a>
        </li>
        <li data-option data-value="dea" class="bx--dropdown-item" title="Option 4">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-fr1491jxtdt-item3">Option 4</a>
        </li>
        <li data-option data-value="router" class="bx--dropdown-item" title="Option 5">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-fr1491jxtdt-item4">Option 5</a>
        </li>
        <li data-option data-value="loremipsum" class="bx--dropdown-item" title="An example option that is really long to show what should be done to handle long text">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-fr1491jxtdt-item5">An example option that is really long to show what should be done to handle long text</a>
        </li>
      </ul>
    </div>
    <div class="bx--form__helper-text">Optional helper text.</div>
  </div>
</div>

<div class="bx--form-item">
  <div class="bx--dropdown__wrapper ">
    <span id="example-syjaqx60sj-label" class="bx--label">Dropdown label</span>
    <div data-dropdown data-value
      class="bx--dropdown bx--dropdown--up  ">
      <button class="bx--dropdown-text" aria-haspopup="true" aria-expanded="false"
        aria-controls="example-syjaqx60sj-menu" aria-labelledby="example-syjaqx60sj-label example-syjaqx60sj-value"
        type="button">
        <span class="bx--dropdown-text__inner" id="example-syjaqx60sj-value"> Dropdown
          option </span>
        <span class="bx--dropdown__arrow-container">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--dropdown__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
        </span>
      </button>
      <ul class="bx--dropdown-list" role="menu" tabindex="-1" id="example-syjaqx60sj-menu"
        aria-hidden="true" aria-labelledby="example-syjaqx60sj-label">
        <li data-option data-value="all" class="bx--dropdown-item" title="Option 1">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="true"
            id="example-syjaqx60sj-item0">Option 1</a>
        </li>
        <li data-option data-value="cloudFoundry" class="bx--dropdown-item" title="Option 2">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-syjaqx60sj-item1">Option 2</a>
        </li>
        <li data-option data-value="staging" class="bx--dropdown-item" title="Option 3">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-syjaqx60sj-item2">Option 3</a>
        </li>
        <li data-option data-value="dea" class="bx--dropdown-item" title="Option 4">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-syjaqx60sj-item3">Option 4</a>
        </li>
        <li data-option data-value="router" class="bx--dropdown-item" title="Option 5">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-syjaqx60sj-item4">Option 5</a>
        </li>
        <li data-option data-value="loremipsum" class="bx--dropdown-item" title="An example option that is really long to show what should be done to handle long text">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-syjaqx60sj-item5">An example option that is really long to show what should be done to handle long text</a>
        </li>
      </ul>
    </div>
    <div class="bx--form__helper-text">Optional helper text here; if message is more than one line text
      should wrap (~100 character count maximum)</div>
  </div>
</div>

<div class="bx--form-item">
  <div class="bx--dropdown__wrapper ">
    <span id="example-yji4pyidrze-label" class="bx--label bx--label--disabled"
      aria-disabled="true">Dropdown label</span>
    <div data-dropdown data-value
      class="bx--dropdown bx--dropdown--up bx--dropdown--disabled">
      <button disabled class="bx--dropdown-text" aria-haspopup="true" aria-expanded="false"
        aria-controls="example-yji4pyidrze-menu"
        aria-labelledby="example-yji4pyidrze-label example-yji4pyidrze-value" type="button">
        <span class="bx--dropdown-text__inner" id="example-yji4pyidrze-value">
          Dropdown option </span>
        <span class="bx--dropdown__arrow-container">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--dropdown__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
        </span>
      </button>
      
      <ul class="bx--dropdown-list" id="example-yji4pyidrze-menu" role="menu"
        id="example-yji4pyidrze-menu" aria-hidden="true" aria-labelledby="example-yji4pyidrze-label">
        <li data-option data-value="all" class="bx--dropdown-item" title="Option 1">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="true"
            id="example-yji4pyidrze-item0">Option 1</a>
        </li>
        <li data-option data-value="cloudFoundry" class="bx--dropdown-item" title="Option 2">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-yji4pyidrze-item1">Option 2</a>
        </li>
        <li data-option data-value="staging" class="bx--dropdown-item" title="Option 3">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-yji4pyidrze-item2">Option 3</a>
        </li>
        <li data-option data-value="dea" class="bx--dropdown-item" title="Option 4">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-yji4pyidrze-item3">Option 4</a>
        </li>
        <li data-option data-value="router" class="bx--dropdown-item" title="Option 5">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-yji4pyidrze-item4">Option 5</a>
        </li>
        <li data-option data-value="loremipsum" class="bx--dropdown-item" title="An example option that is really long to show what should be done to handle long text">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-yji4pyidrze-item5">An example option that is really long to show what should be done to handle long text</a>
        </li>
      </ul>
    </div>
    <div class="bx--form__helper-text bx--form__helper-text--disabled" aria-disabled="true">
      Optional helper text
      here; if message is more than one line text
      should wrap (~100 character count maximum)</div>
  </div>
</div>

<div class="bx--form-item">
  <div
    class="bx--dropdown__wrapper ">
    <span id="example-k0xqctw3v0f-label" class="bx--label">Dropdown label</span>
    <div data-dropdown data-value
      class="bx--dropdown bx--dropdown--invalid bx--dropdown--up "
      data-invalid>
      <button class="bx--dropdown-text" aria-haspopup="true" aria-expanded="false"
        aria-controls="example-k0xqctw3v0f-menu"
        aria-labelledby="example-k0xqctw3v0f-label example-k0xqctw3v0f-value" type="button">
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--dropdown__invalid-icon" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8,1C4.2,1,1,4.2,1,8s3.2,7,7,7s7-3.1,7-7S11.9,1,8,1z M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2	c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z"></path><path d="M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8	c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z" data-icon-path="inner-path" opacity="0"></path></svg>
        <span class="bx--dropdown-text__inner" id="example-k0xqctw3v0f-value"> Dropdown
          option </span>
        <span class="bx--dropdown__arrow-container">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--dropdown__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
        </span>
      </button>
      <ul class="bx--dropdown-list" id="example-k0xqctw3v0f-menu" role="menu" tabindex="-1"
        id="example-k0xqctw3v0f-menu" aria-hidden="true" aria-labelledby="example-k0xqctw3v0f-label">
        <li data-option data-value="all" class="bx--dropdown-item" title="Option 1">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="true"
            id="example-k0xqctw3v0f-item0">Option 1</a>
        </li>
        <li data-option data-value="cloudFoundry" class="bx--dropdown-item" title="Option 2">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-k0xqctw3v0f-item1">Option 2</a>
        </li>
        <li data-option data-value="staging" class="bx--dropdown-item" title="Option 3">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-k0xqctw3v0f-item2">Option 3</a>
        </li>
        <li data-option data-value="dea" class="bx--dropdown-item" title="Option 4">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-k0xqctw3v0f-item3">Option 4</a>
        </li>
        <li data-option data-value="router" class="bx--dropdown-item" title="Option 5">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-k0xqctw3v0f-item4">Option 5</a>
        </li>
        <li data-option data-value="loremipsum" class="bx--dropdown-item" title="An example option that is really long to show what should be done to handle long text">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-k0xqctw3v0f-item5">An example option that is really long to show what should be done to handle long text</a>
        </li>
      </ul>
    </div>
    <div class="bx--form-requirement">
      This is a validation message
    </div>
  </div>
</div>

<div class="bx--form-item">
  <div class="bx--dropdown__wrapper ">
    <span id="example-fr1491jxtdt-label" class="bx--label">Dropdown label</span>
    <div data-dropdown data-value
      class="bx--dropdown  bx--dropdown--show-selected bx--dropdown--up  ">
      <button class="bx--dropdown-text" aria-haspopup="true" aria-expanded="false"
        aria-controls="example-fr1491jxtdt-menu"
        aria-labelledby="example-fr1491jxtdt-label example-fr1491jxtdt-value" type="button">
        <span class="bx--dropdown-text__inner" id="example-fr1491jxtdt-value"> Dropdown
          option </span>
        <span class="bx--dropdown__arrow-container">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--dropdown__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
        </span>
      </button>
      <ul class="bx--dropdown-list" id="example-fr1491jxtdt-menu" role="menu" tabindex="-1"
        id="example-fr1491jxtdt-menu" aria-hidden="true" aria-labelledby="example-fr1491jxtdt-label">
        <li data-option data-value="all" class="bx--dropdown-item" title="Option 1">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="true"
            id="example-fr1491jxtdt-item0">Option 1</a>
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" class="bx--list-box__menu-item__selected-icon" width="16" height="16" viewBox="0 0 32 32"><path d="M13 24L4 15 5.414 13.586 13 21.171 26.586 7.586 28 9 13 24z"></path></svg>
        </li>
        <li data-option data-value="cloudFoundry" class="bx--dropdown-item" title="Option 2">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-fr1491jxtdt-item1">Option 2</a>
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" class="bx--list-box__menu-item__selected-icon" width="16" height="16" viewBox="0 0 32 32"><path d="M13 24L4 15 5.414 13.586 13 21.171 26.586 7.586 28 9 13 24z"></path></svg>
        </li>
        <li data-option data-value="staging" class="bx--dropdown-item" title="Option 3">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-fr1491jxtdt-item2">Option 3</a>
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" class="bx--list-box__menu-item__selected-icon" width="16" height="16" viewBox="0 0 32 32"><path d="M13 24L4 15 5.414 13.586 13 21.171 26.586 7.586 28 9 13 24z"></path></svg>
        </li>
        <li data-option data-value="dea" class="bx--dropdown-item" title="Option 4">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-fr1491jxtdt-item3">Option 4</a>
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" class="bx--list-box__menu-item__selected-icon" width="16" height="16" viewBox="0 0 32 32"><path d="M13 24L4 15 5.414 13.586 13 21.171 26.586 7.586 28 9 13 24z"></path></svg>
        </li>
        <li data-option data-value="router" class="bx--dropdown-item" title="Option 5">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-fr1491jxtdt-item4">Option 5</a>
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" class="bx--list-box__menu-item__selected-icon" width="16" height="16" viewBox="0 0 32 32"><path d="M13 24L4 15 5.414 13.586 13 21.171 26.586 7.586 28 9 13 24z"></path></svg>
        </li>
        <li data-option data-value="loremipsum" class="bx--dropdown-item" title="An example option that is really long to show what should be done to handle long text">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-fr1491jxtdt-item5">An example option that is really long to show what should be done to handle long text</a>
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" class="bx--list-box__menu-item__selected-icon" width="16" height="16" viewBox="0 0 32 32"><path d="M13 24L4 15 5.414 13.586 13 21.171 26.586 7.586 28 9 13 24z"></path></svg>
        </li>
      </ul>
    </div>
    <div class="bx--form__helper-text">Optional helper text.</div>
  </div>
</div>
`}},
{
displayName:"up-light",
picture:{
src:"./pictures/dropdown/up-light.png",
width:600,
height:452},
snippet:{
html:`
<div class="bx--form-item">
  <div class="bx--dropdown__wrapper ">
    <span id="example-fr1491jxtdt-label" class="bx--label">Dropdown label</span>
    <div data-dropdown data-value
      class="bx--dropdown bx--dropdown--up bx--dropdown--light ">
      <button class="bx--dropdown-text" aria-haspopup="true" aria-expanded="false"
        aria-controls="example-fr1491jxtdt-menu"
        aria-labelledby="example-fr1491jxtdt-label example-fr1491jxtdt-value" type="button">
        <span class="bx--dropdown-text__inner" id="example-fr1491jxtdt-value"> Dropdown
          option </span>
        <span class="bx--dropdown__arrow-container">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--dropdown__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
        </span>
      </button>
      <ul class="bx--dropdown-list" id="example-fr1491jxtdt-menu" role="menu" tabindex="-1"
        id="example-fr1491jxtdt-menu" aria-hidden="true" aria-labelledby="example-fr1491jxtdt-label">
        <li data-option data-value="all" class="bx--dropdown-item" title="Option 1">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="true"
            id="example-fr1491jxtdt-item0">Option 1</a>
        </li>
        <li data-option data-value="cloudFoundry" class="bx--dropdown-item" title="Option 2">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-fr1491jxtdt-item1">Option 2</a>
        </li>
        <li data-option data-value="staging" class="bx--dropdown-item" title="Option 3">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-fr1491jxtdt-item2">Option 3</a>
        </li>
        <li data-option data-value="dea" class="bx--dropdown-item" title="Option 4">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-fr1491jxtdt-item3">Option 4</a>
        </li>
        <li data-option data-value="router" class="bx--dropdown-item" title="Option 5">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-fr1491jxtdt-item4">Option 5</a>
        </li>
        <li data-option data-value="loremipsum" class="bx--dropdown-item" title="An example option that is really long to show what should be done to handle long text">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-fr1491jxtdt-item5">An example option that is really long to show what should be done to handle long text</a>
        </li>
      </ul>
    </div>
    <div class="bx--form__helper-text">Optional helper text.</div>
  </div>
</div>

<div class="bx--form-item">
  <div class="bx--dropdown__wrapper ">
    <span id="example-syjaqx60sj-label" class="bx--label">Dropdown label</span>
    <div data-dropdown data-value
      class="bx--dropdown bx--dropdown--up bx--dropdown--light ">
      <button class="bx--dropdown-text" aria-haspopup="true" aria-expanded="false"
        aria-controls="example-syjaqx60sj-menu" aria-labelledby="example-syjaqx60sj-label example-syjaqx60sj-value"
        type="button">
        <span class="bx--dropdown-text__inner" id="example-syjaqx60sj-value"> Dropdown
          option </span>
        <span class="bx--dropdown__arrow-container">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--dropdown__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
        </span>
      </button>
      <ul class="bx--dropdown-list" role="menu" tabindex="-1" id="example-syjaqx60sj-menu"
        aria-hidden="true" aria-labelledby="example-syjaqx60sj-label">
        <li data-option data-value="all" class="bx--dropdown-item" title="Option 1">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="true"
            id="example-syjaqx60sj-item0">Option 1</a>
        </li>
        <li data-option data-value="cloudFoundry" class="bx--dropdown-item" title="Option 2">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-syjaqx60sj-item1">Option 2</a>
        </li>
        <li data-option data-value="staging" class="bx--dropdown-item" title="Option 3">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-syjaqx60sj-item2">Option 3</a>
        </li>
        <li data-option data-value="dea" class="bx--dropdown-item" title="Option 4">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-syjaqx60sj-item3">Option 4</a>
        </li>
        <li data-option data-value="router" class="bx--dropdown-item" title="Option 5">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-syjaqx60sj-item4">Option 5</a>
        </li>
        <li data-option data-value="loremipsum" class="bx--dropdown-item" title="An example option that is really long to show what should be done to handle long text">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-syjaqx60sj-item5">An example option that is really long to show what should be done to handle long text</a>
        </li>
      </ul>
    </div>
    <div class="bx--form__helper-text">Optional helper text here; if message is more than one line text
      should wrap (~100 character count maximum)</div>
  </div>
</div>

<div class="bx--form-item">
  <div class="bx--dropdown__wrapper ">
    <span id="example-yji4pyidrze-label" class="bx--label bx--label--disabled"
      aria-disabled="true">Dropdown label</span>
    <div data-dropdown data-value
      class="bx--dropdown bx--dropdown--up bx--dropdown--light bx--dropdown--disabled">
      <button disabled class="bx--dropdown-text" aria-haspopup="true" aria-expanded="false"
        aria-controls="example-yji4pyidrze-menu"
        aria-labelledby="example-yji4pyidrze-label example-yji4pyidrze-value" type="button">
        <span class="bx--dropdown-text__inner" id="example-yji4pyidrze-value">
          Dropdown option </span>
        <span class="bx--dropdown__arrow-container">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--dropdown__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
        </span>
      </button>
      
      <ul class="bx--dropdown-list" id="example-yji4pyidrze-menu" role="menu"
        id="example-yji4pyidrze-menu" aria-hidden="true" aria-labelledby="example-yji4pyidrze-label">
        <li data-option data-value="all" class="bx--dropdown-item" title="Option 1">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="true"
            id="example-yji4pyidrze-item0">Option 1</a>
        </li>
        <li data-option data-value="cloudFoundry" class="bx--dropdown-item" title="Option 2">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-yji4pyidrze-item1">Option 2</a>
        </li>
        <li data-option data-value="staging" class="bx--dropdown-item" title="Option 3">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-yji4pyidrze-item2">Option 3</a>
        </li>
        <li data-option data-value="dea" class="bx--dropdown-item" title="Option 4">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-yji4pyidrze-item3">Option 4</a>
        </li>
        <li data-option data-value="router" class="bx--dropdown-item" title="Option 5">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-yji4pyidrze-item4">Option 5</a>
        </li>
        <li data-option data-value="loremipsum" class="bx--dropdown-item" title="An example option that is really long to show what should be done to handle long text">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-yji4pyidrze-item5">An example option that is really long to show what should be done to handle long text</a>
        </li>
      </ul>
    </div>
    <div class="bx--form__helper-text bx--form__helper-text--disabled" aria-disabled="true">
      Optional helper text
      here; if message is more than one line text
      should wrap (~100 character count maximum)</div>
  </div>
</div>

<div class="bx--form-item">
  <div
    class="bx--dropdown__wrapper ">
    <span id="example-k0xqctw3v0f-label" class="bx--label">Dropdown label</span>
    <div data-dropdown data-value
      class="bx--dropdown bx--dropdown--invalid bx--dropdown--up bx--dropdown--light"
      data-invalid>
      <button class="bx--dropdown-text" aria-haspopup="true" aria-expanded="false"
        aria-controls="example-k0xqctw3v0f-menu"
        aria-labelledby="example-k0xqctw3v0f-label example-k0xqctw3v0f-value" type="button">
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--dropdown__invalid-icon" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8,1C4.2,1,1,4.2,1,8s3.2,7,7,7s7-3.1,7-7S11.9,1,8,1z M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2	c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z"></path><path d="M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8	c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z" data-icon-path="inner-path" opacity="0"></path></svg>
        <span class="bx--dropdown-text__inner" id="example-k0xqctw3v0f-value"> Dropdown
          option </span>
        <span class="bx--dropdown__arrow-container">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--dropdown__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
        </span>
      </button>
      <ul class="bx--dropdown-list" id="example-k0xqctw3v0f-menu" role="menu" tabindex="-1"
        id="example-k0xqctw3v0f-menu" aria-hidden="true" aria-labelledby="example-k0xqctw3v0f-label">
        <li data-option data-value="all" class="bx--dropdown-item" title="Option 1">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="true"
            id="example-k0xqctw3v0f-item0">Option 1</a>
        </li>
        <li data-option data-value="cloudFoundry" class="bx--dropdown-item" title="Option 2">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-k0xqctw3v0f-item1">Option 2</a>
        </li>
        <li data-option data-value="staging" class="bx--dropdown-item" title="Option 3">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-k0xqctw3v0f-item2">Option 3</a>
        </li>
        <li data-option data-value="dea" class="bx--dropdown-item" title="Option 4">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-k0xqctw3v0f-item3">Option 4</a>
        </li>
        <li data-option data-value="router" class="bx--dropdown-item" title="Option 5">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-k0xqctw3v0f-item4">Option 5</a>
        </li>
        <li data-option data-value="loremipsum" class="bx--dropdown-item" title="An example option that is really long to show what should be done to handle long text">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-k0xqctw3v0f-item5">An example option that is really long to show what should be done to handle long text</a>
        </li>
      </ul>
    </div>
    <div class="bx--form-requirement">
      This is a validation message
    </div>
  </div>
</div>

<div class="bx--form-item">
  <div class="bx--dropdown__wrapper ">
    <span id="example-fr1491jxtdt-label" class="bx--label">Dropdown label</span>
    <div data-dropdown data-value
      class="bx--dropdown  bx--dropdown--show-selected bx--dropdown--up bx--dropdown--light ">
      <button class="bx--dropdown-text" aria-haspopup="true" aria-expanded="false"
        aria-controls="example-fr1491jxtdt-menu"
        aria-labelledby="example-fr1491jxtdt-label example-fr1491jxtdt-value" type="button">
        <span class="bx--dropdown-text__inner" id="example-fr1491jxtdt-value"> Dropdown
          option </span>
        <span class="bx--dropdown__arrow-container">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--dropdown__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
        </span>
      </button>
      <ul class="bx--dropdown-list" id="example-fr1491jxtdt-menu" role="menu" tabindex="-1"
        id="example-fr1491jxtdt-menu" aria-hidden="true" aria-labelledby="example-fr1491jxtdt-label">
        <li data-option data-value="all" class="bx--dropdown-item" title="Option 1">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="true"
            id="example-fr1491jxtdt-item0">Option 1</a>
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" class="bx--list-box__menu-item__selected-icon" width="16" height="16" viewBox="0 0 32 32"><path d="M13 24L4 15 5.414 13.586 13 21.171 26.586 7.586 28 9 13 24z"></path></svg>
        </li>
        <li data-option data-value="cloudFoundry" class="bx--dropdown-item" title="Option 2">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-fr1491jxtdt-item1">Option 2</a>
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" class="bx--list-box__menu-item__selected-icon" width="16" height="16" viewBox="0 0 32 32"><path d="M13 24L4 15 5.414 13.586 13 21.171 26.586 7.586 28 9 13 24z"></path></svg>
        </li>
        <li data-option data-value="staging" class="bx--dropdown-item" title="Option 3">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-fr1491jxtdt-item2">Option 3</a>
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" class="bx--list-box__menu-item__selected-icon" width="16" height="16" viewBox="0 0 32 32"><path d="M13 24L4 15 5.414 13.586 13 21.171 26.586 7.586 28 9 13 24z"></path></svg>
        </li>
        <li data-option data-value="dea" class="bx--dropdown-item" title="Option 4">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-fr1491jxtdt-item3">Option 4</a>
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" class="bx--list-box__menu-item__selected-icon" width="16" height="16" viewBox="0 0 32 32"><path d="M13 24L4 15 5.414 13.586 13 21.171 26.586 7.586 28 9 13 24z"></path></svg>
        </li>
        <li data-option data-value="router" class="bx--dropdown-item" title="Option 5">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-fr1491jxtdt-item4">Option 5</a>
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" class="bx--list-box__menu-item__selected-icon" width="16" height="16" viewBox="0 0 32 32"><path d="M13 24L4 15 5.414 13.586 13 21.171 26.586 7.586 28 9 13 24z"></path></svg>
        </li>
        <li data-option data-value="loremipsum" class="bx--dropdown-item" title="An example option that is really long to show what should be done to handle long text">
          <a class="bx--dropdown-link" href="javascript:void(0)" tabindex="-1" role="menuitemradio"
            aria-checked="false"
            id="example-fr1491jxtdt-item5">An example option that is really long to show what should be done to handle long text</a>
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" class="bx--list-box__menu-item__selected-icon" width="16" height="16" viewBox="0 0 32 32"><path d="M13 24L4 15 5.414 13.586 13 21.171 26.586 7.586 28 9 13 24z"></path></svg>
        </li>
      </ul>
    </div>
    <div class="bx--form__helper-text">Optional helper text.</div>
  </div>
</div>
`}}
]