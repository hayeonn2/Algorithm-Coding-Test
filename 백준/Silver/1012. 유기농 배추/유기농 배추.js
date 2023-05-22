const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const moves = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];
  let result = "";

  const createCabbageField = (m, n, positions) => {
    const cabbageField = Array.from({ length: n }, () => Array(m).fill(0));

    positions.forEach((position) => {
      const [x, y] = position;

      cabbageField[y][x] = 1;
    });

    return cabbageField;
  };

  const getIsValid = (node, cabbageField) => {
    const [y, x] = node;
    const [height, width] = [cabbageField.length, cabbageField[0].length];

    if (x < 0 || y < 0 || x >= width || y >= height || !cabbageField[y][x]) {
      return false;
    }
    return true;
  };

  const dfs = (node, cabbageField) => {
    const [curY, curX] = node;

    cabbageField[curY][curX] = 0;

    moves.forEach((move) => {
      const [dy, dx] = move;
      const [ny, nx] = [curY + dy, curX + dx];

      if (getIsValid([ny, nx], cabbageField)) {
        dfs([ny, nx], cabbageField);
      }
    });
  };

  for (let i = 1; i < input.length; i++) {
    const [m, n, k] = input[i].split(" ").map(Number);
    const cabbagePositions = input
      .slice(i + 1, i + k + 1)
      .map((el) => el.split(" ").map(Number));
    const cabbageField = createCabbageField(m, n, cabbagePositions);
    let count = 0;

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (cabbageField[i][j]) {
          dfs([i, j], cabbageField);
          count++;
        }
      }
    }

    result += `${count}\n`;
    i += k;
  }

  console.log(result);
});