function solution(n) {
  const arr = String(n).split("").sort().reverse();
  return Number(arr.join(""));
}
