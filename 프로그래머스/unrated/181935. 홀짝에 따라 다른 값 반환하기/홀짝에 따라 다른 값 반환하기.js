function solution(n) {
    
    const isEvenSolution = n %2 ==0;
    let result = 0
    for(let i = 1; i < n+1;i++){
        const isEven =  i %2 ==0;
      if(isEvenSolution){
          if (isEven){
              result += Math.pow(i,2)
          }
      }else{
          if(!isEven){
              result += i
          }
      }
    }
    return result;
}