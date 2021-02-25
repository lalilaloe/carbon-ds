export default {
    displayName: "pagination",
    name: "pagination",
    homepage: "https://www.carbondesignsystem.com/components/pagination"
}

export const variants = [
{
displayName:"pagination",
picture:{
src:"./pictures/pagination/pagination.png",
width:16,
height:49},
snippet:{
html:`

<div class="bx--pagination" data-pagination>
  <div class="bx--pagination__left">
    <label id="select-id-pagination-count-label"
      class="bx--pagination__text"
      for="select-id-pagination-count">
      Items per page:
    </label>
    <div class="bx--select bx--select--inline bx--select__item-count">
      <select class="bx--select-input"
        id="select-id-pagination-count"
        aria-label="Items per page" tabindex="0" data-items-per-page>
        <option class="bx--select-option" value="10">
          10
        </option>
        <option class="bx--select-option" value="20">
          20
        </option>
        <option class="bx--select-option" value="30">
          30
        </option>
        <option class="bx--select-option" value="40">
          40
        </option>
        <option class="bx--select-option" value="50">
          50
        </option>
      </select>
      <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--select__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
    </div>
    <span class="bx--pagination__text">
      <span data-displayed-item-range>1 – 10</span> of
      <span data-total-items>
        40
      </span> items
    </span>
  </div>
  <div class="bx--pagination__right">
    <div class="bx--select bx--select--inline bx--select__page-number">
      <select class="bx--select-input"
        id="select-id-pagination-page"
        aria-label="page number, of 5 pages" tabindex="0" data-page-number-input>
        <option class="bx--select-option" value="1">
          1
        </option>
        <option class="bx--select-option" value="2">
          2
        </option>
        <option class="bx--select-option" value="3">
          3
        </option>
        <option class="bx--select-option" value="4">
          4
        </option>
        <option class="bx--select-option" value="5">
          5
        </option>
      </select>
      <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--select__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
    </div>
    <label id="select-id-pagination-page-label"
      class="bx--pagination__text"
      for="select-id-pagination-page">
      of 5 pages
    </label>
    <button
      class="bx--pagination__button bx--pagination__button--backward "
      tabindex="0" data-page-backward aria-label="previous page">
      <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--pagination__nav-arrow" width="20" height="20" viewBox="0 0 32 32" aria-hidden="true"><path d="M20 24L10 16 20 8z"></path></svg>
    </button>
    <button
      class="bx--pagination__button bx--pagination__button--forward "
      tabindex="0" data-page-forward aria-label="next page">
      <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--pagination__nav-arrow" width="20" height="20" viewBox="0 0 32 32" aria-hidden="true"><path d="M12 8L22 16 12 24z"></path></svg>
    </button>
  </div>
</div>
`}},
{
displayName:"disabled-pagination-buttons",
picture:{
src:"./pictures/pagination/disabled-pagination-buttons.png",
width:16,
height:49},
snippet:{
html:`

<div class="bx--pagination" data-pagination>
  <div class="bx--pagination__left">
    <label id="select-id-pagination-count-label--disabled-example"
      class="bx--pagination__text"
      for="select-id-pagination-count--disabled-example">
      Items per page:
    </label>
    <div class="bx--select bx--select--inline bx--select__item-count">
      <select class="bx--select-input"
        id="select-id-pagination-count--disabled-example"
        aria-label="Items per page" tabindex="0" data-items-per-page>
        <option class="bx--select-option" value="10">
          10
        </option>
      </select>
      <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--select__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
    </div>
    <span class="bx--pagination__text">
      <span data-displayed-item-range>1 – 10</span> of
      <span data-total-items>
        10
      </span> items
    </span>
  </div>
  <div class="bx--pagination__right">
    <div class="bx--select bx--select--inline bx--select__page-number">
      <select class="bx--select-input"
        id="select-id-pagination-page--disabled-example"
        aria-label="page number, of 1 pages" tabindex="0" data-page-number-input>
        <option class="bx--select-option" value="1">
          1
        </option>
      </select>
      <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--select__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path></svg>
    </div>
    <label id="select-id-pagination-page-label--disabled-example"
      class="bx--pagination__text"
      for="select-id-pagination-page--disabled-example">
      of 1 pages
    </label>
    <button
      class="bx--pagination__button bx--pagination__button--backward bx--pagination__button--no-index"
      tabindex="0" data-page-backward aria-label="previous page">
      <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--pagination__nav-arrow" width="20" height="20" viewBox="0 0 32 32" aria-hidden="true"><path d="M20 24L10 16 20 8z"></path></svg>
    </button>
    <button
      class="bx--pagination__button bx--pagination__button--forward bx--pagination__button--no-index"
      tabindex="0" data-page-forward aria-label="next page">
      <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--pagination__nav-arrow" width="20" height="20" viewBox="0 0 32 32" aria-hidden="true"><path d="M12 8L22 16 12 24z"></path></svg>
    </button>
  </div>
</div>
`}}
]