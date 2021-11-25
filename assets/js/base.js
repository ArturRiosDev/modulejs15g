let degrees = parseInt(prompt('Favor de escribir los grados Celsius en los cuales esta actualmente'))

if (!isNaN(degrees)) {
    degrees = (degrees * 9/5) + 32
    alert(`Estos son ${degrees} grados Farenheit`)
    
}else{
    console.warn('Es necesario el capturar un numero')
}


let a = parseInt(prompt("Favor de capturar el primer numero", 4));
let b = parseInt(prompt("Favor de capturar el segundo numero", 4));
let c = parseInt(prompt("Favor de capturar el tercer numero", 4));

if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
    if (a > b && a > c) {
        alert(`${a} Es el mayor`)
    }else if(b > a && b > c){
        alert(`${b} Es el mayor`)
    }else if(c > b && c > a){
        alert(`${c} Es el mayor`)
    }else{
        alert('todos son iguales')
    }
  } else {
  console.warn("Es necesario que todos sean numeros");
}


let degrees = parseInt(
  prompt("Favor de escribir los grados Celsius en los cuales esta actualmente")
);

if (!isNaN(degrees)) {
  degrees = (degrees * 9) / 5 + 32;
  let weather = prompt(
    `escriba alguna de las siguientes opciones para describir el clima en su ciudad: \n soleado \nLluvioso \nNevando \nNublado`
  );
    weather.toLowerCase()
  switch (weather) {
    case 'soleado':
      console.log(
        `En tu ciudad, el dia esta soleado con una temperatura de ${degrees} F`
      );
      break;
    case 'lluvioso':
      console.log(
        `En tu ciudad, el dia esta Lluvioso con una temperatura de ${degrees} F`
      );
      break;
    case 'nevando':
      console.log(
        `En tu ciudad, el dia esta Nevando con una temperatura de ${degrees} F`
      );
      break;
    case 'nublado':
      console.log(
        `En tu ciudad, el dia esta Nublado con una temperatura de ${degrees} F`
      );
      break;

    default:
        console.log('Es necesario capturar el clima')
      break;
  }
} else {
  console.warn("Es necesario el capturar un numero");
}
