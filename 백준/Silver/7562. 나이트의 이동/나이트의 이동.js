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
  const testCase = +input.shift();
  const moves = [
    [1, 2],
    [1, -2],
    [2, 1],
    [2, -1],
    [-1, 2],
    [-1, -2],
    [-2, -1],
    [-2, 1],
  ];

  let result = "";

  const getIsValid = (graph, y, x) => {
    if (
      x >= 0 &&
      y >= 0 &&
      graph.length > y &&
      graph[0].length > x &&
      !graph[y][x]
    ) {
      return true;
    }
    return false;
  };

  const bfs = (graph, start, target) => {
    const [targetY, targetX] = target;
    const [startY, startX] = start;
    const queue = [[startY, startX, 0]];

    graph[startY][startX] = 1;

    while (queue.length) {
      const [curY, curX, curCount] = queue.shift();

      if (curY === targetY && curX === targetX) {
        return curCount;
      }

      moves.forEach((move) => {
        const [dy, dx] = move;
        const [ny, nx] = [curY + dy, curX + dx];

        if (getIsValid(graph, ny, nx)) {
          graph[ny][nx] = 1;
          queue.push([ny, nx, curCount + 1]);
        }
      });
    }
  };

  for (let i = 0; i < testCase; i++) {
    const [length, start, target] = input
      .splice(0, 3)
      .map((el, i) => (i > 0 ? el.split(" ").map(Number) : +el));

    const graph = Array.from({ length: length }, () => Array(length).fill(0));

    const count = bfs(graph, start, target);

    result += `${count}\n`;
  }

  console.log(result);
});
