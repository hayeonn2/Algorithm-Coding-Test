## 💻 Algorithm-Coding-Test
### 코딩테스트 공부 저장소 (매일 1~2문제 풀기)
<br/>

### 🙇‍ Commit Message Convention
- 백준허브를 통한 자동 커밋이 됨
- 프로그래머스와 백준 해당하는 폴더에 풀이 추가 커밋 메시지 남기기
1. 프로그래머스 : [Add] lv1 : ~~~ 
2. 백준 : [Add] ~~~ 

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
