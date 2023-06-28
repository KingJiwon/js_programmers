function solution(n) {
  return parseInt(n.toString(3).split("").reverse().join(""), 3);
}
solution(45);

// toString(n)을 통해 10진수를 원하는 n진수로 변경 가능하다.
// parseInt({n진수},n)을 통해 n진수를 10진수로 변환할 수 있다.
