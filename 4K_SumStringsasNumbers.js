function sumStrings(a, b) {
    a = a.replace(/^0+/, '') || '0';
    b = b.replace(/^0+/,'') || '0';
    let ans = '';
    let carry = 0;
    let i = a.length - 1;
    let j = b.length - 1;
    while(i >= 0 || j >= 0 || carry > 0){
        const digitA = i >= 0 ?  parseInt(a[i], 10) : 0;
        const digitB = j >= 0 ? parseInt(b[j], 10) : 0;

        const sum = digitA + digitB + carry;
        ans = (sum % 10) + ans; //plus string
        carry = Math.floor(sum / 10);
        i--;
        j--;
    }
    return ans;
}
console.log(sumStrings('712569312664357328695151392', '8100824045303269669937'));