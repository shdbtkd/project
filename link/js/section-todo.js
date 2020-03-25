const todoform = document.querySelector('.todo-form__wrapper'),
    todoinput = document.querySelector('.todo-form__input'),
    todolist = document.querySelector('.todo-list__wrapper');
    todotitle = document.querySelector('.todo-list__title');

const todolist__localstorage = "todo__item";

let todolist__array = [];

function tododelet__event(event) {
    const todobtn__nowevent = event.target,
        todolist__nowevent = todobtn__nowevent.parentNode;
        todolist.removeChild(todolist__nowevent);
    const deletedtodo_array = todolist__array.filter(function(item){
        return item.id !== parseInt(todolist__nowevent.id);
    });
    console.log(deletedtodo_array);
    todolist__array = deletedtodo_array;
    savetodolist(todolist__array);
}

function blockedsubmit(event) {
    event.preventDefault();
    const currentvalue = todoinput.value
    settodolist(currentvalue);
}

function settodolist(text) {
    const todoli = document.createElement("li"),
        todotext = document.createElement("span"),
        tododelet = document.createElement("button"),
        todoid = todolist__array.length + 1;
    // create new
    todotext.innerText= text;
    tododelet.addEventListener("click", tododelet__event);
    todoli.appendChild(todotext);
    todoli.appendChild(tododelet);
    todoli.id = todoid;
    todolist.appendChild(todoli);
    // todoform.classList.add('none-show')
    todotitle.classList.remove('none-show')

    const todolist__object = {
        text: text,
        id: todoid
    };
    todolist__array.push(todolist__object);
    savetodolist();
}

function savetodolist() {
    localStorage.setItem(todolist__localstorage, JSON.stringify(todolist__array));
}

function loadtodolist() {
    const todo__item = localStorage.getItem(todolist__localstorage);
    if ( todo__item !== null ) {
        const parsedtodo__item = JSON.parse(todo__item);
        parsedtodo__item.forEach(function(settodo) {
            settodolist(settodo.text);
        });
    }
}

function nowstate__fortodolist() {
    loadtodolist();
    todoform.addEventListener("submit", blockedsubmit);
}

nowstate__fortodolist();