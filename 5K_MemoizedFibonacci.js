function fibonacci(n,memo = {}) {
    if (memo[n]) return memo[n];
    if (n < 2) return n;
    else{
        memo[n] = fibonacci(n - 1,memo) + fibonacci(n - 2,memo);
        return memo[n] 
    }
  }
  console.log(fibonacci(50));