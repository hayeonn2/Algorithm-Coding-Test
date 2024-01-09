function solution(clothes) {
    const map = new Map();
    let answer = 1;
    //만약 모자 2종류, 상의 2종류면 (모자1, 모자2, 모자 안쓰기)*(상의1, 상의2, 상의 안입기)=9인데 (모자 안쓰기,상의 안입기) 1개 빼면 9-1=8이 되는것 같습니다
    for(const [name, type] of clothes){
        if(map.get(type)) map.set(type, map.get(type)+1)
        else map.set(type, 1)
    }
    
    for(const [key, value] of map){
        answer *= value+1;
    }
    
    return answer -1;

} 



//     let answer = 1;
//     const clothesType = {};
    
//     for(let i = 0; i < clothes.length; i++){
//         clothesType[clothes[i][1]] = (clothesType[clothes[i][1]] || 1)+1;
//     }
    
//     for(let type in clothesType){
//         answer *= clothesType[type];
//     }
    
//     return answer-1;