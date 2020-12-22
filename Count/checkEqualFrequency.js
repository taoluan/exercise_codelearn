function checkEqualFrequency(inputArray){
    let temp = []
    let result = []
    let t = 0;
    if(inputArray.length === 1)return true;
    for(let i =0; i<inputArray.length ; i++){
        if(temp.includes(inputArray[i]) !== true) temp.push(inputArray[i])
    }
    for(let i =0; i< temp.length ; i++){
        result.push(0)
      for(let j = 0 ; j < inputArray.length ; j++){
        if(temp[i] === inputArray[j]){
            result[i]++
        }
      }
    }
    if(result.length === 1) return true
    t = result.length
    for ( i = 0; i < result.length-1; i++) {
        if(result[i] === result[i+1]){
           result.splice(i,1)
        }else {return false}
    }
    if(t === result.length){
        return false
    }else return true
}
console.log(checkEqualFrequency([1, 1, 1, 1, 1]))