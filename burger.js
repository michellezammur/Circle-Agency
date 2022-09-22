console.log("Hello")

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector(".w-nav-menu-mobile");
const navLink = document.querySelectorAll(".myStuff");



hamburger.addEventListener("click", () => { 
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
    navLink.classList.toggle("active");
   
})


