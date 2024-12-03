const VALUES = {
    "EUR": [5, 10, 20, 50, 100, 200, 500],
    "USD": [1, 5, 10, 20, 50, 100, 500],
    "UAH": [1, 5, 10, 20, 50, 100, 500],
    "RUB": [5, 10, 50, 100, 500],
    "CUP": [1, 5, 10, 20, 50],
    "SOS": [1, 5, 10, 20, 50, 100]
  };

function atm(value) {
    const currency = value.split('').filter(e => /[a-zA-Z]/.test(e)).join('').toUpperCase();
    if(!VALUES[currency]) return `Sorry, have no ${currency}.`
    let val =  parseFloat(value.split('').filter(e => !/[a-zA-Z]/.test(e)).join(''));

    const sortedNote = VALUES[currency].slice().sort((a,b) => b-a);
    if(val % sortedNote[sortedNote.length-1] !== 0) return `Can't do ${val} ${currency}. Value must be divisible by ${sortedNote[sortedNote.length-1]}!`

   const result = [];

   for(let i = 0 ; i < sortedNote.length ; i++){
    if(sortedNote[i] <= val){
        const amount = Math.floor(val/sortedNote[i]);
        val -= sortedNote[i] * amount;
        result.push(`${amount} * ${sortedNote[i]} ${currency}`)
    }

   }
return result.join(', ')
}
console.log(atm("125rub"))
