function solution(rsp) {
    const winCase = {
        2: 0,
        0: 5,
        5: 2
    }
    
    return [...rsp].map((el)=> winCase[el]).join("");
}