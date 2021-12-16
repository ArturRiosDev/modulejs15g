//PROMESAS
// const myPromise = new Promise();
/* const myPromise = new Promise((resolve, reject) => {  
    // condition
    let condition = true  
    if(condition == true) {    
        resolve('Promise is resolved successfully.') 
    } else {    
        reject('Promise is rejected') 
    }

})

myPromise.then((response)=> {
    console.log(typeof response)
    console.log(response)
}) */


/**
 * AJAX
 * Asynchronous JavaScript And XML
 * Metodología
 * 
 * xmlhttprequest
 * .fetch()
 * 
 * https://www.javascript-coder.com/tutorials/images/ajax-block-diagram1.jpg
 * https://jsonplaceholder.typicode.com/posts
 * 
 */

// cliente
// armar el request
// enviar la peticion http
// verbos http
// POST, GET, PUT, PATCH, DELETE
// 
// server
// status code
// entender la peticion
// armar la respuesta
// enviar la respuesta

// XMLHttpRequest()
/**
 * Declarar un objeto XMLHttpRequest
 * Abrir la conexion (empezar a creat el request)
 * Escuchar cuando el response este listo
 * Enviar la peticion
 * 
 */

//  Declarar un objeto XMLHttpRequest
/* const xhttp = new XMLHttpRequest()
// Abrir la conexion (empezar a creat el request)
// xhttp.open(metodo, url)
xhttp.open( "GET" , "https://jsonplaceholder.typicode.com/posts", true)

// Escuchar cuando el response este listo
xhttp.onload = function(data) {

    if(data.target.status === 200){
        let objResp = JSON.parse(data.target.response)
        console.log(objResp)
        // imprimir en DOM
        let templateUser = ''
        objResp.forEach( (post) => {

            templateUser += `
            <div class="col-12 col-md-4 mb-4">
                <div class="card bg-light" >
                    <div class="card-body">
                        <h5 class="card-title">${post.title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${post.id}</h6>
                        <p class="card-text">${post.body}</p>
                    </div>
                </div>
            </div>
            `
        })
        document.querySelector('.grid__posts').innerHTML = templateUser
    }
    
} */

// Enviar la peticion
/* xhttp.send()

console.log('espera terminada') */

/**
 * 
 * 
 * 
 */

// objeto a texto JSON.stringify(obj)
// texto a objeto JSON.parse(text)

// APi fetch

// fetch()


// https://jsonplaceholder.typicode.com/posts/1 {}  
// https://jsonplaceholder.typicode.com/posts/1/comments [{},{}]

// Peticiones multiples
// https://jsonplaceholder.typicode.com/posts/1 {}  
// https://jsonplaceholder.typicode.com/posts/1/comments [{},{}]

const getData = (url, callback) => {
    const xhttp = new XMLHttpRequest()
    xhttp.open( "GET" , url, true)

    xhttp.onload = function(data) {
        if(data.target.status === 200) {
            let objResp = JSON.parse(data.target.response)
            // callback
            callback(objResp)

        }
    }

    xhttp.send()
}

const printCardPost = (post) => {
    console.log(post)
    let templatePost = `
    <div class="col-12 col-md-12 text-center">
        <div class="card bg-light" >
            <div class="card-body text-left">
                <h5 class="card-title">${post.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${post.id}</h6>
                <p class="card-text">${post.body}</p>
                <h2>Comments</h2>
                <div class="ctn__comments">
                    <ul class="list-group list-group-flush list__comments">
                    </ul>
                </div>
            </div>
        </div>
    </div>
    `
    document.querySelector('.grid__posts').innerHTML = templatePost
}

const printCommentsPost = (arrComments) => {

    let templateComments = ''
    arrComments.forEach( (comment) => {
        templateComments +=  `
            <li class="list-group-item">
                <strong>${comment.name}</strong>
                <span class="comment__body">${comment.body}</span>  
            </li>
        `
    })
    console.log(templateComments)
    document.querySelector('.list__comments').innerHTML = templateComments
}

getData('https://jsonplaceholder.typicode.com/posts/1', printCardPost)
getData('https://jsonplaceholder.typicode.com/posts/1/comments', printCommentsPost)
