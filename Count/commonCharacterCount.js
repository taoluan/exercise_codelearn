function commonCharacterCount(s1,s2){
    let count = 0;
    for(let i = 0; i < s1.length ; i++){
        for(let j = 0 ; j < s2.length ; j++){
            if(s1[i] === s2[j]){
                console.log(s1[i],s2[j])
                count++
                s2 = removechar(s2,j)
                j=s2.length
                console.log(s2)
            }
        }
    }
    return count
}
function removechar(str,num){
    return str.substring(0,num) + str.substring(num+1)
}
console.log(commonCharacterCount("aabcc","adcaa"))