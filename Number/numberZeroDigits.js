function numberZeroDigits(n){
    var sum = 0;
    if(n === 1){
        return 0
    }else {
        while(Math.floor(n/5) != 0){
            n/=5;
            sum = sum + Math.floor(n);
        }
        return sum
    }
}

console.log(numberZeroDigits(1))