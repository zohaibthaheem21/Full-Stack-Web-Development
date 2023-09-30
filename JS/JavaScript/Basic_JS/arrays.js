let fruit = ["banana","apple","mangoes"];
console.log(fruit);

let marks = [9,8,3,4,"not present",0,false];
console.log(marks);

console.log(marks[4]);
console.log(marks[8]);

marks[6] = 6; // here adding the marks of not false wale students
console.log(marks[6]);

console.log(marks);

console.log(typeof(marks));

console.log("The length of marks are "+marks.length);

for (let i=0; i<marks.length; i++) {
    console.log("["+ i +"]");
}