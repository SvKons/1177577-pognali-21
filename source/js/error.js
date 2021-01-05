const form = document.querySelector(".personal-account__form");
const bgtextarea = form.querySelector("[name=bgtextarea]");
const actiontextarea = form.querySelector("[name=actiontextarea]");
const action = document.querySelectorAll(".action__wrap--textarea");
const submit = document.querySelector(".plan-steps__submit");

const x = function(action) {
  form.addEventListener("submit", function (evt) {
    if (!actiontextarea.value || !bgtextarea.value) {
      evt.preventDefault();
      action.classList.remove("action__wrap--error");
      form.offsetWidth = form.offsetWidth;
      action.classList.add("action__wrap--error");
    }
  });
}

for (i = 0; i < action.length; i++) {
  x(action[i]);
}
