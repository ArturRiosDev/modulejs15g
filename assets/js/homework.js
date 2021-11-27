//For solution
// const wordUser = prompt('Dame una palabra ').trim().toLowerCase()

// let wordWithoutSpace = ''
// let wordReversed = ''

// if(wordUser != ''){
//     for(i = 0; i < wordUser.length; i++){
//         if(wordUser[i] !== ' '){
//             wordWithoutSpace = wordWithoutSpace +  wordUser[i]
//         }
//     }

//     for(j = wordWithoutSpace.length - 1; j >= 0 ; j--){
//         wordReversed = wordReversed + wordWithoutSpace[j]
//     } 

//     wordWithoutSpace === wordReversed ?
//         console.log(`La palabra "${wordUser}" es un palindromo`)
//     :
//         console.log(`La palabra "${wordUser}" No es un palindromo`)

// } else {
//     console.log('Inserta una palabra valida')
// }
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

  