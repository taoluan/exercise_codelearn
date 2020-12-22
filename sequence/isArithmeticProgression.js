function isArithmeticProgression(sequence){
    let temp = sequence[1]-sequence[0]
    for(let i = 1; i < sequence.length-1 ; i++){
        if(sequence[i+1] - sequence[i] !== temp){
            return false
        }
    }
    return true
}
console.log(isArithmeticProgression([-7, -5, -3, -1]))