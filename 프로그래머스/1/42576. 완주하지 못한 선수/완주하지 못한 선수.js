function solution(participant, completion) {
    const participantObj = {};
    const completionObj = {};
    let answer = "";
    
    for(const person of participant){
        if(!participantObj[person]){
            participantObj[person] = 1;
        } else {
            participantObj[person]++;
        }
    }
    
    for(const person of completion){
        if(!completionObj[person]){
            completionObj[person] = 1;
        } else {
            completionObj[person]++;
        }
    }
    
    const participantKeys = Object.keys(participantObj)
    
    for(const keys of participantKeys){
        if(!completionObj[keys]){
            answer = keys;
        }
        if(participantObj[keys] !== completionObj[keys]){
            answer = keys;
        }
        
    }
    
    
    
    return answer ;
}







//     participant.sort();
//     completion.sort();
    
//     for(let i = 0; i < participant.length; i++){
//         if(participant[i] !== completion[i]) return participant[i];
//     }