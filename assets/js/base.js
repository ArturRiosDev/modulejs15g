//**
/* * Selecionar elementos
 *
 * 1. Selecionar por ID */

//  1. Selecionar por ID
document.getElementById("head__title");
document.getElementsByTagName("li");
document.getElementsByClassName("link__menu");

document.querySelector("#head__title");
document.querySelector("li");
document.querySelector(".link__menu");
document.querySelectorAll(".link__menu");
// document.querySelectorAll('')

/**
 * Obtener atributos
 * Setear atributos
 */

// get
/* let title = document.querySelector('#head__title').getAttribute('data-title')
let level = document.querySelector('#head__title').getAttribute('data-level')

// set
document.querySelector('#head__title').setAttribute('data-custom','random')
// reemplazando clases 
document.querySelector('#head__title').setAttribute('class','trees cuatro')

// Agregar clases
document.querySelector('#head__title').classList.add('clase3')
// remover clases
document.querySelector('#head__title').classList.remove('clase2')

// comprobar si existe un atributo
document.querySelector('#head__title').hasAttribute('class') */

// comprobar si el titulo tiene class
/**
 * Si si, comprobar
 * ---si tiene la clase "clase1 clase2"
 * ----- Agregar la "clase 3"
 * ---sino
 * ----- Agregar la clase "custom"
 */

//SOLUCION ORIGINAL
document.querySelector('#head__title').hasAttribute('class') === true ? 
  document.querySelector('#head__title').getAttribute('class') === 'clase1 clase2' ? document.querySelector('#head__title').classList.add('clase3'):      document.querySelector('#head__title').classList.add('custom') : ''

/* if (document.querySelector("#head__title").hasAttribute("class") === true) {
  if (
    document.querySelector("#head__title").getAttribute("class") ===
    "clase1 clase2"
  ) {
    document.querySelector("#head__title").classList.add("clase3");
  } else {
    document.querySelector("#head__title").classList.add("custom");
  }
} */

// data attributes
// propiedades personalizadas

//Crear elementos
/* createElement('tag')
textContent()
apendChild() */
let uElement = document.createElement('ul')
let liFirst = document.createElement('li')

liFirst.textContent = 'item 1'
uElement.appendChild(liFirst)

let liSecond = document.createElement('li')

liSecond.textContent = 'item 2'
uElement.appendChild(liSecond)

document.getElementsByTagName('body')[0].appendChild(uElement)

let uElementEx = document.createElement('ul')
let liHome = document.createElement('li')
let liProducts = document.createElement('li')
let liAboutUs = document.createElement('li')

uElementEx.setAttribute('id','menu')
uElementEx.setAttribute('class','menu')

liHome.textContent = 'Home'
liHome.setAttribute('class','menu')
liProducts.textContent = 'Products'
liProducts.setAttribute('class','menu')
liAboutUs.textContent = 'About Us'
liAboutUs.setAttribute('class','menu')



uElementEx.appendChild(liHome)
uElementEx.appendChild(liProducts)
uElementEx.appendChild(liAboutUs)



document.getElementsByTagName('body')[0].appendChild(uElementEx)
