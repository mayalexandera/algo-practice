// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  if (n < 2) return n;
  let start = 1
  while(start <= n) {
    let ans = ''
    start % 15 === 0
      ? console.log("fizzbuzz")
      : start % 3 === 0 
      ? console.log("fizz")
      : start % 5 === 0 
      ? console.log("buzz")
      : console.log(start)
      start++
    }
}

module.exports = fizzBuzz;
