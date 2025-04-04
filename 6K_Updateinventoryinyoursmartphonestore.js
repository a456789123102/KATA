function updateInventory(curStock, newStock) {
    const sumStock = curStock;
    
    newStock.forEach((e) => {
        const ind = sumStock.findIndex(r => r[1] === e[1])
        if(ind !== -1){
            sumStock[ind][0] += e[0]
        }else{
            sumStock.push(e)
        }
    })
    return sumStock.sort((a,b) => a[1].localeCompare(b[1]))
  }


  console.log(
    updateInventory([[25, 'HTC'], [1000, 'Nokia'], [50, 'Samsung'], [33, 'Sony'], [10, 'Apple']],[[5, 'LG'], [10, 'Sony'], [4, 'Samsung'], [5, 'Apple']])
  )