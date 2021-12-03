/**
 * arr.forEach()
 * Dado el siguiente array
 * ['string','value','min','asdfghjk']
 * Hacer una funcion que devuelva el string con mas caracteres
 *
 */

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
};

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

/* const filterStrings = (arr) => {
  return arr
    .filter((str) => (typeof str === "string" ? str : ""))
    .map((cap) => (cap = `${cap[0].toUpperCase()}${cap.slice(1, cap.length)}`))
    .filter((characters) => {
      return characters.length > 5 ? characters : "";
    }).filter(final => final.includes('a') && final.slice(3).includes('a'))
}
 */
const filterStrings = (arr) => {
    return arr
      .filter((str) => (typeof str === "string" ? str : ""))
      .map((cap) => (cap = `${cap[0].toUpperCase()}${cap.slice(1, cap.length)}`))
      .filter((characters) => {
        return characters.length > 5 ? characters : "";
      }).filter(final => final.slice(final.indexOf('a') + 1).includes('a') ? final : '')
  }
console.log(filterStrings(["guadalajara", 3, "caracas", "oslo", "brasil", 0, 'campana']))

