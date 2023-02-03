function solution(n) {
  return n
    .toString()
    .split("")
    .reverse()
    .map((str) => (str = parseInt(str)));
}

// 자연수 뒤집어서 배열 만들기
