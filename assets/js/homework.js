/**
 * Ejercicio 1.
 * Dado un objeto inicial, hacer los siguientes puntos 
 * 
 * 1. Agregar el lenguaje 'Go' a la lista de lenguajes
 * 2. Cambiar el nivel a 4
 * 3. Eliminar la propiedad avatar
 * 4. Agregar una nueva propiedad de edad y poner el valor de 30
 * 5. Imprimir en consola todos los lenguajes dominados
 * 6. Clonar el objeto en uno nuevo
 * 7. Imprimir en consola el nuevo objeto
 * 
 * @hint https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 */

 let koder = {
    languages: ["JavaScript", "Python", "Ruby"],
    isMentor: true,
    level: 3,
    avatar: "https://picsum.photos/200/300"
}



/**
 * Ejercicio 2:
 * Escribir una funcion que reciba un parametro
 * Verificar si el parametro es un objeto
 * o si es un array
 * p.ej.  
 * ·> isAnObjectOrArray( [1,2,3] )
 * -> 'Es un array'
 * ·> isAnObjectOrArray( {key:'value'} )
 * -> 'Es un Objeto'
 * ·> isAnObjectOrArray( 'Hola mundo' )
 * -> 'No es un array ni un objeto'
 * 
 * 
 * @params {Object}, [Array] ,'string' - Estructura que se quiere validar
 * @return 'String' - mensaje de respuesta
 * 
 * @hint https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
 * @hint https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
 * 
 */

/* const isAnObjectOrArray = (element) => {
      return Array.isArray(element) === true  ? `Es un Array` : typeof element === 'object' ? `Es un Objeto`: `No es un array ni un objeto`
}

console.log(isAnObjectOrArray({a:1})) */

/**
 * Ejercicio 3.
 * Realizar una funcion que tome como parametro un objeto
 * y devuelva un array de arrays con la siguiente estructura
 * [ [key, value], [key, value] ]
 * Resultado esperado: makePairs({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]
 * 
 * @params {Object} object - El objeto que queremos transformar
 * @return [Array] - El array que se espera retornar
 * 
 * @hint https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
 * @hint https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 * 
 * Se tiene que realizar 2 soluciones, 1 con Object.entries() y otra con .map()
 */
/* const makePairs = (object) =>  Object.entries(object)
const makePairsWithMap = (object) => Object.entries(object).map(val => val) 



console.log(makePairs({ a: 1, b: 2 }))
console.log(makePairsWithMap({ a: 1, b: 2 })) */


/**
 * Ejercicio 4:
 * Realizar una funcion que tome como parametro un string
 * y retorne un array con todos caracteres del string
 * 
 * Resultado esperado: 
 * ·> splitString('hola mundo')
 * ·> ['h','o','l','a',' ','m','u','n','d','o']
 * 
 * @params 'String' - El String que queremos transformar
 * @return [Array] - El array que se espera retornar
 * 
 * 
 * @hint https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 */

const splitString = (str) => str.split('')

let word = ['hola mundo']
console.log(splitString(...word))