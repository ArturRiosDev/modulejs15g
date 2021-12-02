// 1. Generar una function
// que reciba un array como parametro
// y devuelva solo los items que son pares
// p.ej. onlyEvenValues( [1, 2, 3, 4] )
// -> [2, 4]
// Aplicar el metodo .forEach()
// hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

const onlyEvenValues = arrNumbers => {
    let newArray = []
    arrNumbers.forEach(element => {
        if (element % 2 === 0) {
           newArray.push(element) 
        }
    });
    return newArray
}

console.log(onlyEvenValues([1,2,3,4]))


// 2. function que reciba como parametro una array de strings
// y devuelva la primer y ultima letra del string
// de cada uno de los items del array
// -> firstAndLast (['hola', 'mundo'] )
// -> ['ha', 'mo']
// .forEach() o .map()

const firstAndLast = (arrStrings) => {
  let newArray = [];
  arrStrings.map((element) => {
    let i = element.length - 1 
    newArray.push(element.slice(0, 1).concat(element[i]));
  });
  return newArray;
};
console.log(firstAndLast(["hola", "mundo"]));

/**
 * 3. Funcion que reciba un array de numeros
 * y devuelva el promedio
 * -> getAverage( [10, 8, 9, 7] )
 * -> 8.5
 */

const getAverage = (arr) => {
    let sum =0, total = 0, totalNumbers = 0
    arr.forEach(element => {
        sum += element
        totalNumbers += 1
    });
    total = (sum / totalNumbers)
    return total
};
console.log(getAverage([10, 8, 9, 7]))

//  4. funcion
// dado un array de años, filtre los elementos
// y devuelva un array con los años que son bisiesto
// convertLeapYear( [1990, 2000, 2001, 2020] )
// -> [2000,2020]
// .forEach()
// hint: https://docs.microsoft.com/es-es/office/troubleshoot/excel/determine-a-leap-year

const convertLeapYear = (arr) => {
  let years = [];
  arr.forEach((element) => {
    if (element % 4 === 0 && element % 100 === 0 && element % 400 === 0) {
      years.push(element);
    } else if (element % 4 === 0 && element % 100 != 0) {
      years.push(element);
    }
  });
  return years;
};

console.log(convertLeapYear([1990, 2000, 2001, 2020]));
