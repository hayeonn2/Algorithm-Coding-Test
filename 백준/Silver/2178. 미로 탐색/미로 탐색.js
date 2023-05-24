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
  const [n, m] = input[0].split(" ").map(Number);
  const graph = input.slice(1).map((el) => el.split("").map(Number));
  const moves = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const getIsValid = (y, x) => {
    if (x < 0 || y < 0 || x >= m || y >= n || !graph[y][x]) {
      return false;
    }
    return true;
  };

  const bfs = () => {
    const queue = [[0, 0, 1]];

    graph[0][0] = 0;

    while (queue.length) {
      const [curY, curX, curMove] = queue.shift();

      if (curY === n - 1 && curX === m - 1) {
        return curMove;
      }

      moves.forEach(([dy, dx]) => {
        const [ny, nx] = [curY + dy, curX + dx];

        if (getIsValid(ny, nx)) {
          graph[ny][nx] = 0;
          queue.push([ny, nx, curMove + 1]);
        }
      });
    }
  };

  console.log(bfs());
});
