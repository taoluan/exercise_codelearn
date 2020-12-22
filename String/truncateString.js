function truncateString(s){
    if(s.length === 0){
        return ""
    }
    if(s.charAt(0) % 3 === 0){
       s = s.replace(s.charAt(0),'')
       return truncateString(s)
    } 
    if(s.charAt(s.length-1) % 3 === 0){
        s = s.replace(s.charAt(s.length-1),'')
        return truncateString(s)
    } 
    if ((s.charAt(0) + s.charAt(s.length-1)) % 3=== 0){
        s = s.replace(s.charAt(s.length-1),'')
        s = s.replace(s.charAt(0),'')
        return truncateString(s)
    }
    return s
}
console.log(truncateString("3333333"))