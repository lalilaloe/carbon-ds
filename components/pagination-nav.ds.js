export default {
    displayName: "pagination-nav",
    name: "pagination-nav",
    homepage: "https://www.carbondesignsystem.com/components/pagination-nav"
}

export const variants = [
{
displayName:"pagination-nav",
picture:{
src:"./pictures/pagination-nav/pagination-nav.png",
width:336,
height:48},
snippet:{
html:`

<nav class="bx--pagination-nav" aria-label="pagination" data-pagination-nav>
  <ul class="bx--pagination-nav__list">
      <li class="bx--pagination-nav__list-item">
          <button
            class="bx--pagination-nav__page bx--pagination-nav__page--direction  bx--pagination-nav__page--disabled"
            data-page-previous
              aria-disabled="true"
          >
          <span class="bx--pagination-nav__accessibility-label">Previous page </span>
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--pagination-nav__icon" width="5" height="8" viewBox="0 0 5 8" aria-hidden="true"><path d="M5 8L0 4 5 0z"></path></svg>
          </button>
      </li>
      <li class="bx--pagination-nav__list-item">
            <button
              class="bx--pagination-nav__page bx--pagination-nav__page--active bx--pagination-nav__page--disabled"
              data-page="1"
              data-page-button
                data-page-active="true"
                aria-current="page"
                aria-disabled="true"
            >
            <span class="bx--pagination-nav__accessibility-label">page </span>1
            </button>
      </li>
      <li class="bx--pagination-nav__list-item">
            <button
              class="bx--pagination-nav__page"
              data-page="2"
              data-page-button
            >
            <span class="bx--pagination-nav__accessibility-label">page </span>2
            </button>
      </li>
      <li class="bx--pagination-nav__list-item">
            <button
              class="bx--pagination-nav__page"
              data-page="3"
              data-page-button
            >
            <span class="bx--pagination-nav__accessibility-label">page </span>3
            </button>
      </li>
      <li class="bx--pagination-nav__list-item">
            <button
              class="bx--pagination-nav__page"
              data-page="4"
              data-page-button
            >
            <span class="bx--pagination-nav__accessibility-label">page </span>4
            </button>
      </li>
      <li class="bx--pagination-nav__list-item">
            <button
              class="bx--pagination-nav__page"
              data-page="5"
              data-page-button
            >
            <span class="bx--pagination-nav__accessibility-label">page </span>5
            </button>
      </li>
      <li class="bx--pagination-nav__list-item">
          <button
            class="bx--pagination-nav__page bx--pagination-nav__page--direction"
            data-page-next
          >
          <span class="bx--pagination-nav__accessibility-label">Next page </span>
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--pagination-nav__icon" width="5" height="8" viewBox="0 0 5 8" aria-hidden="true"><path d="M0 0L5 4 0 8z"></path></svg>
          </button>
      </li>
  </ul>
</nav>
`}},
{
displayName:"default-as-anchor",
picture:{
src:"./pictures/pagination-nav/default-as-anchor.png",
width:336,
height:48},
snippet:{
html:`

<nav class="bx--pagination-nav" aria-label="pagination" data-pagination-nav>
  <ul class="bx--pagination-nav__list">
      <li class="bx--pagination-nav__list-item">
          <a
            class="bx--pagination-nav__page bx--pagination-nav__page--direction bx--pagination-nav__page--disabled"
            data-page-previous
            href="javascript:void(0)"
              aria-disabled="true"
          >
          <span class="bx--pagination-nav__accessibility-label">Previous page </span>
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--pagination-nav__icon" width="5" height="8" viewBox="0 0 5 8" aria-hidden="true"><path d="M5 8L0 4 5 0z"></path></svg>
          </a>
      </li>
      <li class="bx--pagination-nav__list-item">
            <a
              class="bx--pagination-nav__page bx--pagination-nav__page--active bx--pagination-nav__page--disabled"
              data-page="1"
              data-page-button
              href="javascript:void(0)"
                data-page-active="true"
                aria-current="page"
                aria-disabled="true"
            >
            <span class="bx--pagination-nav__accessibility-label">page </span>1
            </a>
      </li>
      <li class="bx--pagination-nav__list-item">
            <a
              class="bx--pagination-nav__page"
              data-page="2"
              data-page-button
              href="javascript:void(0)"
            >
            <span class="bx--pagination-nav__accessibility-label">page </span>2
            </a>
      </li>
      <li class="bx--pagination-nav__list-item">
            <a
              class="bx--pagination-nav__page"
              data-page="3"
              data-page-button
              href="javascript:void(0)"
            >
            <span class="bx--pagination-nav__accessibility-label">page </span>3
            </a>
      </li>
      <li class="bx--pagination-nav__list-item">
            <a
              class="bx--pagination-nav__page"
              data-page="4"
              data-page-button
              href="javascript:void(0)"
            >
            <span class="bx--pagination-nav__accessibility-label">page </span>4
            </a>
      </li>
      <li class="bx--pagination-nav__list-item">
            <a
              class="bx--pagination-nav__page"
              data-page="5"
              data-page-button
              href="javascript:void(0)"
            >
            <span class="bx--pagination-nav__accessibility-label">page </span>5
            </a>
      </li>
      <li class="bx--pagination-nav__list-item">
          <a
            class="bx--pagination-nav__page bx--pagination-nav__page--direction"
            data-page-next
            href="javascript:void(0)"
          >
          <span class="bx--pagination-nav__accessibility-label">Next page </span>
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--pagination-nav__icon" width="5" height="8" viewBox="0 0 5 8" aria-hidden="true"><path d="M0 0L5 4 0 8z"></path></svg>
          </a>
      </li>
  </ul>
</nav>
`}},
{
displayName:"default-with-select",
picture:{
src:"./pictures/pagination-nav/default-with-select.png",
width:432,
height:48},
snippet:{
html:`

<nav class="bx--pagination-nav" aria-label="pagination" data-pagination-nav>
  <ul class="bx--pagination-nav__list">
      <li class="bx--pagination-nav__list-item">
          <button
            class="bx--pagination-nav__page bx--pagination-nav__page--direction "
            data-page-previous
          >
          <span class="bx--pagination-nav__accessibility-label">Previous page </span>
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--pagination-nav__icon" width="5" height="8" viewBox="0 0 5 8" aria-hidden="true"><path d="M5 8L0 4 5 0z"></path></svg>
          </button>
      </li>
      <li class="bx--pagination-nav__list-item">
            <button
              class="bx--pagination-nav__page"
              data-page="1"
              data-page-button
            >
            <span class="bx--pagination-nav__accessibility-label">page </span>1
            </button>
      </li>
      <li class="bx--pagination-nav__list-item">
            <button
              class="bx--pagination-nav__page"
              data-page="2"
              data-page-button
            >
            <span class="bx--pagination-nav__accessibility-label">page </span>2
            </button>
      </li>
      <li class="bx--pagination-nav__list-item">
            <button
              class="bx--pagination-nav__page bx--pagination-nav__page--active bx--pagination-nav__page--disabled"
              data-page="3"
              data-page-button
                data-page-active="true"
                aria-current="page"
                aria-disabled="true"
            >
            <span class="bx--pagination-nav__accessibility-label">page </span>3
            </button>
      </li>
      <li class="bx--pagination-nav__list-item">
            <button
              class="bx--pagination-nav__page"
              data-page="4"
              data-page-button
            >
            <span class="bx--pagination-nav__accessibility-label">page </span>4
            </button>
      </li>
      <li class="bx--pagination-nav__list-item">
            <button
              class="bx--pagination-nav__page"
              data-page="5"
              data-page-button
            >
            <span class="bx--pagination-nav__accessibility-label">page </span>5
            </button>
      </li>
      <li class="bx--pagination-nav__list-item">
          <div class="bx--pagination-nav__select">
            <select
              class="bx--pagination-nav__page bx--pagination-nav__page--select"
              data-page-select
              aria-label="select page number"
            >
                <option
                  value=""
                    hidden
                >
                  
                </option>
                <option
                  value="6"
                    data-page="6"
                >
                  6
                </option>
                <option
                  value="7"
                    data-page="7"
                >
                  7
                </option>
                <option
                  value="8"
                    data-page="8"
                >
                  8
                </option>
                <option
                  value="9"
                    data-page="9"
                >
                  9
                </option>
            </select>
            <div class="bx--pagination-nav__select-icon-wrapper">
              <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--pagination-nav__select-icon" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true"><circle cx="8" cy="16" r="2"></circle><circle cx="16" cy="16" r="2"></circle><circle cx="24" cy="16" r="2"></circle></svg>
            </div>
          </div>
      </li>
      <li class="bx--pagination-nav__list-item">
            <button
              class="bx--pagination-nav__page"
              data-page="10"
              data-page-button
            >
            <span class="bx--pagination-nav__accessibility-label">page </span>10
            </button>
      </li>
      <li class="bx--pagination-nav__list-item">
          <button
            class="bx--pagination-nav__page bx--pagination-nav__page--direction"
            data-page-next
          >
          <span class="bx--pagination-nav__accessibility-label">Next page </span>
          <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--pagination-nav__icon" width="5" height="8" viewBox="0 0 5 8" aria-hidden="true"><path d="M0 0L5 4 0 8z"></path></svg>
          </button>
      </li>
  </ul>
</nav>
`}}
]