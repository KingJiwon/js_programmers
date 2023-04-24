function solution(s) {
  const strArr = s.split("");
  const asciiArr = strArr.map((el) => el.charCodeAt());
  const sortedAsciiArr = asciiArr.sort((a, b) => b - a);
  const sortedStrArr = sortedAsciiArr.map((el) => String.fromCharCode(el));
  const sortedStr = sortedStrArr.join("");
  return sortedStr;
}

// function solution(s) {
//     return s
//       .split("")
//       .sort()
//       .reverse()
//       .join("");
//   }
