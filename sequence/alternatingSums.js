function alternatingSums(a){
    let team1 = 0 , team2 = 0;
    for(let i = 0; i < a.length-1 ; i+=2){
        team2 += a[i+1]
    }
    for(let i = 0 ; i < a.length ; i+=2){
        team1 += a[i]
    }
    if(a.length===2) return a;
    return [team1,team2]
}
console.log(alternatingSums([50, 60, 60, 45, 70]))