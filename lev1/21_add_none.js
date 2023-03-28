function solution(numbers) {
  const fullArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const newArr = fullArr.map((el) => {
    return numbers.indexOf(el) === -1 ? el : 0;
  });
  return newArr.reduce((acc, cur) => (cur += acc));
}

//다른 사람 풀이
// function solution(numbers) {
//     return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
// }
