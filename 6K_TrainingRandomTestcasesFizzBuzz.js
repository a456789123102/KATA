function randomNumber() {
  if (Math.random() < 0.8) {
    while (true) {
      const num = Math.floor(Math.random() * 9999) + 1;
      if (num % 3 === 0 || num % 5 === 0) {
        return num;
      }
    }
  } else {
    while (true) {
      const num = Math.floor(Math.random() * 9999) + 1;
      if (num % 3 !== 0 && num % 5 !== 0) {
        return num;
      }
    }
  }
}
