function solution(arr1, arr2) {
  const answer = arr1.map((el, index) =>
    el.map((el2, index2) => el2 + arr2[index][index2])
  );
  return answer;
}
