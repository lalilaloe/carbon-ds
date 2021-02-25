export default {
    displayName: "accordion",
    name: "accordion",
    homepage: "https://www.carbondesignsystem.com/components/accordion"
}

export const variants = [
{
displayName:"accordion",
picture:{
src:"./pictures/accordion/accordion.png",
width:137,
height:165},
snippet:{
html:`

<ul data-accordion class="bx--accordion">
    <li data-accordion-item class="bx--accordion__item">
      <button class="bx--accordion__heading" aria-expanded="false" aria-controls="pane1">
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--accordion__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M11 8L6 13 5.3 12.3 9.6 8 5.3 3.7 6 3z"></path></svg>
        <div class="bx--accordion__title">Section 1 title</div>
      </button>
      <div id="pane1" class="bx--accordion__content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </li>
    <li data-accordion-item class="bx--accordion__item">
      <button class="bx--accordion__heading" aria-expanded="false" aria-controls="pane2">
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--accordion__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M11 8L6 13 5.3 12.3 9.6 8 5.3 3.7 6 3z"></path></svg>
        <div class="bx--accordion__title">Section 2 title</div>
      </button>
      <div id="pane2" class="bx--accordion__content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </li>
    <li data-accordion-item class="bx--accordion__item">
      <button class="bx--accordion__heading" aria-expanded="false" aria-controls="pane3">
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--accordion__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M11 8L6 13 5.3 12.3 9.6 8 5.3 3.7 6 3z"></path></svg>
        <div class="bx--accordion__title">Section 3 title</div>
      </button>
      <div id="pane3" class="bx--accordion__content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </li>
    <li data-accordion-item class="bx--accordion__item">
      <button class="bx--accordion__heading" aria-expanded="false" aria-controls="pane4">
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--accordion__arrow" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M11 8L6 13 5.3 12.3 9.6 8 5.3 3.7 6 3z"></path></svg>
        <div class="bx--accordion__title">Section 4 title</div>
      </button>
      <div id="pane4" class="bx--accordion__content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </li>
</ul>
`}},
{
displayName:"legacy",
picture:{
src:"./pictures/accordion/legacy.png",
width:137,
height:165},
snippet:{
html:`

<ul data-accordion class="bx--accordion">
    <li tabindex="0" data-accordion-item class="bx--accordion__item">
      <div class="bx--accordion__heading">
        <svg class="bx--accordion__arrow" width="8" height="12" viewBox="0 0 8 12" fill-rule="evenodd">
          <path d="M0 10.6L4.7 6 0 1.4 1.4 0l6.1 6-6.1 6z"></path>
        </svg>
        <p class="bx--accordion__title">Section 1 title</p>
      </div>
      <div class="bx--accordion__content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </li>
    <li tabindex="0" data-accordion-item class="bx--accordion__item">
      <div class="bx--accordion__heading">
        <svg class="bx--accordion__arrow" width="8" height="12" viewBox="0 0 8 12" fill-rule="evenodd">
          <path d="M0 10.6L4.7 6 0 1.4 1.4 0l6.1 6-6.1 6z"></path>
        </svg>
        <p class="bx--accordion__title">Section 2 title</p>
      </div>
      <div class="bx--accordion__content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </li>
    <li tabindex="0" data-accordion-item class="bx--accordion__item">
      <div class="bx--accordion__heading">
        <svg class="bx--accordion__arrow" width="8" height="12" viewBox="0 0 8 12" fill-rule="evenodd">
          <path d="M0 10.6L4.7 6 0 1.4 1.4 0l6.1 6-6.1 6z"></path>
        </svg>
        <p class="bx--accordion__title">Section 3 title</p>
      </div>
      <div class="bx--accordion__content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </li>
    <li tabindex="0" data-accordion-item class="bx--accordion__item">
      <div class="bx--accordion__heading">
        <svg class="bx--accordion__arrow" width="8" height="12" viewBox="0 0 8 12" fill-rule="evenodd">
          <path d="M0 10.6L4.7 6 0 1.4 1.4 0l6.1 6-6.1 6z"></path>
        </svg>
        <p class="bx--accordion__title">Section 4 title</p>
      </div>
      <div class="bx--accordion__content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </li>
</ul>
`}}
]