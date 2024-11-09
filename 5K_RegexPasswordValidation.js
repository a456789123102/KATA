function buildPyramid(n) {
    let pyramid = "";
    const maxWidth = n * 5;  // ความกว้างสูงสุดตามค่า `n`
    
    for (let i = 1; i <= n; i++) {
        // คำนวณจำนวนช่องว่างนำหน้าในแต่ละชั้น
        let leadingSpaces = maxWidth - (i * 5);

        // สร้างแต่ละแถวในชั้นปัจจุบัน
        for (let j = 0; j < i; j++) {
            let row = " ".repeat(leadingSpaces);  // สร้างช่องว่างนำหน้า

            // เพิ่มรูปแบบตามตำแหน่งของแถว
            if (j === 0) {
                row += "./\\";  // แถวบนสุดของชั้น
            } else if (j === i - 1) {
                row += "\\/" + "_|__".repeat(j - 1) + "|_\\";  // แถวล่างสุดของชั้น
            } else {
                row += ".´".repeat(j) + "\\/" + "__|__".repeat(j - 1) + "__|_\\";
            }

            // จัดเรียงแถวให้ตรงกลางด้วยความกว้างสูงสุด
            pyramid += row.padStart((maxWidth + row.length) / 2) + "\n";
            leadingSpaces--;  // ลดช่องว่างนำหน้าลงในแต่ละแถว
        }
    }

    return pyramid;
}

// ทดลองใช้งานฟังก์ชัน
console.log(buildPyramid(3));