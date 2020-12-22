var num = [1,1,0,0]
function sortLined(num){
   // var num = 0;
    var temp;
    for(var i=0; i<num.length; i++){
		for(var j=0;j<num.length-(i+1);j++){
			console.log(num[j],num[j+1])
		}
	}
  //  return num
}
console.log(sortLined(num));