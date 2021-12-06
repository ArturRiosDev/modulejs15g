/** 
 * Dado un arreglo con nombres de personas, 
 * devuele un arreglo con los nombres de las personas que empiezan con vocales (capitalizados)
 * onlyNamesVowels( ['jorge','ana','ivan','sergio','luis','oscar' ] )
 * -> ['Ana','Ivan','Oscar']
*/

/* const onlyNamesVowels = (arr) =>{
    return arr.map(val =>`${val[0].toUpperCase()}${val.slice(1)}`).filter(val =>{
        return val[0].includes('A') || val[0].includes('E') ||val[0].includes('I') ||val[0].includes('O') ||val[0].includes('U') 
    })
}
let array = onlyNamesVowels(['jorge','ana','ivan','sergio','luis','oscar' ] )
console.log(array) */

/**
 * 
 * Dado una arreglo compuesto por arreglos, 
 * crea una funcion que calcule la suma de los arreglos y posteriormente la suma de las sumas
 * additionMultiArr(  [	[1,2,3] , [1,3,2] , [3,2,1] ] )
 * 
 */
const additionMultiArr = (arr) =>{
   return arr.map(val=>val.reduce((acc,value)=> acc += value)).reduce((sum,total)=>sum += total)
}

let array = additionMultiArr( [[1,2,3] , [1,3,2] , [3,2,1] ] )
console.log(array)