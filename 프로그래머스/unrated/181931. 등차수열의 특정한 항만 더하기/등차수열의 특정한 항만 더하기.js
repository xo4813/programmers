function solution(a, d, included) {
    
    
    let res = 0;
    for(let i = 0; i < included.length; i++){
        if(i > 0){
          a= a + d   
        }
          
        if(included[i]){
             res += a
      }
    }
    
   
    return res;
}