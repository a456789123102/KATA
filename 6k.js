function analyze(block, observations) {
  const suspectAct = [[2,1],[2,3],[3]]
  let ans = [];
 const floorNum = new Map();
 block.forEach((e,i) =>{
  e.forEach((ei,id)=>{
    let floor = block.length - i
    let charCode = String.fromCharCode(65 +id)
    floorNum.set(floor+charCode,[ei]);
  })});
  for(let [floor, Act] of observations) {
 let observe = [floorNum.get(floor), Act[Act.length-1]];

 ans.push(observe)
  }
 return floorNum
}
console.log(analyze([
  [0, 2, 0],
  [0, 0, 0],
  [0, 0, 0]
],
[["3B", 0]]))