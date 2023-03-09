console.log("задача 1")

function convertSpeed(x, y){
    if(y == "toMS"){
        let a = x/3.6;
        let b = " м/с"
        return a+b;
    }
    else if(y == "toKMH"){
        let a = x*3.6;
        let b = " км/ч"
        return a+b;
        
    }
    else{console.log("ошибка");}
}
console.log(`${convertSpeed(36,'toKMH')} `);

console.log("задача 2")
function absValue(x){
  if(x > 0){
    return x
  }
  else{
    return x*(-1)
  }
}

console.log(absValue(-334));