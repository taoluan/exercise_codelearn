function digitsProduct(product){
    var mang = []
    if ( product == 0){
        console.log(10) ;
    }else if (product < 9){
        console.log(product)
    } else {
        for(var i = 9 ; i >= 2 ; i--){
            if(product % i == 0){
                mang.push(i)
                product /= i;
                i = 9;
            }
        }
        if (mang.length === 0 ){
            console.log(-1)
        }else{
            var temp = mang.sort(function(a,b ){return a- b});
            console.log(temp.join(''))
        }
    }
}

digitsProduct(1)