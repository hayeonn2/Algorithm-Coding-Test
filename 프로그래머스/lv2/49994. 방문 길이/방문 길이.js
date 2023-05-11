function solution(dirs) {
    const checkRoute = new Set();
    const moveDirection = {
        L : [-1, 0],
        R : [1, 0],
        U : [0, 1],
        D : [0, -1]
    };
    
    let nowPosition = [0, 0];
    
    for (let dir of dirs) {
        const nowX = nowPosition[0] + moveDirection[dir][0];
        const nowY = nowPosition[1] + moveDirection[dir][1];
        
        if (nowX > 5 || nowX < -5 || nowY > 5 || nowY < -5) continue;
        
        checkRoute.add("" + nowPosition[0] + nowPosition[1] + nowX + nowY);
        checkRoute.add("" + nowX + nowY + nowPosition[0] + nowPosition[1]);
        
        nowPosition = [nowX, nowY];
    }
    
    return checkRoute.size / 2;
}