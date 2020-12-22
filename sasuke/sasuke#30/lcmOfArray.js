
function lcmOfArray(arr){
    let long =1000000007;
    let a = 0 ;
    let temp = bcnn(arr[0],arr[1])
    for(let i = 2 ; i <arr.length;i++){
        temp = bcnn(temp,arr[i])
    }
    return temp%long
}
function bcnn (a,b){
    return ((a*b)/ucln(a,b))
}
function ucln(a,b){
    let tmp;
    while(b != 0) {
        tmp = a % b;
        a = b;
        b = tmp;
    }
    return a;
}
//console.log(lcmOfArray([80,54,38,54,38,66,21,66,21,75,86,24,55,59,3,75,57,80,54,38,54,38,66,21,66,21,75,86]))
