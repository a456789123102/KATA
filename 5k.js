const result1 = [
    ['1', 'x', 'x', '1', '0', '0', '0'],
    ['2', '3', '3', '1', '0', '1', '1'],
    ['1', 'x', '1', '0', '0', '1', 'x'],
    ['1', '1', '1', '0', '0', '1', '1'],
    ['0', '1', '1', '1', '0', '0', '0'],
    ['0', '1', 'x', '1', '0', '0', '0'],
    ['0', '1', '1', '1', '0', '1', '1'],
    ['0', '0', '0', '0', '0', '1', 'x'],
    ['0', '0', '0', '0', '0', '1', '1']
  ];
  

  function open(row, column) {
    if( result1[row][column] ==='x')console.log(`Boommmmmmmmm at ${row} ${column}`)
    return result1[row][column];
    
  }

  const solveMine = (map, n) => {
    const newMap = map.split("\n").map((r) => r.split(" "));
  
    function checkaround(row, colomn) {
      let countGrid = 0; 
      let countMine = 0; 
      let hasZeroNeighbor = false; 

      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          const newRow = row + i;
          const newCol = colomn + j;
          if (
            newRow >= 0 &&
            newRow < newMap.length &&
            newCol >= 0 &&
            newCol < newMap[0].length
          ) {
            countGrid++; 
            if (newMap[newRow][newCol] === "x" || parseInt(newMap[newRow][newCol]) > 0) {
              countMine++; 
            }
            if (newMap[newRow][newCol] === "0") {
              hasZeroNeighbor = true; 
            }
          }
        }
      }
  
      // หากทุกเซลล์รอบๆ เป็น "mine" (เป็น x หรือเลขที่มากกว่า 0)
      if (countGrid === countMine) {
        console.log(`in row = ${row} col =${colomn} return  "mine"`)
        return "mine"; // ส่งกลับว่าเป็น mine
      }
  
      if (hasZeroNeighbor) {
        console.log(`in row = ${row} col =${colomn} return  "safe"`)
        return "safe";
      }
  console.log(`in row = ${row} col =${colomn} return "skip"`)
      return "skip"; 
    }
  
    let loop = true;
    do {
      loop = false;
      for (let row = 0; row < newMap.length; row++) {
        for (let col = 0; col < newMap[row].length; col++) {
          if (newMap[row][col] === "?") {
            loop = true;
            const check = checkaround(row, col);
            if (check === "safe") {
              // หากเซลล์เป็น safe ให้เปิดเซลล์นั้น
              newMap[row][col] = open(row, col);
            } else if (check === "mine") {
              // หากมีระเบิดให้เปลี่ยนเป็น "mine"
              newMap[row][col] = "x";
            }
          }
        }
      }
    } while (loop);
  
    return newMap.map((row) => row.join(" ")).join("\n");
  };
  
  // ตัวอย่างการใช้งาน
  console.log(
    solveMine(
  `\
  0 ? ? ? 0 0 ? ?
  0 ? ? ? 0 0 ? ?
  0 ? ? ? 0 0 ? ?
  0 ? ? ? ? ? ? 0
  0 ? ? ? ? ? ? 0
  0 ? ? ? ? ? ? ?
  0 ? ? ? 0 ? ? ?
  0 0 0 0 0 ? ? ?`
    )
  );
  