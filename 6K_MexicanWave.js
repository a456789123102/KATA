function wave(str) {
  let loop = 0;
  let ans = [];
  while (loop < str.length) {
    let copyStr = str.toLowerCase().split("");
    if(/[a-z]/.test(copyStr[loop])){
        copyStr[loop] = copyStr[loop].toUpperCase();
        ans.push(copyStr.join(""));
    }
    loop++;
  }
  return ans;
}
console.log(wave('Two words'));
//[ 'Two words', 'tWo words', 'twO words', 'two words', 'two Words', 'two wOrds', 'two woRds', 'two worDs', 'two wordS' ]
//[ 'Two words', 'tWo words', 'twO words', 'two Words', 'two wOrds', 'two woRds', 'two worDs', 'two wordS' ]