function maxCountPrimeFactor(arr){
    let vtr = 0;
    let temp = []
    for(let i = 0 ; i < arr.length ; i++){
        temp.push(checkgcd(arr[i]).length)
    }
    let num = Math.max(...temp)
    return arr[temp.indexOf(num)]
}
function checkgcd (num){
    let temp = [];
    for(let i = 2 ; i <= num ; i++){
        if(num % i === 0 ){
            if(checkngto(i) === true){
                temp.push(i)
            }
        }
    }
    return temp
}
function checkngto(num){
    for(var i = 2 ; i <= Math.sqrt(num);i++){
        if (num % i == 0){
            return false;
        }
    }
    return true
}
console.log(maxCountPrimeFactor([16,610,536,55,494,950,444,206,814,586,95,370,727,213,219,265,704,200,948,690,533,181,719,219,382,38,51,422,588,235,2,559,889,538,551,416,852,345,447,654,459,354,737,276,824,150,784,743,279,769]))
