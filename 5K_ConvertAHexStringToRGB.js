function hexStringToRGB(hexString) {
    hexString = hexString.replace("#", "").toUpperCase();
    const r = parseInt(hexString.slice(0, 2), 16); 
    const g = parseInt(hexString.slice(2, 4), 16); 
    const b = parseInt(hexString.slice(4, 6), 16);
    let ans = {
        "r": r,
        "g": g,
        "b": b
      };
  
    return  ans
}
console.log(hexStringToRGB('#beaded'))
