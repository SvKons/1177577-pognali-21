const modal = document.querySelector(".road__modal");

const modal_button = document.querySelector(".road__control--select");

modal_button.addEventListener("click", function (evt) {
  event.preventDefault();
  modal.classList.toggle("road__row--modal");
});
