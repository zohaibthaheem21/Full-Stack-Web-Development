// using typed.js library for animation text of home page
// var typed = new Typed(".auto-type",{
//     strings : ["Software Engineer", "Programmer", "Web Developer","Freelancer"],
//     typeSpeed : 50,
//     backSpeed : 50,
//     loop : true,
//     backDelay: 1000
// });


hamburger = document.querySelector(".hamburger");
hamburger.onclick = function() {
    navBar =  document.querySelector(".nav-bar");
    navBar.classList.toggle(".active");
}
