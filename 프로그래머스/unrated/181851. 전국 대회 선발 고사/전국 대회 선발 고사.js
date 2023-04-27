function solution(rank, attendance) {
  const rankArray = rank
    .map((el, i) => [el, i])
    .filter((el, i) => attendance[i] === true)
    .sort((a, b) => a[0] - b[0]);

  return 10000 * rankArray[0][1] + 100 * rankArray[1][1] + rankArray[2][1];
}

/**
 * 처음에는 for문을 돌려서 참석여부에 따라 조건을 세우고 참석한 학생만 배열에 담아
 * 인덱스번호로 비교해주려고 했지만 실패했다.
 * 두번째 방법으로 생각했던게 어처피 반복문을 돌려서 배열에 넣어줄 것이라면
 * map을 쓰고 필터링을 하면 되지 않을까 생각을 했고 푸는과정에서 해당하는
 * 등수의 학생 인덱스 값을 알아야했다.
 * 따라서 그냥 el만 넣는게 아니라 그에 해당하는 인덱스 값도 배열에 같이 넣어줘야한다.
 * 그리고 오름차순으로 정렬 후, 해당하는 인덱스값에 따라 결과를 반환해주면 된다.
 */
