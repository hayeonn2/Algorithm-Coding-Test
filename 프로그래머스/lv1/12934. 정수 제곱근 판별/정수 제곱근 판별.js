function solution(n) {
    const x = Math.floor(Math.sqrt(n));
    
    return n === Math.pow(x, 2) ? Math.pow((x+1), 2) : -1;
    
}


// const int = Math.floor(Math.sqrt(n));
//     const doubleNum = Math.pow(int, 2);
    
//     if(n === doubleNum){
//         return Math.pow((int+1), 2);
//     }
//     else {
//         return -1;
//     }