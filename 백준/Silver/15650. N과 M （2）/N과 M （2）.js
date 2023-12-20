let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const seq = [...Array(m).fill(0)];
const visited = [...Array(n).fill(false)];

let result = "";

function dfs(k, idx) {
  if (k === m) {
    const arr = [];

    for (let i = 0; i < m; i++) {
      arr.push(seq[i]);
    }
    return (result += `${arr.join(" ")}\n`);
  }

  for (let i = idx; i <= n; i++) {
    if (!visited[i]) {
      seq[k] = i;
      visited[i] = true;
      dfs(k + 1, i);
      visited[i] = false;
    }
  }
}

dfs(0, 1);

console.log(result);
