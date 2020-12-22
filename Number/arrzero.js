function arrayZero(s){
    var num = 0;
    console.log(s[0].length)
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    s.reduce(reducer);
    while(s.reduce(reducer) != 0){
        const t1 = s[0]-s[1]
        const t2 = s[1]-s[2]
        const t3 = s[2]-s[3]
        const t4 = s[3]-s[0]
        s[0]=Math.abs(t1)
        s[1]=Math.abs(t2)
        s[2]=Math.abs(t3)
        s[3]=Math.abs(t4)
        console.log(s)
        num++
    }
    return num;
}
const s =["2","7","1","2"]
console.log(arrayZero(s))