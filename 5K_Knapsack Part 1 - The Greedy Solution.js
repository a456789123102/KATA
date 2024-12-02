var knapsack = function (capacity, items) {
  let result = Array(items.length).fill(0);

  const ratio = items.map((item, index) => {
    const [size, val] = item;
    const valPerSize = val / size;
    return { size, val, valPerSize, index };
  });
  ratio.sort((a, b) => b.valPerSize - a.valPerSize);
  let remainSpace = capacity;

  for (let i = 0; i < ratio.length; i++) {
    const { size, val, valPerSize, index } = ratio[i];
    if (size <= remainSpace) {
      const possibleGrap = Math.floor(remainSpace / size);
      result[index] = possibleGrap;
      remainSpace -= possibleGrap * size;
    }
  }
  return result;
};
console.log(
  knapsack(100, [
    [10, 10],
    [30, 40],
    [56, 78],
  ])
);

console.log(knapsack(100, 
    [[1, 1],
    [3, 4]]))