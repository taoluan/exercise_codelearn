function checkStrongPassword(password){
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*\(\)\-\+]).{6,}$/;
   if( password.match(regex)){
       return true
   }else return false
}
// 0-1 : 48-57
//a-z : 97-122 // A-Z 65-90
//Ky tu dac biet 33,35,36,37,38,40,41,42,43,45,64,94
console.log(checkStrongPassword("0123456789"))