let newObject = {
	modelo:'jettta',
	marca:'VW',
	color: 'rojo',
	year:2020,
	tenencias:[2019,2020,2021],
	
}

//propiedades
//KEy: valor
//

/* console.log(newObject.tenencias[0])
 */
//Objeto de Koder 

let Koder = {
	name: 'Arturo',
	email: 'arturo.rioscueto@gmail.com',
	age: 25,
	generation: 15,
	bootcamp: 'Javascript',
	birthplace: 'Puerto vallarta',
	modulos:['js','node js','cloud']		
}

//UPdate
/* Koder.modulos.push('nuevo valor')
console.log(Koder)
//delete
delete Koder.age
console.log(Koder) */
//Create
//Read
//Update
//Delete

//For in

/* for (const key in object) {
	if (Object.hasOwnProperty.call(object, key)) {
		const element = object[key];
		
	}
} */
// for in
/* let counter = 1
for (let propiedad in Koder) {
	console.log(`${counter}.-${propiedad}: ${Koder[propiedad]}`)
	counter++
	} */


// 1. name : jorge luis
// 2. lastName : Camarillo
// ...
// Ejercios
/**
 * Del siguiente objeto
 * 1. Contar el numero de empleados
 * 2. Suma total a pagar
 * -> Son 3 empleados y el total es 130000
 */

/*  let salarios = {
    'juan': 30000,
    'Albert': 50000,
    'jorge': 50000
}
let counter = 0, total = 0
for (const key in salarios) {
		counter++
		total += salarios[key] 
}

console.log(`son ${counter} Empleados y el total es de ${total}`) */
/**
 * Arrow function
 * Recibir un objeto
 * Devolver un array con todas las propiedadades que son un string
 * Entrada: objOnlyStrings
 * [modelo,marca,color, version, orige]
 */

 

/* let objOnlyStrings =  {
    modelo: 'jetta',
    marca: 'VW',
    color: 'rojo',
    year: 2020,
    tenencias: [2019, 2020, 2021],
    version: 'sport',
    origen: 'México'
}
const filterStringObject = (obj) =>{
	let result = []
	for(const key in obj) {
		if (typeof obj[key] === 'string') {
			result.push(key)
		}
	}
	return result
}

console.log(filterStringObject(objOnlyStrings))
// -> [modelo,marca,color, version, origen] */
// Array de objetos
let koders =  [
    {
        name: 'jorge luis',
        lastName: 'Camarillo',
        age: 30,
        generation: 6,
        modulos: ['js','node js', 'cloud'],
    },
    {
        name: 'Erik',
        lastName: 'Gutierrez',
        age: 20,
        generation: 15,
        modulos: ['js'],
    },
    {
        name: 'Sara',
        lastName: 'Reveles',
        age: 24,
        generation: 12,
        modulos: ['js'],
    }
]

/* koders.forEach((element, index, array) => {
    // console.log(element.lastName)
    // console.log(element.age)
    // console.log(element.generation)
    // console.log(element.modulos)
    console.log(`${element.name} ${element.lastName} tiene ${element.age} años`)  
}) */

/**
 * 1. Hacer una funcion que reciba un objeto de koders
 * 2. Obtener la suma de todas las edades
 * 3. Retornar el total
 * hint: .forEach() .reduce()
 */

/* PREVIO PASO A PASO
1.- Hacer una funcion que reciba un objeto de koders
2.- Declara una variable igual a 0
3.- utilizar un for each por cada elemento de los array
4.- identifica los datos que corresponden a 'age'
5.- Realizar la suma de cada 'age'
6.- retornar el total de la suma 
*/


const sumAge = (arr)=> arr.reduce((acc,val)=>acc + val.age,0)

console.log(sumAge(koders))
