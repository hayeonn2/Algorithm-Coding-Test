function solution(picture, k) {
  const answer = [];
  
    picture.map((el)=>{
        const stretchedFile = el.split("").map((v)=>v.repeat(k)).join("");
        
        for(let i = 0; i < k; i++) answer.push(stretchedFile);
    })

  return answer;
}