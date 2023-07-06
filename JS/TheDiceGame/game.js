// These lines give us number from 1 to 6:

var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;

// This means -> dice1.png - dice6.png:

var randomImage1 = "dice" + randomNumber1 + ".png";

// This means -> images/dice1.png - images/dice6.png:

var randomImageSource1  = "images/" + randomImage1;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource1);

// These lines give us number from 1 to 6:

var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;

// This means -> dice1.png - dice6.png:

var randomImage2 = "dice" + randomNumber2 + ".png";

// This means -> images/dice1.png - images/dice6.png:

var randomImageSource2  = "images/" + randomImage2;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);

// Changing the h1 text:

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins &#127937";
}

else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 wins &#127937";
}

else {
    document.querySelector("h1").innerHTML = "It's draw!";
}