// GET 
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

const funcionCallback =  (posts) => {
    console.log(posts)
    let parsedPosts = JSON.parse(posts)
    console.log(parsedPosts)
    let layout = ''
    for(post in parsedPosts) {
        let { title, timetoread, resume, author } = parsedPosts[post]
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

getPosts(funcionCallback)