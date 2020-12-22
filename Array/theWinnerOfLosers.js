function theWinnerOfLosers(basketOfBalls){
    let count = basketOfBalls.reduce((accu,curr)=>accu+curr)
    console.log(count)
    if(count % 2 === 0 && basketOfBalls[0] % 2 === 0 & basketOfBalls[basketOfBalls.length-1] % 2 === 0){
        return 2
    }
    return 1
}
console.log(theWinnerOfLosers([3]))
//1 win 