function pickPeaks(arr) {
  let pos = [];
  let peaks = [];
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i - 1] < arr[i] && arr[i] >= arr[i + 1]) {
      if (arr[i] > arr[i + 1]) {
        peaks.push(arr[i]);
        pos.push(i);
      } else {
        let tempIndex = [i + 1];
        while (arr[i] === arr[tempIndex] && tempIndex < arr.length) {
          tempIndex++;
          if (arr[i] > arr[tempIndex]) {
            peaks.push(arr[i]);
            pos.push(i);
          }
        }
      }
    }
  }

  return { pos: [...pos], peaks: [...peaks] };
}
console.log(
  pickPeaks([
    1, 2, 5, 4, 3, 2, 3, 6, 4, 1, 2, 3, 3, 4, 5, 3, 2, 1, 2, 3, 5, 5, 4, 3,
  ])
);
