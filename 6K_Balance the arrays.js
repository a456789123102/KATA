function balance (arr1, arr2){
    let arr1Count = new Map(),arr2Count = new Map();
    arr1.forEach(e => {arr1Count.has(e) ?arr1Count.set(e, arr1Count.get(e) + 1):arr1Count.set(e, 1);});
    arr2.forEach(e => {arr2Count.has(e) ?arr2Count.set(e, arr2Count.get(e) + 1):arr2Count.set(e, 1);});

    return JSON.stringify([...arr1Count.values()].sort((a,b) => a - b)) === JSON.stringify([...arr2Count.values()].sort((a,b) => a - b)) 
  }
  console.log(balance(["a","a","a","a","a","b","b","b"] ,["c","c","c","c","c","d","d","d"]))