const greetingform = document.querySelector('.main-form__wrapper'),
    greetinginput = document.querySelector('.main-form__item'),
    greetingtitle = document.querySelector('.main-greeting__item');

const user__localstorage = "currentUser",
    block_show = "block-show",
    none_show = "none-show";

function saveusername(text) {
    localStorage.setItem(user__localstorage, text);
}

function blockedsubmit(event) {
    event.preventDefault();
    const currentvalue = greetinginput.value
    setgreetingname(currentvalue);
    saveusername(currentvalue);
    console.log("it's done.");
}

function setusername() {
    greetingform.classList.add(block_show);
    greetingform.addEventListener("submit", blockedsubmit);
}

function setgreetingname(text) {
    greetingform.classList.add(none_show);
    greetingform.classList.remove(block_show);
    greetingtitle.classList.add(block_show);
    greetingtitle.innerText = `Hello ${text}`;
}

function nowstate__forgreeting() {
    const currentUser = localStorage.getItem(user__localstorage);
    if ( currentUser === null ) {
        setusername();
        console.log(1);
    } else {
        setgreetingname(currentUser);
        console.log(0);
    }
}
nowstate__forgreeting();