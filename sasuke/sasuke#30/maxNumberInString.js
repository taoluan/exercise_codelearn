function maxNumberInString(str){
    var arr = str.split('');
    var mang = [];
    for(var i= 0; i < arr.length ;i++){
        if(Number(arr[i]) / 1 === Number(arr[i])){
            mang.push(i)
        }
    }
    var temp = [];
    for(var j = 0 ; j < mang.length ; j++){
        if(Math.abs(mang[j]-mang[j+1]) === 1){
            if(temp.indexOf(mang[j]) === -1 ){
                temp.push(mang[j])
            }
            if(temp.indexOf(mang[j+1]) === -1 ){
                temp.push(mang[j+1])
            }
        }
    }
    for(var k= 0; k < temp ;k++){
        console.log(arr[k])
    }
    console.log(arr[1])
}
console.log(maxNumberInString("mnxmoor8eg8k3qmgiulkns2g3rgizb86j03xqwodwcok3go4on2a0jpfp9bi26pet632awp9p25hsu30nm4qic3tvff9gx64pufe"))