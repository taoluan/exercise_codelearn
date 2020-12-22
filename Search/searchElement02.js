function searchElement02(a,k){
    let temp = [];
    for(let i = 0 ; i < a.length;i++){
        for(let j = 0; j<a[i].length;j++){
            if(temp.includes(a[i][j]) !== true){
                temp.push(a[i][j])
            }
        }
    }
    temp.sort(function(a,b){
        return a-b
    })
    if(k > temp.length || k ===0)return -1;
    return temp[k-1]
}
console.log(searchElement02([[ 51, 158, 178],        [275, 309, 390],       [491, 797, 941]], 3))