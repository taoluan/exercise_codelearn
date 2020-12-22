function differentValuesInMultiplicationTable2(n,m){
    let count =0;
    let mang= []
    for (let i = 1 ; i <= n ; i ++){
        for(let j = 1 ; j <= m ; j++){
            count = i*j
            if(mang.includes(count)){

            }else mang.push(count)
        }
    }
    return mang.length
}
console.log(differentValuesInMultiplicationTable2(3,2))