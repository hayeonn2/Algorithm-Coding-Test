function solution(citations) {
    let result = 0;
    
    citations.sort((a,b)=> b-a);
    
    for(let i = 0; i < citations.length; i++){
        if( i< citations[i]){
            result++;
        }
    }
    
    return result;
}