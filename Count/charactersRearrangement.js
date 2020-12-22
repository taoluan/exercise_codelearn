function charactersRearrangement(String1,String2){
    let str1 = String1.split('').sort()
    let str2 = String2.split('').sort()
    if(str1.length !== str2.length) return false;
    for(let i = 0 ; i< str1.length;i++){
         if(str1[i] === str2[i]){
        }else {return false} 
    }
    return true
}
console.log(charactersRearrangement("abcd","cbad"))