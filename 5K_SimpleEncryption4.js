//check ว่า keys ครบตาม qwery มั้ย ถ้าไม่ ปล่อบผ่าน
//เช็คว่าเป็นตัวพิมใหญ่มั้ย
//เช็คว่าเป็นตัวพิเศษมั้ย
//หาว่าอยู่ line ไหน
//encrypt โดย index ใน line ปัจจุบัน + key % 9
//dcrypt ล่ะ index ใน line ปัจจุบัน - key % 9

var line = ["qwertyuiop", "asdfghjkl", "zxcvbnm,."];

function encrypt(text, key) {
  const keys = String(key).padStart(3, "0").split("");
  let result = "";
  for (let i = 0; i < text.length; i++) {
    let letter = text[i];
    const isUpperCase = /[A-Z]/.test(letter);
    const isUpperComma = /[<]/.test(letter);
    const isUpperDot = /[>]/.test(letter);
    if (isUpperComma) letter = ",";
    if (isUpperDot) letter = ".";
    if (isUpperCase) letter = letter.toLowerCase();
    const lineNum = line.findIndex((e) => e.includes(letter));
    if (lineNum === "0") {
      result += text[i];
    } else if (lineNum === -1) {
      result += text[i];
    } else {
      const char = line[lineNum].indexOf(letter);
      const encryptChar =
        line[lineNum][(char + Number(keys[lineNum])) % line[lineNum].length];
      if (isUpperCase && encryptChar === ",") result += "<";
      else if (isUpperCase && encryptChar === ".") result += ">";
      else if (isUpperCase ||isUpperComma||isUpperDot) result += encryptChar.toUpperCase();
      else result += encryptChar;
    }
  }
  return result;
}
function decrypt(text, key) {
  const keys = String(key).padStart(3, "0").split("");
  let result = "";
  for (let i = 0; i < text.length; i++) {
    let letter = text[i];
    const isUpperCase = /[A-Z]/.test(letter);
    const isUpperComma = /[<]/.test(letter);
    const isUpperDot = /[>]/.test(letter);
    if (isUpperComma) letter = ",";
    if (isUpperDot) letter = ".";
    if (isUpperCase) letter = letter.toLowerCase();
    const lineNum = line.findIndex((e) => e.includes(letter));
    if (lineNum === "0") {
      result += text[i];
    } else if (lineNum === -1) {
      result += text[i];
    } else {
      const char = line[lineNum].indexOf(letter);
      const decryptChar =
        line[lineNum][
          (char - Number(keys[lineNum]) + line[lineNum].length) %
            line[lineNum].length
        ];
      if (isUpperCase && decryptChar === ",") result += "<";
      else if (isUpperCase && decryptChar === ".") result += ">";
      else if (isUpperCase ||isUpperComma||isUpperDot) result += decryptChar.toUpperCase();
      else result += decryptChar;
    }
  }
  return result;
}
console.log(encrypt("i t wKra }{ zkfyov vzw} IWczxpop", 220));
//console.log(decrypt(">fdd", 134));

// 'p t rAyd }{ zahiqv vzr} PRczxwqw' 220
//'p u rAyd }{ zahiqv vzr} PRczxwqw' need this
