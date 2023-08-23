function solution(a, b) {
    const AtoB = String(a) + String(b);
    const BtoA = String(b) + String(a);
    
    return AtoB > BtoA ? Number(AtoB) : Number(BtoA);
 
    
}