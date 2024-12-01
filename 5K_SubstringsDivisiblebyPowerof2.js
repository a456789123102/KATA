// function subPowerOf2(s, p) {
//   const result = [];

//   for (let i = 0; i < s.length; i++) {
//     let res = []
//     let num = "";
//     for (let j = i; j < s.length; j++) {
//       num += s[j];
//       if(Number(num) % 2**p === 0) res.push(num);
//     }
//     result.push(res.length)
//   }
//   return result;
// }
// console.log(subPowerOf2("1048", 3));
//times up need to improve  efficient approach
//Small 1 (100 tests, 10 <= s.length <= 50, 1 <= p <= 5)
// function subPowerOf2(s, p) {
//   const result = [];
//   const divisor = 2 ** p;
//   for (let i = 0; i < s.length; i++) {
//     let count = 0;
//     let num = 0;
//     for (let j = i; j < s.length; j++) {
//       num = num * 10 + parseInt(s[j]);
//       const lastNum = num %10;
//       if(lastNum === 0 ||lastNum === 2||lastNum === 4||lastNum === 6||lastNum === 8){
//         if (num % divisor === 0) count++;
//       }
      
//     }
//     result.push(count);
//   }
//   return result;
// }
// console.log(subPowerOf2('9625417860256460633677115963933895235305811171195',5))
// ได้[ 35, 32, 31, 31, 30, 29, 29, 28, 27, 25, 24, 22, 22, 20, 19, 18, 17, 15, 14, 13, 13, 12, 10, 9, 9, 8, 6, 6, 6, 4, 3, 2, 2, +0, +0, +0, +0, +0, 1, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0 ]
// ต้องการ[ 3, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 1, 2, 1, 1, 2, 1, +0, +0, +0, +0, +0, +0, +0, +0, 1, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0, 1, +0, +0, +0, +0, +0, +0, +0, +0, +0, +0 ]
//not working we will use dp

function subPowerOf2(s, p) {
    const n = s.length;
    countDivisibleSubstrings = Array(n + 1).fill(0);
    const divisor = 2**p;
    for (let i = n - p; i >= 0; i--) {
        countDivisibleSubstrings[i] = countDivisibleSubstrings[i + 1] + (parseInt(s.slice(i, i + p)) % divisor === 0);
    }
    const result = [];
    for (let i = 0; i < n; i++) {
        let validSubstringCountAtIndex = countDivisibleSubstrings[i]; // จำนวนซับสตริงที่ถูกต้องจากตำแหน่ง i
        for (let j = Math.min(n, i + p - 1); j > i; j--) {
          validSubstringCountAtIndex += (parseInt(s.slice(i, j)) % divisor === 0);
        }
        result.push(validSubstringCountAtIndex);
      }
      return result;
}
console.log(subPowerOf2('9625417860256460633677115963933895235305811171195',5))