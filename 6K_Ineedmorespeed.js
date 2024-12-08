

function reverse(arr) {
for(let i = 0 ; i < arr.length/2; i++){
    let temp = arr[arr.length-1-i];
    arr[arr.length-1-i] = arr[i];
    arr[i] = temp;
}
return arr
 }
 console.log(reverse(['hello','world','how','are','you','?']))