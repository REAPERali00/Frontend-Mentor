const openButton = document.getElementById("open-menu");
const closeButton = document.getElementById("close-menu");
const navMenu = document.getElementById("nav-menu");

openButton.addEventListener("click", () => {
  navMenu.classList.add("show");
});

closeButton.addEventListener("click", () => {
  navMenu.classList.remove("show");
});
