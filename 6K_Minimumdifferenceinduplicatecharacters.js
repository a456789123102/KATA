function minRepeatingCharacterDifference(text) {
  let textIndex = {};
  let textFirstFound = {};
  let textLastMatch = {};
  for (let i = 0; i < text.length; i++) {
    if (textFirstFound[text[i]] === undefined) {
      textFirstFound[text[i]] = i;
    } else { //found the first dup char
      const difference = i - textFirstFound[text[i]];
      if (!textIndex[text[i]]) {
        textIndex[text[i]] = difference;
        textLastMatch[text[i]] = i;
      }
      else { //found the second dup char
        if(textIndex[text[i]] > difference){
            textIndex[text[i]] = difference;
            textLastMatch[text[i]] = i;
        }
        }
      
    }
    textFirstFound[text[i]] = i;
  }

  const sortArr = Object.entries(textIndex)
    .filter(([key]) => key)
    .sort((a, b) => {
      if (a[1] !== b[1]) {
        return a[1] - b[1];
      } else {
        return textLastMatch[a[0]] - textLastMatch[b[0]];
      }
    });
  return sortArr.length === 0 ? null : sortArr[0].reverse();
}
console.log(minRepeatingCharacterDifference( "aabbca"));
