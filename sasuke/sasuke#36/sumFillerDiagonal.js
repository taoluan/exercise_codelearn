    function sumFillerDiagonal(a){
        let sum = 0;
        for(let i = 0 ; i < a.length;i++){
        sum += a[i][a.length-(i+1)]
        }
        console.log(sum)
    }
console.log(sumFillerDiagonal([[1,-8,-4,3],[8,7,-3,1],[1,-2,-3,0],[1,-1,-2,4]]))