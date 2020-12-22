function isPangram(sentence){
    let str = 'qwertyuiopasdfghjklzxcvbnm'
    sentence = sentence.toLowerCase()
    for(let i = 0 ; i<sentence.length ;i++){
        for(let j = 0 ; j < str.length ; j++){
            if(sentence[i] === str[j]){
                str = removechar(str,j)
            }
        }
    } 
    if(str.length===0) return true;
    return false 
}
function removechar(str,num){
    return str.substring(0,num) + str.substring(num+1)
}
console.log(isPangram('The quick brown fox jumps over the lazy dog.'))