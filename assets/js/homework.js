/**
 *
 * Pedir al usuario el dia de la semana
 * p.ej. lunes, martes, ...
 * Imprimir en consola el número del dia de la semana equivalente
 * es decir:
 * domingo -> 1, lunes -> 2, martes -> 3, etc...
 * reducir lo mas posible el codigo utilizando el toLowerCase
 */

const dayWeek = prompt("¿Qué día de la semana es hoy?");

switch (dayWeek.toLowerCase()) {
  case "lunes":
    console.log(`${dayWeek} es el dia 1`);
    break;
  case "martes":
    console.log(`${dayWeek} es el dia 2`);
    break;
  case "miercoles":
    console.log(`${dayWeek} es el dia 3`);
    break;
  case "jueves":
    console.log(`${dayWeek} es el dia 4`);
    break;
  case "viernes":
    console.log(`${dayWeek} es el dia 5`);
    break;
  case "sabado":
    console.log(`${dayWeek} es el dia 6`);
    break;
  case "domingo":
    console.log(`${dayWeek} es el dia 7`);
    break;
  default:
    console.error(`Es un día invalido`);
    break;
}
