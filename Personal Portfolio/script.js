/* ***********************************************************************
        using typed.js library for animation text of home page
*********************************************************************** */
var typed = new Typed(".auto-type",{
    strings : ["Software Engineer", "Programmer", "Web Developer","Freelancer"],
    typeSpeed : 50,
    backSpeed : 50,
    loop : true,
    backDelay: 1000
});


/* ***********************************************************************
                script for the responsiveness section
*********************************************************************** */
const mobile_nav = document.querySelector(".hamburger");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
    nav_header.classList.toggle("active");
}

mobile_nav.addEventListener("click", toggleNavbar);