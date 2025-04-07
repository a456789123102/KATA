// function zipWith(fn, a0, a1) {
//   const ans = [];
//   const maxLength = Math.min(a0.length, a1.length);
//   console.log("Max:",maxLength)
//    return a0.map((a, i) => {
//       if (i < maxLength) {
//         return fn(a, a1[i]);
//       }else{
//         return "N"
//       }
//     }).filter((e) => e !== "N");
// }


function zipWith(fn, a0, a1) {
    return Array.from({length:Math.min(a0.length,a1.length)},(_,i)=>{return fn(a0[i],a1[i])})
}

console.log(zipWith(Math.pow, [10, 10, 10, 10], [0, 1, 2, 3]));
console.log(zipWith(Math.pow, [0,1,2,3,4,5], [6,5,4,3,2  ]));