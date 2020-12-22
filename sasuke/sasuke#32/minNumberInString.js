function minNumberInString(arg1){
    let regex = /[a-z]/gi
    let regex1 = /-/gi
    let str = arg1.replace(regex,' ')
    str=str.replace(regex1, ' -')
    let mang = str.split(' ')
    mang = mang.filter(mang=>mang % 1 ===0 && mang !== '');
    mang.forEach(element => {
    element = Number.isInteger(element)
    });
    if(Math.min(...mang) == Infinity)return -1
    return Math.min(...mang)
}
console.log(minNumberInString("abcd"))