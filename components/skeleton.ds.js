export default {
    displayName: "skeleton",
    name: "skeleton",
    homepage: "https://www.carbondesignsystem.com/components/skeleton"
}

export const variants = [
{
displayName:"skeleton",
picture:{
src:"./pictures/skeleton/skeleton.png",
width:480,
height:1414},
snippet:{
html:`


<p>Skeleton Text</p>
<div class="bx--skeleton__text"></div>
<div class="bx--skeleton__text bx--skeleton__heading"></div>

<p>Button</p>
<button class="bx--skeleton bx--btn" type="button"></button>
&nbsp;<a class="bx--skeleton bx--btn" href="#" role="button"></a>
&nbsp;<button class="bx--skeleton bx--btn bx--btn--sm" type="button"></button>

<p>Code Snippet</p>
<div class="bx--snippet bx--skeleton bx--snippet--single">
  <div class="bx--snippet-container"><span></span></div>
</div>
<div class="bx--snippet bx--skeleton bx--snippet--multi">
  <div class="bx--snippet-container"><span></span><span></span><span></span></div>
</div>

<p>Label</p>
<label class="bx--label bx--skeleton"></label>

<p>Breadcrumb</p>
<div class="bx--breadcrumb bx--skeleton">
    <div class="bx--breadcrumb-item">
      <a href="/#" class="bx--link">&nbsp;</a>
    </div>
    <div class="bx--breadcrumb-item">
      <a href="/#" class="bx--link">&nbsp;</a>
    </div>
    <div class="bx--breadcrumb-item">
      <a href="/#" class="bx--link">&nbsp;</a>
    </div>
</div>

<p>Dropdown</p>
<div class="bx--skeleton bx--dropdown-v2 bx--list-box bx--form-item">
  <div role="button" class="bx--list-box__field">
    <span class="bx--list-box__label"></span>
  </div>
</div>

<p>Progress Indicator</p>
<ul class="bx--progress bx--skeleton">
</ul>

<p>Toggle</p>
<div class="bx--form-item">
  <input type="checkbox" class="bx--toggle bx--skeleton" value="on">
  <label class="bx--toggle__label bx--skeleton">
    <span class="bx--toggle__text--left"></span><span class="bx--toggle__appearance"></span><span class="bx--toggle__text--right"></span>
  </label>
</div>

<p>Small Toggle</p>
<div class="bx--form-item">
  <input type="checkbox" class="bx--toggle bx--toggle--small bx--skeleton" value="on">
  <label class="bx--toggle__label bx--skeleton"><span class="bx--toggle__appearance"><svg class="bx--toggle__check" width="6px" height="5px" viewBox="0 0 6 5"><path d="M2.2403 2.7299L4.9245 0 6 1.1117 2.2384 5 0 2.6863 1.0612 1.511z"></path></svg></span>
  </label>
</div>

<p>Slider</p>
<div class="bx--form-item">
  <label class="bx--label bx--skeleton"></label>
  <div class="bx--slider-container bx--skeleton"><span class="bx--slider__range-label"></span>
    <div class="bx--slider">
      <div class="bx--slider__track"></div>
      <div class="bx--slider__filled-track"></div>
      <div class="bx--slider__thumb"></div>
    </div><span class="bx--slider__range-label"></span>
  </div>
</div>

<p>Tag</p>
<span class="bx--tag bx--skeleton"></span>

<p>Tabs</p>
<nav class="bx--tabs bx--skeleton">
  <div class="bx--tabs-trigger"><a href="javascript:void(0)" class="bx--tabs-trigger-text">&nbsp;</a>
    <svg width="10" height="5" viewBox="0 0 10 5" fill-rule="evenodd">
      <path d="M10 0L5 5 0 0z"></path>
    </svg>
  </div>
  <ul class="bx--tabs__nav bx--tabs__nav--hidden">
      <li class="bx--tabs__nav-item"><a class="bx--tabs__nav-link" href="javascript:void(0)">&nbsp;</a>
      </li>
      <li class="bx--tabs__nav-item"><a class="bx--tabs__nav-link" href="javascript:void(0)">&nbsp;</a>
      </li>
      <li class="bx--tabs__nav-item bx--tabs__nav-item--selected"><a class="bx--tabs__nav-link" href="javascript:void(0)">&nbsp;</a>
      </li>
  </ul>
</nav>

<p>Icon</p>
<div class="bx--icon--skeleton"></div>

<p>Select</p>
<div class="bx--form-item">
  <label class="bx--label bx--skeleton"></label>
  <div class="bx--select bx--skeleton">
    <select class="bx--select-input"></select>
  </div>
</div>

<p>Data Table</p>
<div class="bx--skeleton bx--data-table-container">
  <div class="bx--data-table-header">
    <h4 class="bx--data-table-header__title"></h4>
    <p class="bx--data-table-header__description"></p>
  </div>
  <section aria-label="data table toolbar" class="bx--table-toolbar">
    <div class="bx--toolbar-content">
      <button class="bx--skeleton bx--btn bx--btn--sm" type="button"></button>
    </div>
  </section>
  <table class="bx--skeleton bx--data-table">
    <thead>
      <tr>
        <th><span></span></th>
        <th><span></span></th>
        <th><span></span></th>
        <th><span></span></th>
        <th><span></span></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span></span></td>
        <td><span></span></td>
        <td><span></span></td>
        <td><span></span></td>
        <td><span></span></td>
      </tr>
      <tr>
        <td><span></span></td>
        <td><span></span></td>
        <td><span></span></td>
        <td><span></span></td>
        <td><span></span></td>
      </tr>
      <tr>
        <td><span></span></td>
        <td><span></span></td>
        <td><span></span></td>
        <td><span></span></td>
        <td><span></span></td>
      </tr>
      <tr>
        <td><span></span></td>
        <td><span></span></td>
        <td><span></span></td>
        <td><span></span></td>
        <td><span></span></td>
      </tr>
      <tr>
        <td><span></span></td>
        <td><span></span></td>
        <td><span></span></td>
        <td><span></span></td>
        <td><span></span></td>
      </tr>
    </tbody>
  </table>
</div>`}}
]