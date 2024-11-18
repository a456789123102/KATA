//สร้าง Array เทียมว่าไปไหนแล้วบ้าง
//สร้าง function หาว่า max R จากจุดที่เริ่มเผาไปถึงไหน shift ออกมา ++ ระยะ ส่งเข้า function หาบนล่างซ้ายขวา
//สร้าง function หาบนล่างซ้ายขวา pushเข้าไปในเผา ถ้ามีอย่างน้อย1 ก็บบวกระยั 1

function burnRope(rope, start) {
  const rows = rope.length;
  const cols = rope[0].length;
  const [startRow, startCol] = start;

  if (rope[startRow][startCol] !== "R") return -1;

  const directions = [
    [-1, 0], // upper
    [1, 0], // bottom
    [0, -1], // left
    [0, 1], // right
  ];

  //bfs
  const queue = [[startRow, startCol, 0]]; // [row, col, time]
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
  visited[startRow][startCol] = true;

  let maxTime = 0;

  while (queue.length > 0) {
    const [currRow, currCol, time] = queue.shift();
    maxtime = Math.max(maxTime, time);

    for (const [dRow, dCol] of directions) {
      const newRow = currRow + dRow;
      const newCol = currCol + dCol;

      if (
        newRow >= 0 &&
        newRow < rows &&
        newCol >= 0 &&
        newCol < cols &&
        rope[newRow][newCol] === "R" &&
        !visited[newRow][newCol]
      ) {
        visited[newRow][newCol] = true;
        queue.push([newRow, newCol, time + 1]);
      }
    }
  }
  return maxtime;
}
console.log(
  burnRope(
    [
      [" ", " ", " ", "R", " ", " "],
      [" ", " ", " ", "R", " ", " "],
      [" ", "R", "R", "R", "R", " "],
      [" ", " ", " ", "R", " ", " "],
      [" ", " ", " ", "R", " ", " "],
      [" ", " ", " ", "R", " ", " "],
    ],
    [0, 3]
  )
);
