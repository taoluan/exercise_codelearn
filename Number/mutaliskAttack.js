function mutaliskAttack(scvs){
    var t1 = 0;
    var t2 = 0;
    var t3 = 0;
    var sum= 0;
    for (var i = 0 ; i <= scvs.length-1 ; i ++){
        while(scvs[i] != 0 && scvs[i+1]!= 0 && scvs[i+2] !=0){
            if (scvs[i+1]- t1*3 > 0){
                t1 = scvs[i] / 9;
                t2=(scvs[i+1] - t1*3)/9;
                if (scvs[i+2]- t1*1 + t2*3 > 0){
                    t3=(scvs[i+2] - t1*1 - t2*3)/9;
                    scvs[i+2] = 0;
                    scvs[i+1] = 0;
                    scvs[i] = 0;
                    console.log(scvs);
                    sum =sum + Math.ceil(t1)+Math.ceil(t2)+Math.ceil(t3);
                }else {
                    scvs[i+2] = 0;
                    scvs[i+1] = 0;
                    scvs[i] = 0;
                    console.log(scvs);
                   sum =sum + Math.ceil(t1)+Math.ceil(t2);
                }
            }else if (scvs[i+2]- t1*1 + t2*3 > 0){
                t3=(scvs[i+2] - t1*1 - t2*3)/9;
                scvs[i+2] = 0;
                scvs[i+1] = 0;
                scvs[i] = 0;
                sum =sum + Math.ceil(t1)+Math.ceil(t3);
            }else {
                scvs[i] = 0;
                scvs[i+1] = 0;
                scvs[i+2] = 0;
                console.log("t1= "+t1+"scvs= "+scvs);
                sum = sum + Math.ceil(t1)
            } 
        }    
    } 
    console.log(sum) 
}
var  a = [1,1, 1, 1, 1, 1, 1, 1, 1, 1]
console.log(mutaliskAttack(a))
