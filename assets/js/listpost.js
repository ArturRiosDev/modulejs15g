
$(()=>{
    console.log('ya cargo con jquery')

// GET CON XHTTPR
const getPosts =  (funcionALlamar) => {
    const xhttp = new XMLHttpRequest()
    xhttp.open( "GET" , `https://arturdev-15g-default-rtdb.firebaseio.com/posts/.json`, true)
    xhttp.onload = function(data) {
        // console.log(data)
        if(data.target.status === 200){
            funcionALlamar(data.target.response)
        }
    }
    xhttp.send()
}

//FETCH PARA TRAER LOS POSTS
const getPostsFetch = (callback) =>{
    fetch(`https://arturdev-15g-default-rtdb.firebaseio.com/posts/.json`)
        .then((resp) =>{
            return resp.json()
        })
        .then((obj)=>{
            callback(obj)
        })
}

//GET CON jQuery
const getPostJq = (callback) =>{
$.ajax({
    method:'GET',
    url:`https://arturdev-15g-default-rtdb.firebaseio.com/posts/.json`
}).done((resp)=>{
    callback(resp)
}).fail((err) => {
    console.log(err)
})
}


const funcionCallback =  (posts) => {
    console.log(posts)
    let layout = ''
    for(post in posts) {
        let { title, timetoread, resume, author } = posts[post]
        layout += `
        <div class="col-12 col-md-4 mb-4">
            <div class="card text-dark bg-light">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${author} -  ${timetoread} min</h6>
                    <p class="card-text">${resume}</p>
                    <a href="updatepost.html?idpost=${post}" class="card-link">Editar post</a>
                    
                    <a href="post.html?idpost=${post}" class="card-link">Ver post</a>
                </div>
            </div>
        </div>
        `
    }

    document.querySelector('.list__posts').innerHTML = layout
    
}

//getPosts(funcionCallback)
//getPostsFetch(funcionCallback)
getPostJq(funcionCallback)

})
