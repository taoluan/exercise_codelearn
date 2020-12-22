function jumpingGame(arr,h,t){
    var s = 0;
    for(var i = 0 ; i <= arr.length-1 ; i++){
        if(h >= arr[i]){
            h = h + t
            s++
            console.log(h >= arr[i])
        }else {
            console.log("1")
            return false
        }
    }
    if (s>0) return true
}
var arr =[1,2,3];
var h =1;
var t = 1;
console.log(jumpingGame(arr,h,t))