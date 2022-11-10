let alert = document.querySelector(".alert");
let menu = document.querySelector(".hamburger");
//let clsbtn = document.querySelector(".btn__close");

// menu.addEventListener("click", (e) => {
//   alert.classList.remove("dismissible");
// });
// clsbtn.addEventListener("click", (e) => {
//   alert.classList.add("dismissible");
// });
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

// console.log(window.pageYOffset);
