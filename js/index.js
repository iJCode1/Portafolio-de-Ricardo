const $hamburger = document.querySelector("#hamburger");
const $nav = document.querySelector("#nav");
$hamburger.addEventListener("click", ()=>{
  console.log("Se dio un click");
  $hamburger.classList.toggle("is-active");
  $nav.classList.toggle("is-active");
})