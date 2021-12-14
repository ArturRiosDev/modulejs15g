// .addEventListener('type', listener, options)
// callback JS

const saludo = () => {
    console.log('saludo event listener')
} 

let buttonEvent = document.getElementById('button__eventListener')

// add event
buttonEvent.addEventListener('click', saludo)

// buttonEvent.addEventListener('click', () => {
//     console.log('saludo event listener')
// })

// other event
/* document.getElementById('button__eventListener').addEventListener('focus', () => {
    console.log('saludo event listener focus')
})

// remove event
buttonEvent.removeEventListener('click',saludo) */




let koders = [
    {
        name: 'Emilio',
        age: 30,
        city: 'Guadalajara'
    },
    {
        name: 'Pedro',
        age: 30,
        city: 'Leon'
    },
    {
        name: 'Brisset',
        age: 37,
        city: 'Lima'
    },
    {
        name: 'alex',
        age: 37,
        city: 'Lima'
    },
    {
        name: 'Brisset',
        age: 37,
        city: 'Lima'
    }
]


const orderArray = (arr) => {
    let copyArray = [...arr]
    let order = document.querySelector('#orderFilter').value
    let KoderTerm = document.querySelector('#filterby').value
    if(KoderTerm !== 'age'){
        if(order == 'asc') {
            copyArray.sort(function (firstEl, secondEl) {
                let a = firstEl[KoderTerm].toUpperCase(),
                b = secondEl[KoderTerm].toUpperCase();
                //return a == b ? 0 : a > b ? 1 : -1
                if(a > b) {
                    return 1
                } 
                if (a < b) {
                    return -1
                }
                if(a == b){
                    return 0
                }
            })
        } else {
            console.log(KoderTerm)
            copyArray.sort(function (firstEl, secondEl) {
                let a = firstEl[KoderTerm].toUpperCase(),
                b = secondEl[KoderTerm].toUpperCase();
                // return b == a ? 0 : b > a ? 1 : -1;
                if(b > a) {
                    return 1
                } 
                if (b < a) {
                    return -1
                }
                if(b == a){
                    return 0
                }
            })
        }
    } else {
        if(order == 'asc'){
            copyArray.sort( function ( a, b ) { 
                return a[KoderTerm] - b[KoderTerm]
            }) 
        } else {
            copyArray.sort( function ( a, b ) {
                console.log(a,b) 
                return b[KoderTerm] - a[KoderTerm]
            })
        }
    }

    return copyArray
    
}

// FUncion => tarea especifica
const filterKoders = () => {
    // filtrar ciudades
    let KoderSearch = document.querySelector('#name__koder').value.toLowerCase()
    let KoderTerm = document.querySelector('#filterby').value.toLowerCase()

    let kodersFiltered = koders.filter( (koder) => {        
        let koderTerm = typeof koder[KoderTerm] !== 'number' ? koder[KoderTerm].toLowerCase() : koder[KoderTerm]

        if(KoderTerm === 'age') {
            if((koderTerm).toString().includes(KoderSearch) === true){
                return koder
            }
        } else  {
            if(koderTerm.includes(KoderSearch) === true){
                return koder
            }
        }
    })

    // console.log(kodersFiltered)
    console.log('koders filtrados')
    console.log(kodersFiltered)

    let kodersFilteredOrdered = orderArray(kodersFiltered)
    console.log('koders filtrados y ordenados')
    console.log(kodersFilteredOrdered)

    // creo el layout con las ciudades filtradas
    let lista = ''
    kodersFilteredOrdered.forEach( (koder) => {
        lista += `
            <li>
                <strong>${koder.name}</strong>
                <span>${koder.age} años</span>
                <span>${koder.city}</span>
            </li>
        `
    })

    // agrego el layout
    document.querySelector('#listKoders').innerHTML = lista
}


const orderFilter = () => {
    filterKoders()
}

const filterKoder = () => {
    filterKoders()
}

const changeFilter = () => {
    filterKoders()
}

let ascDesc = document.getElementById('orderFilter')
let changeOfFilter = document.getElementById('filterby')
let filterOfKoder = document.getElementById('name__koder')

ascDesc.addEventListener('change',filterKoders)
changeOfFilter.addEventListener('change',changeFilter)
filterOfKoder.addEventListener('keyup',filterKoder)