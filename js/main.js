// for add class to make backGround at navBar while scrolling
window.addEventListener("scroll", function () {
  const nav = document.querySelector(".navbar");
  nav.classList.toggle("sticky", window.scrollY >= 100);
});
// for navlinks icon
const menubtn = document.getElementById("menubtn");
const menu = document.getElementById("menu");
menubtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  ico.classList.toggle("active");
});
//for active class
const filteritem = document.querySelector(".filter-projects");
const filterbox = document.querySelectorAll(".project-box");
