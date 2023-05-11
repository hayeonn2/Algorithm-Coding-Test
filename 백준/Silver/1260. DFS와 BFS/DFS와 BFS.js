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
  const [count, line, start] = input[0].split(" ").map(Number);
  const graph = [...Array(count + 1)].map((e) => []);

  for (let i = 1; i <= line; i++) {
    const [from, to] = input[i].split(" ").map(Number);
    graph[from].push(to);
    graph[to].push(from);
  }

  const dfs = (graph, startNode) => {
    let needVisitStack = [];
    const visited = [];

    needVisitStack.push(startNode);

    while (needVisitStack.length !== 0) {
      const node = needVisitStack.pop();

      if (!visited.includes(node)) {
        visited.push(node);
        const nodes = graph[node];
        needVisitStack = [...needVisitStack, ...nodes.sort((a, b) => b - a)];
      }
    }

    return visited;
  };

  const bfs = (graph, startNode) => {
    let needVisitQueue = [];
    const visited = [];

    needVisitQueue.push(startNode);

    while (needVisitQueue.length !== 0) {
      const node = needVisitQueue.shift();

      if (!visited.includes(node)) {
        visited.push(node);
        const nodes = graph[node];
        needVisitQueue = [...needVisitQueue, ...nodes.sort((a, b) => a - b)];
      }
    }

    return visited;
  };

  const result = `${dfs(graph, start).join(" ")}\n${bfs(graph, start).join(
    " "
  )}`;
  console.log(result);
});
