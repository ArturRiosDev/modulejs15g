/**
 * arr.forEach()
 * Dado el siguiente array
 * ['string','value','min','asdfghjk']
 * Hacer una funcion que devuelva el string con mas caracteres
 *
 */
//solucion del profe
/**
 * arr.forEach()
 * Dado el siguiente array 
 * ['string','value','min','asdfghjk']
 * Hacer una funcion que devuelva el string con mas caracteres
 * 
 */

 /* const mostLarge  = (arr) => {
  let strLarge =  arr[0]
  arr.forEach( item => {
      if(strLarge.length <= item.length ){
          strLarge = item
      }
  })
  return strLarge
}

let mostLargeStr = mostLarge( ['st','val','min','as'] ) */
// console.log(mostLargeStr)

/* const mostLarge = (arr) => {
  let i = 0;
  let largest = arr[i];
  arr.forEach((element) => {
      element.length > largest.length ? largest = element : ''
      i++
  });
  return largest
};
let result = mostLarge(['string','value','min','asdfghjk'])
console.log(result);
 */

/**
 * arr.map()
 * Dado un array
 * Hacer una funcion que devuelva el mismo array
 * Pero con los items al reves
 * P.ej. reverseStringArr( ['string','value','min'] )
 * Salida: ['gnirts','eulav','nim']
 *
 */

/* const reverseStringArr = (arr) => {
  let i = 1;
  let newArray = [];
  let newString = "";
  arr.map((val) => {
    for (j = val.length - 1; j >= 0; j--) {
      newString += val[j];
    }
    newArray.push(newString);
    newString = "";
    i++;
  });
  return newArray;
}; */
// solucion del profe
/* const reverseStringArr  = (arr) => {
  let reverseString = []
  reverseString = arr.map( (item) => {
      console.log(item.split('').reverse().join(''))
      return item.split('').reverse().join('')
  })
  return reverseString
}

let result = reverseStringArr(["gnirts", "eulav", "nim"])
console.log(result); */
/**
 * arr.filter(), .map()
 * Funcion que reciba un array de strings y numeros
 * Filtre solo los strings
 * luego, Capitalice cada string
 * luego, filtre solo los que tengan mas de 5 caracteres
 * y al final, los que tengan al menos 2 letras "a"
 *
 * p.ej.  filterStrings( ['guadalajara', 3, 'caracas', 'Oslo', 'brasil', 0] )
 * Salida -> ['Guadalajara', 'Caracas']
 */

//Solucion del profe

/* const filterStrings = (arr) => {
    return arr
      .filter((str) => (typeof str === "string" ? str : ""))
      .map((cap) => (cap = `${cap[0].toUpperCase()}${cap.slice(1, cap.length)}`))
      .filter((characters) => {
        return characters.length > 5 ? characters : "";
      }).filter(final => final.slice(final.indexOf('a')+1).includes('a') )
  } */
  const filterStringsLarge  = (arr) => {
    let onlyStrings = []
    onlyStrings = arr.filter((item) => {
        if(typeof item === 'string' ) {
            return item
        }
    })

    let capStrings = []
    capStrings = onlyStrings.map((item) => {
        let capWord = ''
        capWord = item.slice(0,1).toUpperCase() + item.slice(1).toLowerCase()
        return capWord
    })
    
    let largestStr = []
    largestStr = capStrings.filter((item) => {
        if(item.length > 5){
            return item
        }
    })
    let onlyAA = []

    onlyAA = largestStr.filter( item => {
              if(item.split('a').length >= 3){
            return item
        }
    })

    return onlyAA

}

/* const filterStrings  = (arr) => {
    return arr.filter( item => typeof item === 'string')
    .map( item => item.slice(0,1).toUpperCase() + item.slice(1).toLowerCase())
    .filter( item => item.length > 5)
    .filter( item => item.split('a').length >= 3)
} */
console.log(filterStringsLarge(["guadalajara", 3, "caracas", "oslo", "brasil", 0, 'Aguila']))

