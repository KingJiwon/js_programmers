function solution(x) {
  const digitSum = String(x)
    .split("")
    .reduce((acc, cur) => {
      return Number(acc) + Number(cur);
    });
  return x % digitSum === 0;
}
