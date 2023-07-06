function solution(num_list) {
    var answer = 0;
    
    var a = 0;
    var b = 0;
    for (num of num_list) {
        a = a != 0 ?a * num : num;
        b += num;
    }
    return a < b**2 ?1 : 0  ;
}