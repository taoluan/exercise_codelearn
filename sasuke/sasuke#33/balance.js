function balance(arr){
    let temp = arr.reduce(function(a,b){return a+b })/2
    for(let i = 0; i < 2 ; i++){
        for(let j = 0 ; j < arr.length ; j++){
          let rs = temp-arr[j]
        }
    }
    console.log(temp)
}
console.log(balance([1,2,3,4]))