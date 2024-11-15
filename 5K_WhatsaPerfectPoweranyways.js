var isPP = function (n) {
  for (let i = 2; i < Math.sqrt(n)+1; i++) {
    for (let j = 2; j < Math.sqrt(n)+1; j++) {
        let res = Math.pow(i, j)
      if (res === n) {
        return [i, j];
      }
      if (res > n) break;
    }
  }
  return null;
};
console.log(isPP(4));
console.log(isPP(27));
console.log(isPP(484));
