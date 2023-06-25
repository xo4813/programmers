function solution(str1, str2) {
    var answer = '';
    
    for( i in str2){

        answer += str1[i] + str2[i];
    }
    
    
    
    return answer;
}