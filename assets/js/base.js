// ejercicio
// Agregar a 5 koders mas
// pintarlos en el DOM
// 1. utilizar bootstrap
// 2. Que sea responsive
// 3. minimo 3 cards por row

let koders = [
    {
        name: 'Emilio',
        age: 30,
        city: 'Guadalajara',
        generacion: 6,
        typeKoder: 'javascript',
        gender: 'Masculino',
        avatar: 'https://picsum.photos/200/205'
    },
    {
        name: 'Juan',
        age: 30,
        city: 'Ciudad de méxico',
        generacion: 6,
        typeKoder: 'iOS',
        gender: 'Masculino',
        avatar: 'https://picsum.photos/200/208'
    },
    {
        name: 'Laura',
        age: 30,
        city: 'Ciudad de méxico',
        generacion: 10,
        typeKoder: 'Python',
        gender: 'Femenino',
        avatar: 'https://picsum.photos/200/209'
    },
    {
        name: 'Arturo',
        age: 25,
        city: 'Puerto Vallarta',
        generacion: 10,
        typeKoder: 'iOS',
        gender: 'Masculino',
        avatar: 'https://picsum.photos/200/210'
    },
    {
        name: 'Jose',
        age: 25,
        city: 'Puerto Vallarta',
        generacion: 10,
        typeKoder: 'Android',
        gender: 'Masculino',
        avatar: 'https://picsum.photos/200/211'
    },
    {
        name: 'juanita',
        age: 25,
        city: 'Puerto Vallarta',
        generacion: 8,
        typeKoder: 'iOS',
        gender: 'Femenino',
        avatar: 'https://picsum.photos/200/215'
    }

]

const prinKoders = () =>{
    console.log('corriendo')
    layoutkoders = ''
    koders.forEach((val)=>{
        layoutkoders+=`
        <div class='col-md-4 my-3'>
        <div class="card" style="width: 18rem;">
                    <img src="${val.avatar}" class="card-img-top p-4" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">Nombre : ${val.name}</h5>
                      <p class="card-text">Edad : ${val.age}</p>
                      <ul>
                      <li>Ciudad: ${val.city}</li>
                      <li>Generacion : ${val.generacion}</li>
                      <li>Bootcamp: ${val.typeKoder}</li>
                      </ul>
                    </div>
                  </div>
                  </div>         
        `
    })
    document.querySelector('#koders__list').innerHTML = layoutkoders
}

/* let buttonCreation = document.querySelector('#button__creator')
buttonCreation.addEventListener('click',()=>{
    prinKoders()
}) */

window.onload = prinKoders()

/**
 * Browser Object Model
 * Como JS se comunica con el navegador
 * 
 * window:
 * window.innerHeight
 * window.innerWidth
 * 
 * location
 * window.location.href
 * window.location.hostname
 * window.location.pathname
 * window.location.protocol
 * 
 * Navigator
 * window.navigator.appName
 * window.navigator.appCodeName
 * window.navigator.platform
 * 
 * History
 * window.history.back()
 * window.history.forward()
 * 
 * Alert
 * window.alert()
 */
let nextPAge = document.getElementById('next')
let prevPage = document.getElementById('prev')
const next = ()=>{
    window.history.forward()
}
nextPAge.addEventListener('click',next)


const prevp = ()=>{
    window.history.back()
}
prevPage.addEventListener('click',prevp)

