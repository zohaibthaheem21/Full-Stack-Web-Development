var stranger = document.querySelector("h5")

var add = document.querySelector("#add")

// var remove = document.querySelector("#remove")

// add.addEventListener("click",function(){
//     stranger.innerHTML = "Friends"
//     stranger.style.color = "green"
// })

// remove.addEventListener("click",function(){
//     stranger.innerHTML = "Stranger"
//     stranger.style.color = "red"
// })



var flag = 0
add.addEventListener("click",function(){
   if (flag == 0) {
    stranger.innerHTML = "Friends"
    stranger.style.color = "green"
    add.innerHTML = "Remove Friend"
    flag = 1
   }
   else {
    stranger.innerHTML = "Stranger"
    stranger.style.color = "red"
    add.innerHTML = "Add Friend"
    flag = 0
   }
})