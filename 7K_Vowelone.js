function vowelOne(s) {
  const vowel = ["a", "e", "i", "o", "u","A","E","I","O","U"];
  return s.split("").map((t) => {
    if (vowel.includes(t)) {
      return "1"
    } else return "0"
  }).join("");
}
console.log(vowelOne("123, arou"));
