function solution(n) {
  let answer = 0;
  for (let div = 0; div < n + 1; div++) {
    if (n % div == 0) answer += div;
  }
  return answer;
}

//약수의 합 구하기
