// function knapsackLight(value1, weight1, value2, weight2, maxW) {
//     if (weight1 + weight2 <= maxW) {
//       return value1 + value2;
//     }
//     if (weight1 <= maxW && weight2 > maxW) {
//       return value1;
//     }
//     if (weight2 <= maxW && weight1 > maxW) {
//       return value2;
//     }
//     if (weight1 <= maxW && weight2 <= maxW) {
//       return Math.max(value1, value2);
//     }
//     return 0;
//   }
//   console.log(knapsackLight(20,25,46,5,28));

function knapsackLight(value1, weight1, value2, weight2, maxW) {
  function knapsack(vals, weights, maxWeight) {
    const n = vals.length;
    const dp = Array(n + 1)
      .fill(null)
      .map(() => Array(maxWeight + 1).fill(0));

    for (let i = 1; i <= n; i++) {
      //วน row และค่าในน้ำหนัก
      for (let w = 1; w <= maxW; w++) {
        // วน col
        if (weights[i - 1] <= w) {
          //ตราบใดที่น้ำหนักยังไม่เกิน length ของ col
          dp[i][w] = Math.max(
            dp[i - 1][w],dp[i - 1][w - weights[i - 1]] + vals[i - 1]); //ค่าใช้จ่ายสูงสุด หรือ มูลค่าสูงสุด ที่สามารถเก็บได้ในกระเป๋า
        } else {
          dp[i][w] = dp[i - 1][w];
        }
      }
    }
    return dp[n][maxW];
  }
  return knapsack([value1, value2], [weight1, weight2], maxW);
}
console.log(knapsackLight(20,25,46,5,28));