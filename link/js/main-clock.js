const mainclock__title = document.querySelector('.a');

function mainclock__gettime() {
    const getdate = new Date();
    const hours = getdate.getHours();
    const minutes = getdate.getMinutes();
    console.log(minutes);
    mainclock__title.innerText = `${hours}:${minutes}`;
}

function mainclock__appear() {
    mainclock__gettime();
}

mainclock__appear();