// ir por los datos del post
window.addEventListener('load', () => {
    console.log('ready')
    let idPost = location.search.slice(8)
    const xhttp = new XMLHttpRequest()
    xhttp.open( "GET" , `https://arturdev-15g-default-rtdb.firebaseio.com/posts/${idPost}.json`, true)
    xhttp.onload = function(data) {
        if(data.target.status === 200) {
            let {title, author, timetoread,resume } = JSON.parse(data.target.response)

            document.querySelector('.card-title').innerText = title
            document.querySelector('.card__author').innerText = author
            document.querySelector('.card__timetoread').innerText = timetoread + ' min'
            document.querySelector('.card__resume').innerText = resume

        }
    }
    xhttp.send()
})