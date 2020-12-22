// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
function pyramid(n, row = 0, level = "") {
  if (row === n) return;

  if (level.length === 2 * n - 1) {
    console.log(level);
    
    return pyramid(n, row + 1);
  }

  const midpoint = Math.floor((2 * n - 1) / 2);
  let add;

  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = "#";
  } else {
    add = " ";
  }

  pyramid(n, row, level + add);
}

module.exports = pyramid;
// function pyramid(n) {
//   /*
//     n = 7
//     NOTES ON THE MIDWAY POINT:
//     the reason why this midpoint is NOT simply n/2 is because the growth rate 
//     of the hash component.  this is the midpoint of the row length when accounting
//     for the row COUNT.  row length is not the same as row count.
//   */
//   let midpoint = Math.floor((n * 2 - 1) / 2);
//   // 7 * 2 = 14 - 1 = 13 / 2 = 6.5 -> 6
//   //midpoint = 6
//   for (let i = 0; i < n; i++) {
//     let level = "";

//     // j is col index
//     for (let j = 0; j < 2 * n - 1; j++) {
//       if (midpoint - i <= j && midpoint + i >= j) {
//         level += "#";
//       } else {
//         level += " ";
//       }
//     }
//     console.log(level);
//   }
// }