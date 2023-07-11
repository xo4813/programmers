function solution(today, terms, privacies) {
       var answer = [];
    let rule = {}
    for(info of  terms){
         let datas = info.split(" ");
        rule[datas[0]] = Number(datas[1])
    }
    
    let count = 0;
    for( data of privacies ){
        count++ 
        let str = data.split(" ");
        
        let date = new Date(today+"z")
        
        let d = new Date(str[0]+"z")
        d.setMonth(d.getMonth() + rule[str[1]])
        
     
        if(date >= d ){
            answer.push(count)
        }
      
    }
    
    
    
 
    return answer;
}