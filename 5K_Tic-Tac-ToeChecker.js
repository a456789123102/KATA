function isSolved(board) {
  function checkWinner(a, b, c) {
      if (a === b && b === c && a !== 0) {
          return a; 
      }
      return 0;
  }

  for (let i = 0; i < board.length; i++) {
      let result = checkWinner(board[i][0], board[i][1], board[i][2]);
      if (result) return result;
  }

  for (let i = 0; i < board[0].length; i++) {
      let result = checkWinner(board[0][i], board[1][i], board[2][i]);
      if (result) return result;
  }

  let result = checkWinner(board[0][0], board[1][1], board[2][2]);
  if (result) return result;

  result = checkWinner(board[0][2], board[1][1], board[2][0]);
  if (result) return result;

  for (let row of board) {
      if (row.includes(0)) {
          return -1; 
      }
  }

  return 0; 
}

let board = [
  [0, 1, 1],
  [0, 1, 2],
  [2, 1, 0]
];

console.log(isSolved(board)); 
