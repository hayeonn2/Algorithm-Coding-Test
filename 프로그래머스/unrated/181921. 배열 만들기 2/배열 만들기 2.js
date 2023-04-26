function solution(l, r) {
    const answer = [];
    
    for(let i = l; i <= r; i++){
        if(i.toString().replaceAll(/[05]/g, "") === ""){
            answer.push(i);  
        }
    }
    return answer.length ? answer : [-1];
}

/*
    i를 모두 문자열로 바꿔준 후 0, 5를 가진 문자열을 모두 "" 로 바꿔준다.
    이때 바꿔준 문자열이 "" 일 때의 i를 answer배열에 담고 리턴한다.
    결과값 배열의 길이가 있으면 그 배열을, 없으면 [-1]을 리턴한다.
*/