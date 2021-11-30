//ejercicio 1
/*
function multipleTable(a=10) {
    for (let i = 1; i <= a; i++) {
      for (let j = 1; j <= 10; j++) {
        console.log(`El resultado de ${i} * ${j} es = ${i * j}`);
      }
    }
  }
*/

//ejercicio 2
/*
function sum (a=10){
    let result = 0
    for(let i = 1; i <= a ; i++){
        result += i
    }
    return result
}
let number = parseInt(prompt('Dame un number del 1 al 100'))
if (!isNaN(number) && number > 0 && number < 101) {
    console.log(`El resultado de la suma de 1 a ${number} es igual a ${sum(number)}`)
} else {
    console.error('Debes introducir un valor numerico entre 1 y 100')
}
*/

//Ejercicio 3
/*
function sumTotalOfNumbers(a = "1234") {
  let total = 0;
  for (let i = 0; i <= a.length - 1; i++) {
    total += parseInt(a[i]);
  }
  console.log(total);
}
*/

//ejercicio 4

function totalSumOfMultipleNumbers(a = 3, b = 5) {
  let i = 1;
  let result1 = 0;
  while (i <= 100) {
    if (i % a == 0 || i % b == 0) {
      result1 += i;
    }
    i++;
  }
  console.log(`Este es el total ${result1}`);
}
