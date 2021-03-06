export default {
    displayName: "overflow-menu",
    name: "overflow-menu",
    homepage: "https://www.carbondesignsystem.com/components/overflow-menu"
}

export const variants = [
{
displayName:"overflow-menu",
picture:{
src:"./pictures/overflow-menu/overflow-menu.png",
width:40,
height:120},
snippet:{
html:`
<div data-overflow-menu class="bx--overflow-menu">
  <button
    class="bx--overflow-menu__trigger bx--tooltip__trigger bx--tooltip--a11y bx--tooltip--right bx--tooltip--align-start"
    aria-haspopup="true" aria-expanded="false" id="example-4kuvba62d9u-trigger" aria-controls="example-4kuvba62d9u">
    <span class="bx--assistive-text">Overflow</span>
    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--overflow-menu__icon" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="8" r="2"></circle><circle cx="16" cy="16" r="2"></circle><circle cx="16" cy="24" r="2"></circle></svg>
  </button>
  <div class="bx--overflow-menu-options" tabindex="-1" role="menu"
    aria-labelledby="example-4kuvba62d9u-trigger" data-floating-menu-direction="bottom"
    id="example-4kuvba62d9u">
    <ul  class="bx--overflow-menu-options__content">
      <li
        class="bx--overflow-menu-options__option  ">
        <button class="bx--overflow-menu-options__btn" role="menuitem"  title="An example option that is really long to show what should be done to handle long text"
            data-floating-menu-primary-focus  >
          <span class="bx--overflow-menu-options__option-content">
            An example option that is really long to show what should be done to handle long text
          </span>
        </button>
      </li>
      <li
        class="bx--overflow-menu-options__option  ">
        <button class="bx--overflow-menu-options__btn" role="menuitem"   >
          <span class="bx--overflow-menu-options__option-content">
            Option 2
          </span>
        </button>
      </li>
      <li
        class="bx--overflow-menu-options__option  ">
        <button class="bx--overflow-menu-options__btn" role="menuitem"   >
          <span class="bx--overflow-menu-options__option-content">
            Option 3
          </span>
        </button>
      </li>
      <li
        class="bx--overflow-menu-options__option  ">
        <button class="bx--overflow-menu-options__btn" role="menuitem"   >
          <span class="bx--overflow-menu-options__option-content">
            Option 4
          </span>
        </button>
      </li>
      <li
        class="bx--overflow-menu-options__option  bx--overflow-menu-options__option--disabled  ">
        <button class="bx--overflow-menu-options__btn" role="menuitem"    disabled >
          <span class="bx--overflow-menu-options__option-content">
            Disabled
          </span>
        </button>
      </li>
      <li
        class="bx--overflow-menu-options__option   bx--overflow-menu-options__option--danger ">
        <button class="bx--overflow-menu-options__btn" role="menuitem"   >
          <span class="bx--overflow-menu-options__option-content">
            Danger option
          </span>
        </button>
      </li>
    </ul>
    
    <span tabindex="0"></span>
  </div>
</div>

<div data-overflow-menu class="bx--overflow-menu">
  <button
    class="bx--overflow-menu__trigger bx--tooltip__trigger bx--tooltip--a11y bx--tooltip--left bx--tooltip--align-start"
    aria-haspopup="true" aria-expanded="false" id="example-oc01unrxiba-trigger" aria-controls="example-oc01unrxiba">
    <span class="bx--assistive-text">Overflow</span>
    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--overflow-menu__icon" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="8" r="2"></circle><circle cx="16" cy="16" r="2"></circle><circle cx="16" cy="24" r="2"></circle></svg>
  </button>
  <div class="bx--overflow-menu-options bx--overflow-menu--flip" tabindex="-1"
    data-floating-menu-direction="bottom" role="menu" aria-labelledby="example-oc01unrxiba-trigger"
    id="example-oc01unrxiba">
    <ul  class="bx--overflow-menu-options__content">
      <li
        class="bx--overflow-menu-options__option  ">
        <button class="bx--overflow-menu-options__btn" role="menuitem"  title="An example option that is really long to show what should be done to handle long text"
            data-floating-menu-primary-focus  >
          <span class="bx--overflow-menu-options__option-content">
            An example option that is really long to show what should be done to handle long text
          </span>
        </button>
      </li>
      <li
        class="bx--overflow-menu-options__option  ">
        <button class="bx--overflow-menu-options__btn" role="menuitem"   >
          <span class="bx--overflow-menu-options__option-content">
            Option 2
          </span>
        </button>
      </li>
      <li
        class="bx--overflow-menu-options__option  ">
        <button class="bx--overflow-menu-options__btn" role="menuitem"   >
          <span class="bx--overflow-menu-options__option-content">
            Option 3
          </span>
        </button>
      </li>
      <li
        class="bx--overflow-menu-options__option  ">
        <button class="bx--overflow-menu-options__btn" role="menuitem"   >
          <span class="bx--overflow-menu-options__option-content">
            Option 4
          </span>
        </button>
      </li>
      <li
        class="bx--overflow-menu-options__option  bx--overflow-menu-options__option--disabled  ">
        <button class="bx--overflow-menu-options__btn" role="menuitem"    disabled >
          <span class="bx--overflow-menu-options__option-content">
            Disabled
          </span>
        </button>
      </li>
      <li
        class="bx--overflow-menu-options__option   bx--overflow-menu-options__option--danger ">
        <button class="bx--overflow-menu-options__btn" role="menuitem"   >
          <span class="bx--overflow-menu-options__option-content">
            Danger option
          </span>
        </button>
      </li>
    </ul>
    <span tabindex="0"></span>
  </div>
</div>

<div data-overflow-menu class="bx--overflow-menu">
  <button
    class="bx--overflow-menu__trigger bx--tooltip__trigger bx--tooltip--a11y bx--tooltip--left bx--tooltip--align-start"
    aria-haspopup="true" aria-expanded="false" id="example-7rrgolkr1c4-trigger" aria-controls="example-7rrgolkr1c4">
    <span class="bx--assistive-text">Overflow</span>
    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--overflow-menu__icon" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="8" r="2"></circle><circle cx="16" cy="16" r="2"></circle><circle cx="16" cy="24" r="2"></circle></svg>
  </button>
  <div class="bx--overflow-menu-options bx--overflow-menu--flip" tabindex="-1"
    data-floating-menu-direction="bottom" role="menu" aria-labelledby="example-7rrgolkr1c4-trigger"
    id="example-7rrgolkr1c4">
    <ul  class="bx--overflow-menu-options__content">
      <li
        class="bx--overflow-menu-options__option">
        <a href="https://www.ibm.com" class="bx--overflow-menu-options__btn" role="menuitem" 
          title="An example option that is really long to show what should be done to handle long text"   data-floating-menu-primary-focus>
          <span class="bx--overflow-menu-options__option-content">
            An example option that is really long to show what should be done to handle long text
          </span>
        </a>
      </li>
      <li
        class="bx--overflow-menu-options__option">
        <a href="https://www.ibm.com" class="bx--overflow-menu-options__btn" role="menuitem"  >
          <span class="bx--overflow-menu-options__option-content">
            Option 2
          </span>
        </a>
      </li>
      <li
        class="bx--overflow-menu-options__option">
        <a href="https://www.ibm.com" class="bx--overflow-menu-options__btn" role="menuitem"  >
          <span class="bx--overflow-menu-options__option-content">
            Option 3
          </span>
        </a>
      </li>
      <li
        class="bx--overflow-menu-options__option">
        <a href="https://www.ibm.com" class="bx--overflow-menu-options__btn" role="menuitem"  >
          <span class="bx--overflow-menu-options__option-content">
            Option 4
          </span>
        </a>
      </li>
      <li
        class="bx--overflow-menu-options__option bx--overflow-menu-options__option--disabled">
        <a href="https://www.ibm.com" class="bx--overflow-menu-options__btn" role="menuitem"  
          tabindex="-1" aria-disabled="true" >
          <span class="bx--overflow-menu-options__option-content">
            Disabled
          </span>
        </a>
      </li>
      <li
        class="bx--overflow-menu-options__option bx--overflow-menu-options__option--danger">
        <a href="https://www.ibm.com" class="bx--overflow-menu-options__btn" role="menuitem"  >
          <span class="bx--overflow-menu-options__option-content">
            Danger option
          </span>
        </a>
      </li>
    </ul>
    <span tabindex="0"></span>
  </div>
</div>
`}},
{
displayName:"up",
picture:{
src:"./pictures/overflow-menu/up.png",
width:40,
height:120},
snippet:{
html:`
<div data-overflow-menu class="bx--overflow-menu">
  <button
    class="bx--overflow-menu__trigger bx--tooltip__trigger bx--tooltip--a11y bx--tooltip--right bx--tooltip--align-start"
    aria-haspopup="true" aria-expanded="false" id="example-4kuvba62d9u-trigger" aria-controls="example-4kuvba62d9u">
    <span class="bx--assistive-text">Overflow</span>
    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--overflow-menu__icon" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="8" r="2"></circle><circle cx="16" cy="16" r="2"></circle><circle cx="16" cy="24" r="2"></circle></svg>
  </button>
  <div class="bx--overflow-menu-options" tabindex="-1" role="menu"
    aria-labelledby="example-4kuvba62d9u-trigger" data-floating-menu-direction="top"
    id="example-4kuvba62d9u">
    <ul  class="bx--overflow-menu-options__content">
      <li
        class="bx--overflow-menu-options__option  ">
        <button class="bx--overflow-menu-options__btn" role="menuitem"  title="An example option that is really long to show what should be done to handle long text"
            data-floating-menu-primary-focus  >
          <span class="bx--overflow-menu-options__option-content">
            An example option that is really long to show what should be done to handle long text
          </span>
        </button>
      </li>
      <li
        class="bx--overflow-menu-options__option  ">
        <button class="bx--overflow-menu-options__btn" role="menuitem"   >
          <span class="bx--overflow-menu-options__option-content">
            Option 2
          </span>
        </button>
      </li>
      <li
        class="bx--overflow-menu-options__option  ">
        <button class="bx--overflow-menu-options__btn" role="menuitem"   >
          <span class="bx--overflow-menu-options__option-content">
            Option 3
          </span>
        </button>
      </li>
      <li
        class="bx--overflow-menu-options__option  ">
        <button class="bx--overflow-menu-options__btn" role="menuitem"   >
          <span class="bx--overflow-menu-options__option-content">
            Option 4
          </span>
        </button>
      </li>
      <li
        class="bx--overflow-menu-options__option  bx--overflow-menu-options__option--disabled  ">
        <button class="bx--overflow-menu-options__btn" role="menuitem"    disabled >
          <span class="bx--overflow-menu-options__option-content">
            Disabled
          </span>
        </button>
      </li>
      <li
        class="bx--overflow-menu-options__option   bx--overflow-menu-options__option--danger ">
        <button class="bx--overflow-menu-options__btn" role="menuitem"   >
          <span class="bx--overflow-menu-options__option-content">
            Danger option
          </span>
        </button>
      </li>
    </ul>
    
    <span tabindex="0"></span>
  </div>
</div>

<div data-overflow-menu class="bx--overflow-menu">
  <button
    class="bx--overflow-menu__trigger bx--tooltip__trigger bx--tooltip--a11y bx--tooltip--left bx--tooltip--align-start"
    aria-haspopup="true" aria-expanded="false" id="example-oc01unrxiba-trigger" aria-controls="example-oc01unrxiba">
    <span class="bx--assistive-text">Overflow</span>
    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--overflow-menu__icon" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="8" r="2"></circle><circle cx="16" cy="16" r="2"></circle><circle cx="16" cy="24" r="2"></circle></svg>
  </button>
  <div class="bx--overflow-menu-options bx--overflow-menu--flip" tabindex="-1"
    data-floating-menu-direction="top" role="menu" aria-labelledby="example-oc01unrxiba-trigger"
    id="example-oc01unrxiba">
    <ul  class="bx--overflow-menu-options__content">
      <li
        class="bx--overflow-menu-options__option  ">
        <button class="bx--overflow-menu-options__btn" role="menuitem"  title="An example option that is really long to show what should be done to handle long text"
            data-floating-menu-primary-focus  >
          <span class="bx--overflow-menu-options__option-content">
            An example option that is really long to show what should be done to handle long text
          </span>
        </button>
      </li>
      <li
        class="bx--overflow-menu-options__option  ">
        <button class="bx--overflow-menu-options__btn" role="menuitem"   >
          <span class="bx--overflow-menu-options__option-content">
            Option 2
          </span>
        </button>
      </li>
      <li
        class="bx--overflow-menu-options__option  ">
        <button class="bx--overflow-menu-options__btn" role="menuitem"   >
          <span class="bx--overflow-menu-options__option-content">
            Option 3
          </span>
        </button>
      </li>
      <li
        class="bx--overflow-menu-options__option  ">
        <button class="bx--overflow-menu-options__btn" role="menuitem"   >
          <span class="bx--overflow-menu-options__option-content">
            Option 4
          </span>
        </button>
      </li>
      <li
        class="bx--overflow-menu-options__option  bx--overflow-menu-options__option--disabled  ">
        <button class="bx--overflow-menu-options__btn" role="menuitem"    disabled >
          <span class="bx--overflow-menu-options__option-content">
            Disabled
          </span>
        </button>
      </li>
      <li
        class="bx--overflow-menu-options__option   bx--overflow-menu-options__option--danger ">
        <button class="bx--overflow-menu-options__btn" role="menuitem"   >
          <span class="bx--overflow-menu-options__option-content">
            Danger option
          </span>
        </button>
      </li>
    </ul>
    <span tabindex="0"></span>
  </div>
</div>

<div data-overflow-menu class="bx--overflow-menu">
  <button
    class="bx--overflow-menu__trigger bx--tooltip__trigger bx--tooltip--a11y bx--tooltip--left bx--tooltip--align-start"
    aria-haspopup="true" aria-expanded="false" id="example-7rrgolkr1c4-trigger" aria-controls="example-7rrgolkr1c4">
    <span class="bx--assistive-text">Overflow</span>
    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--overflow-menu__icon" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="8" r="2"></circle><circle cx="16" cy="16" r="2"></circle><circle cx="16" cy="24" r="2"></circle></svg>
  </button>
  <div class="bx--overflow-menu-options bx--overflow-menu--flip" tabindex="-1"
    data-floating-menu-direction="top" role="menu" aria-labelledby="example-7rrgolkr1c4-trigger"
    id="example-7rrgolkr1c4">
    <ul  class="bx--overflow-menu-options__content">
      <li
        class="bx--overflow-menu-options__option">
        <a href="https://www.ibm.com" class="bx--overflow-menu-options__btn" role="menuitem" 
          title="An example option that is really long to show what should be done to handle long text"   data-floating-menu-primary-focus>
          <span class="bx--overflow-menu-options__option-content">
            An example option that is really long to show what should be done to handle long text
          </span>
        </a>
      </li>
      <li
        class="bx--overflow-menu-options__option">
        <a href="https://www.ibm.com" class="bx--overflow-menu-options__btn" role="menuitem"  >
          <span class="bx--overflow-menu-options__option-content">
            Option 2
          </span>
        </a>
      </li>
      <li
        class="bx--overflow-menu-options__option">
        <a href="https://www.ibm.com" class="bx--overflow-menu-options__btn" role="menuitem"  >
          <span class="bx--overflow-menu-options__option-content">
            Option 3
          </span>
        </a>
      </li>
      <li
        class="bx--overflow-menu-options__option">
        <a href="https://www.ibm.com" class="bx--overflow-menu-options__btn" role="menuitem"  >
          <span class="bx--overflow-menu-options__option-content">
            Option 4
          </span>
        </a>
      </li>
      <li
        class="bx--overflow-menu-options__option bx--overflow-menu-options__option--disabled">
        <a href="https://www.ibm.com" class="bx--overflow-menu-options__btn" role="menuitem"  
          tabindex="-1" aria-disabled="true" >
          <span class="bx--overflow-menu-options__option-content">
            Disabled
          </span>
        </a>
      </li>
      <li
        class="bx--overflow-menu-options__option bx--overflow-menu-options__option--danger">
        <a href="https://www.ibm.com" class="bx--overflow-menu-options__btn" role="menuitem"  >
          <span class="bx--overflow-menu-options__option-content">
            Danger option
          </span>
        </a>
      </li>
    </ul>
    <span tabindex="0"></span>
  </div>
</div>
`}}
]