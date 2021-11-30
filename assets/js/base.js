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

printWord()
*/

function printWordReversed() {
  let sentence = prompt("poner una palabra");
  let newSentence = "";
  for (i = 0; i <= sentence.length - 1; i++) {
    if ((sentence[i] == sentence[0] && i == 0) || sentence[i - 1] == " ") {
      newSentence += sentence[i].toUpperCase();
    } else {
      newSentence += sentence[i];
    }
  }
  return console.log(newSentence);
}
console.log(printWordReversed());
