function solution(id_list, report, k) {

    // 이미 신고한 사람 명단
    let reportUser  ={}
    
    for(id of id_list){  
            reportUser[id] = []   
    }
    
     let count = {} 
    for (data of report){
       
        const list = data.split(" ");
            
        // 중복 확인
        if(reportUser[list[1]].indexOf(list[0])== -1 ){
            reportUser[list[1]].push(list[0])
            if(!count.hasOwnProperty(list[1])){
             count[list[1]] = 0 
            }
             count[list[1]] += 1
        } 
        
        
    }
    
    
    let res = []
    let lastCount = {}
    for (id of id_list){
        let val = 0;
        if(count.hasOwnProperty(id)){
              val = Math.floor(count[id] / k) 
             if(val > 0 ){
                 for( user of reportUser[id]){
                       if(!lastCount.hasOwnProperty(user)){
                           lastCount[user] =0
                       }
                     lastCount[user] += 1
                 }
             }
           
        }
         res.push({"id": id,"val": 0})
    }
    let ansewer = []
    for( data  of res ){
        
        let add =  0
        
        if(lastCount.hasOwnProperty(data.id)){
            add = lastCount[data.id]
        }
        ansewer.push(add + data.val)
       
    }
    
    return ansewer;
}