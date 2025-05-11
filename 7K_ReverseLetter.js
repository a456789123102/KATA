function reverseLetter(str) {
  return str
    .split("")
    .filter((e) => {
      if (/[A-Za-z]/.test(e)) return e;
    })
    .reverse()
    .join("");
}
console.log(reverseLetter("asAd"));
