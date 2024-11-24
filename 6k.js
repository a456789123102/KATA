//row col เช็คพร้อมกัน แต่ grid เช็คแยกต่างหาก

function progress(puzzle) {
  let rowCol = new Set();
  let zeroPosition = null;
  for (let i = 0; i < puzzle.length; i++) {
    for (let j = 0; j < puzzle[i].length; j++) {
      const subgridChar =
        puzzle[3 * Math.floor(i / 3) + Math.floor(j / 3)][
          ((i * 3) % 9) + (j % 3)
        ];
  
      console.log(`Round ${i}, Index [${i}, ${j}], SubgridChar = ${subgridChar}`);
  
      if (puzzle[i][j] !== 0) {
        console.log(`Adding ${puzzle[i][j]} from row`);
        rowCol.add(puzzle[i][j]);
      }
      if (puzzle[j][i] !== 0) {
        console.log(`Adding ${puzzle[j][i]} from column`);
        rowCol.add(puzzle[j][i]);
      }
      if (subgridChar !== 0) {
        console.log(`Adding ${subgridChar} from subgrid`);
        rowCol.add(subgridChar);
      }
  
      console.log(`Current rowCol: ${[...rowCol]}`);
    }
  
    console.log(`End of Round ${i}: rowCol = ${[...rowCol]}`);
    rowCol.clear();
    zeroPosition = null;
  }
}
// console.log(
//   progress([
//     [1, 8, 9, 0, 0, 0, 0, 0, 0],
//     [0, 2, 7, 0, 0, 0, 0, 0, 0],
//     [6, 5, 4, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 8, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//   ])
// );
console.log(
  progress([
    [0, 1, 7, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 5, 0, 6, 0],
    [8, 3, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 8, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 4, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 9, 0, 0, 0, 0, 0, 0, 0],
  ])
);
