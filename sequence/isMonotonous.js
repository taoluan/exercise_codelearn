function isMonotonous(sequence){
    if(sequence.length === 1) return true;
    if(sequence[0] > sequence[1]){
        for(let i = 1 ; i < sequence.length; i++){
            if(sequence[i] <= sequence[i+1]){
                return false
            }
        }
        return true
    }else if(sequence[0] < sequence[1]){
        for(let i = 1 ; i < sequence.leng; i++){
            if(sequence[i] >= sequence[i+1]){
                return false
            }
        }
        return true
    }
    return false
}
console.log(isMonotonous([-1,-2,3,2,1]))