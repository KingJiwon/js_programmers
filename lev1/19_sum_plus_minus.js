function solution(absolutes, signs) {
  let intArr = [];
  for (let i = 0; i < absolutes.length; i += 1) {
    signs[i] ? intArr.push(absolutes[i]) : intArr.push(-absolutes[i]);
  }
  const sumValue = intArr.reduce((acc, cur) => acc + cur);
  return sumValue;
}
