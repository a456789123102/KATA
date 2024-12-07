// function polyGroup(n, k) {
//   let ans = [];
//   const queue = [];
//   for (let i = 0; i <= n; i++) {
//     if (i % k === 0 && i !== 0) {
//       queue.push(i);
//     }
//   }
//   if (!queue.length) return [];

//   function permute(i, e, nums, slate) {
//     if (slate.length >= 2 && slate[slate.length - 2] >= slate[slate.length - 1]) return;

//     if (i === e) {
//       ans.push([...slate]);
//       return;
//     }
//     for (let j = i; j < nums; j++) {
//       slate.push(j);
//       permute(i + 1, e, nums, slate);
//       slate.pop();
//     }
//   }
//   queue.forEach((e) => permute(0, e, n, []));
//   return ans.reverse().sort((a, b) => {
//     const min = Math.min(a.length, b.length);
//     for (let i = 0; i < min; i++) {
//       if (a[i] !== b[i]) return a[i] - b[i];
//     }
//     return b.length - a.length;
//   });
// }
// console.log(polyGroup(4, 2));
// console.log(polyGroup(22, 16)); //this is time out

//lets find another ways


  
  function polyGroup(n, k) {
    const rec = (start) => {
        const limit = n + 1 - k + currComb.length % k;
        
        for (let i = start; i < limit; i++) {
            currComb.push(i);
            rec(i + 1);
            if (currComb.length % k === 0) comb.push(currComb.slice());
            currComb.pop();
        }
    };

    const comb = [];
    const currComb = [];
    rec(0);
    return comb;
}

console.log(polyGroup(4, 2)); // ทดสอบ
