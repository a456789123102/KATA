function pairEmUp(n) {
    const result = new Set();
  const size = [];
  for (let i = 2; i <= n; i += 2) {
    size.push(i);
  }

  function permute(i, e, n, slate) {

    if (slate.length === e) {
        result.add(slate.join(','));
        return;
    }
    for (let j = i; j < n; j++) {
      slate.push(j);
      permute(j + 1,e, n,slate);
      slate.pop();
    }
  }
  
  size.forEach(e => permute(0,e,n,[]));
  const sortedResult = Array.from(result).map((item) => item.split(',').map(Number)).sort((a,b) =>{
    for (let i = 0; i < Math.min(a.length, b.length); i++) {
        if (a[i] !== b[i]) return a[i] - b[i];
      }
      return b.length - a.length;
  })

  return sortedResult;
}
console.log(pairEmUp(5));
