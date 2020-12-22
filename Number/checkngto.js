a = 12 , b=18
function greatestCommonPrimeDivisor(a, b){
    var num = 0;
    if ( b > a){
        for ( var i =2 ; i<=a ; i++){
            if(a % i == 0 & b % i == 0){
                if(check(i) == true){
                    console.log("num= "+num);
                    console.log(i)
                    if(i > num){
                        console.log(i)
                        console.log(num)
                        num = i
                        
                    }
                }
                console.log(num)
            }
        }
    }
    if(num > 0){
        return num
    }else {
        return -1 
    }
}
function check(a){
    for(var i = 2 ; i <= Math.sqrt(a);i++){
        if (a % i == 0){
            return false;
        }
    }
    return true
}
//console.log(greatestCommonPrimeDivisor(a,b))
check(15)