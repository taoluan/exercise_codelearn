function compositeNumber(n){
    var num = 0;
    for (var i =  1 ; i <=n ; i++){
        if(n % i == 0){
            num++;
        }
    }
    if(num >= 3){
        console.log(true) 
    }else {
        console.log(false) 
    }
}
compositeNumber(4)
