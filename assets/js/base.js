/*let saludo = "hola";

for (i = 0; i < saludo.length; i++) {
  console.log(saludo[i]);
}*/
/*
let word = prompt("Capturar una palabra");
let consonante = "";
let vocal = "";
word = word.toLowerCase();
for (i = 0; i < word.length; i++) {
  switch (word[i]) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      vocal++;
      break;
    case " ":
      break;

    default:
      consonante++;
      break;
  }
}
console.log(`tienes ${vocal} vocales & ${consonante} consonantes`);
*/
/*
let word = prompt("Favor de poner una palabra con un espacio al inicio y al final").trim().toLowerCase()
let letterE, letterA, spaces = 0;

for (let i = 0; i < word.length; i++) {
  switch (word[i]) {
    case "a":
    case "á":
      letterA++;
      break;
    case "e":
    case "é":
      letterE++;
      break;
    case " ":
      spaces++;
      break;

    default:
      break;
  }
}

console.log(
  `tienes ${letterA} letras a & ${letterE} letras e & ${spaces} espacio en medio de las palabras`
);*/
/*
let number = parseInt(prompt("Favor de poner un numero de entre el 1 al 100"));
let result = 0;
if (!isNaN(number) && number >= 1 && number <= 100) {
  for (i = 1; i <= number; i++) {
    result += i;
  }
} else {
  console.warn(`Dame un numero mayor a 1 y menor o igual a 100`);
}
alert(`${number} \n el total es ${result}`);
*/

let word = prompt('Capturar la palabra a verficar').trim().replace(/ /gi,'')
let i, result = 0
  while (i<=word.length) {
    console.log(word[i],word[word.length -i])
    if (word[i] == word[word.length - i]) {
      console.log(word[i],word[word.length -i])
      result++
    }
    i++
  }
  if(result == word.length){
    console.log(`la palabra ${word} es un palindromo`)
  }else{
    console.log(`la palabra ${word} no es un palindromo`)
  }
