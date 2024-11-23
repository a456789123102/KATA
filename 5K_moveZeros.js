// function moveZeros(arr) {
//     const newArr = arr.filter(e => e !== 0);
//    "0".repeat(arr.length - newArr.length).split('').forEach(e => newArr.push(parseInt(e)))
//    return newArr
//   }
 function moveZeros(arr) {
    let nonZeroIndex = 0;
    for(let i = 0 ; i < arr.length ; i ++){
        if(arr[i] !== 0){
            [arr[nonZeroIndex], arr[i]] = [arr[i], arr[nonZeroIndex]];
            nonZeroIndex ++;
        }
    }
    return arr;
}
  console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]))