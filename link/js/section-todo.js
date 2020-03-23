const todoform = document.querySelector('.todo-form__wrapper'),
    todoinput = document.querySelector('.todo-form__input'),
    todolist = document.querySelector('.todo-list__wrapper');
    todotitle = document.querySelector('.todo-list__title');

const todolist__localstorage = "todo__item";

function blockedsubmit(event) {
    event.preventDefault();
    const currentvalue = todoinput.value
    settodolist(currentvalue);
    savetodolist(currentvalue);
}

function settodolist(text) {
    const todoli = document.createElement("li"),
        todotext = document.createElement("span"),
        tododelet = document.createElement("button");
    // create new
    todotext.innerText= text;
    todoli.appendChild(todotext);
    todoli.appendChild(tododelet);
    todolist.appendChild(todoli);
    todoform.classList.add('none-show')
    todotitle.classList.remove('none-show')
}

function savetodolist(text) {
    localStorage.setItem(todolist__localstorage, text);
}

function loadtodolist() {
    const todo__item = localStorage.getItem(todolist__localstorage);
    if ( todo__item !== null ) {
        settodolist(todo__item);
    }
}

function nowstate__fortodolist() {
    loadtodolist();
    todoform.addEventListener("submit", blockedsubmit);
}

nowstate__fortodolist();