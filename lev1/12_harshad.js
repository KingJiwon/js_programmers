function solution(x) {
  const digitSum = String(x)
    .split("")
    .reduce((acc, cur) => {
      return Number(acc) + Number(cur);
    });
  return x % digitSum === 0;
}

// 다른사람의 풀이 (숫자)
// function solution(x) {
//     let num = x;
//     let sum = 0;
//     do {
//         sum += x%10;
//         x = Math.floor(x/10);
//     } while (x>0);

//     return !(num%sum);
// }
