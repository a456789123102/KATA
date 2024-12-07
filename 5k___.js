function getMoves(board) {
   function moveDisk(n,sorce,target,slate,moves){
    if(n === 1){
        moves.push(source);
        moves.push(target);
    }
   }
  }

  const board = {
    getRodTops: () => [3, 0, 0], 
    printBoard: () => {
        console.log("Rod 0: [3, 2, 1]");
        console.log("Rod 1: []");
        console.log("Rod 2: []");
    },

    getDifficulty: () => 3,  

    printWhilePlaying: (boolean) => {
        if (boolean) {
            console.log("Playing..."); 
        }
    }
};

console.log(getMoves(board))