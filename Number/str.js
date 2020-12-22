function stabilityArray(arr){
    for(var i = 0 ; i<=arr.length ; i++){
        var temp = arr[i] - arr[i+1];
        if( temp > 5 || temp < -5){
            return false
        }
    }
    return true
}
    
var arr = [1, 6, 15, 8, 12]
console.log(stabilityArray(arr))