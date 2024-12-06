function landPerimeter(arr) {
  const queue = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === "X") queue.push([i, j]);
    }
  }

  let ans = 0;
  function countside(grid, pos) {
    const [row, col] = pos;
    const position = [
      [0, -1],
      [0, 1],
      [-1, 0],
      [1, 0],
    ];
    let res = 0;

    for (const [dRow, dCol] of position) {
      const newRow = dRow + row;
      const newCol = dCol + col;
      if (
        newRow >= 0 &&
        newRow < grid.length &&
        newCol >= 0 &&
        newCol < grid[0].length
      ) {
        if (grid[newRow][newCol] === "X") res++;
      }
    }
    ans += 4 - res;
  }
  queue.forEach((e) => countside(arr, e));
  return `Total land perimeter: ${ans}` ;
}
console.log(landPerimeter(["XOOO", "XOXO", "XOXO", "OOXX", "OOOO"]));
