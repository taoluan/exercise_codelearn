function differentSubstringsTrie(inputString){
    let len = inputString.length
    let mang = [];
    for(i = 0 ; i < len ; i++){
        for(j=i+1 ; j <= len ; j++){
            if(mang.includes(inputString.substring(i,j)) !== true){
                mang.push(inputString.substring(i,j))
            }   
        }
    }
    return mang.length
}
console.log(differentSubstringsTrie("abacaba"))