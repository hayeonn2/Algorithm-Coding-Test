function solution(absolutes, signs) {
    let result = 0;
    
    for(let i = 0; i < signs.length; i++){
        absolutes[i] = signs[i] ? absolutes[i] : -absolutes[i];
        result += absolutes[i];
    }
    return result;
}

//     let result = 0;
    
//     for(let i = 0; i < signs.length; i++){
//         absolutes[i] = signs[i] ? absolutes[i] : -absolutes[i];
//         result += absolutes[i];
//     }
//     return result;