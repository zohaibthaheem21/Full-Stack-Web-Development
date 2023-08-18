// Q 1:

const sentence = "The brown fox jumps over the lazy dog";
const word = "fox";
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);


// Q 2;

let st = "Please give me rs 30000";
let amount = st.slice("Please give me ".length);
console.log(amount);
