$(document).ready(function(){
    console.log('ready')
    // AJAX

    /**
     * Armar el request desde el cliente
     * Enviar el request
     * Recibe el request
     * Resolver el request
     * Devolver un response
     * Resolver el response
     * Modificar el DOM
     * 
     */

    // AJax
    // GET
    $.ajax({
        method: 'GET',
        url: 'https://genjs-292ac-default-rtdb.firebaseio.com/posts/.json'
    }).done( (data) => {
        console.log(data)
        let temp = ''
        for(post in data) {
            let {title, resume } = data[post]
            temp += `
            <li>
                <strong class="title__post">${title}</strong>
                <p>${resume}</p>
            </li>
            `  
        }
        $('#posts').html(temp)
        // $('#posts').append(temp)
        // $('#posts').prepesnd(temp)
    }).fail((err) => {
        console.log(err)
    })

    // POST
    // $.ajax({
    //     method:'POST',
    //     url:'https://genjs-292ac-default-rtdb.firebaseio.com/posts/.json',
    //     data: JSON.stringify(
    //         {
    //             author: "Prueba",
    //             resume: "texto fake",
    //             timetoread: "3",
    //             title: "titulo uno"
    //         }
    //     )
    // }).done(function(response){
    //     console.log(response)
    //     // do something
    // }) .fail( function (err) {
    //     console.log(err)
    // })

    // PATCH
    let idPostUpdate = '-Mr5Y_t0HC8O4JlQp73h'
    $.ajax({
        method:'PATCH',
        url:`https://genjs-292ac-default-rtdb.firebaseio.com/posts/${idPostUpdate}.json`,
        data: JSON.stringify(
            {
                title: "titulo uno actulizado"
            }
        )
    }).done(function(response){
        console.log(response)
        // do something
    }) .fail( function (err) {
        console.log(err)
    })


    // DELETE 
    const deletePost = () => {
        let idPostDelete = '-MrVNJ3Z7QCvwWvcGOS9'
        $.ajax({
            method:'DELETE',
            url: `https://genjs-292ac-default-rtdb.firebaseio.com/posts/${idPostDelete}.json`
        }).done(function(response){
            console.log(response)
            // do something
        }) .fail( function (err) {
            console.log(err)
        })
    }

    $('#delete__post').click(() => {
        console.log('eliminando post')
        deletePost()
        console.log('post eliminado')

    })

    // $('#name').keyup(() => {
    //     console.log('escrinbindo post')
    // })

    // $('#name').focus(() => {
    //     console.log('Focus en input name')
    // })








/**
 * C -> POST
 * R -> GET
 * U -> PATCH - PUT
 * D -> DELETE
 */





    




})