function colourful(number) {
  const maxRound = String(number).length;
  const numArr = String(number)
    .split("")
    .map((e) => Number(e));
  let loop = true;
  let rounded = 0;

  const findDup = (round) => {
    let sum = 1;
    for (let i = round; i < maxRound; i++) {
      for (let j = i - round; j <= i; j++) {
        sum *= numArr[j];
      }
      if (round === 0) {
        if (numArr.indexOf(numArr[i]) !== numArr.lastIndexOf(numArr[i])) {
          loop = false;
          return;
        }
      } else if (!numArr.includes(sum)) {
        numArr.push(sum);
        loop = true;
      } else {
        loop = false;
        return;
      }
      sum = 1;
    }
  };

  do {
    findDup(rounded);
    rounded++;
  } while (loop && rounded <= maxRound);

  return loop;
}

console.log(colourful(99));
