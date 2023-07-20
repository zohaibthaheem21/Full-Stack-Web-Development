const fs = require("fs");



// Writing File:
// fs.writeFile("message.txt","Hello from Nodeja", (err) => {
//     if (err) throw err;
//     console.log('successfully deleted /tmp/hello');
//   });



// Reading File:
fs.readFile('./message.txt','utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

// If we are not using here utf8 then we will get the output in buffer, so for that we have to
// use the isUtf8.