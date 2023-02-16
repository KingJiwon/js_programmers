function solution(num) {
  let count = 0;
  for (let i = 0; i < 500; i += 1) {
    if (num === 1) {
      break;
    }
    num % 2 === 0 ? (num /= 2) : (num = num * 3 + 1);
    count += 1;
  }
  return num === 1 ? count : -1;
}
