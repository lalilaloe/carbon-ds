export default {
    displayName: "list",
    name: "list",
    homepage: "https://www.carbondesignsystem.com/components/list"
}

export const variants = [
{
displayName:"list",
picture:{
src:"./pictures/list/list.png",
width:176,
height:325},
snippet:{
html:`

<ul class="bx--list--unordered">
  <li class="bx--list__item">Unordered List level 1
    <ul class="bx--list--unordered bx--list--nested">
  <li class="bx--list__item">Unordered List level 2</li>
  <li class="bx--list__item">Unordered List level 2</li>
  <li class="bx--list__item">Unordered List level 2</li>
  <li class="bx--list__item">Unordered List level 2</li>
</ul>
</li>
<li class="bx--list__item">Unordered List level 1</li>
<li class="bx--list__item">Unordered List level 1</li>
<li class="bx--list__item">Unordered List level 1</li>
<li class="bx--list__item">Unordered List level 1</li>
<li class="bx--list__item">Unordered List level 1</li>
<li class="bx--list__item">Unordered List level 1</li>
<li class="bx--list__item">Unordered List level 1</li>
<li class="bx--list__item">Unordered List level 1</li>
<li class="bx--list__item">Unordered List level 1</li>
<li class="bx--list__item">Unordered List level 1</li>
<li class="bx--list__item">Unordered List level 1</li>
<li class="bx--list__item">Unordered List level 1</li>
<li class="bx--list__item">Unordered List level 1</li>
</ul>
`}},
{
displayName:"nesting",
picture:{
src:"./pictures/list/nesting.png",
width:583,
height:519},
snippet:{
html:`

<ol class="bx--list--ordered">
  <li class="bx--list__item"> Ordered List level 1
    <ul class="bx--list--unordered bx--list--nested">
      <li class="bx--list__item"> Unordered List level 2</li>
      <li class="bx--list__item"> Unordered List level 2
        <ol class="bx--list--ordered bx--list--nested">
          <li class="bx--list__item"> Ordered List level 3</li>
          <li class="bx--list__item"> Ordered List level 3
            <ul class="bx--list--unordered bx--list--nested">
              <li class="bx--list__item"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                venenatis
                aliquet odio ut viverra. Integer sollicitudin sed mi a finibus. Etiam massa ipsum, suscipit vitae nisl
                ut, semper euismod ante.</li>
              <li class="bx--list__item"> Unordered List level 4</li>
              <li class="bx--list__item"> Unordered List level 4</li>
            </ul>
          </li>
          <li class="bx--list__item"> Ordered List level 3</li>
        </ol>
      </li>
      <li class="bx--list__item"> Unordered List level 2</li>
    </ul>
  </li>
  <li class="bx--list__item">Ordered List level 1</li>
  <li class="bx--list__item">Ordered List level 1</li>
</ol>
<br>
<ul class="bx--list--unordered">
  <li class="bx--list__item">Unordered List level 1
    <ol class="bx--list--ordered bx--list--nested">
      <li class="bx--list__item">Ordered List level 2</li>
      <li class="bx--list__item">Ordered
        List level 2
        <ul class="bx--list--unordered bx--list--nested">
          <li class="bx--list__item"> Unordered List level 3</li>
          <li class="bx--list__item"> Unordered List level 3
            <ol class="bx--list--ordered bx--list--nested">
              <li class="bx--list__item"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                venenatis
                aliquet odio ut viverra. Integer sollicitudin sed mi a finibus. Etiam massa ipsum, suscipit vitae nisl
                ut, semper euismod ante.</li>
              <li class="bx--list__item"> Ordered List level 4</li>
              <li class="bx--list__item"> Ordered List level 4</li>
            </ol>
          </li>
          <li class="bx--list__item"> Unordered List level 3</li>
        </ul>
      </li>
      <li class="bx--list__item">Ordered List level 2</li>
    </ol>
  </li>
  <li class="bx--list__item">Unordered List level 1</li>
  <li class="bx--list__item">Unordered List level 1</li>
</ul>
`}},
{
displayName:"ordered",
picture:{
src:"./pictures/list/ordered.png",
width:161,
height:325},
snippet:{
html:`

<ol class="bx--list--ordered">
  <li class="bx--list__item">Ordered List level 1
    <ol class="bx--list--ordered bx--list--nested">
  <li class="bx--list__item">Ordered List level 2</li>
  <li class="bx--list__item">Ordered List level 2</li>
  <li class="bx--list__item">Ordered List level 2</li>
  <li class="bx--list__item">Ordered List level 2</li>
</ol>
</li>
<li class="bx--list__item">Ordered List level 1</li>
<li class="bx--list__item">Ordered List level 1</li>
<li class="bx--list__item">Ordered List level 1</li>
<li class="bx--list__item">Ordered List level 1</li>
<li class="bx--list__item">Ordered List level 1</li>
<li class="bx--list__item">Ordered List level 1</li>
<li class="bx--list__item">Ordered List level 1</li>
<li class="bx--list__item">Ordered List level 1</li>
<li class="bx--list__item">Ordered List level 1</li>
<li class="bx--list__item">Ordered List level 1</li>
<li class="bx--list__item">Ordered List level 1</li>
<li class="bx--list__item">Ordered List level 1</li>
<li class="bx--list__item">Ordered List level 1</li>
</ol>
`}},
{
displayName:"ordered-native",
picture:{
src:"./pictures/list/ordered-native.png",
width:161,
height:325},
snippet:{
html:`

<ol class="bx--list--ordered--native">
  <li class="bx--list__item">Ordered List level 1
    <ol class="bx--list--ordered--native bx--list--nested">
  <li class="bx--list__item">Ordered List level 2</li>
  <li class="bx--list__item">Ordered List level 2</li>
  <li class="bx--list__item">Ordered List level 2</li>
  <li class="bx--list__item">Ordered List level 2</li>
</ol>
</li>
<li class="bx--list__item">Ordered List level 1</li>
<li class="bx--list__item">Ordered List level 1</li>
<li class="bx--list__item">Ordered List level 1</li>
<li class="bx--list__item">Ordered List level 1</li>
<li class="bx--list__item">Ordered List level 1</li>
<li class="bx--list__item">Ordered List level 1</li>
<li class="bx--list__item">Ordered List level 1</li>
<li class="bx--list__item">Ordered List level 1</li>
<li class="bx--list__item">Ordered List level 1</li>
<li class="bx--list__item">Ordered List level 1</li>
<li class="bx--list__item">Ordered List level 1</li>
<li class="bx--list__item">Ordered List level 1</li>
<li class="bx--list__item">Ordered List level 1</li>
</ol>
`}}
]