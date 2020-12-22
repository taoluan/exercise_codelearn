function prefixSums(a){
    let sum = 0;
    let arr =[]
    a.forEach(element => {
        arr.push(sum += element)
    });
    return arr
}