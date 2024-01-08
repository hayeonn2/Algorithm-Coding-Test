function solution(phone_book) {
    const map = new Map();
    
    phone_book.forEach((num)=>{
        map.set(num, true);
    })
    
    for(let i = 0; i < phone_book.length; i++){
        for(let j = 1; j < phone_book[i].length; j++){
            const str = phone_book[i].slice(0, j);
            
            if(map.has(str)) return false;
        }
    }
    
    return true;
}