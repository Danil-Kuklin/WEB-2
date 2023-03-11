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

onsole.log("задача 3")

let student = {
group: 211,
last_name: "Иванов",
first_name: "Иван"
};
console.log(`Список свойств: ${Object.keys(student)} \n
Студент ${student.first_name} ${student.last_name} учится в ${student.group} группе` );

console.log("задача 4")

function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min
}

console.log(randomNumber(-10, 10));

console.log("задача 5")

function sampleArray(arr, x){
    let arr1 =[];
    for(let i = 0; i < x; i++){
       arr1.push(arr[randomNumber(0,arr.length - 1)]);
    }
    return arr1;
}
console.log(sampleArray([1,2,3,4,5,6], 3));