function solution(answers) {
    const result = [];
    const firstPerson = [1,2,3,4,5];
    const secondPerson = [2,1,2,3,2,4,2,5];
    const thirdPerson = [3,3,1,1,2,2,4,4,5,5];
    const score = [0, 0, 0];
    
    for(let i = 0; i < answers.length; i++){
        if(answers[i] === firstPerson[i%firstPerson.length]) score[0]++;
        if(answers[i] === secondPerson[i%secondPerson.length]) score[1]++;
        if(answers[i] === thirdPerson[i%thirdPerson.length]) score[2]++;
    }
    
    const maxScore = Math.max(...score)
    
    for(let i = 0; i < score.length; i++){
        if(maxScore === score[i]){
            result.push(i+1)
        }
    }
    
    return result
}




//     const result = [];
    
//     const firstPerson = [1, 2, 3, 4, 5]; 
//     const secondPerson = [2, 1, 2, 3, 2, 4, 2, 5]; 
//     const thirdPerson = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
//     const score = [0, 0, 0];
    
//     for(let i = 0; i < answers.length; i++){
//         if(answers[i] === firstPerson[i % firstPerson.length]) score[0]++;
//         if(answers[i] === secondPerson[i % secondPerson.length]) score[1]++;
//         if(answers[i] === thirdPerson[i % thirdPerson.length]) score[2]++;
//     }
    
//     const maxScore = Math.max(...score);
    
//     for(let i = 0; i < score.length; i++){
//         if(maxScore === score[i]) result.push(i + 1);
//     }
//     return result;