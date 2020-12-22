function lego(a,b,n){
    let count = 0;
    let temp =0;
    if(a+b > n)return -1;
    if( a > b ){
      count =Math.floor(n / a)
      temp = count * a; 
      if(n - temp < b){
          count -= 1 
          n -= count*a
      }else {
        n -= temp
      } 
      console.log(count,n)
      temp = Math.floor(n/b);
      if(temp === 0 ){
          return -1
      }else count += temp
    }else{
        count =Math.floor(n / b)//3
        temp = count * b; //9
        if(n - temp < a){//1 <= a , 1
            count -= 1 
            n -= count*b
        }else {
          n -= temp
        }
        console.log(count+" n = "+n)
        temp = Math.floor(n/a);
        if(temp === 0 ){
            return -1
        }else count += temp
      }
    console.log(count)
}
console.log(lego(3, 2, 3906))