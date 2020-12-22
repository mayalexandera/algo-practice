// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  let matrix = [];
  for (let i = 0; i < n; i++) {
    matrix[i] = new Array(n);
  }

  let [startRow, startCol] = [0, 0];
  let [endRow, endCol] = [n - 1, n - 1];
  let counter = 1;

  while (startCol <= endCol && startRow <= endRow) {
    
    // left to right
    for (let i = startCol; i <= endCol; i++) {
      matrix[startRow][i] = counter;
      counter++;
    }

    startRow++;

    // top to bottom
    for (let j = startRow; j <= endRow; j++) {
      matrix[j][endCol] = counter;
      counter++;
    }
    endCol--;

    //right to left
    for (let a = endCol; a >= startCol; a--) {
      matrix[endRow][a] = counter;
      counter++;
    }
    endRow--;

    //bottom to top
    for (let b = endRow; b >= startRow; b--) {
      matrix[b][startCol] = counter;
      counter++;
    }

    startCol++;
  }
  console.log(matrix);
  return matrix;
}
module.exports = matrix;
