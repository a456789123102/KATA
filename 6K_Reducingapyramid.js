// function reducePyramid(base) {
//   if (base.length === 1) return base;
//   let tempBase = [];
//   for (let i = 1; i < base.length; i++) {
//     tempBase.push(base[i - 1] + base[i]);
//   }
//   base = tempBase;
//   return reducePyramid(tempBase);
// }
//time out try again

// function reducePyramid(base) {
//     while(base.length > 1){
//         for (let i = 0; i < base.length - 1; i++) {
//             base[i] = base[i] + base[i + 1];
//         }
//         base.pop();
//     }
//     return base
// }
//this is also time out

function reducePyramid(base) {
    let sum = 0;
    let multiplier = 1;
    for (let i = base.length - 1; i >= 0; i--) {
        sum += base[i] * multiplier; 
        multiplier *= 2; 
    }
    return sum;
}
