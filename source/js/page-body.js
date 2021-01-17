const body = document.querySelector("body");
const nav = document.querySelector("nav");
const button = document.querySelector(".main-navigation__toggler");

  body.classList.remove("page-body");
  nav.classList.remove("main-navigation--cross");
  nav.classList.remove("main-navigation--open");

  if (button) {
    button.classList.remove("toggler--close");
    button.classList.add("toggler--open");
  }
