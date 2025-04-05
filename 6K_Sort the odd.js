function sortArray(array) {
  const oddArr = array
    .filter((e) => {
      if (e % 2 !== 0) return e;
    })
    .sort((a, b) => a - b);
  let currArr = -1;
  return array.map((e, i) => {
    if (e % 2 !== 0) {
      currArr++;
      return oddArr[currArr];
    }
    return e;
  });
}
console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));
