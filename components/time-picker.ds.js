export default {
    displayName: "time-picker",
    name: "time-picker",
    homepage: "https://www.carbondesignsystem.com/components/time-picker"
}

export const variants = [
{
displayName:"time-picker",
picture:{
src:"./pictures/time-picker/time-picker.png",
width:324,
height:296},
snippet:{
html:`

<div class="bx--form-item">
  <label for="time-picker-1" class="bx--label">Select a time</label>
  <div class="bx--time-picker">
    <div class="bx--time-picker__input">
      <input id="time-picker-1" type="text" class="bx--text-input bx--time-picker__input-field"
        pattern="(1[012]|[1-9]):[0-5][0-9](\\s)?" placeholder="hh:mm" maxlength="5" />
    </div>
    <div class="bx--time-picker__select bx--select">
      <label for="select-id-1" class="bx--label bx--visually-hidden">Select AM/PM</label>
      <select id="select-id-1" class="bx--select-input">
        <option class="bx--select-option" value="AM">AM</option>
        <option class="bx--select-option" value="PM">PM</option>
      </select>
      <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--select__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
    </div>
    <div class="bx--time-picker__select bx--select">
      <label for="select-id-2" class="bx--label bx--visually-hidden">Select time
        zone</label>
      <select id="select-id-2" class="bx--select-input">
        <option class="bx--select-option" value="option-1">Time zone 1</option>
        <option class="bx--select-option" value="option-2">Time zone 2</option>
        <option class="bx--select-option" value="option-3">Time zone 3</option>
      </select>
      <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--select__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
    </div>
  </div>
</div>
<div class="bx--form-item">
  <label for="time-picker-2" class="bx--label">Select a time</label>
  <div class="bx--time-picker" data-invalid>
    <div class="bx--time-picker__input">
      <input id="time-picker-2" type="text" class="bx--text-input bx--time-picker__input-field"
        pattern="(1[012]|[1-9]):[0-5][0-9](\\s)?" placeholder="hh:mm" maxlength="5" />
    </div>
    <div class="bx--time-picker__select bx--select">
      <label for="select-id-3" class="bx--label bx--visually-hidden">Select AM/PM</label>
      <select id="select-id-3" class="bx--select-input">
        <option class="bx--select-option" value="AM">AM</option>
        <option class="bx--select-option" value="PM">PM</option>
      </select>
      <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--select__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
    </div>
    <div class="bx--time-picker__select bx--select">
      <label for="select-id-4" class="bx--label bx--visually-hidden">Select time
        zone</label>
      <select id="select-id-4" class="bx--select-input">
        <option class="bx--select-option" value="option-1">Time zone 1</option>
        <option class="bx--select-option" value="option-2">Time zone 2</option>
        <option class="bx--select-option" value="option-3">Time zone 3</option>
      </select>
      <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--select__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
    </div>
  </div>
  <div class="bx--form-requirement">
    Invalid time.
  </div>
</div>
<div class="bx--form-item">
  <label for="time-picker-3" class="bx--label bx--label--disabled">Select a time</label>
  <div class="bx--time-picker">
    <div class="bx--time-picker__input">
      <input id="time-picker-3" type="text" class="bx--text-input bx--time-picker__input-field"
        pattern="(1[012]|[1-9]):[0-5][0-9](\\s)?" placeholder="hh:mm" maxlength="5" disabled />
    </div>
    <div class="bx--time-picker__select bx--select">
      <label for="select-id-5" class="bx--label bx--visually-hidden">Select AM/PM</label>
      <select id="select-id-5" class="bx--select-input" disabled>
        <option class="bx--select-option" value="AM">AM</option>
        <option class="bx--select-option" value="PM">PM</option>
      </select>
      <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--select__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
    </div>
    <div class="bx--time-picker__select bx--select">
      <label for="select-id-6" class="bx--label bx--visually-hidden">Select time
        zone</label>
      <select id="select-id-6" class="bx--select-input" disabled>
        <option class="bx--select-option" value="option-1">Time zone 1</option>
        <option class="bx--select-option" value="option-2">Time zone 2</option>
        <option class="bx--select-option" value="option-3">Time zone 3</option>
      </select>
      <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--select__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
    </div>
  </div>
</div>
<div class="bx--form-item">
  <label for="time-picker-4" class="bx--label bx--label--disabled">Select a time</label>
  <div class="bx--time-picker" data-invalid>
    <div class="bx--time-picker__input">
      <input id="time-picker-4" type="text" class="bx--text-input bx--time-picker__input-field"
        pattern="(1[012]|[1-9]):[0-5][0-9](\\s)?" placeholder="hh:mm" maxlength="5" disabled />
    </div>
    <div class="bx--time-picker__select bx--select">
      <label for="select-id-7" class="bx--label bx--visually-hidden">Select AM/PM</label>
      <select id="select-id-7" class="bx--select-input" disabled>
        <option class="bx--select-option" value="AM">AM</option>
        <option class="bx--select-option" value="PM">PM</option>
      </select>
      <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--select__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
    </div>
    <div class="bx--time-picker__select bx--select">
      <label for="select-id-8" class="bx--label bx--visually-hidden">Select time
        zone</label>
      <select id="select-id-8" class="bx--select-input" disabled>
        <option class="bx--select-option" value="option-1">Time zone 1</option>
        <option class="bx--select-option" value="option-2">Time zone 2</option>
        <option class="bx--select-option" value="option-3">Time zone 3</option>
      </select>
      <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--select__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
    </div>
  </div>
  <div class="bx--form-requirement">
    Invalid time.
  </div>
</div>
`}},
{
displayName:"light",
picture:{
src:"./pictures/time-picker/light.png",
width:324,
height:296},
snippet:{
html:`

<div class="bx--form-item">
  <label for="time-picker-5" class="bx--label">Select a time</label>
  <div class="bx--time-picker bx--time-picker--light">
    <div class="bx--time-picker__input">
      <input id="time-picker-5" type="text"
        class="bx--text-input bx--text-input--light bx--time-picker__input-field"
        pattern="(1[012]|[1-9]):[0-5][0-9](\\s)?" placeholder="hh:mm" maxlength="5" />
    </div>
    <div class="bx--time-picker__select bx--select bx--select--light">
      <label for="select-id-9" class="bx--label bx--visually-hidden">Select AM/PM</label>
      <select id="select-id-9" class="bx--select-input">
        <option class="bx--select-option" value="AM">AM</option>
        <option class="bx--select-option" value="PM">PM</option>
      </select>
      <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--select__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
    </div>
    <div class="bx--time-picker__select bx--select bx--select--light">
      <label for="select-id-10" class="bx--label bx--visually-hidden">Select time
        zone</label>
      <select id="select-id-10" class="bx--select-input">
        <option class="bx--select-option" value="option-1">Time zone 1</option>
        <option class="bx--select-option" value="option-2">Time zone 2</option>
        <option class="bx--select-option" value="option-3">Time zone 3</option>
      </select>
      <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--select__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
    </div>
  </div>
</div>
<div class="bx--form-item">
  <div class="bx--time-picker bx--time-picker--light" data-invalid>
    <div class="bx--time-picker__input">
      <label for="time-picker-6" class="bx--label">Select a time</label>
      <input id="time-picker-6" type="text"
        class="bx--text-input bx--text-input--light bx--time-picker__input-field"
        pattern="(1[012]|[1-9]):[0-5][0-9](\\s)?" placeholder="hh:mm" maxlength="5" />
    </div>
    <div class="bx--time-picker__select bx--select bx--select--light">
      <label for="select-id-11" class="bx--label bx--visually-hidden">Select AM/PM</label>
      <select id="select-id-11" class="bx--select-input">
        <option class="bx--select-option" value="AM">AM</option>
        <option class="bx--select-option" value="PM">PM</option>
      </select>
      <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--select__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
    </div>
    <div class="bx--time-picker__select bx--select bx--select--light">
      <label for="select-id-12" class="bx--label bx--visually-hidden">Select time
        zone</label>
      <select id="select-id-12" class="bx--select-input">
        <option class="bx--select-option" value="option-1">Time zone 1</option>
        <option class="bx--select-option" value="option-2">Time zone 2</option>
        <option class="bx--select-option" value="option-3">Time zone 3</option>
      </select>
      <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--select__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
    </div>
  </div>
  <div class="bx--form-requirement">
    Invalid time.
  </div>
</div>
<div class="bx--form-item">
  <div class="bx--time-picker bx--time-picker--light">
    <div class="bx--time-picker__input">
      <label for="time-picker-7" class="bx--label bx--label--disabled">Select a time</label>
      <input id="time-picker-7" type="text"
        class="bx--text-input bx--text-input--light bx--time-picker__input-field"
        pattern="(1[012]|[1-9]):[0-5][0-9](\\s)?" placeholder="hh:mm" maxlength="5" disabled />
    </div>
    <div class="bx--time-picker__select bx--select bx--select--light">
      <label for="select-id-13" class="bx--label bx--visually-hidden">Select AM/PM</label>
      <select id="select-id-13" class="bx--select-input" disabled>
        <option class="bx--select-option" value="AM">AM</option>
        <option class="bx--select-option" value="PM">PM</option>
      </select>
      <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--select__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
    </div>
    <div class="bx--time-picker__select bx--select bx--select--light">
      <label for="select-id-14" class="bx--label bx--visually-hidden">Select time
        zone</label>
      <select id="select-id-14" class="bx--select-input" disabled>
        <option class="bx--select-option" value="option-1">Time zone 1</option>
        <option class="bx--select-option" value="option-2">Time zone 2</option>
        <option class="bx--select-option" value="option-3">Time zone 3</option>
      </select>
      <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--select__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
    </div>
  </div>
</div>
<div class="bx--form-item">
  <div class="bx--time-picker bx--time-picker--light" data-invalid>
    <div class="bx--time-picker__input">
      <label for="time-picker-8" class="bx--label bx--label--disabled">Select a time</label>
      <input id="time-picker-8" type="text"
        class="bx--text-input bx--text-input--light bx--time-picker__input-field"
        pattern="(1[012]|[1-9]):[0-5][0-9](\\s)?" placeholder="hh:mm" maxlength="5" disabled />
    </div>
    <div class="bx--time-picker__select bx--select bx--select--light">
      <label for="select-id-15" class="bx--label bx--visually-hidden">Select AM/PM</label>
      <select id="select-id-15" class="bx--select-input" disabled>
        <option class="bx--select-option" value="AM">AM</option>
        <option class="bx--select-option" value="PM">PM</option>
      </select>
      <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--select__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
    </div>
    <div class="bx--time-picker__select bx--select bx--select--light">
      <label for="select-id-16" class="bx--label bx--visually-hidden">Select time
        zone</label>
      <select id="select-id-16" class="bx--select-input" disabled>
        <option class="bx--select-option" value="option-1">Time zone 1</option>
        <option class="bx--select-option" value="option-2">Time zone 2</option>
        <option class="bx--select-option" value="option-3">Time zone 3</option>
      </select>
      <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--select__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
    </div>
  </div>
  <div class="bx--form-requirement">
    Invalid time.
  </div>
</div>
`}}
]