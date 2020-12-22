// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

/*
- alternative solution 

1. create an empty string called 'result'
2. for each character in the string:
    - if to the left of the character is a space
      - capitalize it and add it to result
    - else 
      - add it to 'result
*/
function capitalize(str) {
  let result = str[0].toUpperCase();
  let array = str.split("").slice(1);

  array.map((char, index) => {
    array[index - 1] === " "
      ? (result += char.toUpperCase())
      : (result += char);
  });
  return result;
}

// function capitalize(str) {
//   const words = str.split(" ");
//   const sent = [];
//   words.map((word) => {
//     sent.push(word[0].toUpperCase().concat(word.slice(1)));
//   });
//   return sent.join(" ");
// }
module.exports = capitalize;
