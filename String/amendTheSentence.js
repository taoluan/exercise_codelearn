function amendTheSentence(s){
    var mang = [0];
    var str = " ";
   for(var i = 0 ; i <= s.length-1 ; i++){
      if(s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90){
          mang.push(i)
      }
   }
   var arr=[];
   for(i = 0;i<=mang.length-1;i++){
     arr.push(s.substring(mang[i],mang[i+1])) 
   }
  return arr.join(' ').trim().toLocaleLowerCase()
}
console.log(amendTheSentence("iEiMCyKAdsfGMPa"))
/*iEiMCyKAdsfGMPa
i ei m cy k adsf g m pa */