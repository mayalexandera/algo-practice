// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
//   let array = [0,1,1]
//   if (n < 1) {return 0}
//   if (n < 2) {return 1}

//   for(let i = 3; i <= n; i++) {
//     array.push(array[i-2] + array[i-1])
//   }
//   return array[n]
// }

function fib(n) {
  return n < 2 ? n : fib(n-1) + fib(n-2)
}
module.exports = fib;
