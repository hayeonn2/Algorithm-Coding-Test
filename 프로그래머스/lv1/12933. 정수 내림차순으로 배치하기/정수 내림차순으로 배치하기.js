function solution(n) {
    return +String(n).split("").sort((a,b)=>b-a).join("");
}

//const arr = n.toString().split("").sort();
    // const result = parseInt(arr.reverse().join(""));
    // return result;