// [1, 2, 3]
// [4, 5, 6]
// 3, 3,3 = 9 sqrt = 3 ??



var solution = function(firstArray, secondArray) {
let sum = 0;
firstArray.forEach((e,i) => {
sum += Math.pow(e - secondArray[i],2)
});
return sum/firstArray.length
}   
console.log(solution([1, 2, 3],[4, 5, 6]))