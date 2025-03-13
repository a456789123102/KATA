// function findArr(arrA, arrB, rng, wanted) {
//     return [...new Set(arrA.filter((e) => e >= rng[0] && e <= rng[1]
//     &&(e % 2 === 0 && wanted === 'even'||e % 2 !== 0 && wanted === 'odd')
//     && arrB.includes(e) && arrA.indexOf(e) !==  arrA.lastIndexOf(e)
//    ))].sort((a,b) => a-b)
// }

// not working in big Arr new to improve logic

function findArr(arrA, arrB, rng, wanted) {
  const countA = new Map();
  const countB = new Map();

  for (let num of arrA) {
    countA.set(num, (countA.get(num) || 0) + 1);
  }
  for (let num of arrB) {
    countB.set(num, (countB.get(num) || 0) + 1);
  }

  const delDupB = new Set(arrB);

  const ans = [];

  for (let [num, count] of countA) {
    if (
      count > 1 &&
      countB.get(num) > 1 &&
      num >= rng[0] &&
      num <= rng[1] &&
      ((num % 2 === 0 && wanted === "even") ||
        (num % 2 !== 0 && wanted === "odd"))
    ) {
      ans.push(num);
    }
  }
  return ans.sort((a,b) => a-b);
}

console.log(
  findArr(
    [1, -2, 7, 2, 1, 3, 4, 7, 1, 0, 2, 3, 0, 4],
    [0, 4, 2, -1, 1, 1, 1, 1, 2, 3, 3, 7, 7, 0, 4],
    [-4, 4],
    "even"
  )
);
