function josephus(items,k){
    let ans = [];
    let kStack = 0;
    while(items.length > 0){
       kStack = (kStack + k-1) % items.length;
       ans.push(items[kStack]);
       items.splice(kStack, 1);
    }
    return ans;
  }
  console.log(josephus([1,2,3,4,5,6,7],3))