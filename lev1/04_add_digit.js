function solution(n) {
  var answer = 0;
  let string = n.toString();
  for (let i = 0; i < string.length; i++) {
    answer += Number(string.substr(i, 1));
  }

  return answer;
}

//자릿수 더하기
// 다른사람 풀이
// function solution(n){
//     // 쉬운방법
//     return (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0)
// }
