export default {
    displayName: "multi-select",
    name: "multi-select",
    homepage: "https://www.carbondesignsystem.com/components/multi-select"
}

export const variants = [
{
displayName:"multi-select",
picture:{
src:"./pictures/multi-select/multi-select.png",
width:239,
height:168},
snippet:{
html:`

<div class="bx--form-item">
  <div class="bx--list-box__wrapper ">
    <label class="bx--label">Multi-Select label</label>
    <div
      class="bx--multi-select bx--list-box ">
      <div role="button" class="bx--list-box__field" tabindex="0" aria-label="open menu"
        aria-expanded="false" aria-haspopup="true">
        <span class="bx--list-box__label">Multi select options</span>
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
    <label class="bx--label">Multi-Select label</label>
    <div
      class="bx--multi-select bx--list-box bx--list-box--expanded bx--multi-select--selected">
      <div role="button" class="bx--list-box__field" tabindex="0" aria-label="close menu"
        aria-expanded="true" aria-haspopup="true">
        <div role="button"
          class="bx--list-box__selection bx--list-box__selection--multi bx--tag--filter"
          tabindex="0" title="Clear all selected items">
          1
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-label="Clear selection" width="16" height="16" viewBox="0 0 32 32" role="img"><path d="M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"></path></svg>
        </div>
        <span class="bx--list-box__label">Multi select options</span>
        <div class="bx--list-box__menu-icon">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-label="Close menu" width="16" height="16" viewBox="0 0 16 16" role="img"><path d="M8 5L13 10 12.3 10.7 8 6.4 3.7 10.7 3 10z"></path></svg>
        </div>
      </div>
      <fieldset class="bx--list-box__menu" role="listbox">
        <legend class="bx--assistive-text">Description of form elements within the fieldset</legend>
        <div class="bx--list-box__menu-item">
          <div class="bx--list-box__menu-item__option">
            <div class="bx--form-item bx--checkbox-wrapper">
              <label title="Option 1" class="bx--checkbox-label">
                <input type="checkbox" name="Option 1" readonly="" class="bx--checkbox" id="downshift-1-item-0"
                  value="on"  checked>
                <span class="bx--checkbox-appearance"></span>
                <span class="bx--checkbox-label-text">Option 1</span>
              </label>
            </div>
          </div>
        </div>
        <div class="bx--list-box__menu-item">
          <div class="bx--list-box__menu-item__option">
            <div class="bx--form-item bx--checkbox-wrapper">
              <label title="Option 2" class="bx--checkbox-label">
                <input type="checkbox" name="Option 1" readonly="" class="bx--checkbox" id="downshift-1-item-1"
                  value="on" >
                <span class="bx--checkbox-appearance"></span>
                <span class="bx--checkbox-label-text">Option 2</span>
              </label>
            </div>
          </div>
        </div>
        <div class="bx--list-box__menu-item">
          <div class="bx--list-box__menu-item__option">
            <div class="bx--form-item bx--checkbox-wrapper">
              <label title="Option 3" class="bx--checkbox-label">
                <input type="checkbox" name="Option 1" readonly="" class="bx--checkbox" id="downshift-1-item-2"
                  value="on" >
                <span class="bx--checkbox-appearance"></span>
                <span class="bx--checkbox-label-text">Option 3</span>
              </label>
            </div>
          </div>
        </div>
        <div class="bx--list-box__menu-item">
          <div class="bx--list-box__menu-item__option">
            <div class="bx--form-item bx--checkbox-wrapper">
              <label title="Option 4" class="bx--checkbox-label">
                <input type="checkbox" name="Option 1" readonly="" class="bx--checkbox" id="downshift-1-item-3"
                  value="on" >
                <span class="bx--checkbox-appearance"></span>
                <span class="bx--checkbox-label-text">Option 4</span>
              </label>
            </div>
          </div>
        </div>
        <div class="bx--list-box__menu-item">
          <div class="bx--list-box__menu-item__option">
            <div class="bx--form-item bx--checkbox-wrapper">
              <label title="An example option that is really long to show what should be done to handle long text" class="bx--checkbox-label">
                <input type="checkbox" name="Option 1" readonly="" class="bx--checkbox" id="downshift-1-item-4"
                  value="on" >
                <span class="bx--checkbox-appearance"></span>
                <span class="bx--checkbox-label-text">An example option that is really long to show what should be done to handle long text</span>
              </label>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
    <div class="bx--form__helper-text">Optional helper text here</div>
  </div>
</div>
`}},
{
displayName:"filterable",
picture:{
src:"./pictures/multi-select/filterable.png",
width:326,
height:168},
snippet:{
html:`

<div class="bx--form-item">
  <div class="bx--list-box__wrapper ">
    <label class="bx--label">Multi-Select label</label>
    <div
      class="bx--multi-select bx--list-box  bx--combo-box bx--multi-select--filterable">
      <div role="button" class="bx--list-box__field" tabindex="0" aria-label="open menu"
        aria-expanded="false" aria-haspopup="true">
        <input class="bx--text-input" placeholder="Filter...">
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
    <label class="bx--label">Multi-Select label</label>
    <div
      class="bx--multi-select bx--list-box bx--list-box--expanded bx--multi-select--selected bx--combo-box bx--multi-select--filterable">
      <div role="button" class="bx--list-box__field" tabindex="0" aria-label="close menu"
        aria-expanded="true" aria-haspopup="true">
        <div role="button"
          class="bx--list-box__selection bx--list-box__selection--multi bx--tag--filter"
          tabindex="0" title="Clear all selected items">
          1
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-label="Clear selection" width="16" height="16" viewBox="0 0 32 32" role="img"><path d="M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"></path></svg>
        </div>
        <input class="bx--text-input" placeholder="Filter...">
        <div class="bx--list-box__menu-icon">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-label="Close menu" width="16" height="16" viewBox="0 0 16 16" role="img"><path d="M8 5L13 10 12.3 10.7 8 6.4 3.7 10.7 3 10z"></path></svg>
        </div>
      </div>
      <fieldset class="bx--list-box__menu" role="listbox">
        <legend class="bx--assistive-text">Description of form elements within the fieldset</legend>
        <div class="bx--list-box__menu-item">
          <div class="bx--list-box__menu-item__option">
            <div class="bx--form-item bx--checkbox-wrapper">
              <label title="Option 1" class="bx--checkbox-label">
                <input type="checkbox" name="Option 1" readonly="" class="bx--checkbox" id="downshift-1-item-0"
                  value="on"  checked>
                <span class="bx--checkbox-appearance"></span>
                <span class="bx--checkbox-label-text">Option 1</span>
              </label>
            </div>
          </div>
        </div>
        <div class="bx--list-box__menu-item">
          <div class="bx--list-box__menu-item__option">
            <div class="bx--form-item bx--checkbox-wrapper">
              <label title="Option 2" class="bx--checkbox-label">
                <input type="checkbox" name="Option 1" readonly="" class="bx--checkbox" id="downshift-1-item-1"
                  value="on" >
                <span class="bx--checkbox-appearance"></span>
                <span class="bx--checkbox-label-text">Option 2</span>
              </label>
            </div>
          </div>
        </div>
        <div class="bx--list-box__menu-item">
          <div class="bx--list-box__menu-item__option">
            <div class="bx--form-item bx--checkbox-wrapper">
              <label title="Option 3" class="bx--checkbox-label">
                <input type="checkbox" name="Option 1" readonly="" class="bx--checkbox" id="downshift-1-item-2"
                  value="on" >
                <span class="bx--checkbox-appearance"></span>
                <span class="bx--checkbox-label-text">Option 3</span>
              </label>
            </div>
          </div>
        </div>
        <div class="bx--list-box__menu-item">
          <div class="bx--list-box__menu-item__option">
            <div class="bx--form-item bx--checkbox-wrapper">
              <label title="Option 4" class="bx--checkbox-label">
                <input type="checkbox" name="Option 1" readonly="" class="bx--checkbox" id="downshift-1-item-3"
                  value="on" >
                <span class="bx--checkbox-appearance"></span>
                <span class="bx--checkbox-label-text">Option 4</span>
              </label>
            </div>
          </div>
        </div>
        <div class="bx--list-box__menu-item">
          <div class="bx--list-box__menu-item__option">
            <div class="bx--form-item bx--checkbox-wrapper">
              <label title="An example option that is really long to show what should be done to handle long text" class="bx--checkbox-label">
                <input type="checkbox" name="Option 1" readonly="" class="bx--checkbox" id="downshift-1-item-4"
                  value="on" >
                <span class="bx--checkbox-appearance"></span>
                <span class="bx--checkbox-label-text">An example option that is really long to show what should be done to handle long text</span>
              </label>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
    <div class="bx--form__helper-text">Optional helper text here</div>
  </div>
</div>
`}},
{
displayName:"inline",
picture:{
src:"./pictures/multi-select/inline.png",
width:332,
height:88},
snippet:{
html:`

<div class="bx--form-item">
  <div class="bx--list-box__wrapper bx--list-box__wrapper--inline">
    <label class="bx--label">Multi-Select label</label>
    <div
      class="bx--multi-select bx--list-box  bx--list-box--inline">
      <div role="button" class="bx--list-box__field" tabindex="0" aria-label="open menu"
        aria-expanded="false" aria-haspopup="true">
        <span class="bx--list-box__label">Multi select options</span>
        <div class="bx--list-box__menu-icon">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-label="Open menu" width="16" height="16" viewBox="0 0 16 16" role="img"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="bx--form-item">
  <div class="bx--list-box__wrapper bx--list-box__wrapper--inline">
    <label class="bx--label">Multi-Select label</label>
    <div
      class="bx--multi-select bx--list-box bx--list-box--expanded bx--multi-select--selected bx--list-box--inline">
      <div role="button" class="bx--list-box__field" tabindex="0" aria-label="close menu"
        aria-expanded="true" aria-haspopup="true">
        <div role="button"
          class="bx--list-box__selection bx--list-box__selection--multi bx--tag--filter"
          tabindex="0" title="Clear all selected items">
          1
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-label="Clear selection" width="16" height="16" viewBox="0 0 32 32" role="img"><path d="M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"></path></svg>
        </div>
        <span class="bx--list-box__label">Multi select options</span>
        <div class="bx--list-box__menu-icon">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-label="Close menu" width="16" height="16" viewBox="0 0 16 16" role="img"><path d="M8 5L13 10 12.3 10.7 8 6.4 3.7 10.7 3 10z"></path></svg>
        </div>
      </div>
      <fieldset class="bx--list-box__menu" role="listbox">
        <legend class="bx--assistive-text">Description of form elements within the fieldset</legend>
        <div class="bx--list-box__menu-item">
          <div class="bx--list-box__menu-item__option">
            <div class="bx--form-item bx--checkbox-wrapper">
              <label title="Option 1" class="bx--checkbox-label">
                <input type="checkbox" name="Option 1" readonly="" class="bx--checkbox" id="downshift-1-item-0"
                  value="on"  checked>
                <span class="bx--checkbox-appearance"></span>
                <span class="bx--checkbox-label-text">Option 1</span>
              </label>
            </div>
          </div>
        </div>
        <div class="bx--list-box__menu-item">
          <div class="bx--list-box__menu-item__option">
            <div class="bx--form-item bx--checkbox-wrapper">
              <label title="Option 2" class="bx--checkbox-label">
                <input type="checkbox" name="Option 1" readonly="" class="bx--checkbox" id="downshift-1-item-1"
                  value="on" >
                <span class="bx--checkbox-appearance"></span>
                <span class="bx--checkbox-label-text">Option 2</span>
              </label>
            </div>
          </div>
        </div>
        <div class="bx--list-box__menu-item">
          <div class="bx--list-box__menu-item__option">
            <div class="bx--form-item bx--checkbox-wrapper">
              <label title="Option 3" class="bx--checkbox-label">
                <input type="checkbox" name="Option 1" readonly="" class="bx--checkbox" id="downshift-1-item-2"
                  value="on" >
                <span class="bx--checkbox-appearance"></span>
                <span class="bx--checkbox-label-text">Option 3</span>
              </label>
            </div>
          </div>
        </div>
        <div class="bx--list-box__menu-item">
          <div class="bx--list-box__menu-item__option">
            <div class="bx--form-item bx--checkbox-wrapper">
              <label title="Option 4" class="bx--checkbox-label">
                <input type="checkbox" name="Option 1" readonly="" class="bx--checkbox" id="downshift-1-item-3"
                  value="on" >
                <span class="bx--checkbox-appearance"></span>
                <span class="bx--checkbox-label-text">Option 4</span>
              </label>
            </div>
          </div>
        </div>
        <div class="bx--list-box__menu-item">
          <div class="bx--list-box__menu-item__option">
            <div class="bx--form-item bx--checkbox-wrapper">
              <label title="An example option that is really long to show what should be done to handle long text" class="bx--checkbox-label">
                <input type="checkbox" name="Option 1" readonly="" class="bx--checkbox" id="downshift-1-item-4"
                  value="on" >
                <span class="bx--checkbox-appearance"></span>
                <span class="bx--checkbox-label-text">An example option that is really long to show what should be done to handle long text</span>
              </label>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  </div>
</div>
`}},
{
displayName:"light",
picture:{
src:"./pictures/multi-select/light.png",
width:239,
height:168},
snippet:{
html:`

<div class="bx--form-item">
  <div class="bx--list-box__wrapper ">
    <label class="bx--label">Multi-Select label</label>
    <div
      class="bx--multi-select bx--list-box  bx--list-box--light">
      <div role="button" class="bx--list-box__field" tabindex="0" aria-label="open menu"
        aria-expanded="false" aria-haspopup="true">
        <span class="bx--list-box__label">Multi select options</span>
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
    <label class="bx--label">Multi-Select label</label>
    <div
      class="bx--multi-select bx--list-box bx--list-box--expanded bx--multi-select--selected bx--list-box--light">
      <div role="button" class="bx--list-box__field" tabindex="0" aria-label="close menu"
        aria-expanded="true" aria-haspopup="true">
        <div role="button"
          class="bx--list-box__selection bx--list-box__selection--multi bx--tag--filter"
          tabindex="0" title="Clear all selected items">
          1
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-label="Clear selection" width="16" height="16" viewBox="0 0 32 32" role="img"><path d="M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"></path></svg>
        </div>
        <span class="bx--list-box__label">Multi select options</span>
        <div class="bx--list-box__menu-icon">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-label="Close menu" width="16" height="16" viewBox="0 0 16 16" role="img"><path d="M8 5L13 10 12.3 10.7 8 6.4 3.7 10.7 3 10z"></path></svg>
        </div>
      </div>
      <fieldset class="bx--list-box__menu" role="listbox">
        <legend class="bx--assistive-text">Description of form elements within the fieldset</legend>
        <div class="bx--list-box__menu-item">
          <div class="bx--list-box__menu-item__option">
            <div class="bx--form-item bx--checkbox-wrapper">
              <label title="Option 1" class="bx--checkbox-label">
                <input type="checkbox" name="Option 1" readonly="" class="bx--checkbox" id="downshift-1-item-0"
                  value="on"  checked>
                <span class="bx--checkbox-appearance"></span>
                <span class="bx--checkbox-label-text">Option 1</span>
              </label>
            </div>
          </div>
        </div>
        <div class="bx--list-box__menu-item">
          <div class="bx--list-box__menu-item__option">
            <div class="bx--form-item bx--checkbox-wrapper">
              <label title="Option 2" class="bx--checkbox-label">
                <input type="checkbox" name="Option 1" readonly="" class="bx--checkbox" id="downshift-1-item-1"
                  value="on" >
                <span class="bx--checkbox-appearance"></span>
                <span class="bx--checkbox-label-text">Option 2</span>
              </label>
            </div>
          </div>
        </div>
        <div class="bx--list-box__menu-item">
          <div class="bx--list-box__menu-item__option">
            <div class="bx--form-item bx--checkbox-wrapper">
              <label title="Option 3" class="bx--checkbox-label">
                <input type="checkbox" name="Option 1" readonly="" class="bx--checkbox" id="downshift-1-item-2"
                  value="on" >
                <span class="bx--checkbox-appearance"></span>
                <span class="bx--checkbox-label-text">Option 3</span>
              </label>
            </div>
          </div>
        </div>
        <div class="bx--list-box__menu-item">
          <div class="bx--list-box__menu-item__option">
            <div class="bx--form-item bx--checkbox-wrapper">
              <label title="Option 4" class="bx--checkbox-label">
                <input type="checkbox" name="Option 1" readonly="" class="bx--checkbox" id="downshift-1-item-3"
                  value="on" >
                <span class="bx--checkbox-appearance"></span>
                <span class="bx--checkbox-label-text">Option 4</span>
              </label>
            </div>
          </div>
        </div>
        <div class="bx--list-box__menu-item">
          <div class="bx--list-box__menu-item__option">
            <div class="bx--form-item bx--checkbox-wrapper">
              <label title="An example option that is really long to show what should be done to handle long text" class="bx--checkbox-label">
                <input type="checkbox" name="Option 1" readonly="" class="bx--checkbox" id="downshift-1-item-4"
                  value="on" >
                <span class="bx--checkbox-appearance"></span>
                <span class="bx--checkbox-label-text">An example option that is really long to show what should be done to handle long text</span>
              </label>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
    <div class="bx--form__helper-text">Optional helper text here</div>
  </div>
</div>
`}}
]