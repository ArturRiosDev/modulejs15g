// Tarea 1

/**
 * Ejercicio 1.
 * Dado el siguiente Array ['Hoteles', 'Ofertas', 'Viajes', 'Ayuda', 'Cancelaciones']
 * Formar el siguiente markup en el DOM
 * <ul class="menu__booking" data-menu="booking">
        <li class="menu__booking__item">Hoteles</li>
        <li class="menu__booking__item">Ofertas</li>
        <li class="menu__booking__item">Viajes</li>
        <li class="menu__booking__item">Ayuda</li>
        <li class="menu__booking__item">Cancelaciones</li>
    </ul>
 */
let array = ["Hoteles", "Ofertas", "Viajes", "Ayuda", "Cancelaciones"];
let principalUl = document.createElement("ul");
principalUl.setAttribute("class", "menu__booking");
principalUl.setAttribute("data-menu", "booking");
for (let i = 0; i < array.length; i++) {
  let li = document.createElement("li");
  li.setAttribute("class", "menu__booking");
  li.textContent = array[i];
  principalUl.appendChild(li);
}
let title =  document.createElement('h1')
title.textContent = 'DOM manipulation'
document.getElementsByTagName("body")[0].appendChild(principalUl);
document.getElementsByTagName("body")[0].appendChild(title);
/**
 * Ejercicio 2.
 * Dado el siguiente Array de objetos "objPromesas"
 * Crear una funcion para Formar el markup necesario para que se vea asi
 * https://ibb.co/hWSvpx5
 *
 * NOTA: recuerda agregas el CSS necesario para lograr este objetivo
 *
 */

let objPromesas = [
  {
    imagen:
      "https://imagenescityexpress.scdn6.secure.raxcdn.com/sites/default/files/2021-07/hotel1.png",
    titulo: "LA MAYOR COBERTURA",
  },
  {
    imagen:
      "https://imagenescityexpress.scdn6.secure.raxcdn.com/sites/default/files/2021-07/icono_desayuno_cortesia_2_0.png",
    titulo: "DESAYUNO EN CORTESÍA*",
  },
  {
    imagen:
      "https://imagenescityexpress.scdn6.secure.raxcdn.com/sites/default/files/2021-07/icono_cancelacion_flexible_0.png",
    titulo: "CANCELACIÓN SIN COSTO**",
  },
  {
    imagen:
      "https://imagenescityexpress.scdn6.secure.raxcdn.com/sites/default/files/2021-07/icono_wifi_cortesia_2_0.png",
    titulo: "WIFI EN CORTESÍA",
  },
];

const newObjectPromesas = (arr) =>{
    arr.map(val =>{
        console.log(Object.values(val))
        let card =  document.createElement('div'),  img = document.createElement('img'), par = document.createElement('p')
        card.setAttribute('class','card'),img.setAttribute('src',Object.values(val)[0]),par.textContent = Object.values(val)[1]   
        card.appendChild(img),card.appendChild(par) 
        let container = document.createElement('div')
        container.appendChild(card)
        document.getElementsByTagName('body')[0].appendChild(container)
    })
}

console.log(newObjectPromesas(objPromesas)) 

/**
 *  Tarea 2
 * Estudiar lo siguiente:
 * 1. innerHTML
 * 2. insertBefore()
 * 3. insertAfter()
 * 4. append()
 * 5. prepend()
 * 6. removeChild()
 * 7. DOM events
 *
 */
