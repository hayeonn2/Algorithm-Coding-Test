const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  // 풀이
  const [n, k] = input[0].split(" ").map(Number);
  const visited = Array(100000).fill(false);

  const getIsValid = (el) => {
    if (el >= 0 && el <= 100000 && !visited[el]) {
      return true;
    }
    return false;
  };

  const bfs = (position) => {
    const queue = [[position, 0]];
    visited[position] = true;

    while (queue.length) {
      const [curPosition, time] = queue.shift();
      const distance = [curPosition - 1, curPosition + 1, curPosition * 2];

      if (curPosition === k) return time;

      for (const next of distance) {
        if (getIsValid(next)) {
          visited[next] = true;
          queue.push([next, time + 1]);
        }
      }
    }
  };
  console.log(bfs(n));
});
