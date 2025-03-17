function lookAndSay(data, len) {
  const ans = [data];
  let count = 0;

  const readfn = (n) => {
    const newN = n.split("");
    let count = 1; 
    let currNum = newN[0];
    let ans = [];

    for (let i = 1; i < newN.length; i++) {
      if (newN[i] === currNum) {
        count++; 
      } else {
        ans.push(String(count), currNum); 
        currNum = newN[i]; 
        count = 1; 
      }
    }
    ans.push(String(count), currNum);
    return ans.join("");
  };

  while (count < len) {
    const read = readfn(ans[count]);
    ans.push(read);
    count++;
  }
 ans.shift();
  return  ans
}
console.log(lookAndSay("1259", 5));
