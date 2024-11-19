function ipsBetween(start, end){
const sumIp = (ip) =>   ip.split('.').map((e,i) =>{
  return  e * Math.pow(256, 3 - i);
    }).reduce((a,b) =>a+b,0)
    return sumIp(end) - sumIp(start);

  }

  console.log(ipsBetween("10.0.0.0", "10.0.0.50"));

  