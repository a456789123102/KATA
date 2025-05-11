function scrabbleScore(str){
    const score = {
        1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T" ],
        2:["D", "G" ],
        3: ["B", "C", "M", "P"  ],
        4:["F", "H", "V", "W", "Y"],
        5:["K"],
        8:["J", "X"],
        10:["Q","Z"]

    }
    let total = 0;
    str.split("").forEach((e) => {
       for(let key in score){
        const arr = score[key];

       if(arr.find(str => str === e.toUpperCase())){
        total+= Number(key)
       }
       }
    })
    return total
  }
  console.log(scrabbleScore("ad"))
  console.log(scrabbleScore("a"))