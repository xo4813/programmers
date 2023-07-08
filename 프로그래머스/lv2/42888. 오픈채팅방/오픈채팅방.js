function solution(record) {
    var answer = [];
    var openId = "" 
    var typeAnswer = {"Enter" : "들어왔습니다.", "Leave": "나갔습니다."}
   var userIds = {} 
    let count = 0;
    for(userInfo of record ){
        const infos = userInfo.split(" ")
        const type = infos[0]  
        const id =  infos[1]
        
         const nickName = infos[2] || ""
         
        if(type == "Change"||type == "Enter" ){
           userIds[id] = nickName 
        }
        
          if(type != "Change"){
            answer.push({id : id, nickName : nickName, type : type} )    
               
          }
    }
    
    answer = answer.map((info)=>{
        return userIds[info.id] +"님이 " + typeAnswer[info.type]
    })
    
    return answer;
}