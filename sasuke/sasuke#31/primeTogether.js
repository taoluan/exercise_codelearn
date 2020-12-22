function primeTogether(a,b){
    let temp = 0;
    for(let i = 1 ; i < a ; i++){
        if(a % i ===0){
            if(b % i === 0){
                temp++
            }
        }
    }
    if(temp > 1){
        return false
    }else return true
}

console.log(primeTogether(13,13))