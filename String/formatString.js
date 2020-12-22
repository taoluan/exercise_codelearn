function canFlyAway(h,arr){
    var dung = [];
    var check = [];
    var sum;
    for(i = 0 ; i <= arr.length-1 ; i++){
        if(Math.abs(arr[i]-arr[i+1]) > 1000){
            return false
        } else{
            dung.push(arr[i])
        }
    }
    console.log(dung)
    dung.forEach(element => {
        if(h > element){

        }else {
            check.push(element)
        }
    });
    if(check.length === dung.length){
        return true
    }else return false
}
  console.log(canFlyAway(500,[1000,499,1000]))