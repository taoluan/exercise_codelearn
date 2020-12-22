function isSpecialPrime(n){
    let Special = []
    for(let i = n.length-1 ; i >= 0 ; i--){
        let temp = Number(n.substring(0,i))
        console.log(n.substring(0,i))
        if(!checkPrime(temp)){
            console.log(temp) 
            return false
        }
    }
    return true
 }
 function checkPrime(x){
      for( i = 2 ; i <= math.sqrt(n);i++){
         if(x % i === 0){
             return false
         }
     }
     return true
 }
isSpecialPrime(1234)