let $modal = document. querySelector('.modal')
let $signin = document. querySelector('.signin')
let $close = document. querySelector('.close')
let $user = document. querySelector('#user')
let $pass = document. querySelector('#pass')
let $submit = document. querySelector('.submit')
let $form =document. querySelector ('.getstarted')
let $field = document. querySelector('.field')
// . modal to show


//. modal to hide
// $modal.style.display = `none`

$user.classList.add(`error`)
$pass.classList.add(`error`)

$user.classList.remove(`error`)
$pass.classList.remove(`error`)
// clickable .signin

$signin.addEventListener('click', event => {
    $modal.style.display = `block`
})

// clickable .close
$close.addEventListener('click', event => {
    $modal.style.display = `none`
})

/*$submit.addEventListener('click', event => {
    $user.classList.add(`error`)
    $pass.classList.add(`error`)
}) */

$user.addEventListener('focus', event => {
    $user.classList.remove(`error`)
})



$pass.addEventListener('focus', event => {
    $pass.classList.remove(`error`)
})


$form.addEventListener('submit', event => {
    event.preventDefault()

    $user.classList.add(`error`)

    $pass.classList.add(`error`)
})

const field = input.field.trim() 
input.addEventListener('input', evt => {const field = input.field.trim()
if (field){
    input.dataset.state = 'valid'
}
else { input.dataset.state = 'invalid'}
}


/*if ($field = ' ')
{ $submit.addEventListener('click', event => {
    $user.classList.add(`error`)
    $pass.classList.add(`error`)}*/