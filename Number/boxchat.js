function boxChat(s, a){
    var mang = s.split(' ');
    var temp ;
    var t = "*";
    var j = 0;
    console.log(mang[2].length)
    for(var i = 0 ; i <= a.length ; i++){
        mang.forEach(function(element,index){
            if(element === a[i]){
                for(j = 0 ; j < element.length ; j++){
                    element = element + t 
                }
                console.log(element)
            }
        });   
    }
    return mang
}
var s = "gkj wct j orz uun wct to c j wct";
var a = ["wct","c","j"]
console.log(boxChat(s,a))