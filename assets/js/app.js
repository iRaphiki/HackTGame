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
