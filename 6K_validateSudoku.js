function validateSudoku(board) {
    //check row && col
    let setCol = new Set();
    let setRow = new Set();
    let subgrid = new Set();
    for(let i = 0 ; i < board.length ; i++){
        for(let j =  0 ; j < board[i].length ; j++){
            const subgridChar = board[ 3 * Math.floor(i/3) + Math.floor(j/3)][(( i * 3 ) % 9 ) + ( j % 3 )];
if(setCol.has(board[i][j])|| setRow.has(board[j][i]) ||subgrid.has(subgridChar) || !/[1-9]/.test(board[i][j]) ||!/[1-9]/.test(board[j][i]) ||/[1-9]/.test(subgrid)) return false; //check valid value
setCol.add(board[i][j]);
setRow.add(board[j][i]);
subgrid.add(subgridChar)
        }
        setCol.clear();
        setRow.clear();
        subgrid.clear();
    }
    return true;
}
console.log(validateSudoku(
    [ [1,3,2,5,7,9,4,6,8],
      [4,9,8,2,6,1,3,7,5],
      [7,5,6,3,8,4,2,1,9],
      [6,4,3,1,5,8,7,9,2],
      [5,2,1,7,9,3,8,4,6],
      [9,8,7,4,2,6,5,3,1],
      [2,1,4,9,3,5,6,8,7],
      [3,6,5,8,1,7,9,2,4],
      [8,7,9,6,4,2,1,5,3]]
))
console.log(validateSudoku(
    [[8,4,7,2,6,5,1,0,3],
      [1,3,6,7,0,8,2,4,5],
      [0,5,2,1,4,3,8,6,7],
      [4,2,0,6,7,1,5,3,8],
      [6,7,8,5,3,2,0,1,4],
      [3,1,5,4,8,0,7,2,6],
      [5,6,4,0,1,7,3,8,2],
      [7,8,1,3,2,4,6,5,0],
      [2,0,3,8,5,6,4,7,1]] // a valid board, but with 0 instead of 9
))
console.log(validateSudoku(
    [ [1,3,2,5,7,9,4,6,8],
      [4,9,8,2,6,1,3,7,5],
      [7,5,6,3,8,4,2,1,9],
      [6,4,3,1,5,8,7,9,2],
      [5,2,1,7,9,3,8,4,6],
      [9,8,7,4,2,6,5,3,1],
      [2,1,4,9,3,5,6,8,7],
      [3,6,5,8,1,7,9,2,4], 
      [8,7,9,6,4,2,1,3,5]] // duplicated '3' in eighth column
))
