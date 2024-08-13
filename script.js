const menuIcon = document.querySelector(".menu-icon");
const rightDiv = document.querySelector(".nav-right-div");
const navLinks = document.querySelectorAll(".nav-links");
let body = document.querySelector("body");
let isBarIconChecked = true;

menuIcon.addEventListener("click", () => {
  if (isBarIconChecked === true) {
    rightDiv.style.translate = "0";
    menuIcon.innerHTML = `<i class="fa-solid fa-xmark" style = 'color : #fbfcf8'></i>`;
    body.style.overflow = "hidden";
    isBarIconChecked = false;
  } else {
    rightDiv.style.translate = "100%";
    menuIcon.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    body.style.overflow = "auto";
    isBarIconChecked = true;
  }
});
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    body.style.overflow = "auto";
    rightDiv.style.translate = "100%";
    menuIcon.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    isBarIconChecked = true;
  });
});
