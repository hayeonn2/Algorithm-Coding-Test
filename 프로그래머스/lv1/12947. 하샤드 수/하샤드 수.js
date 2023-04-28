function solution(x) {
   const isHashad = String(x).split("").map(Number).reduce((a,b)=>a+b, 0);
    
    return x % isHashad === 0 ? true : false;
}

//  const newArr = x.toString().split("").map((arg)=>Number(arg));
//     let sum = 0;
    
//     for(let i = 0; i < newArr.length; i++){
//         sum += newArr[i];
//     }
//     return x % sum === 0 ? true : false;