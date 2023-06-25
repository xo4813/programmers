function solution(a, b) {
    const res1 = Number(a.toString()+b.toString()) 
    const res2 = 2 * a * b
    
    
    return res1 > res2 ? res1 : res2;
}