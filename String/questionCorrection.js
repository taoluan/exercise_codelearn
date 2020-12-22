    function questionCorrection(s){
        let reg = /[^A-Za-z]/g
        let str = s.trim().toLowerCase();
        let temp = str.replace(str[0],str[0].toUpperCase())
        let mang = temp.split(' ')
        for(let i = 0; i < mang.length ; i++){
            if(mang[i] === ''){
                mang.splice(i,1)
                i--
            }
        }
        str=mang.join(' ')
        for(i = str.length-2 ; i >= 0 ; i--){
            if(str[i] === '?'){
            str = removechar(str,i)
            }
            if(str[i] === ','){
                if(str[i-1] === ' '){
                    str = removechar(str,i-1)
                }
            }
        }
        if(str[str.length-1] !== '?'){
            str = removechar(str,str.length-1)
            str = str +'?'
        }
        while(str[str.length-2].search(reg) !== -1){
            str = removechar(str,str.length-2)
        }
        return  str
}
function removechar(str,num){
        return str.substring(0,num) + str.substring(num+1)
}
console.log(questionCorrection("z"))