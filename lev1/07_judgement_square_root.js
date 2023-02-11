function solution(n) {
  const route = n ** (1 / 2);
  // 1/2제곱 하여 제곱근 구하기
  return route % 1 == 0 ? (route + 1) ** 2 : -1;
  // 제곱근 1로나눳을 때 나머지 있으면 -1 나눠떨어지면 +1의 제곱 리턴
}
