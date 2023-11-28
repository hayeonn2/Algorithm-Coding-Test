function solution(s)
{
    const stack = [];
    
    for(let i = 0; i < s.length; i++){
        stack.push(s[i]);
        
        if(stack[i] === stack[i+1]){
            stack.pop();
            console.log(stack)
        }
    }
    
    return stack;
}


















 //     const stack = [];
    
//     for(let i = 0; i < s.length; i++){
//         if(!stack.length || stack[stack.length-1] !== s[i]){
//             stack.push(s[i]);
//         }else {
//             stack.pop();
//         }
//     }
//     return !stack.length ? 1 : 0;