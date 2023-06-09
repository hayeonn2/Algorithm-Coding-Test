function solution(number, k) {
    const stack = [];
    
    for(let i = 0; i < number.length; i++){
        const currentNum = number[i];
        
        while(k > 0 && stack[stack.length - 1] < currentNum){
            stack.pop();
            k--;
        }
        
        stack.push(currentNum);
    }
    
    stack.splice(stack.length - k, k);
    
    return stack.join("")
}