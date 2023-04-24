function solution(left, right) {
  const betweenNumbersArr = [];
  for (let i = left; i <= right; i += 1) {
    betweenNumbersArr.push(i);
  }
  const answer = betweenNumbersArr.reduce((acc, cur) => {
    if (Math.sqrt(cur) % 1 === 0) {
      return (acc -= cur);
    } else {
      return (acc += cur);
    }
  }, 0);
  return answer;
}

// function solution(left, right) {
//     var answer = 0;
//     for (let i = left; i <= right; i++) {
//         if (Number.isInteger(Math.sqrt(i))) {
//             answer -= i;
//         } else {
//             answer += i;
//         }
//     }
//     return answer;
// }
