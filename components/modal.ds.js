export default {
    displayName: "modal",
    name: "modal",
    homepage: "https://www.carbondesignsystem.com/components/modal"
}

export const variants = [
{
displayName:"modal",
picture:{
src:"./pictures/modal/modal.png",
width:600,
height:480},
snippet:{
html:`

<button class="bx--btn bx--btn--primary" type="button" data-modal-target="#modal-l27nabf0f2">Show
  modal</button>

<div data-modal id="modal-l27nabf0f2" class="bx--modal " role="dialog"
  aria-modal="true" aria-labelledby="modal-l27nabf0f2-label" aria-describedby="modal-l27nabf0f2-heading" tabindex="-1">
  <div class="bx--modal-container">
    <div class="bx--modal-header">
      <p class="bx--modal-header__label bx--type-delta" id="modal-l27nabf0f2-label">Optional label</p>
      <p class="bx--modal-header__heading bx--type-beta" id="modal-l27nabf0f2-heading">Modal heading</p>
      <button class="bx--modal-close" type="button" data-modal-close aria-label="close modal" >
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--modal-close__icon" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true"><path d="M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"></path></svg>
      </button>
    </div>

    

    <div class="bx--modal-content" >
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id accumsan augue. Phasellus consequat augue
        vitae
        tellus tincidunt posuere. Curabitur justo urna, consectetur vel elit iaculis, ultrices condimentum risus. Nulla
        facilisi.
        Etiam venenatis molestie tellus. Quisque consectetur non risus eu rutrum. </p>

          </div>
    <div class="bx--modal-content--overflow-indicator"></div>

    <div class="bx--modal-footer">
      <button class="bx--btn bx--btn--secondary" type="button" data-modal-close>Secondary button</button>
      <button class="bx--btn bx--btn--primary" type="button"   data-modal-primary-focus>Primary button</button>
    </div>
  </div>
  
  <span tabindex="0"></span>
</div>
`}},
{
displayName:"danger",
picture:{
src:"./pictures/modal/danger.png",
width:600,
height:480},
snippet:{
html:`

<button class="bx--btn bx--btn--danger" type="button" data-modal-target="#modal-ffayhljeqvk">Show
  modal</button>

<div data-modal id="modal-ffayhljeqvk" class="bx--modal bx--modal--danger" role="dialog"
  aria-modal="true" aria-labelledby="modal-ffayhljeqvk-label" aria-describedby="modal-ffayhljeqvk-heading" tabindex="-1">
  <div class="bx--modal-container">
    <div class="bx--modal-header">
      <p class="bx--modal-header__label bx--type-delta" id="modal-ffayhljeqvk-label">Optional label</p>
      <p class="bx--modal-header__heading bx--type-beta" id="modal-ffayhljeqvk-heading">Modal heading</p>
      <button class="bx--modal-close" type="button" data-modal-close aria-label="close modal" >
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--modal-close__icon" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true"><path d="M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"></path></svg>
      </button>
    </div>

    

    <div class="bx--modal-content" >
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id accumsan augue. Phasellus consequat augue
        vitae
        tellus tincidunt posuere. Curabitur justo urna, consectetur vel elit iaculis, ultrices condimentum risus. Nulla
        facilisi.
        Etiam venenatis molestie tellus. Quisque consectetur non risus eu rutrum. </p>

          </div>
    <div class="bx--modal-content--overflow-indicator"></div>

    <div class="bx--modal-footer">
      <button class="bx--btn bx--btn--secondary" type="button" data-modal-close>Secondary button</button>
      <button class="bx--btn bx--btn--danger" type="button"  aria-label="Danger"
          data-modal-primary-focus>Primary button</button>
    </div>
  </div>
  
  <span tabindex="0"></span>
</div>
`}},
{
displayName:"input",
picture:{
src:"./pictures/modal/input.png",
width:600,
height:480},
snippet:{
html:`

<button class="bx--btn bx--btn--primary" type="button" data-modal-target="#modal-vxs8wj817gb">Show
  modal</button>

<div data-modal id="modal-vxs8wj817gb" class="bx--modal " role="dialog"
  aria-modal="true" aria-labelledby="modal-vxs8wj817gb-label" aria-describedby="modal-vxs8wj817gb-heading" tabindex="-1">
  <div class="bx--modal-container">
    <div class="bx--modal-header">
      <p class="bx--modal-header__label bx--type-delta" id="modal-vxs8wj817gb-label">Optional label</p>
      <p class="bx--modal-header__heading bx--type-beta" id="modal-vxs8wj817gb-heading">Modal heading</p>
      <button class="bx--modal-close" type="button" data-modal-close aria-label="close modal" >
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--modal-close__icon" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true"><path d="M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"></path></svg>
      </button>
    </div>

    

    <div class="bx--modal-content bx--modal-content--with-form" >
      <div class="bx--form-item">
        <label for="text-input-vxs8wj817gb" class="bx--label">Text Input label</label>
        <input id="text-input-vxs8wj817gb" type="text" class="bx--text-input" placeholder="Optional placeholder text"
          data-modal-primary-focus>
      </div>
    </div>
    <div class="bx--modal-content--overflow-indicator"></div>

    <div class="bx--modal-footer">
      <button class="bx--btn bx--btn--secondary" type="button" data-modal-close>Secondary button</button>
      <button class="bx--btn bx--btn--primary" type="button"  >Primary button</button>
    </div>
  </div>
  
  <span tabindex="0"></span>
</div>
`}},
{
displayName:"lg",
picture:{
src:"./pictures/modal/lg.png",
width:600,
height:480},
snippet:{
html:`

<button class="bx--btn bx--btn--primary" type="button" data-modal-target="#modal-lnq6jmcqpa8">Show
  modal</button>

<div data-modal id="modal-lnq6jmcqpa8" class="bx--modal " role="dialog"
  aria-modal="true" aria-labelledby="modal-lnq6jmcqpa8-label" aria-describedby="modal-lnq6jmcqpa8-heading" tabindex="-1">
  <div class="bx--modal-container bx--modal-container--lg">
    <div class="bx--modal-header">
      <p class="bx--modal-header__label bx--type-delta" id="modal-lnq6jmcqpa8-label">Optional label</p>
      <p class="bx--modal-header__heading bx--type-beta" id="modal-lnq6jmcqpa8-heading">Modal heading</p>
      <button class="bx--modal-close" type="button" data-modal-close aria-label="close modal" >
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--modal-close__icon" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true"><path d="M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"></path></svg>
      </button>
    </div>

    

    <div class="bx--modal-content" >
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id accumsan augue. Phasellus consequat augue
        vitae
        tellus tincidunt posuere. Curabitur justo urna, consectetur vel elit iaculis, ultrices condimentum risus. Nulla
        facilisi.
        Etiam venenatis molestie tellus. Quisque consectetur non risus eu rutrum. </p>

          </div>
    <div class="bx--modal-content--overflow-indicator"></div>

    <div class="bx--modal-footer">
      <button class="bx--btn bx--btn--secondary" type="button" data-modal-close>Secondary button</button>
      <button class="bx--btn bx--btn--primary" type="button"   data-modal-primary-focus>Primary button</button>
    </div>
  </div>
  
  <span tabindex="0"></span>
</div>
`}},
{
displayName:"nofooter",
picture:{
src:"./pictures/modal/nofooter.png",
width:600,
height:480},
snippet:{
html:`

<button class="bx--btn bx--btn--primary" type="button" data-modal-target="#modal-gndqkiionnu">Show
  modal</button>

<div data-modal id="modal-gndqkiionnu" class="bx--modal " role="dialog"
  aria-modal="true" aria-labelledby="modal-gndqkiionnu-label" aria-describedby="modal-gndqkiionnu-heading" tabindex="-1">
  <div class="bx--modal-container">
    <div class="bx--modal-header">
      <p class="bx--modal-header__label bx--type-delta" id="modal-gndqkiionnu-label">Optional label</p>
      <p class="bx--modal-header__heading bx--type-beta" id="modal-gndqkiionnu-heading">Modal heading</p>
      <button class="bx--modal-close" type="button" data-modal-close aria-label="close modal"  data-modal-primary-focus>
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--modal-close__icon" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true"><path d="M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"></path></svg>
      </button>
    </div>

    

    <div class="bx--modal-content" >
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id accumsan augue. Phasellus consequat augue
        vitae
        tellus tincidunt posuere. Curabitur justo urna, consectetur vel elit iaculis, ultrices condimentum risus. Nulla
        facilisi.
        Etiam venenatis molestie tellus. Quisque consectetur non risus eu rutrum. </p>

          </div>
    <div class="bx--modal-content--overflow-indicator"></div>

  </div>
  
  <span tabindex="0"></span>
</div>
`}},
{
displayName:"nofooter-lg",
picture:{
src:"./pictures/modal/nofooter-lg.png",
width:600,
height:480},
snippet:{
html:`

<button class="bx--btn bx--btn--primary" type="button" data-modal-target="#modal-xvf5ppfetqm">Show
  modal</button>

<div data-modal id="modal-xvf5ppfetqm" class="bx--modal " role="dialog"
  aria-modal="true" aria-labelledby="modal-xvf5ppfetqm-label" aria-describedby="modal-xvf5ppfetqm-heading" tabindex="-1">
  <div class="bx--modal-container bx--modal-container--lg">
    <div class="bx--modal-header">
      <p class="bx--modal-header__label bx--type-delta" id="modal-xvf5ppfetqm-label">Optional label</p>
      <p class="bx--modal-header__heading bx--type-beta" id="modal-xvf5ppfetqm-heading">Modal heading</p>
      <button class="bx--modal-close" type="button" data-modal-close aria-label="close modal"  data-modal-primary-focus>
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--modal-close__icon" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true"><path d="M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"></path></svg>
      </button>
    </div>

    

    <div class="bx--modal-content" >
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id accumsan augue. Phasellus consequat augue
        vitae
        tellus tincidunt posuere. Curabitur justo urna, consectetur vel elit iaculis, ultrices condimentum risus. Nulla
        facilisi.
        Etiam venenatis molestie tellus. Quisque consectetur non risus eu rutrum. </p>

          </div>
    <div class="bx--modal-content--overflow-indicator"></div>

  </div>
  
  <span tabindex="0"></span>
</div>
`}},
{
displayName:"nofooter-sm",
picture:{
src:"./pictures/modal/nofooter-sm.png",
width:600,
height:480},
snippet:{
html:`

<button class="bx--btn bx--btn--primary" type="button" data-modal-target="#modal-6bx3pk9o3sv">Show
  modal</button>

<div data-modal id="modal-6bx3pk9o3sv" class="bx--modal " role="dialog"
  aria-modal="true" aria-labelledby="modal-6bx3pk9o3sv-label" aria-describedby="modal-6bx3pk9o3sv-heading" tabindex="-1">
  <div class="bx--modal-container bx--modal-container--sm">
    <div class="bx--modal-header">
      <p class="bx--modal-header__label bx--type-delta" id="modal-6bx3pk9o3sv-label">Optional label</p>
      <p class="bx--modal-header__heading bx--type-beta" id="modal-6bx3pk9o3sv-heading">Modal heading</p>
      <button class="bx--modal-close" type="button" data-modal-close aria-label="close modal"  data-modal-primary-focus>
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--modal-close__icon" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true"><path d="M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"></path></svg>
      </button>
    </div>

    

    <div class="bx--modal-content" >
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id accumsan augue. Phasellus consequat augue
        vitae
        tellus tincidunt posuere. Curabitur justo urna, consectetur vel elit iaculis, ultrices condimentum risus. Nulla
        facilisi.
        Etiam venenatis molestie tellus. Quisque consectetur non risus eu rutrum. </p>

          </div>
    <div class="bx--modal-content--overflow-indicator"></div>

  </div>
  
  <span tabindex="0"></span>
</div>
`}},
{
displayName:"nofooter-xs",
picture:{
src:"./pictures/modal/nofooter-xs.png",
width:600,
height:480},
snippet:{
html:`

<button class="bx--btn bx--btn--primary" type="button" data-modal-target="#modal-mgvgfzmh8nn">Show
  modal</button>

<div data-modal id="modal-mgvgfzmh8nn" class="bx--modal " role="dialog"
  aria-modal="true" aria-labelledby="modal-mgvgfzmh8nn-label" aria-describedby="modal-mgvgfzmh8nn-heading" tabindex="-1">
  <div class="bx--modal-container bx--modal-container--xs">
    <div class="bx--modal-header">
      <p class="bx--modal-header__label bx--type-delta" id="modal-mgvgfzmh8nn-label">Optional label</p>
      <p class="bx--modal-header__heading bx--type-beta" id="modal-mgvgfzmh8nn-heading">Modal heading</p>
      <button class="bx--modal-close" type="button" data-modal-close aria-label="close modal"  data-modal-primary-focus>
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--modal-close__icon" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true"><path d="M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"></path></svg>
      </button>
    </div>

    

    <div class="bx--modal-content" >
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id accumsan augue. Phasellus consequat augue
        vitae
        tellus tincidunt posuere. Curabitur justo urna, consectetur vel elit iaculis, ultrices condimentum risus. Nulla
        facilisi.
        Etiam venenatis molestie tellus. Quisque consectetur non risus eu rutrum. </p>

          </div>
    <div class="bx--modal-content--overflow-indicator"></div>

  </div>
  
  <span tabindex="0"></span>
</div>
`}},
{
displayName:"scrolling",
picture:{
src:"./pictures/modal/scrolling.png",
width:600,
height:480},
snippet:{
html:`

<button class="bx--btn bx--btn--primary" type="button" data-modal-target="#modal-fcs2e3doy7g">Show
  modal</button>

<div data-modal id="modal-fcs2e3doy7g" class="bx--modal " role="dialog"
  aria-modal="true" aria-labelledby="modal-fcs2e3doy7g-label" aria-describedby="modal-fcs2e3doy7g-heading" tabindex="-1">
  <div class="bx--modal-container">
    <div class="bx--modal-header">
      <p class="bx--modal-header__label bx--type-delta" id="modal-fcs2e3doy7g-label">Optional label</p>
      <p class="bx--modal-header__heading bx--type-beta" id="modal-fcs2e3doy7g-heading">Modal heading</p>
      <button class="bx--modal-close" type="button" data-modal-close aria-label="close modal" >
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--modal-close__icon" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true"><path d="M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"></path></svg>
      </button>
    </div>

    

    <div class="bx--modal-content" tabindex="0">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id accumsan augue. Phasellus consequat augue
        vitae
        tellus tincidunt posuere. Curabitur justo urna, consectetur vel elit iaculis, ultrices condimentum risus. Nulla
        facilisi.
        Etiam venenatis molestie tellus. Quisque consectetur non risus eu rutrum. </p>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id accumsan augue. Phasellus consequat augue
        vitae
        tellus tincidunt posuere. Curabitur justo urna, consectetur vel elit iaculis, ultrices condimentum risus. Nulla
        facilisi.
        Etiam venenatis molestie tellus. Quisque consectetur non risus eu rutrum. </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id accumsan augue. Phasellus consequat augue
        vitae
        tellus tincidunt posuere. Curabitur justo urna, consectetur vel elit iaculis, ultrices condimentum risus. Nulla
        facilisi.
        Etiam venenatis molestie tellus. Quisque consectetur non risus eu rutrum. </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id accumsan augue. Phasellus consequat augue
        vitae
        tellus tincidunt posuere. Curabitur justo urna, consectetur vel elit iaculis, ultrices condimentum risus. Nulla
        facilisi.
        Etiam venenatis molestie tellus. Quisque consectetur non risus eu rutrum. </p>
        <h3>Lorem ipsum</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id accumsan augue. Phasellus consequat augue
        vitae
        tellus tincidunt posuere. Curabitur justo urna, consectetur vel elit iaculis, ultrices condimentum risus. Nulla
        facilisi.
        Etiam venenatis molestie tellus. Quisque consectetur non risus eu rutrum. </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id accumsan augue. Phasellus consequat augue
        vitae
        tellus tincidunt posuere. Curabitur justo urna, consectetur vel elit iaculis, ultrices condimentum risus. Nulla
        facilisi.
        Etiam venenatis molestie tellus. Quisque consectetur non risus eu rutrum. </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id accumsan augue. Phasellus consequat augue
        vitae
        tellus tincidunt posuere. Curabitur justo urna, consectetur vel elit iaculis, ultrices condimentum risus. Nulla
        facilisi.
        Etiam venenatis molestie tellus. Quisque consectetur non risus eu rutrum. </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id accumsan augue. Phasellus consequat augue
        vitae
        tellus tincidunt posuere. Curabitur justo urna, consectetur vel elit iaculis, ultrices condimentum risus. Nulla
        facilisi.
        Etiam venenatis molestie tellus. Quisque consectetur non risus eu rutrum. </p>
          </div>
    <div class="bx--modal-content--overflow-indicator"></div>

    <div class="bx--modal-footer">
      <button class="bx--btn bx--btn--secondary" type="button" data-modal-close>Secondary button</button>
      <button class="bx--btn bx--btn--primary" type="button"   data-modal-primary-focus>Primary button</button>
    </div>
  </div>
  
  <span tabindex="0"></span>
</div>
`}},
{
displayName:"sm",
picture:{
src:"./pictures/modal/sm.png",
width:600,
height:480},
snippet:{
html:`

<button class="bx--btn bx--btn--primary" type="button" data-modal-target="#modal-rh40synxk6">Show
  modal</button>

<div data-modal id="modal-rh40synxk6" class="bx--modal " role="dialog"
  aria-modal="true" aria-labelledby="modal-rh40synxk6-label" aria-describedby="modal-rh40synxk6-heading" tabindex="-1">
  <div class="bx--modal-container bx--modal-container--sm">
    <div class="bx--modal-header">
      <p class="bx--modal-header__label bx--type-delta" id="modal-rh40synxk6-label">Optional label</p>
      <p class="bx--modal-header__heading bx--type-beta" id="modal-rh40synxk6-heading">Modal heading</p>
      <button class="bx--modal-close" type="button" data-modal-close aria-label="close modal" >
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--modal-close__icon" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true"><path d="M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"></path></svg>
      </button>
    </div>

    

    <div class="bx--modal-content" >
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id accumsan augue. Phasellus consequat augue
        vitae
        tellus tincidunt posuere. Curabitur justo urna, consectetur vel elit iaculis, ultrices condimentum risus. Nulla
        facilisi.
        Etiam venenatis molestie tellus. Quisque consectetur non risus eu rutrum. </p>

          </div>
    <div class="bx--modal-content--overflow-indicator"></div>

    <div class="bx--modal-footer">
      <button class="bx--btn bx--btn--secondary" type="button" data-modal-close>Secondary button</button>
      <button class="bx--btn bx--btn--primary" type="button"   data-modal-primary-focus>Primary button</button>
    </div>
  </div>
  
  <span tabindex="0"></span>
</div>
`}},
{
displayName:"titleonly-nofooter-sm",
picture:{
src:"./pictures/modal/titleonly-nofooter-sm.png",
width:600,
height:480},
snippet:{
html:`

<button class="bx--btn bx--btn--primary" type="button" data-modal-target="#modal-nvowx2nwgna">Show
  modal</button>

<div data-modal id="modal-nvowx2nwgna" class="bx--modal " role="dialog"
  aria-modal="true" aria-labelledby="modal-nvowx2nwgna-label" aria-describedby="modal-nvowx2nwgna-heading" tabindex="-1">
  <div class="bx--modal-container bx--modal-container--sm">
    <div class="bx--modal-header">
      <p class="bx--modal-header__label bx--type-delta" id="modal-nvowx2nwgna-label">Optional label</p>
      <p class="bx--modal-header__heading bx--type-beta" id="modal-nvowx2nwgna-heading">Passive modal title as the message. Should be direct and 3 lines or less.</p>
      <button class="bx--modal-close" type="button" data-modal-close aria-label="close modal"  data-modal-primary-focus>
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--modal-close__icon" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true"><path d="M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"></path></svg>
      </button>
    </div>

    

    <div class="bx--modal-content" >
    </div>
    <div class="bx--modal-content--overflow-indicator"></div>

  </div>
  
  <span tabindex="0"></span>
</div>
`}},
{
displayName:"titleonly-nofooter-xs",
picture:{
src:"./pictures/modal/titleonly-nofooter-xs.png",
width:600,
height:480},
snippet:{
html:`

<button class="bx--btn bx--btn--primary" type="button" data-modal-target="#modal-5nmvfgfhmht">Show
  modal</button>

<div data-modal id="modal-5nmvfgfhmht" class="bx--modal " role="dialog"
  aria-modal="true" aria-labelledby="modal-5nmvfgfhmht-label" aria-describedby="modal-5nmvfgfhmht-heading" tabindex="-1">
  <div class="bx--modal-container bx--modal-container--xs">
    <div class="bx--modal-header">
      <p class="bx--modal-header__label bx--type-delta" id="modal-5nmvfgfhmht-label">Optional label</p>
      <p class="bx--modal-header__heading bx--type-beta" id="modal-5nmvfgfhmht-heading">Passive modal title as the message. Should be direct and 3 lines or less.</p>
      <button class="bx--modal-close" type="button" data-modal-close aria-label="close modal"  data-modal-primary-focus>
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--modal-close__icon" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true"><path d="M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"></path></svg>
      </button>
    </div>

    

    <div class="bx--modal-content" >
    </div>
    <div class="bx--modal-content--overflow-indicator"></div>

  </div>
  
  <span tabindex="0"></span>
</div>
`}},
{
displayName:"titleonly-sm",
picture:{
src:"./pictures/modal/titleonly-sm.png",
width:600,
height:480},
snippet:{
html:`

<button class="bx--btn bx--btn--primary" type="button" data-modal-target="#modal-wpi0dxgtt3">Show
  modal</button>

<div data-modal id="modal-wpi0dxgtt3" class="bx--modal " role="dialog"
  aria-modal="true" aria-labelledby="modal-wpi0dxgtt3-label" aria-describedby="modal-wpi0dxgtt3-heading" tabindex="-1">
  <div class="bx--modal-container bx--modal-container--sm">
    <div class="bx--modal-header">
      <p class="bx--modal-header__label bx--type-delta" id="modal-wpi0dxgtt3-label">Optional label</p>
      <p class="bx--modal-header__heading bx--type-beta" id="modal-wpi0dxgtt3-heading">Passive modal title as the message. Should be direct and 3 lines or less.</p>
      <button class="bx--modal-close" type="button" data-modal-close aria-label="close modal" >
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--modal-close__icon" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true"><path d="M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"></path></svg>
      </button>
    </div>

    

    <div class="bx--modal-content" >
    </div>
    <div class="bx--modal-content--overflow-indicator"></div>

    <div class="bx--modal-footer">
      <button class="bx--btn bx--btn--secondary" type="button" data-modal-close>Secondary button</button>
      <button class="bx--btn bx--btn--primary" type="button"   data-modal-primary-focus>Primary button</button>
    </div>
  </div>
  
  <span tabindex="0"></span>
</div>
`}},
{
displayName:"titleonly-xs",
picture:{
src:"./pictures/modal/titleonly-xs.png",
width:600,
height:480},
snippet:{
html:`

<button class="bx--btn bx--btn--primary" type="button" data-modal-target="#modal-3n4205phnqy">Show
  modal</button>

<div data-modal id="modal-3n4205phnqy" class="bx--modal " role="dialog"
  aria-modal="true" aria-labelledby="modal-3n4205phnqy-label" aria-describedby="modal-3n4205phnqy-heading" tabindex="-1">
  <div class="bx--modal-container bx--modal-container--xs">
    <div class="bx--modal-header">
      <p class="bx--modal-header__label bx--type-delta" id="modal-3n4205phnqy-label">Optional label</p>
      <p class="bx--modal-header__heading bx--type-beta" id="modal-3n4205phnqy-heading">Passive modal title as the message. Should be direct and 3 lines or less.</p>
      <button class="bx--modal-close" type="button" data-modal-close aria-label="close modal" >
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--modal-close__icon" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true"><path d="M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"></path></svg>
      </button>
    </div>

    

    <div class="bx--modal-content" >
    </div>
    <div class="bx--modal-content--overflow-indicator"></div>

    <div class="bx--modal-footer">
      <button class="bx--btn bx--btn--secondary" type="button" data-modal-close>Secondary button</button>
      <button class="bx--btn bx--btn--primary" type="button"   data-modal-primary-focus>Primary button</button>
    </div>
  </div>
  
  <span tabindex="0"></span>
</div>
`}},
{
displayName:"xs",
picture:{
src:"./pictures/modal/xs.png",
width:600,
height:480},
snippet:{
html:`

<button class="bx--btn bx--btn--primary" type="button" data-modal-target="#modal-mxw165ad7oo">Show
  modal</button>

<div data-modal id="modal-mxw165ad7oo" class="bx--modal " role="dialog"
  aria-modal="true" aria-labelledby="modal-mxw165ad7oo-label" aria-describedby="modal-mxw165ad7oo-heading" tabindex="-1">
  <div class="bx--modal-container bx--modal-container--xs">
    <div class="bx--modal-header">
      <p class="bx--modal-header__label bx--type-delta" id="modal-mxw165ad7oo-label">Optional label</p>
      <p class="bx--modal-header__heading bx--type-beta" id="modal-mxw165ad7oo-heading">Modal heading</p>
      <button class="bx--modal-close" type="button" data-modal-close aria-label="close modal" >
        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bx--modal-close__icon" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true"><path d="M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"></path></svg>
      </button>
    </div>

    

    <div class="bx--modal-content" >
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id accumsan augue. Phasellus consequat augue
        vitae
        tellus tincidunt posuere. Curabitur justo urna, consectetur vel elit iaculis, ultrices condimentum risus. Nulla
        facilisi.
        Etiam venenatis molestie tellus. Quisque consectetur non risus eu rutrum. </p>

          </div>
    <div class="bx--modal-content--overflow-indicator"></div>

    <div class="bx--modal-footer">
      <button class="bx--btn bx--btn--secondary" type="button" data-modal-close>Secondary button</button>
      <button class="bx--btn bx--btn--primary" type="button"   data-modal-primary-focus>Primary button</button>
    </div>
  </div>
  
  <span tabindex="0"></span>
</div>
`}}
]