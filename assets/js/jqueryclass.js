
// document.getElementsByTagName('h1')[0].style.display = 'none'
// $('h1').hide()
// jQuery('element').addClass('hola')

// window.addEventListener('load', () => {})

// $(document).ready( ()=> {
//     console.log('document ready')
// })

// $(()=> {
//     console.log('document ready')
// })

// $(function () {
//     console.log('document ready') 
// })


// sintaxis

// $('elemento').action()
// $('.class').action()
// $('#id').action()
// $('tag').action()
// $('img.claseUno.clase2').action()

// actions
/**
 * .click() -> $(p).click()
 * .focus()
 * .keyup()
 * .keydown()
 * 
 */
// $('p').addClass('parrafo')
// $('p').removeClass('texto')
// $('p').toggleClass('texto')
// $('p').hide()
// $('p').show()
// $('p').remove()





$(document).ready( () => {
    console.log('document ready')
    $('div').addClass('list')

    $('ol li').addClass('list_item')

    // getters
    $('h1').attr('style')

    // setter 
    $('h1').attr('data-id','5')
    $('h1').attr('id','heading')

    $('h2:first').attr('class','heading')

    let ultimoHIjo = '<li class="item_final">item list</li>'
    let primerHIjo = '<li class="item_inicial" >item list</li>'
    $('ol').append(ultimoHIjo)
    $('ol').prepend(primerHIjo)


    // innerText
    $('.item_final').text('Item final')
    // innerHTML
    $('.inner__html').html(' <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus non corporis deleniti modi temporibus eum aperiam vitae laudantium aut ex voluptate ab, sapiente totam ipsa similique! Dolorem dicta eaque eos.</p>')

    // Atributo Style
    // 1 propiedad css
    $('.item_final').css('color','red')
    // multiples propiedad css
    $('.item_final').css({
        'font-weight':'600',
        'font-size':'32px',
        'font-style':'italic',
    })

})