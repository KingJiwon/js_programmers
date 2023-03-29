function solution(a, b) {
  const multipleArr = a.map((el, idx) => el * b[idx]);
  return multipleArr.reduce((acc, cur) => (acc += cur));
}

//function solution(a, b) {
//     return a.reduce((acc, _, i) => acc += a[i] * b[i], 0);
// }
