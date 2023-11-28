function solution(s)
{
    const stack = [];
    
    for(let i = 0; i < s.length; i++){
        // stack 안이 모두 비었을 때 stack.length === 0
        if(!stack.length || s[i] !== stack[stack.length - 1]){
            stack.push(s[i]);
        }else {
            stack.pop();
        }
    }
    
    return !stack.length ? 1 : 0;
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