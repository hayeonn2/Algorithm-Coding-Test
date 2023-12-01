function solution(s) {
    // 문자열의 길이가 4 또는 6
    //if(s.length === 4 || s.length === 6)
        
    // 숫자로만 구성되어 있는지?
//      let a = s.split("");
    // let str = "abcdefghijklmnopqrstuvwxyz";
    
//     if(s.length !== 4 && s.length !== 6) return false;
    
//     for(let i = 0; i < s.length; i++){
//         console.log(str.indexOf(a[i]))
//         if(str.indexOf(a[i]) !== -1){
//             return false;
//         }else {
//             return true;
//         }
//     }
    
//     for(let i = 0; i < s.length; i++){
//         if(s.length === 4 || s.length ===6){
//             console.log(+s[i])
            
//             if(isNaN(s[i])){
//                 return false;
//             } else {
//                 return true;
//             }
            
            
//         }
//     
    if(s.length !==4 && s.length !==6) return false;
    
    for(let i = 0; i < s.length; i++){
        if(isNaN(+s[i]))return false;
    }
    return true;
}




















// 실패
// const sLength = s.replace(/[^0-9]/g, "").length;    
// return sLength === 4 || sLength === 6 ? true : false;

//     if(s.length !== 4 && s.length !== 6) return false;
    
//     for(let i = 0; i < s.length; i++){
//         if(isNaN(+s[i])) return false;
//     }
//     return true;