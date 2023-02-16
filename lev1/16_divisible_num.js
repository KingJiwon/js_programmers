function solution(arr, divisor) {
  let answer = [];
  arr.map(function (value) {
    if (value % divisor === 0) answer.push(value);
  });
  return answer.length === 0
    ? [-1]
    : answer.sort((a, b) => {
        return a - b;
      });
}

//다른사람 풀이 filter
// function solution(arr, divisor) {
//     var answer = arr.filter(v => v%divisor == 0);
//     return answer.length == 0 ? [-1] : answer.sort((a,b) => a-b);
// }
