function giveCandy(arr) {
  let ans = Array.from({ length: arr.length }).fill(1);
  if (arr.length === 1) {
    return 1;
  }
  for (let i = 1; i < arr.length-1; i++) {
    if(arr[i - 1] < arr[i]) ans[i]++;
    if( arr[i + 1] < arr[i]) ans[i]++;     
    ans[0] = arr[0] > arr[1] ? ans[1]+1 : ans[0]
    ans[arr.length-1] = arr[arr.length-1] > arr[arr.length-2] ? ans[ans.length-2]+1 : ans[ans.length-1]
  }
  return ans.reduce((a,b) => a+b,0)
}

console.log(giveCandy([5, 4, 3, 3, 2, 3]));
console.log(giveCandy([1, 0, 2]));
console.log(giveCandy([1, 1, 1]));

