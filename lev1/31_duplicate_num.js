function solution(arr) {
  const answerArr = [];
  arr.map((el, idx) => {
    if (el !== arr[idx + 1]) {
      answerArr.push(el);
    }
  });
  return answerArr;
}

console.log(solution([4, 4, 4, 3, 3]));
