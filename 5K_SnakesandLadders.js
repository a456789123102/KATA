function SnakesLadders() {
this.player1 = 0;
this.player2 = 0;
this.currentPlayer = 1;
};

SnakesLadders.prototype.play = function(die1, die2) {
  const SnakeAndLadder = {
    2:38,
    7:14,
    8:31,
    15:26,
    21:42,
    28:84,
    36:44,
    51:67,
    78:98,
    87:94,
    71:91,
    99:80,
    95:75,
    92:88,
    89:68,
    74:53,
    62:19,
    64:60,
    46:25,
    49:11,
    16:6,
  }
const go = die1 + die2;
if (this.currentPlayer === 1) {
  if(this.player2 === 100) return `Game over!`;
  this.player1 += go;
  if (this.player1 > 100) {
    this.player1 = 100 - (this.player1 - 100);
  }
  if (this.player1 === 100) {
    this.currentPlayer = 2;
    return 'Player 1 Wins!';
  }
if(this.player1 in SnakeAndLadder) this.player1 = SnakeAndLadder[this.player1];
if(die1 !== die2) this.currentPlayer = 2;
return `Player 1 is on square ${this.player1}`;
}
if (this.currentPlayer === 2) {
  if(this.player1 === 100) return `Game over!`;
  this.player2 += go;
  if (this.player2 > 100) {
    this.player2 = 100 - (this.player2 - 100);
  }
  if (this.player2 === 100) {
    this.currentPlayer = 1;
    return 'Player 2 Wins!';
  }
if(this.player2 in SnakeAndLadder) this.player2 = SnakeAndLadder[this.player2];
if(die1 !== die2) this.currentPlayer = 1;
return `Player 2 is on square ${this.player2}`;
}
}
const game = new SnakesLadders();
console.log(game.play(1, 1));
console.log(game.play(1, 2));
console.log(game.play(3, 3));
console.log(game.play(3, 4));

