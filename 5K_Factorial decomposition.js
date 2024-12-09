function decomp(n) {
  if(n <= 2) return n;
let ans = [];

function isprime(n){
  if(n <= 1) return false;
  for(let i = 2; i <= Math.sqrt(n) ; i++){
if(n % i === 0 )return false
  }
return  true
}


for(let i = 2 ; i<=n ; i++){
if(isprime(i)){
  let tempN = n;
  let sum = 0;
  while(tempN >= i){
    tempN /= i;
    sum += Math.floor(tempN)
  }
  ans.push(sum > 1 ? `${i}^${sum}`:`${i}`)
}
}
 return ans.join(' * ')
}
console.log(decomp(12)) // "2^10 * 3^5 * 5^2 * 7 * 11"