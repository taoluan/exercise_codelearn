function iconFeeling(a){
    let mang = [];
    for(let k = 0 ; k < 3 ; k++){
        mang.push(a[solanxh(a)])
        let i = a[solanxh(a)]
        a = a.filter(a => a !== i);
    }
    return mang
}

function solanxh(a){
    let b = []
    for(let i = 0 ; i < a.length ; i++){
        b.push(0)
        for(let j = i ; j < a.length;j++){
            if(a[j]===a[i]){
               b[i]++
            }
        }
    }
    console.log(b)
    let max = Math.max(...b)
    return b.indexOf(max)
}
console.log(iconFeeling([2,3,6,4,3,4,1,6,2,1,1,2,6,4,5,6,5,6,6,6,2,3,5,3,6]))
//console.log(solanxh([7,8,7,9,1,2,9]))