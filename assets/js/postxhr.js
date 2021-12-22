$(()=>{
console.log('ya')

    const createUserJquery = (objPost) =>{
        $.ajax({
            method:'POST',
            url:'https://arturdev-15g-default-rtdb.firebaseio.com/posts/.json',
            data: JSON.stringify(objPost)
        }).done((resp)=>{       
            $('#title').val('')
            $('#author').val('')
            $('#timetoread').val('')
            $('#resume').val('')
            $('#post__id').text(resp.name)
            $('#alert__response').removeClass('d-none')
        })
    }


        $('#send__post').click(()=>{
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

                let objNewPost = {
                    title: title,
                    author: author,
                    timetoread: timetoread,
                    resume: resume
                }
            
                // createUser(objNewPost)
                //createUserFetch(objNewPost)
                createUserJquery(objNewPost)

            } else {
                alert('Algunos datos estan vacios')
            }
        })


})

// POST crear datos CON XHTPPR
/* const createUser =  (objPost) => {
    const xhttp = new XMLHttpRequest()
    xhttp.open( "POST" , "https://genjs-292ac-default-rtdb.firebaseio.com/posts/.json", true)
    xhttp.onload = function(data) {
        if(data.target.status === 200){
            document.querySelector('#title').value = ''
            document.querySelector('#author').value = ''
            document.querySelector('#timetoread').value = ''
            document.querySelector('#resume').value = ''
            let res = JSON.parse(data.target.response )
            let idPost = res.name
            document.getElementById('post__id').innerText = idPost
            document.getElementById('alert__response').classList.remove('d-none')
        }
    }
    xhttp.send( JSON.stringify(objPost) )
} */

//AQUI SE CREA UTILIZANDO FETCH
/* const createUserFetch =  (objPost) => {
    fetch('https://arturdev-15g-default-rtdb.firebaseio.com/posts/.json', {
        method:'POST',
        header: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(objPost)
    }).then( (res) => {
        res.json()
        .then( (newpost) => {
            console.log(newpost)
            document.querySelector('#title').value = ''
            document.querySelector('#author').value = ''
            document.querySelector('#timetoread').value = ''
            document.querySelector('#resume').value = ''
    
            document.getElementById('post__id').innerText = newpost.name
            document.getElementById('alert__response').classList.remove('d-none')
        })
    }).catch((err)=> {
        console.log(err)
    })

    
} */

/* let send__post = document.querySelector('#send__post')
send__post.addEventListener('click', () => {

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

        let objNewPost = {
            title: title,
            author: author,
            timetoread: timetoread,
            resume: resume
        }
    
        // createUser(objNewPost)
        createUserFetch(objNewPost)
    } else {
        alert('Algunos datos estan vacios')
    }

}) */