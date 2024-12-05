function conquerIsland(map) {
  function mh(val1, val2) {
    return Math.abs(val1[0] - val2[0]) + Math.abs(val1[1] - val2[1]);
  }
  function findLocationIsland(grid,mark){
    let res = [];
    for(let i = 0 ; i < grid.length ; i++){
        for(let j = 0 ; j < grid[i].length ; j++){
            if(grid[i][j] === mark) res.push([i,j]);
        }
    }
    return res;
  }
  const pirateIsland = findLocationIsland(map,"p")
  const unoccupiedIsland = findLocationIsland(map,"u")
  const marineIsland = findLocationIsland(map,"m")
const targetIsland = unoccupiedIsland.length? unoccupiedIsland:marineIsland;
if(!targetIsland.length) return [];

targetIsland.sort((a,b) =>{
    const d1 = Math.min(...pirateIsland.map(e => {return mh(e,a)}))
    const d2 = Math.min(...pirateIsland.map(e => {return mh(e,b)}))
    if(d1 !== d2) return d1 - d2;
    if(a[0] !== b[0]) return a[0] - b[0];
    return a[1] - b[1]
})
const min = Math.min(...pirateIsland.map(p => mh(p,targetIsland[0])));
return targetIsland.filter(island => 
    Math.min(...pirateIsland.map(p => mh(p, island))) === min);
}
console.log(
  conquerIsland([
    ["~", "~", "u", "~", "~", "~", "~", "~"],
    ["~", "~", "~", "p", "~", "~", "~", "~"],
    ["u", "~", "~", "~", "~", "~", "~", "~"],
    ["~", "~", "~", "~", "~", "~", "~", "~"],
    ["~", "~", "~", "~", "~", "~", "~", "~"],
    ["~", "~", "~", "~", "~", "~", "~", "~"],
    ["~", "~", "~", "~", "~", "~", "p", "~"],
    ["~", "~", "~", "~", "~", "~", "~", "u"],
  ])
);
