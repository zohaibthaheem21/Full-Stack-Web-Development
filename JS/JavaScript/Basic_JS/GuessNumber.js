let a = Math.random()*100;
a = Number.parseInt(a);
let inp;
let score = 100;
while (inp != a) {
    score = score - 1;
    inp = prompt("Guess the number : ");
    if (inp == a) {
        prompt("Congratulations!!! you guess the correct number../nThe number is : "+a);
    }
    else if (inp>a && inp<100) {
        prompt("The number is greater than your guess number.");     
    } else if (inp<a && inp>0) {
        prompt("The number is lower than your guess number.");
    }
    else {
        prompt("Enter the number between 1 to 100 : ");
        }
}