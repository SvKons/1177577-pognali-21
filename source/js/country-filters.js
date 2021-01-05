const filters = document.querySelector(".country-filters__container");
const togglers = document.querySelector(".country-filters__toggler");
const hide = document.querySelector(".country-filters__hide");

togglers.addEventListener("click", function (evt) {
  event.preventDefault();
  togglers.classList.toggle("toggler--open");
  togglers.classList.toggle("toggler--close");
  filters.classList.toggle("country-filters__container--close");
});

hide.addEventListener("click", function (evt) {
  event.preventDefault();
  togglers.classList.toggle("toggler--open");
  togglers.classList.toggle("toggler--close");
  filters.classList.toggle("country-filters__container--close");
});
