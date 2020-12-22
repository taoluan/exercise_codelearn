function primeTogether(a,b){
    if(check(a) === true & check(b) ===true){
        return true
    }return false
}
function check(a){
    for(var i = 2 ; i <= Math.sqrt(a);i++){
        if (a % i == 0){
            return false;
        }
    }
    return true
}