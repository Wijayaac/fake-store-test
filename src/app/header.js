const primaryNav = document.querySelector(".header__nav");
const navToggle = document.querySelector(".hamburger");

navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");
  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
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
