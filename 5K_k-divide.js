// function calculateSum(n, k) {
// let ans = 0n;
// for(let i = 1n ; i<=n ; i++){
//     let currNum = i;
// while(currNum % k === 0n){
// currNum = currNum / k;
// }
// ans += currNum
// }
// return ans
//   }
//   console.log(calculateSum(10n,4n))
//this is time out

// function calculateSum(n, k) {
//     let allSum = n*(n + 1n) / 2n;
//     let divide = (n / k) * (n / k +1n) / 2n;
//     allSum -= divide * k;
//     if(n < k) return allSum;
//     else return allSum + calculateSum(n / k, k);
// }
// console.log(calculateSum(10n,4n))








function calculateSum(n, k) {
    let allSum = n*(n + 1n) / 2n;
    let divideSum = (n / k) * (n / k *(n / (k + 1n))) / 2n;
    allSum -= divideSum * k
    if (n < k) return allSum;
    else return allSum + calculateSum(n/k,k)
}
console.log(calculateSum(10n,4n))
