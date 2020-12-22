function chooseEmployee(skill,salary,requestSkill,k){
    let count = 0;
    let resut = 0;
    let temp = [];
    if(k ===0) return k ;
    for(let i =0 ; i < skill.length ;i++){
        temp.push(0)
    }
    if(skill.indexOf(requestSkill) === -1){
        sk = max(skill,temp)
            for(let i = skill.length ; i >= 0;i--){  
                if(skill[i] === skill[sk]){
                    resut += salary[i]
                    k--; 
                    console.log(skill[i]+" "+resut)
                }
            }
            if(k > 0){
                sk = max(skill,temp)
                let l = []
                for(let i =0 ; i < skill.length ;i++){
                    if(skill[i] === skill[sk]){
                        l.push(salary[i])
                    }
                }
                l.sort();
                for(let i =0 ; i <= k ;i++){    
                            resut += l[i]
                            k -= 1;
                            console.log(l[i]+" "+resut)
                        }    
        }
    }else{
        for(let i =0 ; i < skill.length ;i++){
            temp.push(0)
            if(skill[i] === requestSkill){
                resut += salary[i]
                k -= 1;
                console.log(skill[i] +resut)
            }
        }
        if(k > 0){
                sk = max(skill,temp)
                let l = []
                for(let i =0 ; i < skill.length ;i++){
                    if(skill[i] === skill[sk]){
                        l.push(salary[i])
                    }
                }
                l.sort();
                console.log(l)
             //   console.log("tem "+resut+" k= "+k)
            
                for(let i =0 ; i <= k ;i++){    
                            resut += l[i]
                            k -= 1;
            //                console.log(l[i] +" "+resut)
                        }
                
             
        }  
    }
  return resut
}
function max(a,b){
    var max = 0;
    for(let i = 0 ; i < a.length ; i++){
        for(let j = i ; j < a.length;j++){
            if(a[j]===a[i]){
               b[i]++
            }
        }
    }
    var t =[];
    for(let k = 0 ; k < b.length; k++){
        if(b[k] >= max){
            max = b[k]
        }
    }
    return b.indexOf(max)
}
//console.log(max(["Java","Python","Python","Java","Python","Java"],[0,0,0,0,0,0]))
console.log(chooseEmployee(["java","java","java","python","python","python","c++"], [100,200,300,200,400,100,100], ".Net", 7))