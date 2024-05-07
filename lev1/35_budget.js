function solution(d, budget) {
  const sorted = d.sort((a, b) => a - b);
  let purchaseNum = 0;
  sorted.reduce((acc, cur) => {
    if (acc - cur >= 0) {
      purchaseNum += 1;
      return acc - cur;
    }
  }, budget);
  return purchaseNum;
}

solution([1, 3, 2, 5, 4], 9);
