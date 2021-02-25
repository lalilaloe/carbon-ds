export default {
    displayName: "tile",
    name: "tile",
    homepage: "https://www.carbondesignsystem.com/components/tile"
}

export const variants = [
{
displayName:"tile",
picture:{
src:"./pictures/tile/tile.png",
width:128,
height:64},
snippet:{
html:`

<div class="bx--tile"></div>
`}},
{
displayName:"clickable",
picture:{
src:"./pictures/tile/clickable.png",
width:128,
height:64},
snippet:{
html:`

<a data-tile="clickable" class="bx--tile bx--tile--clickable" tabindex="0"></a>
`}},
{
displayName:"expandable",
picture:{
src:"./pictures/tile/expandable.png",
width:128,
height:512},
snippet:{
html:`

<div data-tile="expandable" class="bx--tile bx--tile--expandable" tabindex="0">
  <button aria-label="expand menu" class="bx--tile__chevron">
    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
  </button>
  <div class="bx--tile-content">
    <span data-tile-atf class="bx--tile-content__above-the-fold">
      
    </span>
    <span class="bx--tile-content__below-the-fold">
      
    </span>
  </div>
</div>
`}},
{
displayName:"grid",
picture:{
src:"./pictures/tile/grid.png",
width:583,
height:1400},
snippet:{
html:`

<div class="bx--grid">

  <div class="bx--tile-container" style="width: 100%">
    <div class="bx--row">
      <div class="bx--col bx--col-md-12">
        <div data-tile="expandable" class="bx--tile bx--tile--expandable" tabindex="0">
          <button class="bx--tile__chevron">
            <svg width="12" height="7" viewBox="0 0 12 7">
              <path fill-rule="nonzero" d="M6.002 5.55L11.27 0l.726.685L6.003 7 0 .685.726 0z" />
            </svg>
          </button>
          <div class="bx--tile-content">
            <span data-tile-atf class="bx--tile-content__above-the-fold" style="height: 200px">
              
              <h2>Above the fold content here</h2>
            </span>
            <span class="bx--tile-content__below-the-fold" style="height: 400px">
              
              <h2>Below the fold content here</h2>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="bx--row">
      <div class="bx--col bx--col-sm-2">
        <label for="tile-id-1" aria-label="tile" class="bx--tile bx--tile--selectable" data-tile="selectable" tabindex="0">
          <input tabindex="-1" id="tile-id-1" class="bx--tile-input" data-tile-input value="tile" type="checkbox" name="tiles" title="tile"
          />
          <div class="bx--tile__checkmark">
            <svg width="16" height="16" viewBox="0 0 16 16">
              <path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm3.646-10.854L6.75 10.043 4.354 7.646l-.708.708 3.104 3.103 5.604-5.603-.708-.708z"
                fill-rule="evenodd" />
            </svg>
          </div>
          <div class="bx--tile-content">
            
          </div>
        </label>
      </div>
      <div class="bx--col bx--col-sm-2">
        <label for="tile-id-2" aria-label="tile-2" class="bx--tile bx--tile--selectable" data-tile="selectable" tabindex="0">
          <input tabindex="-1" id="tile-id-2" class="bx--tile-input" data-tile-input value="tile-2" type="checkbox" name="tiles" title="tile-2"
          />
          <div class="bx--tile__checkmark">
            <svg width="16" height="16" viewBox="0 0 16 16">
              <path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm3.646-10.854L6.75 10.043 4.354 7.646l-.708.708 3.104 3.103 5.604-5.603-.708-.708z"
                fill-rule="evenodd" />
            </svg>
          </div>
          <div class="bx--tile-content">
            
          </div>
        </label>
      </div>
    </div>
    <div class="bx--row">
      <div class="bx--col bx--col-md-4 bx--col-sm-4">
        <a data-tile="clickable" class="bx--tile bx--tile--clickable" tabindex="0"></a>
      </div>
      <div class="bx--col bx--col-md-4 bx--col-sm-4">
        <a data-tile="clickable" class="bx--tile bx--tile--clickable" tabindex="0"></a>
      </div>
      <div class="bx--col bx--col-md-8 bx--col-sm-4">
        <a data-tile="clickable" class="bx--tile bx--tile--clickable" tabindex="0"></a>
      </div>
    </div>
    <div class="bx--row">
      <div class="bx--col bx--col-md-4 bx--col-sm-4">
        <div class="bx--tile"></div>
      </div>
      <div class="bx--col bx--col-md-4 bx--col-sm-4">
        <div class="bx--tile"></div>
      </div>
      <div class="bx--col bx--col-md-4 bx--col-sm-4">
        <div class="bx--tile"></div>
      </div>
      <div class="bx--col bx--col-md-4 bx--col-sm-4">
        <div class="bx--tile"></div>
      </div>
    </div>
    <div class="bx--row">
      <div class="bx--col bx--col-lg-4 bx--col-md-8">
        <div class="bx--tile"></div>
      </div>
      <div class="bx--col bx--col-lg-4 bx--col-md-8">
        <div class="bx--tile"></div>
      </div>
      <div class="bx--col bx--col-lg-4 bx--col-md-8">
        <div class="bx--tile"></div>
      </div>
      <div class="bx--col bx--col-lg-4 bx--col-md-8">
        <div class="bx--tile"></div>
      </div>
    </div>
    <div class="bx--row">
      <div class="bx--col bx--col-lg-16">
        <div class="bx--tile"></div>
      </div>
    </div>
    <div class="bx--row">
      <div class="bx--col bx--col-md-5 bx--col-sm-2">
        <div class="bx--tile"></div>
      </div>
      <div class="bx--col bx--col-md-3 bx--col-sm-2">
        <div class="bx--tile"></div>
      </div>
    </div>
  </div>

</div>
`}},
{
displayName:"selectable",
picture:{
src:"./pictures/tile/selectable.png",
width:128,
height:512},
snippet:{
html:`

<input tabindex="-1" data-tile-input id="tile-id" class="bx--tile-input" value="tile" type="checkbox" name="tiles" title="tile" />
<label for="tile-id" aria-label="tile" class="bx--tile bx--tile--selectable" data-tile="selectable" tabindex="0">
  <div class="bx--tile__checkmark">
    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8,1C4.1,1,1,4.1,1,8c0,3.9,3.1,7,7,7s7-3.1,7-7C15,4.1,11.9,1,8,1z M7,11L4.3,8.3l0.9-0.8L7,9.3l4-3.9l0.9,0.8L7,11z"></path><path d="M7,11L4.3,8.3l0.9-0.8L7,9.3l4-3.9l0.9,0.8L7,11z" data-icon-path="inner-path" opacity="0"></path></svg>
  </div>
  <div class="bx--tile-content">
    
  </div>
</label>
`}}
]