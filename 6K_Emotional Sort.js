function sortEmotions(arr, order) {
    const sortArr = [ ':D', ':)', ':|', ':(', 'T_T' ];
    if (order){
        return arr.sort((a,b) => sortArr.indexOf(a) - sortArr.indexOf(b));
    }else{
        return arr.sort((a,b) => sortArr.indexOf(b) - sortArr.indexOf(a));
    }
}