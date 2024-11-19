function reducePyramid(base) {
  if (base.length === 1) return base;
  let tempBase = [];
  for (let i = 1; i < base.length; i++) {
    tempBase.push(base[i - 1] + base[i]);
  }
  base = tempBase;
  return reducePyramid(tempBase);
}
