//ถ้ามีคำเดียวกันใน memory ได้ 1 point ทีนที
//player1 หา anagram words แต่ละคำที่หาได้ ได้ 2 คะแนน ต่อคำ
//player2 หา anagram words ที่ player 1 ไม่รู้ จะได้ 3 คะแนน ต่อคำ แล้วถ้ารู้ล่ะ?
//ถ้าชนะ จะได้ 1 คะแนนทีม เสมอได้0

//การสลับทีม แต่ละคน จะได้เจอ player ฝั้งตรงข้ามครบทุกคน คนละ2 รอบ คือ เป็นฝ่ายเริ่มก่อน กับ หลัง สลับกัน
//ได้ 8 รอบ 02 21  13 30   03 20 12 31

function anagrams(subjects, memories, players) {
  let currentRound = 0;
  const matchup = [
    [0, 2],
    [2, 1],
    [1, 3],
    [3, 0],
    [0, 3],
    [2, 0],
    [1, 2],
    [3, 1],
  ];
  let currentMatchupIndex =
    matchup.findIndex(
      (match) => match[0] === players[0] && match[1] === players[1]
    );
  let teamOneScore = 0,
    teamTwoScore = 0;

  function calculateGameScore(word, player, memo) {
    let playerTeamOneScore = 0,
      playerTeamTwoScore = 0;
    playerOneWords = [];
    const sortWords = word.split("").sort().join("");

    memo[player[0]].forEach((e) => {
      let sortE = e.split("").sort().join("");
      if (e === word) {
        playerOneWords.push(e);
        playerTeamOneScore++;
      } else {
        if (sortE === sortWords) {
          playerOneWords.push(e);
          playerTeamOneScore += 2;
        }
      }
    });

    memo[player[1]].forEach((e) => {
        let sortE = e.split("").sort().join("");
        if (e === word) {
          playerTeamTwoScore++;
        } else {
          if (sortE === sortWords && !playerOneWords.includes(e) ) { 
            playerTeamTwoScore += 3;  
          }
        }
      });
 if(playerTeamOneScore !== playerTeamTwoScore){
  if(player[0] < 2 && playerTeamOneScore > playerTeamTwoScore){
    teamOneScore++; 
  } else if(player[1] < 2 && playerTeamOneScore < playerTeamTwoScore){
    teamOneScore++; 
  }else{
    teamTwoScore++
  }
 }
}

   while (currentRound < subjects.length) {
 calculateGameScore(subjects[currentRound],matchup[currentMatchupIndex], memories);
  currentRound++;
  currentMatchupIndex++;
  currentMatchupIndex %= 8;
    }
   if(teamOneScore !== teamTwoScore){
return teamOneScore > teamTwoScore ? 0:1
   }
   return -1;
}


console.log(
  anagrams(
    ['apex'], 
    [
        ['apex'],['beak'],['cere'],['defy'],
    ],
    [3, 0]
  )
)
