function longestSequence(a){
    let max = 0, t = 0; 
    let tem = Math.abs(a[0]-a[1])
    for(let i = 0 ; i < a.length ; i++){
        for(let j = 1 ; j < a.length; j++){
            if(Math.abs(a[i] - a[j]) === tem){
                max += 1 ;
            }
        }
        if(t > max){
            max = t
        }
    }
    console.log(max)
}
console.log(longestSequence([1, 7, 3, 5, 4, 2]))