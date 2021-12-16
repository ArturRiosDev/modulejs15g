/**
 * 
 * Tarea 1
 * Estudiar promesas JS
 * Esdutiar el api fetch
 * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
 * 
 */

/**
 * Tarea 2
 * Metodos (verbos http)
 * GET
 * 
 * POST, PUT, PATCH, DELETE
 */


/**
 * Tarea 3
 * Crear una cuenta en firebase
 */


/**
 * 
 * Tarea 4
 * Generar un grid de todos los usuarios 
 * https://jsonplaceholder.typicode.com/users
 * 
 */
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

/* const printCardPost = (post) => {
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
 */
const printCommentsPost = (arrComments) => {

    let templateComments = ''
    arrComments.forEach( (comment) => {
        templateComments +=  `
        <div class="col-12 col-md-4">
        <div class="card-body bg-light m-2 rounded">
          <h5 class="card-title">Username: ${comment.username}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Email: ${comment.email}</h6>
          <p class="card-text">Website: ${comment.website}</p>
        </div>
      </div>
        `
    })
    console.log(templateComments)
    document.querySelector('.grid__posts').innerHTML = templateComments
}

/* getData('https://jsonplaceholder.typicode.com/posts/1', printCardPost) */
getData('https://jsonplaceholder.typicode.com/users', printCommentsPost)
