function missingValue(a,b){
    let temp=[];
    for(let i = 0 ; i < b.length ; i++){
        let count=0;
        for(let j=0 ; j < a.length ; j++){
            if(a[j]===b[i]){
                count++;
            }
        }
        if(count===0){
            temp.push(b[i]);
        }
}
return temp
}
console.log(missingValue([7,2,5,3,5,3],[7,2,5,4,6,3,5,3]))