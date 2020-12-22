function shoots(a,x){
    let count = 0;
    a.sort(function(a,b){
        return b-a
    })
    while(x > 0){
        for(let i = 0; i < a.length ; i++){
            let t = Math.floor(x / a[i])
            if(t >= 1){
                count += t
                x -= t*a[i]
                console.log(count,x)
            }
        }
    }
    return count
}
// 85, 77, 71, 59, 50,36, 18, 14, 13,  1
console.log(shoots([1, 8, 10], 24))