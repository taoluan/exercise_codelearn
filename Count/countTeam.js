function countTeam(n){
    let max = n ;
    if(n > 25){
        max = 25
    }
    return [Math.ceil(n/4),max]
}
console.log(countTeam(10))