function tripledouble(num1, num2) {
  num1 = num1.toString();
  num2 = num2.toString();
  for (let i = 2; i < num1.length; i++) {
    if (num1[i - 2] === num1[i - 1] && num1[i - 1] === num1[i]) {
      for(let j = 1 ; j < num2.length ; j++){
        if(num2[j] === num2[j-1] && num2[j] === num1[i]){
          return 1;
        }
      }
    }
  }
  return 0;
}
console.log(tripledouble(451999277, 41177722899));
