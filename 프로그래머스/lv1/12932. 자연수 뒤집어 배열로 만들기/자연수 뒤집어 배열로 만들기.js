function solution(n) {
    return n.toString().split("").reverse().map(Number);
}

//     const str = n.toString();
//     //const mapNum = (arg) => Number(arg);
//     const newArr = str.split("").map((arg)=>parseInt(arg));
    
//     return newArr.reverse();