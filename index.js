// console.log('hello')

let addMovie = event => {
    event.preventDefault()
    let inputfield = document.querySelector('input').value
    let movie = document.createElement('li')
    let movieTitle = document.createElement('span')
    movieTitle.textContent = inputfield
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle)
    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = "x"
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)
    let list = document.querySelector('ul')
    list.appendChild(movie)
    inputfield = ""
}

let deleteMovie = event => {
    event.target.parentNode.remove()
}

let crossOffMovie = event => {
    event.target.classList.toggle('checked')
}
let form = document.querySelector('form')
form.addEventListener('click', addMovie)