function solution(number) {
  const findSensor = (meters) => {
    const p = Math.floor((number - 1) / meters);
    return (meters * p * (p + 1)) / 2;
  };
  return findSensor(3) + findSensor(5) - findSensor(15);
}
console.log(solution(10));
