/* const suma = (a,b = 5) =>{
  return a + b
}
console.log(suma(3))
// declaration
const nombreFuncion = (param1, ... , paramN) => {

	// sentencias
	//...
	return 
}

// invoke 
let resultInvoke = nombreFuncion(param1, ... , paramN)

// Ejemplo
const sumaOk = (a) => {
	return  a * 2
}
// ejemplo con 1 parametro
const sumaOk = a => {
	return  a * 2
}

// En una sola linea
const sumaOk = a => a * 2 */

//ejercicio 1


/* const multipleTable = (a=10) => {
    for (let i = 1; i <= a; i++) {
      for (let j = 1; j <= 10; j++) {
        console.log(`El resultado de ${i} * ${j} es = ${i * j}`);
      }
    }
}
console.log(multipleTable())
 */

//ejercicio 2

/* const sum = (a=10) =>{
    let result = 0
    for(let i = 1; i <= a ; i++){
        result += i
    }
    return result


console.log(sum()) */

//Ejercicio 3

/* 
const sumTotalOfNumbers = (a = 1234) => {
   a = a.toString()
  let total = 0;
  for (let i = 0; i <= a.length - 1; i++) {
    total += parseInt(a[i]);
  }
  return total
}

console.log(sumTotalOfNumbers())
 */
//ejercicio 4

/* const totalSumOfMultipleNumbers = (a = 3, b = 5)=> {
  let i = 1;
  let result1 = 0;
  while (i <= 100) {
    if (i % a == 0 || i % b == 0) {
      result1 += i;
    }
    i++;
  }
   return `Este es el total ${result1}`
}

console.log(totalSumOfMultipleNumbers())
 */

//Arrays

let arr = [2,'hola']
for ( i = 0;  i< arr.length; i++) {
  console.log(arr[i])
  
}