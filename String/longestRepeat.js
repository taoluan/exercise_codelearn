function longestRepeat(s){
    const regex = /[^A-Z_]/gi;
    let str = s.replace(regex,'');
    let mang = [];
    let result = '';
    if(!str) return ''; 
    for(let i = 0 ; i < str.length;i++){
        for(let j = i+1 ; j <str.length;j++){
            if(str[i] === str[j]){
                console.log(str[i],str[j])
                if(!mang.includes(i)){
                    mang.push(i)
                }
                if(!mang.includes(j)){
                    mang.push(j)
                }
            }
        }
    }
    mang.sort(function(a,b){
        return a - b 
    })
    mang.forEach(element => {
        result += str[element]
    });
    return result
}

console.log(longestRepeat('PBax0U5xoX'))
// > anasdjasdnj