function prime(num) {
  let ans = [];
  if (num <= 1) return [];

  function checkPrime(n){
    for(let i = 2 ; i <= Math.sqrt(n); i++){
        if(n % i === 0) return false;
    }
    return true
  }

  for (let i = 2; i <= num; i++) {
    if(checkPrime(i) === true) ans.push(i)
  }
  return ans;
}
console.log(prime(23))