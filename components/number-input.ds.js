export default {
    displayName: "number-input",
    name: "number-input",
    homepage: "https://www.carbondesignsystem.com/components/number-input"
}

export const variants = [
{
displayName:"number-input",
picture:{
src:"./pictures/number-input/number-input.png",
width:600,
height:392},
snippet:{
html:`

<div class="bx--form-item">
  <div data-numberinput class="
    bx--number
    
  ">
    <label for="number-input0" class="bx--label">Number input label</label>
    <div class="bx--number__input-wrapper">
      <input id="number-input0" type="number" min="0" max="100" value="1">
      <div class="bx--number__controls">
        <button aria-label="increase number input" class="bx--number__control-btn up-icon" type="button"
          aria-live="polite" aria-atomic="true">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="8" height="4" viewBox="0 0 8 4" aria-hidden="true"><path d="M0 4L4 0 8 4z"></path></svg>
        </button>
        <button aria-label="decrease number input" class="bx--number__control-btn down-icon" type="button"
          aria-live="polite" aria-atomic="true">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="8" height="4" viewBox="0 0 8 4" aria-hidden="true"><path d="M8 0L4 4 0 0z"></path></svg>
        </button>
      </div>
    </div>
  </div>
</div>

<div class="bx--form-item">
  <div data-invalid data-numberinput class="
    bx--number
    
  ">
    <label for="number-input1" class="bx--label">Number input label</label>
    <div class="bx--number__input-wrapper">
      <input id="number-input1" type="number" min="0" max="100" value="1" role="alert" aria-atomic="true">
      <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--number__invalid" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8,1C4.2,1,1,4.2,1,8s3.2,7,7,7s7-3.1,7-7S11.9,1,8,1z M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2	c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z"></path><path d="M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8	c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z" data-icon-path="inner-path" opacity="0"></path></svg>
      <div class="bx--number__controls">
        <button aria-label="increase number input" class="bx--number__control-btn up-icon" type="button"
          aria-live="polite" aria-atomic="true">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="8" height="4" viewBox="0 0 8 4" aria-hidden="true"><path d="M0 4L4 0 8 4z"></path></svg>
        </button>
        <button aria-label="decrease number input" class="bx--number__control-btn down-icon" type="button"
          aria-live="polite" aria-atomic="true">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="8" height="4" viewBox="0 0 8 4" aria-hidden="true"><path d="M8 0L4 4 0 0z"></path></svg>
        </button>
      </div>
    </div>
    <div class="bx--form-requirement">
      Invalid number
    </div>
  </div>
</div>

<div class="bx--form-item">
  <div data-invalid data-numberinput class="
    bx--number
    
    bx--number--nolabel
  ">
    <div class="bx--number__input-wrapper">
      <input id="number-input2" type="number" min="0" max="100" value="1" role="alert" aria-atomic="true">
      <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--number__invalid" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8,1C4.2,1,1,4.2,1,8s3.2,7,7,7s7-3.1,7-7S11.9,1,8,1z M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2	c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z"></path><path d="M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8	c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z" data-icon-path="inner-path" opacity="0"></path></svg>
      <div class="bx--number__controls">
        <button aria-label="increase number input" class="bx--number__control-btn up-icon" type="button"
          aria-live="polite" aria-atomic="true">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="8" height="4" viewBox="0 0 8 4" aria-hidden="true"><path d="M0 4L4 0 8 4z"></path></svg>
        </button>
        <button aria-label="decrease number input" class="bx--number__control-btn down-icon" type="button"
          aria-live="polite" aria-atomic="true">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="8" height="4" viewBox="0 0 8 4" aria-hidden="true"><path d="M8 0L4 4 0 0z"></path></svg>
        </button>
      </div>
    </div>
    <div class="bx--form-requirement">
      Invalid number
    </div>
  </div>
</div>

<div class="bx--form-item">
  <div data-numberinput class="
    bx--number
    
    bx--number--helpertext
  ">
    <label for="number-input3" class="bx--label">Number input label</label>
    <div class="bx--number__input-wrapper">
      <input id="number-input3" type="number" min="0" max="100" value="1">
      <div class="bx--number__controls">
        <button aria-label="increase number input" class="bx--number__control-btn up-icon" type="button"
          aria-live="polite" aria-atomic="true">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="8" height="4" viewBox="0 0 8 4" aria-hidden="true"><path d="M0 4L4 0 8 4z"></path></svg>
        </button>
        <button aria-label="decrease number input" class="bx--number__control-btn down-icon" type="button"
          aria-live="polite" aria-atomic="true">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="8" height="4" viewBox="0 0 8 4" aria-hidden="true"><path d="M8 0L4 4 0 0z"></path></svg>
        </button>
      </div>
    </div>
    <div class="bx--form__helper-text">
      Optional helper text here; if message is more than one line text should wrap (~100 character count maximum)
    </div>
  </div>
</div>

<div class="bx--form-item">
  <div data-invalid data-numberinput class="
    bx--number
    
    bx--number--helpertext
  ">
    <label for="number-input4" class="bx--label">Number input label</label>
    <div class="bx--number__input-wrapper">
      <input id="number-input4" type="number" min="0" max="100" value="1" role="alert" aria-atomic="true">
      <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--number__invalid" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8,1C4.2,1,1,4.2,1,8s3.2,7,7,7s7-3.1,7-7S11.9,1,8,1z M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2	c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z"></path><path d="M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8	c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z" data-icon-path="inner-path" opacity="0"></path></svg>
      <div class="bx--number__controls">
        <button aria-label="increase number input" class="bx--number__control-btn up-icon" type="button"
          aria-live="polite" aria-atomic="true">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="8" height="4" viewBox="0 0 8 4" aria-hidden="true"><path d="M0 4L4 0 8 4z"></path></svg>
        </button>
        <button aria-label="decrease number input" class="bx--number__control-btn down-icon" type="button"
          aria-live="polite" aria-atomic="true">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="8" height="4" viewBox="0 0 8 4" aria-hidden="true"><path d="M8 0L4 4 0 0z"></path></svg>
        </button>
      </div>
    </div>
    <div class="bx--form-requirement">
      Invalid number
    </div>
  </div>
</div>
`}},
{
displayName:"light",
picture:{
src:"./pictures/number-input/light.png",
width:600,
height:392},
snippet:{
html:`

<div class="bx--form-item">
  <div data-numberinput class="
    bx--number
     bx--number--light 
  ">
    <label for="number-input0" class="bx--label">Number input label</label>
    <div class="bx--number__input-wrapper">
      <input id="number-input0" type="number" min="0" max="100" value="1">
      <div class="bx--number__controls">
        <button aria-label="increase number input" class="bx--number__control-btn up-icon" type="button"
          aria-live="polite" aria-atomic="true">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="8" height="4" viewBox="0 0 8 4" aria-hidden="true"><path d="M0 4L4 0 8 4z"></path></svg>
        </button>
        <button aria-label="decrease number input" class="bx--number__control-btn down-icon" type="button"
          aria-live="polite" aria-atomic="true">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="8" height="4" viewBox="0 0 8 4" aria-hidden="true"><path d="M8 0L4 4 0 0z"></path></svg>
        </button>
      </div>
    </div>
  </div>
</div>

<div class="bx--form-item">
  <div data-invalid data-numberinput class="
    bx--number
     bx--number--light 
  ">
    <label for="number-input1" class="bx--label">Number input label</label>
    <div class="bx--number__input-wrapper">
      <input id="number-input1" type="number" min="0" max="100" value="1" role="alert" aria-atomic="true">
      <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--number__invalid" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8,1C4.2,1,1,4.2,1,8s3.2,7,7,7s7-3.1,7-7S11.9,1,8,1z M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2	c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z"></path><path d="M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8	c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z" data-icon-path="inner-path" opacity="0"></path></svg>
      <div class="bx--number__controls">
        <button aria-label="increase number input" class="bx--number__control-btn up-icon" type="button"
          aria-live="polite" aria-atomic="true">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="8" height="4" viewBox="0 0 8 4" aria-hidden="true"><path d="M0 4L4 0 8 4z"></path></svg>
        </button>
        <button aria-label="decrease number input" class="bx--number__control-btn down-icon" type="button"
          aria-live="polite" aria-atomic="true">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="8" height="4" viewBox="0 0 8 4" aria-hidden="true"><path d="M8 0L4 4 0 0z"></path></svg>
        </button>
      </div>
    </div>
    <div class="bx--form-requirement">
      Invalid number
    </div>
  </div>
</div>

<div class="bx--form-item">
  <div data-invalid data-numberinput class="
    bx--number
     bx--number--light
    bx--number--nolabel
  ">
    <div class="bx--number__input-wrapper">
      <input id="number-input2" type="number" min="0" max="100" value="1" role="alert" aria-atomic="true">
      <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--number__invalid" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8,1C4.2,1,1,4.2,1,8s3.2,7,7,7s7-3.1,7-7S11.9,1,8,1z M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2	c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z"></path><path d="M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8	c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z" data-icon-path="inner-path" opacity="0"></path></svg>
      <div class="bx--number__controls">
        <button aria-label="increase number input" class="bx--number__control-btn up-icon" type="button"
          aria-live="polite" aria-atomic="true">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="8" height="4" viewBox="0 0 8 4" aria-hidden="true"><path d="M0 4L4 0 8 4z"></path></svg>
        </button>
        <button aria-label="decrease number input" class="bx--number__control-btn down-icon" type="button"
          aria-live="polite" aria-atomic="true">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="8" height="4" viewBox="0 0 8 4" aria-hidden="true"><path d="M8 0L4 4 0 0z"></path></svg>
        </button>
      </div>
    </div>
    <div class="bx--form-requirement">
      Invalid number
    </div>
  </div>
</div>

<div class="bx--form-item">
  <div data-numberinput class="
    bx--number
     bx--number--light 
    bx--number--helpertext
  ">
    <label for="number-input3" class="bx--label">Number input label</label>
    <div class="bx--number__input-wrapper">
      <input id="number-input3" type="number" min="0" max="100" value="1">
      <div class="bx--number__controls">
        <button aria-label="increase number input" class="bx--number__control-btn up-icon" type="button"
          aria-live="polite" aria-atomic="true">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="8" height="4" viewBox="0 0 8 4" aria-hidden="true"><path d="M0 4L4 0 8 4z"></path></svg>
        </button>
        <button aria-label="decrease number input" class="bx--number__control-btn down-icon" type="button"
          aria-live="polite" aria-atomic="true">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="8" height="4" viewBox="0 0 8 4" aria-hidden="true"><path d="M8 0L4 4 0 0z"></path></svg>
        </button>
      </div>
    </div>
    <div class="bx--form__helper-text">
      Optional helper text here; if message is more than one line text should wrap (~100 character count maximum)
    </div>
  </div>
</div>

<div class="bx--form-item">
  <div data-invalid data-numberinput class="
    bx--number
     bx--number--light 
    bx--number--helpertext
  ">
    <label for="number-input4" class="bx--label">Number input label</label>
    <div class="bx--number__input-wrapper">
      <input id="number-input4" type="number" min="0" max="100" value="1" role="alert" aria-atomic="true">
      <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--number__invalid" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8,1C4.2,1,1,4.2,1,8s3.2,7,7,7s7-3.1,7-7S11.9,1,8,1z M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2	c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z"></path><path d="M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8	c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z" data-icon-path="inner-path" opacity="0"></path></svg>
      <div class="bx--number__controls">
        <button aria-label="increase number input" class="bx--number__control-btn up-icon" type="button"
          aria-live="polite" aria-atomic="true">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="8" height="4" viewBox="0 0 8 4" aria-hidden="true"><path d="M0 4L4 0 8 4z"></path></svg>
        </button>
        <button aria-label="decrease number input" class="bx--number__control-btn down-icon" type="button"
          aria-live="polite" aria-atomic="true">
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="8" height="4" viewBox="0 0 8 4" aria-hidden="true"><path d="M8 0L4 4 0 0z"></path></svg>
        </button>
      </div>
    </div>
    <div class="bx--form-requirement">
      Invalid number
    </div>
  </div>
</div>
`}},
{
displayName:"mobile",
picture:{
src:"./pictures/number-input/mobile.png",
width:600,
height:392},
snippet:{
html:`

<div class="bx--form-item">
  <div data-numberinput class="
    bx--number
    
     bx--number--mobile 
    ">
    <label for="mobile-number-input0" class="bx--label">Number input label</label>
    <div class="bx--number__input-wrapper">
      <button aria-label="decrease number input" class="bx--number__control-btn down-icon" type="button"
        aria-live="polite" aria-atomic="true">
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="8" height="4" viewBox="0 0 8 4" aria-hidden="true"><path d="M8 0L4 4 0 0z"></path></svg>
      </button>
      <input id="mobile-number-input0" type="number" pattern="\d*" min="0" max="100" value="1">
      <button aria-label="increase number input" class="bx--number__control-btn up-icon" type="button"
        aria-live="polite" aria-atomic="true">
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="8" height="4" viewBox="0 0 8 4" aria-hidden="true"><path d="M0 4L4 0 8 4z"></path></svg>
      </button>
    </div>
  </div>
</div>

<div class="bx--form-item">
  <div data-invalid data-numberinput class="
    bx--number
    
     bx--number--mobile 
  ">
    <label for="mobile-number-input1" class="bx--label">Number input label</label>
    <div class="bx--number__input-wrapper">
      <button aria-label="decrease number input" class="bx--number__control-btn down-icon" type="button"
        aria-live="polite" aria-atomic="true">
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="8" height="4" viewBox="0 0 8 4" aria-hidden="true"><path d="M8 0L4 4 0 0z"></path></svg>
      </button>
      <input id="mobile-number-input1" type="number" pattern="\d*" min="0" max="100" value="1" role="alert"
        aria-atomic="true">
      <button aria-label="increase number input" class="bx--number__control-btn up-icon" type="button"
        aria-live="polite" aria-atomic="true">
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="8" height="4" viewBox="0 0 8 4" aria-hidden="true"><path d="M0 4L4 0 8 4z"></path></svg>
      </button>
    </div>
    <div class="bx--form-requirement">
      Invalid number
    </div>
  </div>
</div>

<div class="bx--form-item">
  <div data-invalid data-numberinput class="
      bx--number
      
       bx--number--mobile 
      bx--number--nolabel
    ">
    <div class="bx--number__input-wrapper">
      <button aria-label="decrease number input" class="bx--number__control-btn down-icon" type="button"
        aria-live="polite" aria-atomic="true">
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="8" height="4" viewBox="0 0 8 4" aria-hidden="true"><path d="M8 0L4 4 0 0z"></path></svg>
      </button>
      <input id="mobile-number-input2" type="number" pattern="\d*" min="0" max="100" value="1" role="alert"
        aria-atomic="true">
      <button aria-label="increase number input" class="bx--number__control-btn up-icon" type="button"
        aria-live="polite" aria-atomic="true">
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="8" height="4" viewBox="0 0 8 4" aria-hidden="true"><path d="M0 4L4 0 8 4z"></path></svg>
      </button>
    </div>
    <div class="bx--form-requirement">
      Invalid number
    </div>
  </div>
</div>

<div class="bx--form-item">
  <div data-numberinput class="
    bx--number
    
     bx--number--mobile 
    bx--number--helpertext
  ">
    <label for="mobile-number-input3" class="bx--label">Number input label</label>
    <div class="bx--number__input-wrapper">
      <button aria-label="decrease number input" class="bx--number__control-btn down-icon" type="button"
        aria-live="polite" aria-atomic="true">
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="8" height="4" viewBox="0 0 8 4" aria-hidden="true"><path d="M8 0L4 4 0 0z"></path></svg>
      </button>
      <input id="mobile-number-input3" type="number" pattern="\d*" min="0" max="100" value="1">
      <button aria-label="increase number input" class="bx--number__control-btn up-icon" type="button"
        aria-live="polite" aria-atomic="true">
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="8" height="4" viewBox="0 0 8 4" aria-hidden="true"><path d="M0 4L4 0 8 4z"></path></svg>
      </button>
    </div>
    <div class="bx--form__helper-text">
      Optional helper text here; if message is more than one line text should wrap (~100 character count maximum)
    </div>
  </div>
</div>

<div class="bx--form-item">
  <div data-invalid data-numberinput class="
    bx--number
    
     bx--number--mobile 
    bx--number--helpertext
  ">
    <label for="mobile-number-input4" class="bx--label">Number input label</label>
    <div class="bx--number__input-wrapper">
      <button aria-label="decrease number input" class="bx--number__control-btn down-icon" type="button"
        aria-live="polite" aria-atomic="true">
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="8" height="4" viewBox="0 0 8 4" aria-hidden="true"><path d="M8 0L4 4 0 0z"></path></svg>
      </button>
      <input id="mobile-number-input4" type="number" pattern="\d*" min="0" max="100" value="1" role="alert"
        aria-atomic="true">
      <button aria-label="increase number input" class="bx--number__control-btn up-icon" type="button"
        aria-live="polite" aria-atomic="true">
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="8" height="4" viewBox="0 0 8 4" aria-hidden="true"><path d="M0 4L4 0 8 4z"></path></svg>
      </button>
    </div>
    <div class="bx--form-requirement">
      Invalid number
    </div>
  </div>
</div>
`}},
{
displayName:"mobile-light",
picture:{
src:"./pictures/number-input/mobile-light.png",
width:600,
height:392},
snippet:{
html:`

<div class="bx--form-item">
  <div data-numberinput class="
    bx--number
     bx--number--light 
     bx--number--mobile 
    ">
    <label for="mobile-number-input0" class="bx--label">Number input label</label>
    <div class="bx--number__input-wrapper">
      <button aria-label="decrease number input" class="bx--number__control-btn down-icon" type="button"
        aria-live="polite" aria-atomic="true">
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="8" height="4" viewBox="0 0 8 4" aria-hidden="true"><path d="M8 0L4 4 0 0z"></path></svg>
      </button>
      <input id="mobile-number-input0" type="number" pattern="\d*" min="0" max="100" value="1">
      <button aria-label="increase number input" class="bx--number__control-btn up-icon" type="button"
        aria-live="polite" aria-atomic="true">
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="8" height="4" viewBox="0 0 8 4" aria-hidden="true"><path d="M0 4L4 0 8 4z"></path></svg>
      </button>
    </div>
  </div>
</div>

<div class="bx--form-item">
  <div data-invalid data-numberinput class="
    bx--number
     bx--number--light 
     bx--number--mobile 
  ">
    <label for="mobile-number-input1" class="bx--label">Number input label</label>
    <div class="bx--number__input-wrapper">
      <button aria-label="decrease number input" class="bx--number__control-btn down-icon" type="button"
        aria-live="polite" aria-atomic="true">
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="8" height="4" viewBox="0 0 8 4" aria-hidden="true"><path d="M8 0L4 4 0 0z"></path></svg>
      </button>
      <input id="mobile-number-input1" type="number" pattern="\d*" min="0" max="100" value="1" role="alert"
        aria-atomic="true">
      <button aria-label="increase number input" class="bx--number__control-btn up-icon" type="button"
        aria-live="polite" aria-atomic="true">
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="8" height="4" viewBox="0 0 8 4" aria-hidden="true"><path d="M0 4L4 0 8 4z"></path></svg>
      </button>
    </div>
    <div class="bx--form-requirement">
      Invalid number
    </div>
  </div>
</div>

<div class="bx--form-item">
  <div data-invalid data-numberinput class="
      bx--number
       bx--number--light 
       bx--number--mobile 
      bx--number--nolabel
    ">
    <div class="bx--number__input-wrapper">
      <button aria-label="decrease number input" class="bx--number__control-btn down-icon" type="button"
        aria-live="polite" aria-atomic="true">
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="8" height="4" viewBox="0 0 8 4" aria-hidden="true"><path d="M8 0L4 4 0 0z"></path></svg>
      </button>
      <input id="mobile-number-input2" type="number" pattern="\d*" min="0" max="100" value="1" role="alert"
        aria-atomic="true">
      <button aria-label="increase number input" class="bx--number__control-btn up-icon" type="button"
        aria-live="polite" aria-atomic="true">
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="8" height="4" viewBox="0 0 8 4" aria-hidden="true"><path d="M0 4L4 0 8 4z"></path></svg>
      </button>
    </div>
    <div class="bx--form-requirement">
      Invalid number
    </div>
  </div>
</div>

<div class="bx--form-item">
  <div data-numberinput class="
    bx--number
     bx--number--light
     bx--number--mobile 
    bx--number--helpertext
  ">
    <label for="mobile-number-input3" class="bx--label">Number input label</label>
    <div class="bx--number__input-wrapper">
      <button aria-label="decrease number input" class="bx--number__control-btn down-icon" type="button"
        aria-live="polite" aria-atomic="true">
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="8" height="4" viewBox="0 0 8 4" aria-hidden="true"><path d="M8 0L4 4 0 0z"></path></svg>
      </button>
      <input id="mobile-number-input3" type="number" pattern="\d*" min="0" max="100" value="1">
      <button aria-label="increase number input" class="bx--number__control-btn up-icon" type="button"
        aria-live="polite" aria-atomic="true">
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="8" height="4" viewBox="0 0 8 4" aria-hidden="true"><path d="M0 4L4 0 8 4z"></path></svg>
      </button>
    </div>
    <div class="bx--form__helper-text">
      Optional helper text here; if message is more than one line text should wrap (~100 character count maximum)
    </div>
  </div>
</div>

<div class="bx--form-item">
  <div data-invalid data-numberinput class="
    bx--number
     bx--number--light 
     bx--number--mobile 
    bx--number--helpertext
  ">
    <label for="mobile-number-input4" class="bx--label">Number input label</label>
    <div class="bx--number__input-wrapper">
      <button aria-label="decrease number input" class="bx--number__control-btn down-icon" type="button"
        aria-live="polite" aria-atomic="true">
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="8" height="4" viewBox="0 0 8 4" aria-hidden="true"><path d="M8 0L4 4 0 0z"></path></svg>
      </button>
      <input id="mobile-number-input4" type="number" pattern="\d*" min="0" max="100" value="1" role="alert"
        aria-atomic="true">
      <button aria-label="increase number input" class="bx--number__control-btn up-icon" type="button"
        aria-live="polite" aria-atomic="true">
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="8" height="4" viewBox="0 0 8 4" aria-hidden="true"><path d="M0 4L4 0 8 4z"></path></svg>
      </button>
    </div>
    <div class="bx--form-requirement">
      Invalid number
    </div>
  </div>
</div>
`}}
]