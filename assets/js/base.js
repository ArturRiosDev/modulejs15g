//funcion sin parametros
/*
function suma(){
  console.log(2 + 2)
}

// funcion con parametros
function suma(a,b){
  console.log(a + b)
}
*/

/*
function printWord() {
  let user = prompt('Favor de poner su nombre de usuario')
  console.log(user)
}


function printWordReversed(a) {
  let i = a.length - 1
  let newWord = " "
  while (i >= 0) {
    if (a != " ") {
      newWord += a[i]
    }
    i--
  }
  return newWord
}
let result = printWordReversed('arturo')
console.log(result)
*/

//ejercicio 1

function multipleTable() {
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      console.log(`El resultado de ${i} * ${j} es = ${i * j}`);
    }
  }
}
//ejercicio 2
/*
 function sum (num){
       let result = 0
       for(let i = 1; i <= num; i++){
           result += i
       }
       return result
   }
   let number = parseInt(prompt('Dame un number del 1 al 100'))
   if (!isNaN(number) && number > 0 && number < 101) {
       console.log(`El resultado de la suma de 1 a ${number} es igual a ${sum(number)}`)
   } else {
       console.error('Debes introducir un valor numerico entre 1 y 100')
   }
*/

//Ejercicio 3
function palindrome(aString) {
  let wordWithoutSpace = "";
  let wordReversed = "";
  if (aString != "") {
    for (i = 0; i < aString.length; i++) {
      if (aString[i] !== " ") {
        wordWithoutSpace = wordWithoutSpace + aString[i];
      }
    }
    for (j = wordWithoutSpace.length - 1; j >= 0; j--) {
      wordReversed = wordReversed + wordWithoutSpace[j];
    }
    wordWithoutSpace === wordReversed
      ? console.log(`La palabra "${wordWithoutSpace}" es un palindromo`)
      : console.log(`La palabra "${wordWithoutSpace}" No es un palindromo`);
  }
}

//ejercicio 4
function sumTotalOfNumbers() {
  let wordtonumber = prompt("Favor de poner un numero");
  let total = 0;
  for (let i = 0; i <= wordtonumber.length - 1; i++) {
    total += parseInt(wordtonumber[i]);
  }
  console.log(total);
}

//5
/*
function sumMultiples () {
       let result = 0
       for (let i=1; i<101;i++){
           i % 3 == 0 ? result += i :
               i % 5 == 0 ? result += i : null
       }
       return result
   }
   console.log (`La suma de los multiplos de 3 y 5 entre 1 y 100 es ${sumMultiples()}`)