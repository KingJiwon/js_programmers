function solution(phone_number) {
  const phoneArr = phone_number.split("");
  const newPhoneArr = phoneArr.splice(phoneArr.length - 4, 4);
  const arr = new Array(phoneArr.length).fill("*");
  const resultArr = [...arr, ...newPhoneArr];
  return resultArr.join("");
}

// 다른사람 풀이
// const solution = n => [...n].fill("*",0,n.length-4).join("")
