    function subtractionTime(a,b){
        let str = '';
        let arr = [];
        a = a.split(':')
        b = b.split(':')
        if(b[0] === '00' && b[1] === '00' && b[2] === '00'){
            b = ['24','60','60']
        }
        if(b[0] ==='00'){ b[0] = '24'};
        console.log(a,b)
        if(b[2] - a[2] >= 0){
            arr.push(b[2] - a[2])
            if(b[1] - a[1] >= 0){
                arr.push(Math.abs(b[1] - a[1]))
                if(b[0] - a[0] > 0){
                    arr.push(b[0] - a[0])
                }else{
                    arr.push(24-Math.abs(b[0] - a[0]))
                }
            }else{
                arr.push(60-Math.abs(b[1] - a[1]))
                if(b[0] - a[0] > 0){
                    arr.push((b[0] - a[0])-1)
                }else{
                    arr.push(24-Math.abs(b[0] - a[0])-1)
                }
            }
            console.log(a,b)
        }else{
            arr.push(60-Math.abs(b[2] - a[2]))
            //console.log(60-Math.abs(b[2] - a[2]))
            if(b[1] - a[1] >= 0){
                arr.push(Math.abs(b[1] - a[1])-1)
                if(b[0] - a[0] > 0){
                    arr.push(b[0] - a[0])
                }else{
                    arr.push(24-Math.abs(b[0] - a[0]))
                }
            }else{
                arr.push(60-Math.abs(b[1] - a[1])-1)
                if(b[0] - a[0] > 0){
                    arr.push((b[0] - a[0])-1)
                }else{
                    arr.push(24-Math.abs(b[0] - a[0])-1)
                }
            }
         //   console.log(a,b,"=>",arr)
        }
        //console.log(arr)
        if(arr[2] == 1 & arr[1] == 1 && arr[0]==1){
            arr = [1,0,0]
        }
        let temp = arr[0]
        arr[0] = arr[2];
        arr[2] = temp;
        arr.forEach((element,index)=> {
            if(index === 2){
                if(element < 10){
                    str += "0"+element
                }else{
                    str += +element
                }
                
            }else{
                if(element >= 10){
                    str += element+':'
                }else{
                    str += '0'+element+':'
                }
                
            }
        });
        console.log(str)
    }
    console.log(subtractionTime("22:59:59", "24:00:00"))