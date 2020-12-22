function primeSum(n){
    var sum = 0;
    for(var i = 2 ; i <= n; i++){
       if (check(i)==true){
           sum += i
       }
    }
    console.log(sum)
}
function check(a){
    for(var i = 2 ; i <= Math.sqrt(a);i++){
        if (a % i == 0){
            return false;
        }
    }
    return true
}
primeSum(10000)