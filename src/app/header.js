const primaryNav = document.querySelector(".header__nav");
const navToggle = document.querySelector(".hamburger");

const toggleHamburger = () => {
  const visibility = primaryNav.getAttribute("data-visible");
  let win = window,
    doc = document,
    docElem = doc.documentElement,
    body = doc.getElementsByTagName("body")[0],
    width = win.innerWidth || docElem.clientWidth || body.clientWidth;

  if (width > 992) {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }

  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
};

navToggle.addEventListener("click", () => {
  toggleHamburger();
});

window.addEventListener("resize", () => {
  let win = window,
    doc = document,
    docElem = doc.documentElement,
    body = doc.getElementsByTagName("body")[0],
    width = win.innerWidth || docElem.clientWidth || body.clientWidth;

  if (width > 992) {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});

document.addEventListener("scroll", () => {
  let scrollBarPosition =
    window.scrollY || window.pageYOffset || document.body.scrollTop;

  if (scrollBarPosition >= 80) {
    document.body.classList.add("header-scroll");
  } else {
    document.body.classList.remove("header-scroll");
  }
});
