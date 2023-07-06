function solution(num_list) {
    var answer = 0;
    
    let strEven = ""
    let strOdd = ""
    for(num of num_list){
        if (num % 2 == 0){
            strEven += String(num)
        }else {
            strOdd += String(num)
        }
    }
   
    return Number(strEven) + Number(strOdd);
}