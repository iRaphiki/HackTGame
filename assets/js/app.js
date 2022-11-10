let alert = document.querySelector(".alert");
let menu = document.querySelector(".hamburger");
let close = document.querySelector(".btn__close");
menu.addEventListener("click", (e) => {
  alert.classList.remove("dismissible");
});
close.addEventListener("click", (e) => {
  alert.classList.add("dismissible")
});
//FUNCIÓN BOTÓN CLOSE
document.querySelector(".btn__close").addEventListener("click", () => {
  document.querySelector("alert dismissible").classList.toggle("open");
});
