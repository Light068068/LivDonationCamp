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



window.onload = () => {
    //once window loaded
    filteritem.onclick = (selectedItem) => {
      if (selectedItem.target.classList.contains("item")) {
        filteritem.querySelector(".f-active").classList.remove("f-active");
        selectedItem.target.classList.add("f-active");
        let filtername = selectedItem.target.getAttribute("data-filter");
        filterbox.forEach((img) => {
          let filterimgs = img.getAttribute("data-filter");
          if (filterimgs == filtername || filtername == "all") {
            img.classList.remove("hide");
            img.classList.add("show");
          } else {
            img.classList.add("hide");
            img.classList.remove("show");
          }
        });
      }
    };
  };