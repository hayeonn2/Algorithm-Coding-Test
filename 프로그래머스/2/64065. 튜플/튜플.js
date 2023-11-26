function solution(s) {
    const arr = s.slice(2, s.length-2).split("},{");
     const arr2 = arr.sort((a, b) => a.length - b.length)
    const arr3 = arr2.join(",").split(",").map(Number);
   


    return [...new Set(arr3)]
    
}

















//   const answer = [];
    
//   s.slice(2, s.length - 2) 
//     .split("},{")            
//     .map((str) => str.split(",").map(Number))  
//     .sort((a, b) => a.length - b.length)   
//     .forEach((arr) => {   
//       arr.forEach((el) => {
//         if (!answer.includes(el)) answer.push(el);
//       });
//     });
//   return answer;