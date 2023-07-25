const fs = require('fs');


// only readFile() wil give every statement before the fs.readFile() method:
// fs.readFile('file.txt','utf8',(err, data) => {
//     console.log(err, data);
// });

// console.log("The file is read by me.");



// readFileSync() method will give fs.readFile() method content first then else:
// const a = fs.readFileSync('file.txt');
// // console.log(a);
// console.log(a.toString());

// console.log("The file is read by me.");




// Here we are writing in a file:
// fs.writeFile("file2.txt","Here I am writing in a file.", () => {
//     console.log("Written in a file.");
// });


const b = fs.writeFileSync('file2.txt',"Here I am writing again in file.");
console.log(b);

console.log("The file is written by me.");