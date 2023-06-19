const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    
    let str2 = ""
    for(var i in str){
        const s = str[i]
         str2 += (s == s.toUpperCase()? s.toLowerCase() : s.toUpperCase())
    }
    console.log(str2)
});