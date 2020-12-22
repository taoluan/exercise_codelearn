function countStepsTaken(a){
    let temp=0;
    let kq= 0;
    let red =(first,last) => last - first;
   // while(a.length !== 0){
       if(a.length > 0){
           for(var i = 0 ; i< a.length;i++){
                a[i][0]++
            }
       }else {
        console.log(a)
       }
        for(var i = 0 ; i< a.length;i++){
            if(a[i][0]===a[i][1]){
                a.splice(i,1)
                countStepsTaken(a)
            }
        }
 //   } 
    
 //   console.log(temp,a)
   // console.log(i+" "+a+"temp= "+temp)
}
console.log(countStepsTaken([[1,2],[3,5],[2,4],[5,6]]))