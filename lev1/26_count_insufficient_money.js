function solution(price, money, count) {
  let totalPrice = 0;
  for (let i = 1; i <= count; i++) {
    totalPrice += i * price;
  }
  const insufficientMoney = totalPrice - money;
  return insufficientMoney > 0 ? insufficientMoney : 0;
}
