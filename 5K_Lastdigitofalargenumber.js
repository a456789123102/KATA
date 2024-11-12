function lastDigit(n, m) {  
    if (m === 0n) return 1n;
    let base = n % 10n;      
    let exponent = m % 4n === 0n ? 4n : m % 4n; 
    return base ** exponent % 10n;
}

console.log(lastDigit(9n, 7n));