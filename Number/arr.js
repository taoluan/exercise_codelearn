var a = [21,19,13,20,7,2,28,16,10,16];
var k = 2;
function arrayAscending(a, k){
    var temp  = 0;
    var num = 0;
    a.forEach(function(i) {
        if(i > temp){
            temp = i;
            num = num;
            console.log("i= "+i+" temp = "+temp);
        }else if ( i <= temp){//i < temp 
            console.log("i ="+i)
            while(i < temp){
                 i = i + k
                num = num + 1
                console.log("i ="+i + " num = "+num)
            }
            temp = i;
            console.log("temp ="+temp)
        }
        
    });
    return num
}
console.log(arrayAscending(a,k));