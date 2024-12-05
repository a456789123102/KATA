const distribution = function(size) {
  // คำนวณขนาดของตารางที่ต้องการ
  let side = Math.ceil((2 + 2 * size) ** 0.5 - 1);  
  side += (side + 1) * (side + 1 >> 1) < size;  
  

  let M = Array(side).fill(0);
  console.log(side)
  M = M.map(_ => M.slice()); 

  let dirs = [[1, 0, side - 1], [0, 1, 2], [-1, 0, side - 1], [0, 1, 2]];
  let x = 0, y = 0, i = 0, n = side - 1, dx = 1, dy = 0;

  while (size-- > 0) {
    M[x][y] = 1;  // เติม 1 ที่ตำแหน่ง (x, y)
    if (!n) {
      // เปลี่ยนทิศทางเมื่อเดินครบแล้ว
      [dx, dy, n] = dirs[i = (++i) % 4];
    }
    x += dx; 
    y += dy;  
    n--;  
  }

  return M;  
};

console.log(distribution(5)); 
console.log(distribution(8)); 
console.log(distribution(15));
