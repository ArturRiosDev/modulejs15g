let koder = {
    name:"jorge",
    lastName:"Camarillo",
    average: [10, 10, 10, 8, 9],
    age: 30,

    getAge: function () {
        return this.age
    },

    get ageKoder() {
        return this.age
    },

    set ageKoder(age) {
        this.age = age
    },

    get fullName() {
        return `${ this.name } ${ this.lastName }`
    },

    set fullName(objFullName) {
        this.name = objFullName[0]
        this.lastName = objFullName[1]
    },
    setGetIMC: function(){
        this.peso = 57 
        this.altura = 1.50
        return this.IMC = this.peso/this.altura**2
    },
    addNewProperty: function(key,value){
        this[key] = value
    },

//homework
    get averageKoder(){
        return this.average
    },
    set averageKoder(score){
        this.average = score
    },
    get imcKoder(){
        return this.setGetIMC()
    },
    set imcKoder(peso){
        return this.IMC = peso/this.altura**2
    },
    get scoreKoder(){
        return this.average
    },
    set scoreKoder(newAverage){
        return this.average = newAverage
    },

    set newPropertyKoder(property){
        return this.newProperty = property
    },

        
}

// Metodos
console.log( koder.getAge() )
console.log( koder.setGetIMC() )
console.log( koder.addNewProperty('nationality','Mexican') )

// getters
console.log('Edad inicial: ', koder.ageKoder)
console.log('Nombre completo: ', koder.fullName)

// setters
koder.ageKoder = 47
koder.fullName = ['jorge luis', 'camarillo']

//1.- average
console.log(koder.averageKoder )
console.log(koder.averageKoder = [12,20,34])
//2.-IMC
console.log(koder.imcKoder)
console.log(koder.imcKoder = 55)
//3.- SCORE
console.log(koder.scoreKoder)
console.log(koder.scoreKoder = [2,3,4,5])
//4.- newProperty
console.log(koder.newPropertyKoder)
console.log(koder.newPropertyKoder = 'Australian')

console.log(koder)
// getter y setter de 
/**
 * 
 * 1. getter average
 * 2. getter, setter IMC 
 * 3. setter Score
 * 4. setter newProperty
 * 
 * 
 */


/**
 * Estudiar DOM 
 * CSS y HTML
 */