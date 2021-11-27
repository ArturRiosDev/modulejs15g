//Ejercicio 1
/*
let word = prompt('Favor de poner la palabra a transformar').toLowerCase()
alert(word[0].toUpperCase() + word.slice(1,word.length))
*/
//ejercicio 2
let sentence = prompt("Por favor poner una palabra con espacios").trim().toLowerCase();

let newSentence = " ";
for (i = 0; i <= sentence.length - 1; i++) {
  if (sentence[i] == sentence[0] && i == 0 || sentence[i - 1] == " ") {
    newSentence += sentence[i].toUpperCase();
  } else {
    newSentence += sentence[i];
  }
}
console.log(newSentence);

//ejercicio 3
/*
let subjects = parseInt(prompt("Favor de indicar cuantas materias tiene"));
let totalFinal = 0,cal = 0;
for (i = 1; i <= subjects; i++) {
  cal = parseInt(prompt(`cuales es la calificaciones de la materia ${i}?`));
  totalFinal += cal;
}
console.log(`La calificacion final es de ${totalFinal / subjects}`);

*/