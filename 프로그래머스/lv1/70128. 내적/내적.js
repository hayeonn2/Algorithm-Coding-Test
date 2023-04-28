function solution(a, b) {
    let result = 0;
    
    for(let i = 0; i < a.length; i++){
        result += a[i] * b[i];
    }
    
    return result;
}

// let result = 0;
    
//     for(const idx in a){
//         result += a[idx] * b[idx]; 
//     }
//     return result;