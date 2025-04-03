function lucasnum(n){
    if(!lucasnum.memo) lucasnum.memo = {};
    if (n in lucasnum.memo) return lucasnum.memo[n]

    if (n < 0) {
        const result = ((n % 2 === 0) ? 1 : -1) * lucasnum(-n);
        lucasnum.memo[n] = result;
        return result;
    }
    
    if (n === 0) return 2;
    if (n === 1) return 1;
    lucasnum.memo[n] = lucasnum(n - 1) + lucasnum(n - 2);
    return lucasnum.memo[n];
}
console.log(lucasnum(-10)); 