let alert = document.querySelector(".alert")
let menu = document.querySelector(".hamburger")
menu.addEventListener("click" , (e) => {
    alert.classList.toggle("dismissible")
    
} )