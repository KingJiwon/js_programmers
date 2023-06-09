function calcGcd(a, b) {
  if (b === 0) {
    return a;
  }
  return calcGcd(b, a % b);
}

function calcLcm(a, b, gcd) {
  return (a * b) / gcd;
}

function solution(n, m) {
  const gcd = calcGcd(n, m);
  const lcm = calcLcm(n, m, gcd);
  return [gcd, lcm];
}
