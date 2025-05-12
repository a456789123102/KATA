function gamble(rolls, myCoins, pot) {
  rolls.forEach((e) => {
    if (e === "Gimel") {
      myCoins += pot;
      pot = 0;
    } else if (e === "Hei") {
      const num = pot / 2;
      myCoins += Math.floor(num);
      pot -= Math.floor(num);
    }else if (e === "Shin") {
      myCoins -= 1;
      pot += 1;
    }
  });
  return myCoins
}

//console.log(gamble(["Hei", "Shin"], 10, 20)); //expected 19 = 10 + (20/2) - 1
console.log(gamble(["Hei","Shin","Shin","Shin","Shin","Shin","Hei"], 101, 101)); 