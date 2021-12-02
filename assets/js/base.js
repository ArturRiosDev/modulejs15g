// arr.forEach()

// Ejercicio 1 .forEach()
// Dado un array con solo números
// obtener el  valor mas alto
// input: [1,4,3,2,5]
// output: -> [5]

/* const mostBigger = (arr) => {
	let biggest = arr[0]
	arr.forEach( (value, index, array) => {
		if(biggest < value){
			biggest = value
		}
	})
	return biggest
}
console.log( mostBigger( [1, 4, 10] ) )
 */

//Como sacar el numero mas pequeño
/* const littleNumber = (arr) => {
	let smallest = arr[0]
	arr.forEach( (value, index, array) => {
		if(smallest > value){
			smallest = value
		}
	})
	return smallest
}
console.log( littleNumber( [2,1, 4, 10] ) ) */

//arr.map
/* const smallerNumber = (arr) => {
	let smaller = arr[0]
	
	arr.forEach( (value) => {
		if(smaller > value){
			smaller = value
		}
	})

	return smaller
}
// console.log( smallerNumber( [5,7, 3, 4, 10] ) )


// arr.map()
const arrExample = [11,2,3,10,5]
const resultado = arrExample.map( (val) => {
	return val * 2
})
console.log(resultado) */

// dado un array de numeros,
// retornar un array con los numeros convertidos a string
// Entrada : [11,2,3,10,5]
// Salida : ['11','2','3','10','5']

/* let arrEx = [11, 2, 3, 10, 5];
let result = arrEx.map((val) => {
  return val.toString();
});

console.log(result)
 */
/* const arrEx = (arr) => arr.map((val)=> val.toString())

console.log(arrEx([11,2,3,10,5])) */

// .map()
// función
// Dado unn array como parametro
// capitalizar todos los elementos que sean strings
// typeof variable
// input: ['hOlA', 'mundo', 123]
// output -> ['Hola','Mundo', 123]

const capitalizeArr = (arr) => {
  let arrcapitalized =[]
  arr.map((val) => {
    if (typeof val == "string") {
      val.toLowerCase()
      val[0].toLocaleUpperCase()
    }
});
  return arr
}


let resultCap = capitalizeArr(["hOlA", "mundo", 123]);
console.log(resultCap);
