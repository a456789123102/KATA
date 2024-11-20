function kuromasuPuzzle(bd) {
  const rows = bd.length;
  const cols = bd[0].length;
  const newArr = Array.from({ length: rows }, () => Array(cols).fill(0));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (bd[i][j] === "#") {
        let count = 1;
        //check top
        // Check top
        if (i > 0) {
          let newRow = i - 1;
          while (newRow >= 0) {
            if (bd[newRow][j] !== "*") {
              count++;
              newRow--;
            } else {
              break;
            }
          }
        }

        // Check bottom
        if (i < bd.length - 1) {
          let newRow = i + 1;
          while (newRow < bd.length) {
            if (bd[newRow][j] !== "*") {
              count++;
              newRow++;
            } else {
              break;
            }
          }
        }

        // Check left
        if (j > 0) {
          let newCol = j - 1;
          while (newCol >= 0) {
            if (bd[i][newCol] !== "*") {
              count++;
              newCol--;
            } else {
              break;
            }
          }
        }

        // Check right
        if (j < bd[i].length - 1) {
          let newCol = j + 1;
          while (newCol < bd[i].length) {
            if (bd[i][newCol] !== "*") {
              count++;
              newCol++;
            } else {
              break;
            }
          }
        }

        // Assign count to new array
        newArr[i][j] = count;
      }
    }
  }

  return newArr.map((e) => e.map((i) => (i > 0 ? i : -1)));
}
console.log(
  kuromasuPuzzle([
    ["*", ".", "*"],
    [".", "#", "#"],
  ])
);

// [
//     [-1,-1,-1],
//     [-1,4,3]]
