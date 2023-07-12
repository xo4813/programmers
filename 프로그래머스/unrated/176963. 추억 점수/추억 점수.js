function solution(name, yearning, photo) {
    var answer = [];
    
    let year = {}
    for(i  in  name){
            year[name[i]] = yearning[i]
    }
    
    for(userList of photo){
        let res = 0
        for (user of  userList){
            
            if(year.hasOwnProperty(user)){
                res += year[user]
            }
            
        }
        answer.push(res)
    }
    
    return answer;
}