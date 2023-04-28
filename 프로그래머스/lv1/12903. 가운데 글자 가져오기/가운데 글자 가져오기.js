function solution(s) {
    const midStrIdx = Math.ceil(s.length / 2);
    
    return s.length % 2 === 0 ? s[midStrIdx-1]+s[midStrIdx] : s[midStrIdx-1];
}

// var answer = '';
//     if(s.length % 2 === 0){
//         answer = s[s.length / 2 - 1] + s[s.length / 2]
//     } else {
//         answer = s[Math.floor(s.length/2)]
//     }
//     return answer;