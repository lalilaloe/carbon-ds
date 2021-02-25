export default {
    displayName: "toggle",
    name: "toggle",
    homepage: "https://www.carbondesignsystem.com/components/toggle"
}

export const variants = [
{
displayName:"toggle",
picture:{
src:"./pictures/toggle/toggle.png",
width:136,
height:192},
snippet:{
html:`

<div class="bx--form-item">
  <input class="bx--toggle-input" id="toggle0" type="checkbox">
  <label class="bx--toggle-input__label" for="toggle0" aria-label="example toggle with state indicator text">
    <span class="bx--toggle__switch">
      <span class="bx--toggle__text--off" aria-hidden="true">Off</span>
      <span class="bx--toggle__text--on" aria-hidden="true">On</span>
    </span>
  </label>
</div>

<div class="bx--form-item">
  <input class="bx--toggle-input" id="toggle1" type="checkbox">
  <label class="bx--toggle-input__label" for="toggle1">
    Toggle with visible label
    <span class="bx--toggle__switch">
      <span class="bx--toggle__text--off" aria-hidden="true">Off</span>
      <span class="bx--toggle__text--on" aria-hidden="true">On</span>
    </span>
  </label>
</div>

<div class="bx--form-item">
  <input class="bx--toggle-input" id="toggle3" type="checkbox" disabled>
  <label class="bx--toggle-input__label" for="toggle3"
    aria-label="example disabled toggle with state indicator text">
    <span class="bx--toggle__switch">
      <span class="bx--toggle__text--off" aria-hidden="true">Off</span>
      <span class="bx--toggle__text--on" aria-hidden="true">On</span>
    </span>
  </label>
</div>

<div class="bx--form-item">
  <input class="bx--toggle-input" id="toggle4" type="checkbox" disabled>
  <label class="bx--toggle-input__label" for="toggle4">
    Toggle with visible label
    <span class="bx--toggle__switch">
      <span class="bx--toggle__text--off" aria-hidden="true">Off</span>
      <span class="bx--toggle__text--on" aria-hidden="true">On</span>
    </span>
  </label>
</div>
`}},
{
displayName:"small",
picture:{
src:"./pictures/toggle/small.png",
width:136,
height:160},
snippet:{
html:`

<div class="bx--form-item">
  <input class="bx--toggle-input bx--toggle-input--small" id="smalltoggle1" type="checkbox">
  <label class="bx--toggle-input__label" for="smalltoggle1"
    aria-label="example toggle with state indicator text">
    <span class="bx--toggle__switch">
      <svg class="bx--toggle__check" width="6px" height="5px" viewBox="0 0 6 5">
        <path d="M2.2 2.7L5 0 6 1 2.2 5 0 2.7 1 1.5z" />
      </svg>
      <span class="bx--toggle__text--off" aria-hidden="true">Off</span>
      <span class="bx--toggle__text--on" aria-hidden="true">On</span>
    </span>
  </label>
</div>

<div class="bx--form-item">
  <input class="bx--toggle-input bx--toggle-input--small" id="smalltoggle2" type="checkbox">
  <label class="bx--toggle-input__label" for="smalltoggle2">
    Toggle with visible label
    <span class="bx--toggle__switch">
      <svg class="bx--toggle__check" width="6px" height="5px" viewBox="0 0 6 5">
        <path d="M2.2 2.7L5 0 6 1 2.2 5 0 2.7 1 1.5z" />
      </svg>
      <span class="bx--toggle__text--off" aria-hidden="true">Off</span>
      <span class="bx--toggle__text--on" aria-hidden="true">On</span>
    </span>
  </label>
</div>

<div class="bx--form-item">
  <input class="bx--toggle-input bx--toggle-input--small" id="smalltoggle4" type="checkbox" disabled>
  <label class="bx--toggle-input__label" for="smalltoggle4"
    aria-label="example disabled toggle with state indicator text">
    <span class="bx--toggle__switch">
      <svg class="bx--toggle__check" width="6px" height="5px" viewBox="0 0 6 5">
        <path d="M2.2 2.7L5 0 6 1 2.2 5 0 2.7 1 1.5z" />
      </svg>
      <span class="bx--toggle__text--off" aria-hidden="true">Off</span>
      <span class="bx--toggle__text--on" aria-hidden="true">On</span>
    </span>
  </label>
</div>

<div class="bx--form-item">
  <input class="bx--toggle-input bx--toggle-input--small" id="smalltoggle5" type="checkbox" disabled>
  <label class="bx--toggle-input__label" for="smalltoggle5">
    Toggle with visible label
    <span class="bx--toggle__switch">
      <svg class="bx--toggle__check" width="6px" height="5px" viewBox="0 0 6 5">
        <path d="M2.2 2.7L5 0 6 1 2.2 5 0 2.7 1 1.5z" />
      </svg>
      <span class="bx--toggle__text--off" aria-hidden="true">Off</span>
      <span class="bx--toggle__text--on" aria-hidden="true">On</span>
    </span>
  </label>
</div>
`}}
]