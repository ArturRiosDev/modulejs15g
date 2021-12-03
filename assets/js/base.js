//['HOla','mUndo']

/* const capitalizeWithMap = (arr) => arr.map(val => `${val[0].toUpperCase() + val.slice(1).toLowerCase()}`)
let result = capitalizeWithMap(['HolA','mUndo'])
console.log(result) */

//['hola','mundo',0,5]

/* const filterStrings = (arr) =>arr.filter((val) =>typeof val === 'string')

console.log(filterStrings(['hola','mundo',0,5])) */

//arr.reduce()

let acumulador = 0 
let arr = [1,2,3]

/* arr.forEach(element => {
	acumulador = acumulador + element
}) */
let sum = arr.reduce((acc,cv,index,arr)=>{
		console.log(acc,cv)
		return acc + cv
}, 0)
console.log(sum)
