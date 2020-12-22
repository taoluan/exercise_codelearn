function powerOfBrain(a){
    for(let i = 0; i < a.length ; i++){
        console.log(a[i],a[i+1]+" "+ucln(a[i],a[i+1]))
    }
}
function ucln (a,b){
    if(a > b){
        a = a - b
    }else b = b -a 
    return a
}
 // 6:12 > 1,2,3,6 //// 6:8>1,2 // 12:8 >1,2,4
 //[1,2,3,6]
 //6:2>2 , 6:4 >2 , 4:2>2
 //2:2>2 , 2:3>1,2:4>2 , 2:6>2 ,3:4>1,3:6>3,4:6>2
 console.log(powerOfBrain([6, 12, 8]))