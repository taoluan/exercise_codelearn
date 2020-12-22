function kthSpecialNumber(arr,k){
    let mang = arr.concat()
    for(let j = 0 ; j < arr.length ; j++){
        for(let i = 0 ; i < arr.length;i++){
            let temp = arr[j].toString()+arr[i].toString()
            mang.push(temp)
        }
    }
    console.log(mang)
}
console.log(kthSpecialNumber([1,2,3,8],131))