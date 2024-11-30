function sumDifRev(n) {
  let numsArr = [45,54,495,594]
  for (let i=numsArr[numsArr.length-1]+1; numsArr.length<= n; i++){
let reverse = String(i).split("").reverse().join("");
if ( reverse.startsWith("0")) continue;
if ((i + parseInt(reverse))%Math.abs(i - parseInt(reverse)) == 0){
  numsArr.push(i);
}
  }

  return numsArr[n-1];
}
console.log(sumDifRev(50))
