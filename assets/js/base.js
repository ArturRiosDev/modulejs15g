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

// elemento.metodo(parametros)
// Object.keys(obj)
let salarios  = {
    'jorge':  3000,
    'juan':  7000,
    'Pedro':  8000
}





let empleados = []
// for( item in salarios){
//     empleados.push(item)
// }

// console.log( Object.keys(salarios) )

// funcion
// recibe un objeto
// retornar el total de los salarios

// hint : reduce
// hint : forEach

const sumarSalarios = (obj) => {
    let suma = 0
    Object.keys(obj).forEach( (empleado, index, arr) => {

        let salario = obj[empleado]
        suma = suma + salario
        // suma += salario
    })
    return suma
}


// console.log(sumarSalarios(salarios))


const sumarSalariosRed = (obj) => {
    let suma = 0
    suma = Object.keys(obj).reduce( (acc, key) => {
        return acc + obj[key]
    }, 0)
    return suma
}

// console.log(sumarSalariosRed(salarios))
// let salarios  = {
//     'jorge':  3000,
//     'juan':  7000,
//     'Pedro':  3000
// }

/*
{
    llave: valor,
    llave: valor,
    llave: valor,
}
*/
// .reduce()

const addArr = (obj) => {

    let suma = 0

    suma = Object.values(obj).reduce((previousValue, currentValue) => {
        return previousValue += currentValue
    }, 0)

    return suma
}

// console.log(addArr(salarios))

const addArrOneLine = (obj) => Object.values(obj).reduce((acc, cv) => acc += cv, 0)
// console.log(addArrOneLine(salarios))

// Object.assign() -> concat

let obj1 = {
    'nombre': 'jorge luis',
    'isMentor': true,
    'age': 19
}
// console.log(obj1)
let obj2 = {
    apellido: 'Camarillo'
}

// Object.assign(target, ...sources)
Object.assign(obj1,obj2)
// console.log(obj1)


// let obj1 = {
//     nombre: 'jorge luis',
//     'isMentor': true,
//     apellido: 'Camarillo'
// }


console.log( Object.entries(obj1) )
// console.log(obj1)
// [
//     ['key', 'value'],
//     ['key','value' ]
// ]

// [
//     ['nombre', 'jorge luis'],
//     ['apellido','Camarillo']
// ]

obj1.generation = 6
// Object.freeze(obj1)
obj1.generation = 7
// console.log(obj1)
delete obj1.generation
// console.log(obj1)




// destructuracion de arrays
let newArr = [10, 20, 30, 40, 50]
// let a = newArr[0]
// let b = newArr[1]
// let c = newArr[2]
// let d = newArr[3]
// let [a, b, c, d, e] = newArr
// console.log(a, b, c, d, e)
// console.log(newArr)


// let [a, b] = [10, 20, 30, 40, 50]
// console.log(a)
// console.log(b)

let [a, b, ...rest] = [10, 20, 30, 40, 50]
// console.log(a)
// console.log(b)
// console.log(...rest)

let [firstName, lastName, age] = ['Jorge', 'camarillo', 30]
// console.log(firstName)
// console.log(lastName)
// console.log(age)

let destrucArr = [
    ['Bradley', 'Bouley'],
    ['Chloe', 'Alnaji'],
    ['Jonathan', 'Baughn'],
    ['Michael', 'Herman'],
    ['Robert', 'Hajek'],
    ['Wes', 'Reid'],
    ['Zach', 'Klabunde']
]

destrucArr.forEach((value, index, array) => {
    let [ nombre, apellido ] = value
    console.log(`${nombre} ${apellido}`)
})


// destructuracion de objetos
const hero = {
    name: 'Batman',
    realName: 'Bruce Wayne',
    otherProp: {
        prop: 'value',
    }
}
const { name, realName } = hero
const { name: firstNameObj, realName: legalName, otherProp } = hero

console.log(name, realName)
console.log(firstNameObj, legalName, otherProp)


let users = [
    { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
]

users.forEach((value, index, array) => {

    let {
        firstName, 
        lastName, 
        role
    } = value

    console.log(firstName, lastName, role)
    // console.log(value.firstName, value.lastName, value.role)
})





// const { nameHero,  realName: secretName } = hero
// console.log(secretName)

// spread operator

const arr1 = ['one', 'two']
const arr2 = [...arr1, 'three','four', 'five']
console.log(arr2)


let objspread1 = {
    propiedad: 'valor',
    age: 23
}
let objspread2 = {
    propiedad2: 'valor2',
    ...objspread1
}

console.log(objspread2)




// 2 ejercicios
// rest operator

