function solution(s) {
    if(s.length !== 4 && s.length !== 6) return false;
    
    for(let i = 0; i < s.length; i++) {
        if(isNaN(Number(s[i]))) return false;
    }
    return true;
}


// 실패
// const sLength = s.replace(/[^0-9]/g, "").length;    
// return sLength === 4 || sLength === 6 ? true : false;