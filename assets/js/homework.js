//Ejercicio 1
/*
for (i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(`El ${i}, si es un numero par`);
  } else {
    console.log(`El numero ${i}, no es un numero par`)
  }
}
*/

//Ejercicio 2
/*
let word = prompt("favor de poner una palabra").trim();
let i = word.length - 1 
let newWord = " "
while (i >= 0) {
  if (word != " ") {
    newWord += word[i]
  }
  i--
}
console.log(`Esta es la palabra al reves es ${newWord}`)
*/

//Ejercicio 3
/*
let word = prompt('Favor de poner una oracion').trim()
let newWord = ''
for ( i = 0;  i< word.length; i++) {
    if (word != ' ') {
        newWord += word[i].replace(' ', '-')
    }else{
        console.log('Favor de poner una oracion')
    }   
}
console.log(newWord)
*/

//Ejercicio 4
let mail = prompt('Favor de escribir su correo')
let newMail = ''
let i = 0
if (isNaN(mail) == true && mail.includes('@')) {
    newMail = mail.slice(mail.indexOf('@'),mail.length)
    console.log('******' + newMail)
}else{
    console.log(`Favor de poner un correo con '@' `)
}



