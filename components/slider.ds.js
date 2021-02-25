export default {
    displayName: "slider",
    name: "slider",
    homepage: "https://www.carbondesignsystem.com/components/slider"
}

export const variants = [
{
displayName:"slider",
picture:{
src:"./pictures/slider/slider.png",
width:346,
height:64},
snippet:{
html:`

<div class="bx--form-item">
  <label class="bx--label ">
    Slider label
  </label>
  <div class="bx--slider-container">
    <label id="slider-input-box_bottom-range-label" class="bx--slider__range-label">0</label>
    <div class="bx--slider " data-slider data-slider-input-box="#slider-input-box">
      <div class="bx--slider__thumb" tabindex="0"></div>
      <div class="bx--slider__track"></div>
      <div class="bx--slider__filled-track"></div>
      <input aria-label="slider" id="slider" class="bx--slider__input" type="range" step="1" min="0" max="100" value="25">
    </div>
    <label id="slider-input-box_top-range-label" class="bx--slider__range-label">100</label>
    <input id="slider-input-box" aria-labelledby="slider-input-box_bottom-range-label slider-input-box_top-range-label" type="number" class="bx--text-input bx--slider-text-input" placeholder="0" value="25">
  </div>
</div>
`}},
{
displayName:"disabled",
picture:{
src:"./pictures/slider/disabled.png",
width:346,
height:64},
snippet:{
html:`

<div class="bx--form-item">
  <label class="bx--label bx--label--disabled">
    Slider label
  </label>
  <div class="bx--slider-container">
    <label id="slider-input-box_bottom-range-label" class="bx--slider__range-label">0</label>
    <div class="bx--slider  bx--slider--disabled" data-slider data-slider-input-box="#slider-input-box">
      <div class="bx--slider__thumb" tabindex="0"></div>
      <div class="bx--slider__track"></div>
      <div class="bx--slider__filled-track"></div>
      <input aria-label="slider" id="slider" class="bx--slider__input" type="range" step="1" min="0" max="100" value="50">
    </div>
    <label id="slider-input-box_top-range-label" class="bx--slider__range-label">100</label>
    <input id="slider-input-box" aria-labelledby="slider-input-box_bottom-range-label slider-input-box_top-range-label" type="number" class="bx--text-input bx--slider-text-input" placeholder="0" value="50">
  </div>
</div>
`}},
{
displayName:"light",
picture:{
src:"./pictures/slider/light.png",
width:346,
height:64},
snippet:{
html:`

<div class="bx--form-item">
  <label class="bx--label ">
    Slider label
  </label>
  <div class="bx--slider-container">
    <label id="slider-input-box-light_bottom-range-label" class="bx--slider__range-label">0</label>
    <div class="bx--slider " data-slider data-slider-input-box="#slider-input-box-light">
      <div class="bx--slider__thumb" tabindex="0"></div>
      <div class="bx--slider__track"></div>
      <div class="bx--slider__filled-track"></div>
      <input aria-label="slider" id="slider" class="bx--slider__input" type="range" step="1" min="0" max="100" value="75">
    </div>
    <label id="slider-input-box-light_top-range-label" class="bx--slider__range-label">100</label>
    <input id="slider-input-box-light" aria-labelledby="slider-input-box-light_bottom-range-label slider-input-box-light_top-range-label" type="number" class="bx--text-input bx--slider-text-input bx--text-input--light" placeholder="0" value="75">
  </div>
</div>
`}}
]