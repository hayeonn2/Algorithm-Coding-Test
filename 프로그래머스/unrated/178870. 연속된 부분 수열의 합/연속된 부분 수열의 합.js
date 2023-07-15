function solution(sequence, k) {
  const answer = [];
  let [left, right] = [0, 0];
  let summed = sequence[left];

  while (right < sequence.length) {
    if (summed < k) {
      summed += sequence[++right];
    } else if (summed > k) {
      summed -= sequence[left++];
    } else {
      answer.push([left, right]);
      summed += sequence[++right];
      summed -= sequence[left++];
    }
  }

  return answer.sort((a, b) => a[1] - a[0] - (b[1] - b[0]))[0];
}
