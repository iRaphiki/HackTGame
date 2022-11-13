/* ------------------SCROLL-TOP---------------------------- */
//let alertBox = document.querySelector(".alert");
let menu = document.querySelector(".hamburger");
let clsbtn = document.querySelector(".btn__close");
let btnLogSing = document.querySelectorAll(".botones_div");
let banerDissmisible = document.querySelector(".banner");

menu.addEventListener("click", (e) => {
  let alertBox = document.querySelector(".alert");
  alertBox.classList.remove("dismissible");
});
clsbtn.addEventListener("click", (e) => {
  let alertBox = document.querySelector(".alert");
  alertBox.classList.add("dismissible");
});
btnLogSing.forEach((element) => {
  element.addEventListener("click", (e) => {
    let alertBox = document.querySelector(".alert");
    alertBox.classList.add("dismissible");
    banerDissmisible.classList.add("dismissible");
  });
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


// ----- Slider new:
function manualSlideShow() {

}
let slides = document.querySelectorAll('.slide');
let btns = document.querySelectorAll('.circle');
let currentSlide = 1;

// Manual nav:
let manualNav = function(manual){
  slides.forEach((slide) =>{
    slide.classList.remove('active');

    btns.forEach((btn) => {
      btn.classList.remove('active');
    })
  })
  slides[manual].classList.add('active');
  btns[manual].classList.add('active');
}
btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  })
})
manualSlideShow();

/* ------------------Copy MODAL-BOX---------------------------- */
// Open and close modal/login window
const loginWindow = () => {
  window.addEventListener("load", () => {
    const openModalLogin = document.querySelectorAll(".login");
    const openModalSignup = document.querySelectorAll(".signup");
    const modalWindowLogin = document.getElementById("login-box");
    const modalWindowSign = document.getElementById("signup-box");

    const loginShowModalWindow = () => {
      modalWindowLogin.style.display = "block";
    };
    const signupShowModalWindow = () => {
      modalWindowSign.style.display = "block";
    };
    console.log(openModalLogin);
    console.log(openModalSignup);

    openModalLogin.forEach((element) => {
      element.addEventListener("click", loginShowModalWindow);
    });
    openModalSignup.forEach((element) => {
      element.addEventListener("click", signupShowModalWindow);
    });
    
    const closeModalButton = document.getElementById("close-modal");
    const closeModalButtonSign = document.getElementById("close-sign");

    const hideModalWindow = () => {
      modalWindowLogin.style.display = "none";
      modalWindowSign.style.display = "none";
      banerDissmisible.classList.remove("dismissible");
    };
    closeModalButton.addEventListener("click", hideModalWindow);
    closeModalButtonSign.addEventListener("click", hideModalWindow);
  });
};
loginWindow();
