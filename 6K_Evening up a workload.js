function splitWorkload(workload) {
  const max = workload.reduce((a, b) => a + b, 0);
  let stack = 0;
  let diffSofar = [null,null];
  workload.forEach((e,i) => {
    const bob = stack;
    const jim = max - stack;
    const diff =  Math.abs(jim - bob);
    if (diff < diffSofar[1] || diffSofar[1] === null) {
        diffSofar[0] = i;
      diffSofar[1] = diff;
    }
    stack += e;
  });
  return diffSofar;
}
console.log(splitWorkload([1, 6, 2, 3, 5, 4, 1])); 
console.log(splitWorkload([ -454, 374, -28, -39, 376, 428, -297, -412, -257, 176, -277, -236, -140, -154, -168, 326, -468, -478, 171, 269, -435, -443, -76, 13, -168, -62, 13, 460, -486, 250, -210, 394, -496, 413, -410, -159, 294, -297, 313, -212, -10, 307, -204, 379, 51, -81, 466, -436, -173 ]));
//expected [ 15, 77 ]