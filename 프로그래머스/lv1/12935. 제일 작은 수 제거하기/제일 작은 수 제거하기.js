function solution(arr) {
    const minNumber = Math.min(...arr);
    const result = arr.filter((el)=> el !== minNumber);
    
    return result.length === 0 ? [-1] : result;
}

//     const minNumber = Math.min(...arr);
//     const resultArr = arr.filter((element) => element !== minNumber);
    
//     return resultArr.length === 0 ? [-1] : resultArr;