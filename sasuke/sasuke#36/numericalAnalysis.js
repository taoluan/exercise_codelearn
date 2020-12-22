function numericalAnalysis(n){
    let str = '';
    let check = 0;
    while(n > 1){
        if( n % 2 !== 0 && n%3 !== 0 && n % 5 !==0 ){
            return -1
        }
        if(n % 5 === 0){
            n /= 5
            str += '5'
        }else if(n % 3 === 0){
                n /= 3 
                str += '3'
        }else if(n % 2 === 0){
                n /= 2
                str += '2'
        }
    }
    console.log(str)
}
console.log(numericalAnalysis(432))