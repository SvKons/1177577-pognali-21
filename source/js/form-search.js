const popup = document.querySelectorAll(".traveler-search__fieldset");

const y = function (popup) {
  if (popup) {
    popup.classList.remove("traveler-search__fieldset--open");
  }
}

const toggler = document.querySelectorAll(".traveler-search__toggler");

const x = function (popup, toggler) {
  toggler.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("traveler-search__fieldset--open");
  });
}

for (i = 0; i < popup.length; i++) {
  y(popup[i]);
  x(popup[i], toggler[i]);
}
