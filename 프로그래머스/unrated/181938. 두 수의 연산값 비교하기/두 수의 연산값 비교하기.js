function solution(a, b) {
    const atob = String(a) + String(b);
    
    return atob > 2 * a * b ? +atob : 2 * a * b
}