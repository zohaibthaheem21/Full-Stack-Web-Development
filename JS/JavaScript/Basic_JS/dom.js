// Practice Set Question no : 1 solution:

document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red";


// Question no : 3 solution:
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "yellow";
document.getElementsByTagName("nav")[0].lastElementChild.style.color = "yellow";


// Question no : 4 solution:
Array.from(document.getElementsByTagName("li")).forEach((element)=> {
    element.style.background = "red";
})