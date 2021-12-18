// ir por los datos del post
window.addEventListener('load', () => {

    const xhttp = new XMLHttpRequest()
    let idPost = location.search.slice(8)
    xhttp.open( "GET" , `https://genjs-292ac-default-rtdb.firebaseio.com/posts/${idPost}.json`, true)
    xhttp.onload = function(data) {
        if(data.target.status === 200) {
            let objResp = JSON.parse(data.target.response)
            
            // console.log(objResp)
            // Llenar el formulario

            document.querySelector('#title').value = objResp.title
            document.querySelector('#author').value = objResp.author
            document.querySelector('#timetoread').value = objResp.timetoread
            document.querySelector('#resume').value = objResp.resume

        }
    }
    xhttp.send()
})


// PATCH actualizar datos
const updateUser =  (objPost, idPost) => {
    const xhttp = new XMLHttpRequest()
    xhttp.open( "PATCH" , `https://genjs-292ac-default-rtdb.firebaseio.com/posts/${idPost}.json`, true)
    xhttp.onload = function(data) {
        if(data.target.status === 200){
            document.getElementById('alert__response').classList.remove('d-none')
        }
    }
    xhttp.send( JSON.stringify(objPost) )
}

let update__post = document.querySelector('#update__post')
update__post.addEventListener('click', () => {

    let title = document.querySelector('#title').value
    let author = document.querySelector('#author').value
    let timetoread = document.querySelector('#timetoread').value
    let resume = document.querySelector('#resume').value

    if(
        title !== '' &&
        author !== '' &&  
        timetoread !== '' &&
        resume !== ''
    ){
        let idPost = location.search.slice(8)
        let postToUpdate = {
            title: title,
            author: author,
            timetoread: timetoread,
            resume: resume
        }
    
        updateUser(postToUpdate, idPost )
    } else {
        alert('Algunos datos estan vacios')
    }

})

// DELETE eliminar post

let delete__post = document.getElementById('delete__post')
delete__post.addEventListener('click', () => {
    let idPost = location.search.slice(8)
    const xhttp = new XMLHttpRequest()
    xhttp.open( "DELETE" , `https://arturdev-15g-default-rtdb.firebaseio.com/posts/${idPost}.json`, true)
    xhttp.onload = function(data) {
        if(data.target.status === 200){
            location.replace('http://127.0.0.1:5500/')
            // document.getElementById('alert__response').classList.remove('d-none')
        }
    }
    xhttp.send() 
})
