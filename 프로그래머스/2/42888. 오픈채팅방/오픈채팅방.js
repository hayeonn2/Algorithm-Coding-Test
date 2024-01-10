function solution(record) {
    const map = new Map();
    const result = []
    
    for(const info of record){
        const [type, uid, nickname] = info.split(" ");
        
        if(type === "Enter" || type === "Change"){
            map.set(uid, nickname);
        }
        if(type === "Enter" || type === "Leave"){
            result.push([type, uid])
        }
    }
    
    return result.map((item)=>{
        if(item[0] === "Enter"){
            return `${map.get(item[1])}님이 들어왔습니다.`;
        }
        if(item[0] === "Leave"){
            return `${map.get(item[1])}님이 나갔습니다.`;
        }
    })
    
    
    console.log(map)
    return result;
}

//   const users = {};
//   const result = [];
//   const typeObj = {
//     Enter: "님이 들어왔습니다.",
//     Leave: "님이 나갔습니다.",
//   };

//     record.forEach((info)=>{
//         const [type, uid, nickname] = info.split(" ");
        
//         if(nickname) users[uid] = nickname;
//         if(type !== "Change") result.push([type, uid]);
//     })
    
//     return result.map(([type, uid]) => `${users[uid]}${typeObj[type]}`)


// function solution(record) {
//     const user = {};
//     const result = [];
    
//     record.forEach((item)=>{
//         let [type, uid, nickname] = item.split(" ");
        
//         if(type !== "Change"){
//             result.push([type, uid]);
//         }
        
//         if(nickname){
//             user[uid] = nickname;
//         }      
//     });
    
//     return result.map((item)=>{
//         const [type, uid] = item;
        
//         if(type === "Enter"){
//             return `${user[uid]}님이 들어왔습니다.`;
//         } 
//         return `${user[uid]}님이 나갔습니다.`
//     })
    
  
// }