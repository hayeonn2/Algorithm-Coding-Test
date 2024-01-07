function solution(participant, completion) {
    let hash = new Map();
    
    for(let i = 0; i < completion.length; i++){
        if(!hash.has(completion[i])){
            hash.set(completion[i], 1);     
        } else {
            hash.set(completion[i], hash.get(completion[i])+1)
        }  
    }
    
    for(let i = 0; i < participant.length; i++){
        if(!hash.has(participant[i])){
            return participant[i];
        } else {
            const count = hash.get(participant[i]);
            
            if(count === 0){
                return participant[i]
            } else {
                
                hash.set(participant[i], count-1)

            }
        }
    }
                   
    
}
