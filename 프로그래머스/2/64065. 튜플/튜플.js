function solution(s) {
    const sliceArray = s.slice(2, s.length-2).split("},{");
    const sortArray = sliceArray.sort((a, b) => a.length - b.length)
    const setArray = sortArray.join(",").split(",").map(Number);
  
    return [...new Set(setArray)];
    
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