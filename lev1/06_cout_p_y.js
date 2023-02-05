function solution(s) {
  const count = [...s.toLowerCase().split("")].reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
  const answer =
    count.p === count.y ? true : count.p === 0 && count.y === 0 ? true : false;
  return answer;
}

//다른 사람의 풀이
// function solution(s){

//   return [...s.toLowerCase()].reduce((acc, cur) => {
//       if(cur ==='p') return acc + 1;
//       else if(cur ==='y') return acc - 1;
//       return acc;
//   }, 0) ? false : true;
// }
