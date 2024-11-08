function rule30(list, n) {
  const zero = ["000", "101", "110", "111"];
  while (n > 0) {
    list = [0, ...list, 0];
    let newRow = [];
    for (let i = 0; i < list.length; i++) {
      let left = list[i - 1] === undefined ? 0 : list[i - 1];
      let middle = list[i] === undefined ? 0 : list[i];
      let right = list[i + 1] === undefined ? 0 : list[i + 1];
      let cell = [left, middle, right].join("");
      zero.includes(cell) ? newRow.push(0) : newRow.push(1);
    }
    list = newRow;
    n--;
  }
  return list;
}

console.log(rule30([1], 2));
