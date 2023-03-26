function solution(arr) {
  const minimum = Math.min(...arr);
  const minimumIndex = arr.findIndex((element) => element === minimum);
  arr.splice(minimumIndex, 1);
  return arr.length > 1 ? arr : [-1];
}
