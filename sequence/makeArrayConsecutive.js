function makeArrayConsecutive(sequence){
    let max = Math.max(...sequence)
    let min = Math.min(...sequence)
    let rs = [];
    for(let i = min ; i <= max ;i++){
        if(!sequence.includes(i)){
            rs.push(i)
        }
    }
    return rs
}
console.log(makeArrayConsecutive([6, 2, 3, 8]))