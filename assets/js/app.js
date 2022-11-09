let alert = document.querySelector(".alert")
let menu = document.querySelector(".hamburger")
menu.addEventListener("click" , (e) => {
    alert.classList.toggle("dismissible")
    
} )
//FUNCIÓN BOTÓN CLOSE
document.querySelector(".btn__close").addEventListener("click", () => {
    document.querySelector("alert dismissible").classList.toggle("open");
  });