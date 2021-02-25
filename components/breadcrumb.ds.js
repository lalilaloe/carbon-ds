export default {
    displayName: "breadcrumb",
    name: "breadcrumb",
    homepage: "https://www.carbondesignsystem.com/components/breadcrumb"
}

export const variants = [
{
displayName:"breadcrumb",
picture:{
src:"./pictures/breadcrumb/breadcrumb.png",
width:113,
height:54},
snippet:{
html:`

<nav class="bx--breadcrumb" aria-label="breadcrumb">
    <div class="bx--breadcrumb-item">
        <a href="#" class="bx--link">Breadcrumb 1</a>
    </div>
    <div class="bx--breadcrumb-item">
        <a href="#" class="bx--link">Breadcrumb 2</a>
    </div>
    <div class="bx--breadcrumb-item">
        <a href="#" class="bx--link">Breadcrumb 3</a>
    </div>
</nav>
`}},
{
displayName:"current-page",
picture:{
src:"./pictures/breadcrumb/current-page.png",
width:113,
height:108},
snippet:{
html:`<nav class="bx--breadcrumb bx--breadcrumb--no-trailing-slash" aria-label="breadcrumb">
    <div class="bx--breadcrumb-item">
        <a
          href="#"
          class="bx--link"
          
        >
            Breadcrumb 1
        </a>
    </div>
    <div class="bx--breadcrumb-item">
        <a
          href="#"
          class="bx--link"
          
        >
            Breadcrumb 2
        </a>
    </div>
    <div class="bx--breadcrumb-item">
        <a
          href="#"
          class="bx--link"
          aria-current="page"
        >
            Breadcrumb 3
        </a>
    </div>
</nav>

<nav class="bx--breadcrumb bx--breadcrumb--no-trailing-slash" aria-label="breadcrumb">
    <div class="bx--breadcrumb-item ">
        <a href="#" class="bx--link">
          Breadcrumb 1
        </a>
    </div>
    <div class="bx--breadcrumb-item ">
        <a href="#" class="bx--link">
          Breadcrumb 2
        </a>
    </div>
    <div class="bx--breadcrumb-item bx--breadcrumb-item--current">
        <a href="#" class="bx--link">
          Breadcrumb 3
        </a>
    </div>
</nav>
`}},
{
displayName:"enabled",
picture:{
src:"./pictures/breadcrumb/enabled.png",
width:105,
height:18},
snippet:{
html:`<nav class="bx--breadcrumb" aria-label="breadcrumb">
  <div class="bx--breadcrumb-item">
    <a href="#" class="bx--link">Breadcrumb 1</a>
  </div>
</nav>
`}}
]