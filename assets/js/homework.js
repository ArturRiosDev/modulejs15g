//pedir al usuario una palabra (permitir espacios, mayusculas)
// Verificar que sea un palindromo
// mandar en consola el resultado
// -> La palabra "anita lava la tina" es un palindromo

/*
// For solution
let wordUser = prompt("Dame una palabra ").trim().toLowerCase();

let wordWithoutSpace = "";
let wordReversed = "";

if (wordUser != "") {
  // Remove White space
  for (i = 0; i < wordUser.length; i++) {
    if (wordUser[i] !== " ") {
      wordWithoutSpace = wordWithoutSpace + wordUser[i];
    }
  }
  console.log(wordWithoutSpace);

  // word reversed
  for (j = wordWithoutSpace.length - 1; j >= 0; j--) {
    wordReversed = wordReversed + wordWithoutSpace[j];
  }
  console.log(wordReversed);

  wordWithoutSpace === wordReversed
    ? console.log(`La palabra "${wordUser}" es un palindromo`)
    : console.log(`La palabra "${wordUser}" No es un palindromo`);
} else {
  console.log("Inserta una palabra valida");
}*/
// Homework
// 2. While solution
// 1. permitir acentos
//
/*
wordUser = prompt("Dame una palabra ").trim().toLowerCase();

wordWithoutSpace = "";
wordReversed = "";
i = 0;
if (wordUser != " ") {
  while (i <= wordUser.length - 1) {
    if (wordUser[i] != " ") {
      wordWithoutSpace += wordUser[i];
    }
    i++;
  }
  console.log(wordWithoutSpace);
  i = wordWithoutSpace.length - 1;
  while (i >= 0) {
    wordReversed += wordWithoutSpace[i];

    i--;
  }
  console.log(wordReversed);
  wordWithoutSpace === wordReversed
    ? console.log(`La palabra "${wordUser}" es un palindromo`)
    : console.log(`La palabra "${wordUser}" No es un palindromo`);
} else {
  console.log("Inserta una palabra valida");
}
*/
// Imprimir en consola la suma de los multiplos de 3 y 5 contenidos entre el 1 y 100
// -> 233168

let i = 1;
let result1 = 0;
//let result2 = 0;
//let total = 0;
while (i <= 100) {
 if (i % 3 == 0 || i % 5 == 0) {
     result1 += i
     console.log(`Este es el resultado ${result1}`)
   i++;
}
console.log(`Este es el total ${result1}`)
