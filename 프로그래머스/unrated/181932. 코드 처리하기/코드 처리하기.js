function solution(code) {
    var ret = '';
    
    let mode = 0;
    
    
    for (i in code){
        const c = code[i]
       
        if(mode == 0 && c != "1" && i % 2 ==0 ){
            ret += c
        }else if (mode == 1 && c != "1" && i%2 != 0) {
            ret += c 
        }
        
         if (c == "1"){
            mode = mode == 1 ? 0 : 1 
        }
        
    }
    return ret == "" ? "EMPTY" : ret;
}