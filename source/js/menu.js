const menu = document.querySelector(".main-navigation");

const toggle = document.querySelector(".main-navigation__toggler");

toggle.addEventListener("click", function (evt) {
  event.preventDefault();
  menu.classList.toggle("main-navigation--open");
});
