function lastDigitDiffZero(n){
    var temp= 1;
    for(var i = 1 ; i <= n ; i++){
        temp *= i
        if(temp%10 != 0 ){
            temp = temp % 10;
        }else {
            temp = temp / 10;
        }
    }
    while(temp % 10 == 0){
        temp /= 10
    }
    temp = temp % 10;
   
    return temp % 10
}
console.log(lastDigitDiffZero(1000000))