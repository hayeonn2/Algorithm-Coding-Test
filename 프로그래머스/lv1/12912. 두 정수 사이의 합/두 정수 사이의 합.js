function solution(a, b) {
    const minNumber = Math.min(a,b);
    const maxNumber = Math.max(a,b);
    let result = 0;
    
    for(let i = minNumber; i <= maxNumber; i++){
        result += i;
    }
    
    return result;
}

/*function solution(a, b) {
    const maxNumber = Math.max(a,b);
    const minNumber = Math.min(a,b);
    let sum = 0;
    
    for(let i = minNumber; i <= maxNumber; i++){
        sum += i;
    }
    return sum;
}*/

//   const [minNum, maxNum] = args.sort((a, b) => a - b);
//   let result = 0;

//   for (let i = minNum; i < maxNum + 1; i++) {
//     result += i;
//   }

//   return result;