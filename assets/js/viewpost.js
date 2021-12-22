$(()=>{
    console.log('ya')
    let idPost = location.search.slice(8)
    $.ajax({
        method:'GET',
        url: `https://arturdev-15g-default-rtdb.firebaseio.com/posts/${idPost}.json`
    }).done((resp)=>{
        $('.card-title').text(resp.title)
        $('.card__author').text(resp.author)
        $('.card__timetoread').text(resp.timetoread + ' min')
        $('.card__resume').text(resp.resume)
    })

})

// ir por los datos del post
/* window.addEventListener('load', () => {
    //View posts with fetch
    console.log('ready')
    //let idPost = location.search.slice(8)
    fetch(`https://arturdev-15g-default-rtdb.firebaseio.com/posts/${idPost}.json`)
        .then((resp)=>{
            return resp.json()
        })
        .then((obj)=>{
            document.querySelector('.card-title').innerText = obj.title
            document.querySelector('.card__author').innerText = obj.author
            document.querySelector('.card__timetoread').innerText = obj.timetoread + ' min'
            document.querySelector('.card__resume').innerText = obj.resume
        })
    
}) */
//view posts with xhttpr

/* let idPost = location.search.slice(8)
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
    xhttp.send() */