let message = document.querySelector('#message')
let addBtn = document.querySelector('button')
let addMovie = event => {
    message.classList.remove('hide')
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
    revealMessage('timeOutID')
}


let deleteMovie = event => {
    message.classList.remove('hide')
    event.target.parentNode.remove()
    let MOVIE = event.target.parentNode.childNodes[0].textContent
    message.textContent = `${MOVIE} deleted!`
    revealMessage('timeOutID')
}

let crossOffMovie = event => {
    message.classList.remove('hide')
    event.target.classList.toggle('checked')
    let MOVIE = event.target.textContent
    if(event.target.classList.contains('checked') === true){
    message.textContent = `${MOVIE} watched!`
    } else {
        message.textContent = `${MOVIE} was added back!`
    }
    revealMessage('timeOutID')
}
let form = document.querySelector('form')
form.addEventListener('submit', addMovie)
addBtn.addEventListener('click', addMovie)


let hideMessage = () => {
   
    message.classList.add('hide')
}

let revealMessage = () => {
    timeOutID = setTimeout(hideMessage, 1.5 * 1000)
}
