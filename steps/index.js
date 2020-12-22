// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row=0, stair='') {
  if (n === row) return;

  if (stair.length === n) {
    console.log(stair)
    return steps(n, row + 1)
  }

  // stair.length <= row ? stair += '#' : stair += ' '
  const add = stair.length <= row ? '#' : ' '
  steps(n, row, stair + add)
}

module.exports = steps;

// function steps(n) {
//   for (let i = 0; i <= n - 1; i++) {
//     let string = "";
//     for (let j = 0; j <= n - 1; j++) {
//       j <= i ? (string += "#") : (string += " ");
//     }
//     console.log(string);
//   }
// }
