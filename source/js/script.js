const successPopup = document.querySelector(".modal-popup--success");
const failurePopup = document.querySelector(".modal-popup--failure");
const successCloseButton = successPopup.querySelector(".modal-popup__close-button");
const failureCloseButton = failurePopup.querySelector(".modal-popup__close-button");

const contestForm = document.querySelector(".contest-form");
const telInput = contestForm.querySelector(".form-edit__input--tel");
const emailInput = contestForm.querySelector(".form-edit__input--email");
const submitButton = contestForm.querySelector(".contest-form__button");

submitButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (!telInput.value || !emailInput.value ) {
    failurePopup.classList.add("modal-popup--show");
  }
  else {
    successPopup.classList.add("modal-popup--show");
  }
});

successCloseButton.addEventListener("click", function () {
  successPopup.classList.remove("modal-popup--show");
  contestForm.submit();
});

failureCloseButton.addEventListener("click", function () {
  failurePopup.classList.remove("modal-popup--show");
});
