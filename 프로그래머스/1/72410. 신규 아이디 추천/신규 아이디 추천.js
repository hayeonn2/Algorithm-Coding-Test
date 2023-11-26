function solution(new_id) {
  let result = "";

  for(let i = 0; i < new_id.length; i++){
      let word = new_id[i].toLowerCase();
      let able = "abcdefghijklmnopqrstuvwxyz0123456789-_.";
      if(able.indexOf(word) === -1) continue;
      if(word === "." && result[result.length-1] === ".") continue;
      result += word;
  }
    
    if(result[0] === "."){
        result = result.slice(1);
    }
    
    if(result === ""){
        result += "a";
    }
    
    if(result.length >= 16){
     result = result.slice(0, 15);
    }
    if(result[result.length-1] === "."){
        result = result.slice(0, -1)
    }
    
    while(result.length < 3) result += result[result.length-1];
    
    return result;

}

    /*const answer = new_id
        .toLowerCase()
        .replace(/[^\w-_.]/g, '')
        .replace(/\.{2,}/g, '.')
        .replace(/^\.|\.$/g, '')
        .replace(/^$/, 'a')
        .slice(0, 15).replace(/\.$/, '');
    const len = answer.length;
    return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);*/
    
//     let result = new_id;
//     result = result.toLowerCase();
//     result = result.replace(/[^a-z0-9-_.]/g, "");
//     result = result.replace(/\.+/g, ".");
//     result = result.replace(/^\.|\.$/g, "");
    
//     if(result === "") result += "a";
    
//     if(result.length >= 16) {result = result.slice(0, 15);}
//     result = result.replace(/\.$/, "");
    
//     while(result.length <= 2){
//         result += result.charAt(result.length -1);
//     }
//     return result;