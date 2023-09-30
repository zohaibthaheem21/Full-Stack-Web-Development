// Q 1:

let str = "Zohaib";
let num = 21;
console.log(str + num);

// Q 2:
console.log(typeof(str + num));

// Q 3:

const b = {
    name:"Zohaib",
    section:1
}

// b = "Aslam"; // can't add to const variable

// Q 4:
// Yes, we can add a new key in any object in js

b['frined'] = "Saeed";
console.log(b);

// Q 5:

const dict = {
    appreciate: "recognize the full worth of.",
    attitude: "a settled way of thinking or feeling about something.",
    love: "an intense feeling of deep affection.",
    friend: "a person with whom one has a bond of mutual affection, typically one exclusive of sexual or family relations.",
    yakka: "work, especially of a strenuous physical kind."
}

console.log(dict.love);
console.log(dict['yakka']);