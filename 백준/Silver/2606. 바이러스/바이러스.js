const readline = require("readline");
const { start } = require("repl");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  // 풀이
  const computer = +input[0];
  const nodeList = input.slice(2).map((el) => el.split(" ").map(Number));
  const graph = Array.from({ length: computer + 1 }, () => []);
  const visited = Array(computer + 1).fill(false);
  let result = 0;

  nodeList.forEach((el) => {
    const [node1, node2] = el;

    graph[node1].push(node2);
    graph[node2].push(node1);
  });

  const dfs = (startNode) => {
    if (visited[startNode]) return;

    visited[startNode] = true;
    result++;

    graph[startNode].forEach((node) => {
      if (!visited[node]) {
        dfs(node);
      }
    });
  };

  dfs(1);

  console.log(result - 1);
});
