function perimeter(n) {
    if(n < 1){
      return 4;
    }
    let arr = [1,1]; 
  
    for (let i = 2; i <= n; i++) {
      arr.push(arr[i - 1] + arr[i - 2]);
    }
    let sum = arr.reduce((a, b) => a + b, 0);
    return sum*4;
  }
  console.log(perimeter(1))