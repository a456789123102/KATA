function int32ToIp(int32){
    let ans = [];
    let toBit = int32.toString(2)
    toBit = toBit.padStart(32,"0");
    return [...toBit].reduce((acc, char, index) => {
        if (index % 8 === 0) acc.push(''); 
        acc[acc.length - 1] += char; 
        return acc;
    }, []).map(e => parseInt(e,2)).join('.')
  }
  console.log(int32ToIp(2149583361));
  console.log(int32ToIp(32));