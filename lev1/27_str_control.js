function solution(s) {
  if (s.length === 4 || s.length === 6) {
    for (let value of s) {
      if (value.charCodeAt() < 48 || value.charCodeAt() > 57) return false;
    }
    return true;
  }
  return false;
}
