function lineEncoding(s){
    let mang = [s[0]];
    let str = '';
    let temp = 0;
    let local ;
    for(let i = 0 ; i < s.length; i++){
        for(let j = 0 ; j < s.length ; j++){
            if(s[i] === s[j]){
                temp++
                local = s[j]
            }
        }
        str = temp.toString()+local
    }
    return str
}
console.log(lineEncoding("aabbbc"))