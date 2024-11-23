function josephusSurvivor(n,k){
    let survivor = [];
    for(let i = 1 ; i <= n; i++){
        survivor.push(i);
    }
let sp = 0;
while(survivor.length > 1){
    sp = (sp+k-1)%survivor.length
    survivor.splice(sp,1);
}
return survivor[0]
  }
  console.log(josephusSurvivor(7,3))