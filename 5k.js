function listSquared(m, n) {
    let ans = [];

    for (let num = m; num <= n; num++) {
        let candidatesNum = [];
        for (let i = 1; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                const res = num / i;
                candidatesNum.push(i);
                if (i !== res) {
                    candidatesNum.push(res);
                }
            }
        }

        let sumVal = candidatesNum.map((e) => e * e).reduce((a, b) => a + b, 0);
        if (Math.sqrt(sumVal) % 1 === 0) {
            ans.push([num, sumVal]);
        }
    }

    return ans;
}

console.log(listSquared(1, 42));
