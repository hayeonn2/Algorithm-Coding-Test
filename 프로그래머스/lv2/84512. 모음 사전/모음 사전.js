function solution(word) {
    const vowels = ["A", "E", "I", "O", "U"]
    const result = [];
    
    const dfs = (str, length) => {
        if(str.length === length){
            result.push(str);
            return;
        }
        
        vowels.forEach((vowel) => {
            dfs(str+vowel, length);
        })
    }
    
    for(let i = 1; i <= 5; i++){
        dfs("", i)
    }
    
    return result.sort().indexOf(word) + 1
}