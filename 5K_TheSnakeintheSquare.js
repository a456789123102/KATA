const distribution = function(size) {
  // คำนวณขนาดของตารางที่ต้องการ
  let side = Math.ceil((2 + 2 * size) ** 0.5 - 1);  // หาขนาดตาราง
  side += (side + 1) * (side + 1 >> 1) < size;  // ปรับขนาดตารางให้เพียงพอกับ size
  
  // สร้างตารางที่มีขนาด side x side
  let M = Array(side).fill(0);
  console.log(side)
  M = M.map(_ => M.slice());  // สร้าง 2D array

  // กำหนดทิศทางการเติม (ลง, ขวา, ขึ้น, ซ้าย)
  let dirs = [[1, 0, side - 1], [0, 1, 2], [-1, 0, side - 1], [0, 1, 2]];
  let x = 0, y = 0, i = 0, n = side - 1, dx = 1, dy = 0;

  // เติมค่าในตาราง
  while (size-- > 0) {
    M[x][y] = 1;  // เติม 1 ที่ตำแหน่ง (x, y)
    if (!n) {
      // เปลี่ยนทิศทางเมื่อเดินครบแล้ว
      [dx, dy, n] = dirs[i = (++i) % 4];
    }
    x += dx;  // อัพเดตค่า x
    y += dy;  // อัพเดตค่า y
    n--;  // ลดค่า n เพื่อให้ทราบจำนวนที่เดินในทิศทางนี้
  }

  return M;  // ส่งคืนตารางที่เติมค่าแล้ว
};


// ทดสอบฟังก์ชัน
console.log(distribution(5)); 
console.log(distribution(8)); 
console.log(distribution(15));
