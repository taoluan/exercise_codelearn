function minMoney(n,arr){
    let count = 0;
    arr.sort(function(a,b){
        return b-a
    })
    console.log(arr)
    while(n > 0){
        for(let i = 0; i < arr.length ; i++){
            let t = Math.floor(n / arr[i])
            if(t >= 1){
                count += t
                n -= t*arr[i]
                console.log(count,n)
            }
        }
    }
    return count
}
//94->23, 22->177 , 21->260
//[ 83, 79, 48, 36, 21 ] => 25 
console.log(minMoney(2003,[21,79,48,83,36]))