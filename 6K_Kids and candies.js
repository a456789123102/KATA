function candiesToBuy(kids) {
  const gcd = (a, b) => {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  };
  const lcm = (a, b) => {
    return (a * b) / gcd(a, b);
  };

  function findLCMUpTo(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = lcm(result, i);
  }
  return result;
}

return findLCMUpTo(kids);
}
