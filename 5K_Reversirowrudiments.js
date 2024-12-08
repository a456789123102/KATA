//create result arry
//create turn after turn check left and right of current put value
//if last of left or right is the same of current change all to the same current

function reversiRow(moves) {
  let board = Array.from({ length: 8 }).fill(".");
  for (let i = 0; i < moves.length; i++) {
    const val = i % 2 === 0 ? "*" : "O";
    board[moves[i]] = val;

    function pushCheck(position, val, board) {
      let stack = [];
      for (let i = position + 1; i < board.length; i++) {
        if (board[i] === ".") break;
        if (board[i] === val) {
          stack.forEach((e) => (board[e] = val));
          break;
        }
        stack.push(i);
      }
      stack = [];
      for (let i = position - 1; i >= 0; i--) {
        if (board[i] === ".") break;

        if (board[i] === val) {
          stack.forEach((e) => (board[e] = val));
          break;
        }
        stack.push(i);
      }
    }
    
    pushCheck(moves[i], val, board);
  }
  return board.join("");
}
console.log(reversiRow([2, 1, 0]));
