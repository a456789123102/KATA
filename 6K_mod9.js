function nMod9(m, n) {
  let num = 0;
  for (let i = m; i <= n; i++) {
    num += i;
  }
  return num % 9;
}
console.log(nMod9(1, 8));
