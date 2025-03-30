function password(str) {
  return /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}$/.test(str);
}
console.log(password("Asd12345678หกดหกดหกด"))