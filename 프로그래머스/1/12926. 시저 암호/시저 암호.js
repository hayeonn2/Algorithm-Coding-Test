function solution(s, n) {
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz"
    let result = "";
    
    for(let i = 0; i < s.length; i++){
        let alphabet = s[i];
        
        if(alphabet === " "){
            result += " ";
            
            continue;
        }
        
        const caseDivision = upperCase.includes(alphabet) ? upperCase : lowerCase;

        let index = caseDivision.indexOf(alphabet) + n;
        
        
        if(index >= caseDivision.length){
            index -= caseDivision.length;
        }
        
        result += caseDivision[index];
        
    }
    
    
    
    
    return result;
}

//     let result = "";
    
//     for(let i = 0; i < s.length; i++){
//         let sCode = s.charCodeAt(i);
        
//         if(sCode >= 65 && sCode <= 90){
//             sCode += n;
            
//             if(sCode > 90) sCode -= 26;
//         }
//         else if(sCode >= 97 && sCode <= 122){
//             sCode += n;
            
//             if(sCode > 122) sCode -= 26;
//         }
//         const sString = String.fromCharCode(sCode);
//         result += sString;
//     }
//     return result;