process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const [a, b] = [+n[0], +n[1]];
    let result = [];
    
    for(let i = 1; i <= b; i++){
        result.push("*".repeat(a));
    }
    console.log(result.join("\n"));
});