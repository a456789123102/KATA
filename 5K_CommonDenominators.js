
function convertFrac(lst){
    let ans = ""
    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }
    function lcm(a, b) {
        return (a * b) / gcd(a, b);
    }
    let maxDenom = lst.reduce((acc, [_, denom]) => lcm(acc, denom), 1);

    for (let [numer, denom] of lst) {
        let newNumer = numer * (maxDenom / denom);
        ans += `(${newNumer},${maxDenom})`;
    }
    
    return ans;
  }
  console.log(convertFrac([ [1, 2], [1, 3], [1, 4] ]))