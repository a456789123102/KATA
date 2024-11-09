function alphanumeric(string){
    let regex = /^[a-zA-Z0-9]{1,}$/
return regex.test(string)
  }
  console.log(alphanumeric("1aaaAA"))