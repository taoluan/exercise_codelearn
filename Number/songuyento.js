var n  = 24
function factorSum(n){
    var temp = n ;
    var tong = 0;
    if (n <= 1) return n;
    for ( i = 2 ; i <= n;i++){ 
        while (n % i == 0){
            tong += i;
            n /= i;
        }
        
    }  
    if(tong == temp){console.log(tong) ;} 
    else{
        return factorSum(tong);
        } 
    }
 
factorSum(n);