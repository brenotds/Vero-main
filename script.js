function hambMenu() {
  const hamb = document.querySelector(".hamb-menu");
  const header = document.querySelector(".header");

  hamb.addEventListener("click", () => header.classList.toggle("active"));
}
hambMenu();
