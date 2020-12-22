function gcdArray(arr){
    if(arr.length === 1) return arr[0];
  //  if(arr.findIndex(find0) !== - 1) arr.splice(arr.findIndex(find0),1);
  /*  const reducer = (a, b) => {
        while(a !== b){
            if(a>b){
                a -= b
            }else b -= a
        }
        return a
      }*/
    let reducer = (a,b) => gcd(a,b)
    return arr.reduce(reducer)
}
//gcd tối ưu nhất
function gcd(a,b){
    if(b === 0) return a;
    return gcd(b,a%b)
}
console.log(gcdArray([100, 45]))
//console.log(gcd(9,15))