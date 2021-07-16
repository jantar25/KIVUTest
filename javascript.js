const menu = document.querySelector("#mobile-menu");
const menuLists = document.querySelector(".navbar-menu");
const navLogo = document.querySelector("#navbar-logo");

//display mobile Menu
const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLists.classList.toggle("active");
};
menu.addEventListener("click", mobileMenu);

//Hiding Mobile Menu
const hideMobMenu = () => {
  const menuBars = document.querySelector(".is-active");
  if (window.innerWidth <= 900 && menuBars) {
    menu.classList.toggle("is-active");
    menuLists.classList.remove("active");
  }
};
menuLists.addEventListener("click", hideMobMenu);
navLogo.addEventListener("click", hideMobMenu);

//Adding Highlights on Menu

const highlightMenu = () => {
  const highlightElem = document.querySelector(".highlight");
  const homeMenu = document.querySelector("#home-page");
  const aboutMenu = document.querySelector("#About-page");
  const specialitiesMenu = document.querySelector("#Specialities-page");
  let scrollPosition = window.scrollY;

  if (window.innerWidth > 960 && scrollPosition < 600) {
    homeMenu.classList.add("highlight");
    aboutMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPosition < 1334) {
    aboutMenu.classList.add("highlight");
    homeMenu.classList.remove("highlight");
    specialitiesMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPosition < 2345) {
    specialitiesMenu.classList.add("highlight");
    aboutMenu.classList.remove("highlight");
    return;
  }
  if (
    (highlightElem && window.innerWidth < 960 && scrollPosition < 600) ||
    highlightElem
  ) {
    highlightElem.classList.remove("highlight");
  }
};
window.addEventListener("scroll", highlightMenu);
window.addEventListener("click", highlightMenu);
