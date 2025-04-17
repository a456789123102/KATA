function towerBuilder(nFloors, nBlockSz) {
  const ans = [];
  const maxWidth = (nFloors * 2 - 1) * nBlockSz[0]; 
  const createBlock = (width, hight) => {
    const unit = "*".repeat(width).padStart((maxWidth + width) / 2).padEnd(maxWidth);;
    for (let i = 0; i < hight; i++) {
      ans.push(unit);
    }
  };
  for (let i = 0; i < nFloors; i++) {
    createBlock((nBlockSz[0] * (i + 1)) + (nBlockSz[0] * i), nBlockSz[1]);
  }
  return ans
}

console.log(towerBuilder(3, [4, 2]));