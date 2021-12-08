//para el resto element.metodo
//Object.Keys()
// Object.keys(obj)
let salarios  = {
    'jorge':  3000,
    'juan':  3000,
    'Pedro':  3000
}
let empleados = []
for( item in salarios){
    empleados.push(item)
}
// funcion
// recibe un objeto
// retornar el total de los salarios

// hint : reduce
// hint : forEach
console.log( Object.keys(salarios) )
//Suma con .keys
const summarize = (arr) => arr.reduce((acc,key)=>acc += salarios[key],0)
console.log(summarize(Object.keys(salarios)))

//suma con .Values
const sumValues = (arr) => arr.reduce((acc,key)=>acc += key,0)
console.log(sumValues(Object.values(salarios)))


