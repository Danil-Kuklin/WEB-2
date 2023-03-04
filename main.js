console.log("задача 1")

let a = 36;
let b = 20;
console.log(`${a} км/ч соответствует ${a/3.6} \n${b} м/с соответствует ${b*3.6} км/ч \n`) 

console.log("задача 2")

a = 7
b = 5
let c = 10
let P = a+b+c;
if((a + b) > c && (a + c) > b && (c + b) > a){
    console.log(`треугольник существует`);
    console.log(`Периметр = ${P}`);
    console.log(`Площадь = ${Math.sqrt(P/2*(P/2-a)*(P/2-b)*(P/2-c))}`);
    console.log(`Соотношение = ${P/Math.sqrt(P/2*(P/2-a)*(P/2-b)*(P/2-c))}`);

} else{console.log(`треугольник не существует`);}

console.log("задача 3")

const numb = prompt('Введите число', '')
if(isNaN(numb)){
    console.log("вы ввели не число");
}
else{
    for(let i = 0; i <= numb; i++){
        if(i == 0){
            console.log(`${i} buzz`);
        }
        else if(i % 5 == 0){
            console.log(`${i} fizz buzz`);
        } else if(i % 2 == 0){
            console.log(`${i} buzz`);
        }
        else{
            console.log(`${i} fizz`)
        }
    }
}

console.log("задача 4");

let str1="*";
let str2="#";
while(str1.length<=12){
    console.log(str1);
    str1+="*";
    str2+="#";
    console.log(str2);
    str1+="*";
    str2+="#";
}
console.log("||");

console.log("задача 5")

let myNumb = 5;
let numb2 = prompt('Введите число', '');
if(isNaN(numb2)){
    console.log("вы ввели не число");
}
else{
    do{
        if(numb2 > myNumb){
            alert("ваше число больше")
            numb2 = prompt(`Введите число   `, ``);
        } else if(numb2 < myNumb){
            console.log("ваше число меньше");
            numb2 = prompt(`Введите число   `, ``);
        }
        else{
            break;
        }
    } while(numb2 != myNumb);
   console.log("угадано");
 }

console.log("задача 6")

let n = 20;
let x = 5;
let y = 3;
if(n % x ==0 && n % y == 0 ){
    console.log(`n = ${n}, x = ${x}, y = ${y} => true`);
} else{
    console.log(`n = ${n}, x = ${x}, y = ${y} => false`);
}

console.log("задача 7")

n = 12;
if (1<=n && n <= 3){
    console.log(`месяц ${n} => 1 квартал`);
}
else if(4 <= n && n <= 6){
    console.log(`месяц ${n} => 2 квартал`);
}
else if (7 <= n && n <= 9){
    console.log(`месяц ${n} => 3 квартал`);
}
else if(10 <= n && n <= 12){
    console.log(`месяц ${n} => 4 квартал`);
}
else{
    console.log(null);
}

