// $("h1").css("color","blue");

// If I am using jQuery link just before body tag in the head tag then, I have to write like this:

// $(document).ready(function() {
//     $("h1").css("color","red");
// });



// Using js:

// document.querySelector("h1");
// document.querySelectorAll("button");



// But through jQuery we will do the above code like this:

// $("h1");

// $("button");



// Adding class:

$("h1").addClass("big-title");

// we can also remove the class just writing removeClass instead of addClas:

// want to add more than one class:

// $("h1").addClass("big-title margin-50");

// we can also check that is that class is present in the any element or not:
// $("h1").hasClass();



// Changing text:

// $("h1").text("Sardar");

// $("button").text("<em>Hey</em>")
// $("button").html("<em>Hey</em>");



// Manipulating attributes:

// $("a").attr("href","https://www.yahoo.com/");


// Adding eventListener:

// $("h1").click(function() {
//     $("h1").css("color","Purple");
// });


// Using just js:

// for (var i=0; i<5; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click",function() {
//         document.querySelector("h1").style.color = "red";
//     });
// }

// Using jQuery:
$("button").click(function() {
    $("h1").css("color","red");
});



// Changing h1 text by typing any key:
$(document).keypress(function(e) {
    $("h1").text(e.key);
});

// Changing h1 color using mouse click:
// we can also use "mouseover" instead of "click":

$("h1").on("click",function() {
    $("h1").css("color","Green")
});


// adding and remove before, after, append and prepend button:

// $("h1").before("<button>New</button>");
// $("h1").after("<button>New</button>");
// $("h1").prepend("<button>New</button>");
// $("h1").append("<button>New</button>");

// $("button").remove();


// Adding Animation:

$("button").click(function() {
    // $("h1").hide();
    // $("h1").show();
    // $("h1").toggle();

    // $("h1").fadeOut();
    // $("h1").fadeIn();
    // $("h1").fadeToggle();

    // $("h1").slideUp();
    // $("h1").slideDown();
    // $("h1").slideToggle();

    // $("h1").animate({opacity:0.5}
    
    $("h1").slideUp().slideDown().animate({opacity:0.5});
});
