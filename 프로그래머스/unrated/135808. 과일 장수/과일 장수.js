function solution(k, m, score) {
    score = score.sort((a,b) => {return b- a})
    let res = 0;
    let lowVal = 10;
    let count = 0; 
    let data = {}
    for(a of score){
        count += 1;
        
        if(lowVal > a){
            lowVal = a
        }
        
        if (count == m){
            count = 0;
            
            if(lowVal != 10){
                if(!data[lowVal]){
                data[lowVal] = 0
            }
           data[lowVal] += 1
            
            }
            
            lowVal = 10;
        }
    }
    
    
    for ( lowVal in data){
        let count = data[lowVal]
        res += lowVal * m * count;
        
    }
    
    return res;
}