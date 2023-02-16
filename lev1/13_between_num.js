function solution(a, b) {
  let arr = [];
  if (a < b) {
    for (let i = a; i < b + 1; i += 1) {
      arr.push(i);
    }
  } else if (a > b) {
    for (let i = b; i < a + 1; i += 1) {
      arr.push(i);
    }
  } else {
    return a;
  }
  return arr.reduce((acc, cur) => {
    return acc + cur;
  });
}
