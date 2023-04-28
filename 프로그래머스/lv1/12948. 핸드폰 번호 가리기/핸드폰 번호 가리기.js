function solution(phone_number) {
    return "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
}

//     const arr = phone_number.split("");
//     const backNumber = arr.splice(-4).join("");
    
//     return arr.map((el)=> el.replace(/[0-9]/g, "*")).join("")+backNumber;

//     const numArr = phone_number.split("");
//     const backNumber = numArr.splice(phone_number.length-4, 4).join("");
//     const frontNumber = numArr.join("").replace(/[0-9]/g, "*");
    
//     return frontNumber + backNumber;