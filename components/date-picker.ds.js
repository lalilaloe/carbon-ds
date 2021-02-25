export default {
    displayName: "date-picker",
    name: "date-picker",
    homepage: "https://www.carbondesignsystem.com/components/date-picker"
}

export const variants = [
{
displayName:"date-picker",
picture:{
src:"./pictures/date-picker/date-picker.png",
width:120,
height:148},
snippet:{
html:`


<div class="bx--form-item">
  <div class="bx--date-picker bx--date-picker--simple bx--date-picker--short">
    <div class="bx--date-picker-container">
      <label for="date-picker-4" class="bx--label">Date Picker label</label>
      <input type="text" id="date-picker-4" class="bx--date-picker__input" pattern="\d{1,2}/\d{4}" placeholder="mm/yyyy" data-date-picker-input
      />
    </div>
  </div>
</div>


<div class="bx--form-item">
  <div class="bx--date-picker bx--date-picker--simple">
    <div class="bx--date-picker-container">
      <label for="date-picker-6" class="bx--label">Date Picker label</label>
      <input data-invalid type="text" id="date-picker-6" class="bx--date-picker__input" pattern="\d{1,2}/\d{1,2}/\d{4}" placeholder="mm/dd/yyyy"
        data-date-picker-input />
      <div class="bx--form-requirement">
        Invalid date format.
      </div>
    </div>
  </div>
</div>
`}},
{
displayName:"light",
picture:{
src:"./pictures/date-picker/light.png",
width:120,
height:148},
snippet:{
html:`


<div class="bx--form-item">
  <div class="bx--date-picker bx--date-picker--simple bx--date-picker--short bx--date-picker--light">
    <div class="bx--date-picker-container">
      <label for="date-picker-4" class="bx--label">Date Picker label</label>
      <input type="text" id="date-picker-4" class="bx--date-picker__input" pattern="\d{1,2}/\d{4}" placeholder="mm/yyyy" data-date-picker-input
      />
    </div>
  </div>
</div>


<div class="bx--form-item">
  <div class="bx--date-picker bx--date-picker--simple bx--date-picker--light">
    <div class="bx--date-picker-container">
      <label for="date-picker-6" class="bx--label">Date Picker label</label>
      <input data-invalid type="text" id="date-picker-6" class="bx--date-picker__input" pattern="\d{1,2}/\d{1,2}/\d{4}" placeholder="mm/dd/yyyy"
        data-date-picker-input />
      <div class="bx--form-requirement">
        Invalid date format.
      </div>
    </div>
  </div>
</div>
`}},
{
displayName:"range",
picture:{
src:"./pictures/date-picker/range.png",
width:289,
height:64},
snippet:{
html:`


<div class="bx--form-item">
  <div data-date-picker data-date-picker-type="range"
    class="bx--date-picker bx--date-picker--range">
    <div class="bx--date-picker-container">
      <label for="date-picker-1" class="bx--label">Start date label</label>
      <div class="bx--date-picker-input__wrapper">
        <input type="text" id="date-picker-1" class="bx--date-picker__input"
          pattern="\d{1,2}/\d{1,2}/\d{4}" placeholder="mm/dd/yyyy" data-date-picker-input-from />
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" data-date-picker-icon="true" class="bx--date-picker__icon" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true"><path d="M26,4h-4V2h-2v2h-8V2h-2v2H6C4.9,4,4,4.9,4,6v20c0,1.1,0.9,2,2,2h20c1.1,0,2-0.9,2-2V6C28,4.9,27.1,4,26,4z M26,26H6V12h20	V26z M26,10H6V6h4v2h2V6h8v2h2V6h4V10z"></path></svg>
      </div>
    </div>
    <div class="bx--date-picker-container">
      <label for="date-picker-2" class="bx--label">End date label</label>
      <div class="bx--date-picker-input__wrapper">
        <input type="text" id="date-picker-2" class="bx--date-picker__input"
          pattern="\d{1,2}/\d{1,2}/\d{4}" placeholder="mm/dd/yyyy" data-date-picker-input-to />
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" data-date-picker-icon="true" class="bx--date-picker__icon" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true"><path d="M26,4h-4V2h-2v2h-8V2h-2v2H6C4.9,4,4,4.9,4,6v20c0,1.1,0.9,2,2,2h20c1.1,0,2-0.9,2-2V6C28,4.9,27.1,4,26,4z M26,26H6V12h20	V26z M26,10H6V6h4v2h2V6h8v2h2V6h4V10z"></path></svg>
      </div>
    </div>
  </div>
</div>
`}},
{
displayName:"range-light",
picture:{
src:"./pictures/date-picker/range-light.png",
width:289,
height:64},
snippet:{
html:`


<div class="bx--form-item">
  <div data-date-picker data-date-picker-type="range"
    class="bx--date-picker bx--date-picker--range bx--date-picker--light">
    <div class="bx--date-picker-container">
      <label for="date-picker-1" class="bx--label">Start date label</label>
      <div class="bx--date-picker-input__wrapper">
        <input type="text" id="date-picker-1" class="bx--date-picker__input"
          pattern="\d{1,2}/\d{1,2}/\d{4}" placeholder="mm/dd/yyyy" data-date-picker-input-from />
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" data-date-picker-icon="true" class="bx--date-picker__icon" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true"><path d="M26,4h-4V2h-2v2h-8V2h-2v2H6C4.9,4,4,4.9,4,6v20c0,1.1,0.9,2,2,2h20c1.1,0,2-0.9,2-2V6C28,4.9,27.1,4,26,4z M26,26H6V12h20	V26z M26,10H6V6h4v2h2V6h8v2h2V6h4V10z"></path></svg>
      </div>
    </div>
    <div class="bx--date-picker-container">
      <label for="date-picker-2" class="bx--label">End date label</label>
      <div class="bx--date-picker-input__wrapper">
        <input type="text" id="date-picker-2" class="bx--date-picker__input"
          pattern="\d{1,2}/\d{1,2}/\d{4}" placeholder="mm/dd/yyyy" data-date-picker-input-to />
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" data-date-picker-icon="true" class="bx--date-picker__icon" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true"><path d="M26,4h-4V2h-2v2h-8V2h-2v2H6C4.9,4,4,4.9,4,6v20c0,1.1,0.9,2,2,2h20c1.1,0,2-0.9,2-2V6C28,4.9,27.1,4,26,4z M26,26H6V12h20	V26z M26,10H6V6h4v2h2V6h8v2h2V6h4V10z"></path></svg>
      </div>
    </div>
  </div>
</div>
`}},
{
displayName:"single",
picture:{
src:"./pictures/date-picker/single.png",
width:288,
height:148},
snippet:{
html:`


<div class="bx--form-item">
  <div data-date-picker data-date-picker-type="single"
    class="bx--date-picker bx--date-picker--single">
    <div class="bx--date-picker-container">
      <label for="date-picker-3" class="bx--label">Date Picker label</label>
      <div class="bx--date-picker-input__wrapper">
        <input type="text" id="date-picker-3" class="bx--date-picker__input"
          pattern="\d{1,2}/\d{1,2}/\d{4}" placeholder="mm/dd/yyyy" data-date-picker-input />
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" data-date-picker-icon="true" class="bx--date-picker__icon" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true"><path d="M26,4h-4V2h-2v2h-8V2h-2v2H6C4.9,4,4,4.9,4,6v20c0,1.1,0.9,2,2,2h20c1.1,0,2-0.9,2-2V6C28,4.9,27.1,4,26,4z M26,26H6V12h20	V26z M26,10H6V6h4v2h2V6h8v2h2V6h4V10z"></path></svg>
      </div>
    </div>
  </div>
</div>


<div class="bx--form-item">
  <div data-date-picker data-date-picker-type="single"
    class="bx--date-picker bx--date-picker--single">
    <div class="bx--date-picker-container">
      <label for="date-picker-3" class="bx--label">Date Picker label</label>
      <div class="bx--date-picker-input__wrapper">
        <input data-invalid type="text" id="date-picker-3" class="bx--date-picker__input"
          pattern="\d{1,2}/\d{1,2}/\d{4}" placeholder="mm/dd/yyyy" data-date-picker-input />
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" data-date-picker-icon="true" class="bx--date-picker__icon" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true"><path d="M26,4h-4V2h-2v2h-8V2h-2v2H6C4.9,4,4,4.9,4,6v20c0,1.1,0.9,2,2,2h20c1.1,0,2-0.9,2-2V6C28,4.9,27.1,4,26,4z M26,26H6V12h20	V26z M26,10H6V6h4v2h2V6h8v2h2V6h4V10z"></path></svg>
      </div>
      <div class="bx--form-requirement">
        Invalid date format.
      </div>
    </div>
  </div>
</div>
`}},
{
displayName:"single-light",
picture:{
src:"./pictures/date-picker/single-light.png",
width:288,
height:148},
snippet:{
html:`


<div class="bx--form-item">
  <div data-date-picker data-date-picker-type="single"
    class="bx--date-picker bx--date-picker--single bx--date-picker--light">
    <div class="bx--date-picker-container">
      <label for="date-picker-3" class="bx--label">Date Picker label</label>
      <div class="bx--date-picker-input__wrapper">
        <input type="text" id="date-picker-3" class="bx--date-picker__input"
          pattern="\d{1,2}/\d{1,2}/\d{4}" placeholder="mm/dd/yyyy" data-date-picker-input />
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" data-date-picker-icon="true" class="bx--date-picker__icon" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true"><path d="M26,4h-4V2h-2v2h-8V2h-2v2H6C4.9,4,4,4.9,4,6v20c0,1.1,0.9,2,2,2h20c1.1,0,2-0.9,2-2V6C28,4.9,27.1,4,26,4z M26,26H6V12h20	V26z M26,10H6V6h4v2h2V6h8v2h2V6h4V10z"></path></svg>
      </div>
    </div>
  </div>
</div>


<div class="bx--form-item">
  <div data-date-picker data-date-picker-type="single"
    class="bx--date-picker bx--date-picker--single bx--date-picker--light">
    <div class="bx--date-picker-container">
      <label for="date-picker-3" class="bx--label">Date Picker label</label>
      <div class="bx--date-picker-input__wrapper">
        <input data-invalid type="text" id="date-picker-3" class="bx--date-picker__input"
          pattern="\d{1,2}/\d{1,2}/\d{4}" placeholder="mm/dd/yyyy" data-date-picker-input />
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" data-date-picker-icon="true" class="bx--date-picker__icon" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true"><path d="M26,4h-4V2h-2v2h-8V2h-2v2H6C4.9,4,4,4.9,4,6v20c0,1.1,0.9,2,2,2h20c1.1,0,2-0.9,2-2V6C28,4.9,27.1,4,26,4z M26,26H6V12h20	V26z M26,10H6V6h4v2h2V6h8v2h2V6h4V10z"></path></svg>
      </div>
      <div class="bx--form-requirement">
        Invalid date format.
      </div>
    </div>
  </div>
</div>
`}},
{
displayName:"single-light-no-label",
picture:{
src:"./pictures/date-picker/single-light-no-label.png",
width:288,
height:100},
snippet:{
html:`


<div class="bx--form-item">
  <div data-date-picker data-date-picker-type="single"
    class="bx--date-picker bx--date-picker--single bx--date-picker--light bx--date-picker--nolabel">
    <div class="bx--date-picker-container">
      <div class="bx--date-picker-input__wrapper">
        <input type="text" id="date-picker-3" class="bx--date-picker__input"
          pattern="\d{1,2}/\d{1,2}/\d{4}" placeholder="mm/dd/yyyy" data-date-picker-input />
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" data-date-picker-icon="true" class="bx--date-picker__icon" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true"><path d="M26,4h-4V2h-2v2h-8V2h-2v2H6C4.9,4,4,4.9,4,6v20c0,1.1,0.9,2,2,2h20c1.1,0,2-0.9,2-2V6C28,4.9,27.1,4,26,4z M26,26H6V12h20	V26z M26,10H6V6h4v2h2V6h8v2h2V6h4V10z"></path></svg>
      </div>
    </div>
  </div>
</div>


<div class="bx--form-item">
  <div data-date-picker data-date-picker-type="single"
    class="bx--date-picker bx--date-picker--single bx--date-picker--light bx--date-picker--nolabel">
    <div class="bx--date-picker-container">
      <div class="bx--date-picker-input__wrapper">
        <input data-invalid type="text" id="date-picker-3" class="bx--date-picker__input"
          pattern="\d{1,2}/\d{1,2}/\d{4}" placeholder="mm/dd/yyyy" data-date-picker-input />
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" data-date-picker-icon="true" class="bx--date-picker__icon" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true"><path d="M26,4h-4V2h-2v2h-8V2h-2v2H6C4.9,4,4,4.9,4,6v20c0,1.1,0.9,2,2,2h20c1.1,0,2-0.9,2-2V6C28,4.9,27.1,4,26,4z M26,26H6V12h20	V26z M26,10H6V6h4v2h2V6h8v2h2V6h4V10z"></path></svg>
      </div>
      <div class="bx--form-requirement">
        Invalid date format.
      </div>
    </div>
  </div>
</div>
`}},
{
displayName:"single-no-label",
picture:{
src:"./pictures/date-picker/single-no-label.png",
width:288,
height:100},
snippet:{
html:`


<div class="bx--form-item">
  <div data-date-picker data-date-picker-type="single"
    class="bx--date-picker bx--date-picker--single bx--date-picker--nolabel">
    <div class="bx--date-picker-container">
      <div class="bx--date-picker-input__wrapper">
        <input type="text" id="date-picker-3" class="bx--date-picker__input"
          pattern="\d{1,2}/\d{1,2}/\d{4}" placeholder="mm/dd/yyyy" data-date-picker-input />
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" data-date-picker-icon="true" class="bx--date-picker__icon" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true"><path d="M26,4h-4V2h-2v2h-8V2h-2v2H6C4.9,4,4,4.9,4,6v20c0,1.1,0.9,2,2,2h20c1.1,0,2-0.9,2-2V6C28,4.9,27.1,4,26,4z M26,26H6V12h20	V26z M26,10H6V6h4v2h2V6h8v2h2V6h4V10z"></path></svg>
      </div>
    </div>
  </div>
</div>


<div class="bx--form-item">
  <div data-date-picker data-date-picker-type="single"
    class="bx--date-picker bx--date-picker--single bx--date-picker--nolabel">
    <div class="bx--date-picker-container">
      <div class="bx--date-picker-input__wrapper">
        <input data-invalid type="text" id="date-picker-3" class="bx--date-picker__input"
          pattern="\d{1,2}/\d{1,2}/\d{4}" placeholder="mm/dd/yyyy" data-date-picker-input />
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" data-date-picker-icon="true" class="bx--date-picker__icon" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true"><path d="M26,4h-4V2h-2v2h-8V2h-2v2H6C4.9,4,4,4.9,4,6v20c0,1.1,0.9,2,2,2h20c1.1,0,2-0.9,2-2V6C28,4.9,27.1,4,26,4z M26,26H6V12h20	V26z M26,10H6V6h4v2h2V6h8v2h2V6h4V10z"></path></svg>
      </div>
      <div class="bx--form-requirement">
        Invalid date format.
      </div>
    </div>
  </div>
</div>
`}}
]