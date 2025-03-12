function evenLast(numbers) {
    if (!numbers.length) return 0;
     return numbers.reduce((acc,cur,i) =>  i % 2 === 0 ? acc + cur : acc , 0)*numbers[numbers.length - 1] 
  }
  console.log(evenLast([1,2,3,4,5]));