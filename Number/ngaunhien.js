function gameGuessNumber(n){
    var count = 0;
    if (n === 1){
        return 0
    }
    while(n > 1){
        n /= 2
        count++
    }
    return count
}
console.log(gameGuessNumber(100000000))