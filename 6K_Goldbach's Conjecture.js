var checkGoldbach = function (number) {
  const isPrime = (num) => {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (i !== 1 && i !== num) {
        if (num % i === 0) {
          return false;
        }
      }
    }
    return true;
  };

  if (number <= 2 || number % 2 !== 0) {
    console.log("here")
    return [];
  } else {
    for (let i = 2; i <= Math.abs(number / 2); i++) {
      const secondNum = number - i;
      if (isPrime(i) && isPrime(secondNum)) {
        return [i,secondNum];
      }
    }
  }
  return [];
};
console.log(checkGoldbach(14))
