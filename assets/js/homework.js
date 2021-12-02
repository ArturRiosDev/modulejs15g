/* let arr = [2,'hola']
for ( i = 0;  i< arr.length; i++) {
  console.log(arr[i])
  
} */

/**
 * Escribir un arrow function que invierta una oracion
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
 * hint: https://www.w3schools.com/jsref/jsref_join.asp
 */
/*  const inverter = (a = ['esta','es','una','oracion']) => a.split('').reverse().join(' ')
 */

/**
 * Escribir un arrow function que compruebe
 * si una oración es un palindromo
 * hint: https://ricardometring.com/javascript-replace-special-characters
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
 */
/* const isPalindrome = (a = ('anita lava la tina')) => {
    a = a.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    let wordWithoutSpace = "";
    let wordReversed = "";
  if (a != "") {
    for (i = 0; i < a.length; i++) {
      if (a[i] !== " ") {
        wordWithoutSpace = wordWithoutSpace + a[i];
      }
    }
    for (j = wordWithoutSpace.length - 1; j >= 0; j--) {
      wordReversed = wordReversed + wordWithoutSpace[j];
    }
    wordWithoutSpace === wordReversed
      ? console.log(`La palabra "${wordWithoutSpace}" es un palindromo`)
      : console.log(`La palabra "${wordWithoutSpace}" No es un palindromo`);
  }
  } */

/**
 * Escribir un arrow function que tome como parametro 2 arrays,
 * y devuelva un numero con la suma total de esos 2 arrays.
 * arrayReduce( [1,2,3,4], [1,2])
 * -> 13
 *
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 *
 */
const arrayReduce = (a = [1, 2, 3, 4], b = [1, 2]) => {
  const newArray = a.concat(b);
  let total = 0
  newArray.forEach(function(arrnum) {
    total += arrnum
  })
  console.log(`Este es el total ${total}`)
}


/**
 * Escribir una función que tome como parametro 2 arrays, y devuelva un array
 * con los numeros repetidos en los 2 arrays
 * arrayReduce([1,2,3,4],[1,2,5]).
 * -> [1,2]
 */
/* const arrayReduce = (a = [1, 2, 3, 4], b = [1, 2, 5]) => {
  let newArray = a.concat(b);
  let duplicated = [];
  let tempArray = [...newArray].sort();
  for (let i = 0; i < tempArray.length; i++) {
    if (tempArray[i + 1] === tempArray[i]) {
      duplicated.push(tempArray[i]);
    }
  }
  return duplicated
};
 */
