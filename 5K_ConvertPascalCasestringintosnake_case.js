function toUnderscore(string) {
  if (typeof string !== 'string') {
    return  String(string)
  }
const newStr = string.split("").map((e,i) =>{
  if(/[A-Z]/.test(e)){
    if(i === 0) return e.toLowerCase();
    return "_"+e.toLowerCase();
  }
  else{
    return e;
  }
 })
return newStr.join('');
}
console.log(toUnderscore("'\'5\''"));