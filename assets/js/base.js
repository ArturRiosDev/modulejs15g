/**
 * Dado un array
 * ['colima', 'colombia','Estado de mexico']
 * 
 * EScuchar el evento keyup en un input
 * Filtrar del array las coincidencias
 * Pintar las coincidencias en una lista
 * 
 */
 const reverseUser = () =>  {
  let username = document.querySelector('#username').value
  let reversedUserName = username.split('').reverse().join('')
  document.querySelector('#usernamereversed').value = reversedUserName
}

const focusInInput = () => {
  console.log('Focusin event input')
}
const focusOutInput = () => {
  console.log('Focusout event input')
}

 let cities = ['colima', 'colombia','Estado de mexico']

 const filterCity = () => {
     // filtrar ciudades
     let citySearch = document.querySelector('#name__city').value
     let citiesFiltered = cities.filter( (city) => {
         if(city.includes(citySearch) === true){
             return city
         }
     })
 
     // creo el layout con las ciudades filtradas
     let lista = ''
     citiesFiltered.forEach( (value) => {
         lista += `<li>${value}</li>`
     })
 
     // agrego el layout
     document.querySelector('#listCity').innerHTML = lista
 }


 
 
 let koders = [
     {
         name: 'emilio',
         age: 30,
         city: 'Guadalajara'
     },
     {
         name: 'Brisset',
         age: 30,
         city: 'Lima'
     },
     {
      name: 'Erik',
      age: 30,
      city: 'Mexico'
  }
 ]
 
 
const filterKoder = () =>{
  let koderSearch = document.querySelector('#name__koder').value
  koderSearch = koderSearch.toLowerCase()
  let kodersFiltered = koders.filter((koder) =>{
    if (koder.name.toLowerCase().includes(koderSearch)) {
      return koder
    }
  })

  let list = ''
  kodersFiltered.forEach(val=>{
    list +=`<li>${val.name}</li>
            <li>${val.age}</li>
            <li>${val.city}</li>`
  })
  document.querySelector('#listKoders').innerHTML = list


}
