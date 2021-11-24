/**
 *
 * Pedir al usuario por prompt un numero entre 1 y 100
 * verificar si es un par o impar
 * imprimir en resultado en consola
 * Máximo de lineas para este ejercicio, 2 lineas de código
 * Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
 */

let number =
  parseInt(prompt("Favor de colocar un numero de entre el 1 al 100")) % 2 == 0
    ? "Es un numero par"
    : "Es un numero impar";
console.log(number);
/**
 *
 * Pedir al usuario el dia de la semana
 * p.ej. lunes, martes, ...
 * Imprimir en consola el número del dia de la semana equivalente
 * es decir:
 * domingo -> 1, lunes -> 2, martes -> 3, etc...
 */

let weekDay = prompt("Favor de escribir un dia de la semana");
switch (weekDay.toLowerCase()) {
  case "domingo":
    console.log(1);
    break;
  case "lunes":
    console.log(2);
    break;
  case "martes":
    console.log(3);
    break;
  case "miercoles":
    console.log(4);
    break;
  case "jueves":
    console.log(5);
    break;
  case "viernes":
    console.log(6);
    break;
  case "sabado":
    console.log(7);
    break;
  default:
    console.log("Es necesario capturar un dia de la semana");
    break;
}
/**
 *
 * Pedir al usuario 2 numeros
 * Imprimir en consola cual es el menor de los 2
 * Imprimir en consola cual es el mayor de los 2
 */
let a = parseInt(prompt("Por favor escribir el primer numero"));
let b = parseInt(prompt("Por favor escribir el segundo numero"));

if (a > b) {
  console.log(`${a} Es el mayor de los dos y ${b} es el menor`);
} else if (a < b) {
  console.log(`${b} Es el mayor de los dos y ${a} es el menor`);
}else{
    console.log(`ambos son iguales`)
}
