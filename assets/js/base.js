// console.log(this)
// console.log(this.alert)

let koder = {
  name: "jorge",
  lastName: "Camarillo",
  age: 30,
  average: [10, 10, 10, 8, 9],
  getAverage: function () {
    return this.average.reduce((acc, val) => acc += val,0) / this.average.length
  }
}


// getFullName: function () {
//     console.log(this)
//     return `${ this.name } ${ this.lastName } ${this.age}`
// }

/* koder.getFullName = function () {
  console.log(this);
  return `${this.name} ${this.lastName} ${this.age}`;
}; */

/* console.log(koder.getFullName()); */
/* console.log(koder.getAverage()); */
console.log(koder.getAverage())
// -> 9.4
koder.setAverage = function() {
    this.total = this.getAverage()
}
// Agregar un metodo para calcular el IMC
koder.setGetIMC = function () {
   this.peso = 57 
   this.altura = 1.50
   this.IMC = this.peso/this.altura**2
}

// Agregar un metodo para Agregar un nuevo promedio
koder.setNewAve = function () {
    this.average.push(10)
}

// Agregar un metodo para agregar una nueva propiedad 
koder.addNewProperty = function (key,value) {
    this[key] = value
   
}
koder.setGetIMC()
koder.addNewProperty('nationality','Mexican')
koder.setNewAve()
koder.setAverage()
console.log(koder)