function isTandemRepeat(inputString){
    var n = inputString.length/2
    var str = inputString.substring(0,n)
    return str.repeat(2) === inputString
}
console.log(isTandemRepeat("qqq"))