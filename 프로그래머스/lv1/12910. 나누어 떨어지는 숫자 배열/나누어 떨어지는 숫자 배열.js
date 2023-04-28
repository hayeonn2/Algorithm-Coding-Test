function solution(arr, divisor) {
    const result = [];
    const divisorArray = arr.map((el)=>{
        if(el % divisor === 0){
            result.push(el);
        }
    })
    return result.length ? result.sort((a,b)=>a-b) : [-1];

}

//   let newArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % divisor === 0) {
//       newArr.push(arr[i]);
//       newArr.sort((a, b) => a - b);
//     }
//   }
//   if (newArr.length === 0) {
//     newArr.push(-1);
//   }
//   return newArr;