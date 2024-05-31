const barIcon = document.querySelector(".bar-icon");
const linksDiv = document.querySelector(".links-div");
const links = document.querySelectorAll(".nav-links");
let body = document.querySelector("body");
let isBarIconChecked = true;

barIcon.addEventListener("click",() => {
    if(isBarIconChecked === true){
        linksDiv.style.display = "flex";
        barIcon.innerHTML = `<i class="fa-solid fa-xmark" style="color: #3030ff;"></i>`;
        isBarIconChecked = false;
    }
    else {
        linksDiv.style.display = "none";
        barIcon.innerHTML = `<i class="fa-solid fa-bars"></i>`;
        isBarIconChecked = true;
    }
})
links.forEach((link)=>{
    link.addEventListener("click",()=>{
        linksDiv.style.display = "none";
        barIcon.innerHTML = `<i class="fa-solid fa-bars"></i>`;
        isBarIconChecked = true;
    })
})