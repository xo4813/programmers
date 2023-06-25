function solution(my_string, overwrite_string, s) {
    
    const count =  s   + overwrite_string.length
    
   
    var answer = my_string.substr(0,s) + overwrite_string + my_string.substr(count);
    return answer;
}