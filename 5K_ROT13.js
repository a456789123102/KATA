function rot13(str) {
 return  str.split('').map((e,i) => {
    if(/[a-z]/.test(e)){
        let newCharCode = (((((str.charCodeAt(i) - 97)+13)%26)+97))
        return String.fromCharCode(newCharCode)
    }else if(/[A-Z]/.test(e)){
         let newCharCode = ((str.charCodeAt(i) - 65 + 13) % 26) + 65;
         return String.fromCharCode(newCharCode);
    }else{
        return e;
    }
}).join('');
}
console.log(rot13("m"))
//'Guvf vf `l svefg EBG13 rkprepvfr!' 
//'Guvf vf zl svefg EBG13 rkprepvfr!'