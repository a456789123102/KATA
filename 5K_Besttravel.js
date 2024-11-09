function chooseBestSum(t, k, ls) {
    if(ls.length <= k){
        let km = ls.reduce((a,b) => a+b,0);
        if(km > t){
            return null;
        }
    }
    let kmSpending = 0;

    function dfs(i,miles, town, distance,slate){
//recursion
if(slate.length === town){
let sumSlate = slate.reduce((a,b) => a+b,0);
if(sumSlate <=miles){
    kmSpending = Math.max(kmSpending,sumSlate);
}
 return;
}
for(let j = i; j < distance.length ; j++){
       
        slate.push(distance[j]);
    dfs(j+1,miles, town, distance,slate);
    slate.pop();

}
    }
  dfs(0,t, k, ls,[]);
  return kmSpending > 0 ? kmSpending : null;
}
console.log(chooseBestSum(163, 3,[50, 55, 56, 57, 58]))