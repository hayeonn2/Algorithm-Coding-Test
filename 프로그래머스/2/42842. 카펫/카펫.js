function solution(brown, yellow) {
    const sum = brown + yellow;
    
    for(let i = 3; i <= sum; i++){
        let WIDTH = sum / i;
        let HEIGHT = i;
        
        if((WIDTH - 2) * (HEIGHT - 2) === yellow){
            return [WIDTH, HEIGHT]
        }
    }
}