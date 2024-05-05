function solution(s) {
  const deletedBlank = s.split(" ").map((el) => el.split(""));
  const newdelArr = deletedBlank.map((el) => {
    const newArr = el.map((str, idx) => {
      if (idx % 2 === 0) {
        return str.toUpperCase();
      } else {
        return str.toLowerCase();
      }
    });
    return newArr.join("");
  });
  return newdelArr.join(" ");
}
console.log(solution("try hello world"));
