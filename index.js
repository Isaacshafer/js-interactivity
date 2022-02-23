// console.log('hello')
let message = document.querySelector('#message')
let addBtn = document.querySelector('button')
let addMovie = event => {
    event.preventDefault()
    let inputfield = document.querySelector('input')
    let movie = document.createElement('li')
    let movieTitle = document.createElement('span')
    movieTitle.textContent = inputfield.value
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle)
    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = "x"
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)
    document.querySelector('ul').appendChild(movie)
    inputfield.value = ''
    message.textContent = 'Movie added!';
}


let deleteMovie = event => {
    event.target.parentNode.remove()
    message.textContent = "Movie deleted!"
}

let crossOffMovie = event => {
    event.target.classList.toggle('checked')
    if(event.target.classList.contains('checked') === true){
    message.textContent = 'Watched!'
    } else {
        message.textContent = 'Movie added back'
    }
}
let form = document.querySelector('form')
form.addEventListener('submit', addMovie)
addBtn.addEventListener('click', addMovie)
