function selectQuotients(arr, m, dirStr) {
  let ans = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        const res = arr[i] / arr[j];
        if (
          res >= m &&
          res % 1 === 0 &&
          (dirStr && dirStr.toLowerCase() === "odd"
            ? res % 2 !== 0
            : dirStr && dirStr.toLowerCase() === "even"
            ? res % 2 === 0
            : true)
        ) {
          if (
            !ans.some(
              ([q, [n, d]]) => q === res && n === arr[i] && d === arr[j]
            )
          ) {
            ans.push([res, [arr[i], arr[j]]]);
          }
        }
      }
    }
  }
  return ans.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0];            
    if (a[1][0] !== b[1][0]) return a[1][0] - b[1][0];
    return a[1][1] - b[1][1];    
  });
}

console.log(
  selectQuotients(
    [2, 4, 27, 16, 9, 15, 25, 6, 12, 83, 24, 49, 7, 5, 94, 12, 6],
    6,
    "Odd"
  )
);
