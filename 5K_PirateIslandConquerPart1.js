function conquerIsland(map) {
  const unOccupiedIsland = [];
  const marineIsland = [];
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j] === "u") unOccupiedIsland.push([i, j]);
      else if (map[i][j] === "m") marineIsland.push([i, j]);
    }
  }
  if (!unOccupiedIsland.length && !marineIsland.length) return [];
  if (unOccupiedIsland.length) {
    return unOccupiedIsland
      .sort((a, b) => {
       if(a[0] + a[1] !== b[0] + b[1]) return a[0] + a[1] - (b[0] + b[1]);
       else if(a[0] !== b[0]) return a[0] - b[0];
       return a[1] - b[1];
      })
      .filter((e) => {
        const [a, b] = e;
        const [c, d] = unOccupiedIsland[0];
        return a + b === c + d;
      });
  } else {
    return marineIsland.sort((a, b) => {
        if(a[0] + a[1] !== b[0] + b[1]) return a[0] + a[1] - (b[0] + b[1]);
        else if(a[0] !== b[0]) return a[0] - b[0];
        return a[1] - b[1];
    })[0];
  }
}

console.log(
  conquerIsland([
    ["p", "~", "u", "~", "~", "~", "~", "~"],
    ["~", "~", "~", "~", "~", "~", "~", "~"],
    ["u", "~", "~", "~", "~", "~", "~", "~"],
    ["~", "~", "~", "~", "~", "~", "~", "~"],
    ["~", "~", "~", "~", "~", "~", "~", "~"],
    ["~", "~", "~", "~", "~", "~", "~", "~"],
    ["~", "~", "~", "~", "~", "~", "~", "~"],
    ["~", "~", "~", "~", "~", "~", "~", "u"],
  ])
);
console.log(
  conquerIsland([
    ["p", "~", "~", "~", "~", "~", "~", "~"],
    ["~", "~", "~", "m", "~", "~", "~", "~"],
    ["m", "~", "~", "~", "~", "~", "~", "~"],
    ["~", "~", "~", "~", "~", "~", "~", "~"],
    ["~", "~", "~", "~", "~", "m", "~", "~"],
    ["~", "~", "~", "~", "~", "~", "~", "~"],
    ["~", "~", "~", "m", "~", "~", "~", "~"],
    ["~", "~", "~", "~", "~", "~", "~", "~"],
  ])
);
