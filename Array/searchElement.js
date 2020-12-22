function searchElement(a,n){
    let mang = []
    for(let i = 0 ; i < a.length ; i++){
        if(mang.includes(a[i]) === false) {
            mang.push(a[i])
        }
    }
    let temp = mang.sort(function(a,b){
        return b-a
    })
    return temp[n-1]
}
console.log(searchElement([1878619,  623915, 1088266, 1598839, 1867929,  690510, 1032037, 1923980, 1897839], 6))