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
const littleNumber = (arr) => {
	let smallest = arr[0]
	arr.forEach( (value, index, array) => {
		if(smallest > value){
			smallest = value
		}
	})
	return smallest
}
console.log( littleNumber( [2,1, 4, 10] ) )