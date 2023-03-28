function greatestDivisor(num1, num2) {
  if (num2 === 0) return num1;
  return greatestDivisor(num2, num1 % num2);
} //유클리드 호제법 : 최대공약수 구하기
function solution(numer1, denom1, numer2, denom2) {
  const commonMultiple = denom1 * denom2;
  const newNumer1 = numer1 * (commonMultiple / denom1);
  const newNumer2 = numer2 * (commonMultiple / denom2);
  const addedNum = [newNumer1 + newNumer2, commonMultiple];
  const greatestCommonDivisors = greatestDivisor(addedNum[0], addedNum[1]);
  return [
    addedNum[0] / greatestCommonDivisors,
    addedNum[1] / greatestCommonDivisors,
  ];
}
