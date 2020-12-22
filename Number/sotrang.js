function pagesNumbering(n){
    var pages = n.toString();
    var p = pages.length
    var temp = n -(Math.pow(10,p-1)-1);
    console.log(p)
    var s = 0 ;
    if (n <= 9){
        return n;
    } else if (n === 0) {
        return 0;
    }else {
        if( p <= 2){
            s = 9 + (p*temp)
        }else if( p > 2 && p <= 3){
            s = 9 + (90*2)+(p*temp)
        }else if(p> 3 && p <= 4){
            s = 9 + (90*2) + (3*900) + (p*temp);
        }else if(p> 4 && p <= 5){
            s = 9 + (90*2) + (3*900) + (4*9000) + (p*temp);
        }else if(p> 5 && p <= 6){
            s = 9 + (90*2) + (3*900) + (4*9000) + (5*90000) + (p*temp);
        }else if(p> 6 && p <= 7){
            s = 9 + (90*2) + (3*900) + (4*9000) + (5*90000) + (6*900000)+ (p*temp);
        }else if(p> 7 && p <= 8){
            s = 9 + (90*2) + (3*900) + (4*9000) + (5*90000) + (6*900000)+ (7*9000000) +(p*temp);
        }else if(p> 8 && p <= 9){
            s = 9 + (90*2) + (3*900) + (4*9000) + (5*90000) + (6*900000)+ (7*9000000) + (8*90000000) +(p*temp);
        }
        console.log(s)
    }
}
pagesNumbering(0)