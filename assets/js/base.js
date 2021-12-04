/**
 * arr.filter(function)
 */


/**
 * Dado un array de numeros
 * Filtrar los que son pares
 */

 let arrToFilter = [1,2,3,4,5,6,7]
 // let arrFiltered = arrToFilter.filter(item => item % 2 === 0 )
 let arrFiltered = []
 
 // arrFiltered = arrToFilter.filter( (numero) => {
 // 	if(	numero % 2 === 0 ) {
 // 		console.log(numero)
 // 		return numero
 // 	}
 // })
 
 arrFiltered = arrToFilter.filter( (numero, index, arr) => {
	 if(numero % 2 === 0 ) {
		 return numero
	 }
 })
 
 // console.log(arrFiltered)
 
 
 /**
  * 
  * -> ['hola','mundo', 0, 5]
  * -> ['hola','mundo']
  * 1. funcion
  * 2. filtrar solo los que son de typo string
  * 
  */
 
 // const filterStrings = (arr) => {
 // 	let arrStrings = []
 // 	arrStrings = arr.filter((item) => {
 // 		if(typeof item === 'string') {
 // 			return item
 // 		}
 // 	})
 // 	return arrStrings
 // }
 
 // const filterStrings = (arr) => {
 // 	let arrStrings = []
 // 	arrStrings = arr.filter((item) => {
 // 		return typeof item === 'string' ? item : null
 // 	})
 // 	return arrStrings
 // }
 
 // filterStrings(['hola','mundo', 0, 5])
 
 const filterStrings = (arr) => {
	 return arr.filter((item) => typeof item === 'string')
	 .map( (item) => item.toUpperCase())
	 .filter( (item ) => item.slice(0,1) === 'H')
 }
 
 const filterStringsLarge = (arr) => {
	 let onlyStrings = []
	 onlyStrings = arr.filter( (item) => {
		 if(typeof item === 'string') {
			 return item
		 }
	 })
 
	 let toUpper = []
	 toUpper = onlyStrings.map( (item) => {
		 return item.toUpperCase()
	 })
 
	 let onlyH = []
	 onlyH = toUpper.filter( (item ) => { 
		 if(item.slice(0,1) === 'H') {
			 return item
		 }
	 })
 
	 return onlyH
 }
 
 
 
 let arr = [5,2,3]
 let acumulador = 0
 
 // arr.forEach( element => {
 // 	acumulador = acumulador + element
 // })
 
 // console.log(acumulador)
	 
 // arr.reduce()
 let suma = arr.reduce((acc, cv, index, arr)=> {
	 // console.log(acc, cv)
	 return acc + cv
 }, 0 )
 
 let arrStr = ['hola', 'mundo']
 let concatStr = arrStr.reduce((acc, cv, index, arr)=> {
	 console.log(acc, cv, index, arr )
	 return acc + cv
 
 }, 'saludo: ')
 
 console.log(concatStr)