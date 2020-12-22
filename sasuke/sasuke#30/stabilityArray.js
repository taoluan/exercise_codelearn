function stabilityArray(arr){
    var mang =0;
    for (var i = 0 ; i <= arr.length-1 ; i++){
        if(Math.abs(arr[i]-arr[i+1]) <= 5){
            mang++
            console.log(arr[i]+"-"+arr[i+1]+"="+Math.abs(arr[i]-arr[i+1]))
        }
    }
    console.log(mang+"-"+arr.length)
    if(mang === arr.length-1){
        return true
    }else return false
}

console.log(stabilityArray([11,2,3,14,3,35]))