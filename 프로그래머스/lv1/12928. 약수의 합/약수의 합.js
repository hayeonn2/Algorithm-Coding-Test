function solution(n) {
  let result = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      result += i;
    }
  }
  return result;
}

/*
n을 약수로 나눴을 때 나머지가 0이 나오는 것들을 찾으면 된다.
그리고 그 i들을 result에 합해준 후 결과를 반환한다.
*/
