const modal = document.querySelector("dialog");
const menuButton = document.querySelector(".menu-button");
const menuClose = document.querySelector(".menu-close");

menuButton.addEventListener("click", () => {
  modal.showModal();
});

menuClose.addEventListener("click", () => {
  modal.close();
});
