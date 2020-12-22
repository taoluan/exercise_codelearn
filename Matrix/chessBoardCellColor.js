function chessBoardCellColor(cell1,cell2){
    if(checkColor(cell1) === checkColor(cell2)) {
        return true;
    }else
        return false
}
function checkColor(cell){
    let x = cell[0];
    let y = cell[1];
    if(x === 'A' || x === 'C' || x === 'E' || x === 'G' ){
        if( y % 2 === 0 ){
            return 0  // 0 white
          }else return 1
    }else {
        if( y % 2 === 0 ){
            return 1  // 0 white
          }else return 0
    }
}
//console.log(checkColor('A1'))
console.log(chessBoardCellColor("A1", "A2"))
let a = 'A'
let b = 'B'
console.log(a-b)