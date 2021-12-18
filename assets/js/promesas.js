let koders = [
    {
        name: 'Emilio',
        age: 30,
        city: 'Guadalajara',
        generacion: 6,
        typeKoder: 'js',
        gender: 'M',
        avatar: 'https://i.pravatar.cc/150?img=68'
    },
    {
        name: 'Juan',
        age: 30,
        city: 'Ciudad de méxico',
        generacion: 6,
        typeKoder: 'iOS',
        gender: 'M',
        avatar: 'https://i.pravatar.cc/150?img=67'
    },
]

// const getKoderSet =  () => {
//     setTimeout( ()=> {
//         return koders
//     }, 4000 )

// }

// console.log(getKoderSet())

const getKoders = () => {
    return new Promise( (resolve, reject) => {
        let edad = 17
        if(edad >= 18){
            setTimeout( () => {
                resolve('promesa exitosa')
            }, 2000)
        } else {
            setTimeout( () => {
                // reject( new Error('No tienes la edad suficiente'))
                reject( 'No tienes la edad suficiente')
            }, 2000)
        }
    })
}

getKoders()
.then( (response) => {
    console.log('Ejecutar el paso 1')
    return response
})
.then( (response2) => {
    console.log('Ejecutar el paso 2')
    return response2
})
.then( (response3) => {
    console.log('Ejecutar el paso 3')
    console.log(response3)
})
.catch( (err) => {
    console.log('Promesa rechazada')
    console.log(err)
})




// const promesa = new Promise( (resolve, reject) => {

// })

// const fetchData = async() => {
//     try {
//         const kodersFetched = await getKoders()
//         console.log(kodersFetched)
//     } catch (error) {
//         console.log(error.message)
//     }
    
// }

// fetchData()