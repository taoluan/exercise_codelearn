function gradeCheating(n,m,a){
    let sum = a.reduce((a,b)=>a+b)
    if(sum > m ){
        return m
    }
    return sum
}
gradeCheating(10, 12, [1,2,1,1,0,2,0,0,2,0])