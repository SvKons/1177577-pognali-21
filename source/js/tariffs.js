const popup = document.querySelector(".tariffs-modal");

const open = document.querySelector(".tariffs__link");

open.addEventListener("click", function (evt) {
  event.preventDefault();
  popup.classList.add("tariffs-modal__show");
});

const close = document.querySelector(".tariffs-modal__close");

close.addEventListener("click", function (evt) {
  event.preventDefault();
  popup.classList.remove("tariffs-modal__show");
});
