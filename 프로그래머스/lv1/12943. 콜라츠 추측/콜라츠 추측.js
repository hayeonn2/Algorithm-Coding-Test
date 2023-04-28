function solution(num) {
    let result = 0;
    
    for(let i = 0; i <= 500; i++){
        if(num === 1) break;
        else if(num % 2 === 0) {
            result++;
            num = num / 2
        } else if (num % 2 === 1) {
            result++;
            num = num * 3 + 1;
        }
       
        if(i === 500) return -1;
    }
     return result;
}

// let result = 0;
    
//     for(let i = 0; i <= 500; i++){
//         if(num !== 1){
//             num = num % 2 === 0 ? num / 2 : num * 3 + 1;
//         }else{
//             return result = i;
//         }
//     }
//     return result = -1;