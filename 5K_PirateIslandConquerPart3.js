function conquerIsland(map) {
  function mh(a, b) {
    return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
  }
  function findMark(grid, mark) {
    const res = [];
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] === mark) res.push([i, j]);
      }
    }
    return res;
  }
  function countAdj(grid, pos, mark) {
    let res = 0;
    const [row, col] = pos;
    const position = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];
    for (const [dRow, dCol] of position) {
      const newRow = row + dRow;
      const newCol = col + dCol;
      if (
        newRow >= 0 &&
        newRow < grid.length &&
        newCol >= 0 &&
        newCol < grid[0].length &&
        grid[newRow][newCol] === mark
      ) {
        res++;
      }
    }
    return res;
  }

  const pirateLands = findMark(map, "p");
  const uLands = findMark(map, "u");
  const mLands = findMark(map, "m");
  const targetLands = uLands.length ? uLands : mLands;
  if (!targetLands.length) return [];
  targetLands.sort((a, b) => {
    const sharkA = countAdj(map, a, "s");
    const sharkB = countAdj(map, b, "s");
    if (sharkA !== sharkB) return sharkA - sharkB;
    const amh = Math.min(...pirateLands.map((i) => mh(i, a)));
    const bmh = Math.min(...pirateLands.map((i) => mh(i, b)));
    if (amh !== bmh) return amh - bmh;
    const teasureA = countAdj(map, a, "t");
    const teasureB = countAdj(map, b, "t");
    if (teasureA !== teasureB) return teasureB - teasureA;
    if (a[0] !== b[0]) return a[0] - b[0];
    return a[1] - b[1];
  });
  const minDistance = Math.min(
    ...pirateLands.map((e) => mh(e, targetLands[0]))
  );
  const minShark = countAdj(map, targetLands[0], "s");
  const maxTeasure = countAdj(map, targetLands[0], "t");
  return targetLands.filter(
    (e) =>
      Math.min(...pirateLands.map((r) => mh(e, r))) === minDistance &&
      countAdj(map, e, "s") === minShark &&
      countAdj(map, e, "t") === maxTeasure
  );
}
console.log(
  conquerIsland([
    ['~', '~', '~', 'u', '~', 'p', '~', 'p'],
    ['~', '~', '~', '~', '~', 'u', '~', '~'],
    ['~', '~', '~', '~', '~', 's', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~'],
    ['~', '~', '~', '~', '~', '~', '~', '~']])
);
