function solution(players, callings) {
    
    
    let order = {} 
    for (index  in players){
            const player = players[index]
            order[player] = Number(index); 
    }
    
    
    for(call of callings ){
         const index =  order[call]
         
         if(index){   
                const temp = players[index]
                    const target = players[index-1]
                order[call] -= 1 
                order[target] += 1 
                
                players[index] = target
                players[index-1] = temp
                
               
         }
    }
    return players;
}