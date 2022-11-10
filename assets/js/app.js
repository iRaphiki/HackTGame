/* ------------------SCROLL-TOP---------------------------- */
//let alertBox = document.querySelector(".alert");
let menu = document.querySelector(".hamburger");
let clsbtn = document.querySelector(".btn__close");

menu.addEventListener("click", (e) => {
  let alertBox = document.querySelector(".alert");
  alertBox.classList.remove("dismissible");
});
clsbtn.addEventListener("click", (e) => {
  let alertBox = document.querySelector(".alert");
  alertBox.classList.add("dismissible");
});

// //  para scroll
 let lastScrollTop;
 navbar = document.getElementById("navbar");
 window.addEventListener("scroll", function () {
   const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
   if (scrollTop > lastScrollTop) {
     navbar.style.top = "-100px";
   } else {
     navbar.style.top = "0";
   }
   lastScrollTop = scrollTop;
 });




/* ------------------MODAL-BOX---------------------------- */
// Open and close modal/login window
const loginWindow = () => {
  window.addEventListener("load", () => {
    const openModalLogin = document.getElementById("login");
    const openModalSignup = document.getElementById("signup");
    const modalWindowLogin = document.getElementById("login-box");
    const modalWindowSign = document.getElementById("signup-box");

    const loginShowModalWindow = () => {
      modalWindowLogin.style.display = "block";
    };
    const signupShowModalWindow = () => {
        modalWindowSign.style.display = "block";
    };

    openModalLogin.addEventListener("click", loginShowModalWindow);
    openModalSignup.addEventListener("click", signupShowModalWindow);

    const closeModalButton = document.getElementById("close-modal");
    const closeModalButtonSign = document.getElementById("close-sign");
    
    const hideModalWindow = () => {
        modalWindowLogin.style.display = "none";
        modalWindowSign.style.display = "none";
    };
    closeModalButton.addEventListener("click", hideModalWindow);
    closeModalButtonSign.addEventListener("click", hideModalWindow);
  });
};
loginWindow();

//FUNCIÓN BOTÓN CLOSE
document.querySelector(".btn__close").addEventListener("click", () => {
  document.querySelector(".menu_container").classList.toggle("open");
});
