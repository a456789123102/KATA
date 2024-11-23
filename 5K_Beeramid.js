var beeramid = function(bonus, price) {
let spendLimit = bonus / price; //4.5
let levels = 0; //0 //2 //4

while(true){
  let spendOnThisLvl = (levels + 1) * (levels + 1);
  if(spendOnThisLvl > spendLimit) break;
  spendLimit -= spendOnThisLvl;
  levels ++;
}
return levels
}
console.log(beeramid(9,2))