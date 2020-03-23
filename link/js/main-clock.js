const mainclock__title = document.querySelector('.a');

function mainclock__gettime() {
    const getdate = new Date();
    const hour = getdate.getHours();
    const minute = getdate.getMinutes();
    const second = getdate.getSeconds();
    mainclock__title.innerText = `${
        hour < 10 ? `0${hour}` : hour
    }:${
        minute < 10 ? `0${minute}` : minute
    }:${
        second < 10 ? `0${second}` : second
    }`;
}

function mainclock__appear() {
    mainclock__gettime();
    setInterval(mainclock__gettime, 1000);
}

mainclock__appear();