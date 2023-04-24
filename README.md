## 💻 Algorithm-Coding-Test
### 코딩테스트 공부 저장소 (매일 1~2문제 풀기)
<br/>

## 📚 코딩테스트 문제 사이트
- programmers : (https://programmers.co.kr/)
- 백준 : (https://www.acmicpc.net/)

<br/>

## 💬 백준 - node.js 입력값받기
```js
    const readline = require("readline"); 
    const rl = readline.createInterface({ 
        input: process.stdin, 
        output: process.stdout, 
    }); 

    //전역 변수
    let input = [];

    function solution() {
        //풀이 코드...
    }

    rl.on("line", function (line) {
        input.push(line); 
    }).on("close", function () { 
        
        //입력값 받는 코드...

        solution();
    })
    ```
