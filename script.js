const menuIconDiv = document.querySelector(" .menu-btn");
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const rightDiv = document.querySelector(".nav-right-div");
const navLinks = document.querySelectorAll(".nav-links");
let body = document.querySelector("body");
let isBarIconChecked = true;

menuIconDiv.addEventListener("click", (e) => {
  if (isBarIconChecked === true) {
    rightDiv.classList.add("active");
    menuIconDiv.innerHTML = '<i class="fa-solid fa-xmark close-icon"></i>';
    body.style.overflowY = "hidden";
    isBarIconChecked = false;
  } else {
    rightDiv.classList.remove("active");
    menuIconDiv.innerHTML =
      '<i class="fa-sharp fa-solid fa-bars menu-btn"></i>';
    body.style.overflowY = "auto";
    isBarIconChecked = true;
  }
  
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      rightDiv.classList.remove("active");
      menuIconDiv.innerHTML =
        '<i class="fa-sharp fa-solid fa-bars menu-btn"></i>';
      body.style.overflowY = "auto";
      isBarIconChecked = true;
    });
  });
});
