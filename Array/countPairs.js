function countPairs(arr){
    let count = 0;
    let temp = 0;
    for(let i = 0 ; i < arr.length; i++){
        for(j = 0 ; j < arr.length; j++){
            if(arr[i]%arr[j] === 0){
                count++
                console.log(" t "+arr[i],arr[j])
               if(arr[i] === arr[j]){
                  temp++
                  console.log(arr[i],arr[j])
               }
               if(temp >= 2){
                   count--
                   temp--
                   console.log(count)
               }
                 
            }
        }
    }
    return count
}
console.log(countPairs([1, 2, 3, 4]))