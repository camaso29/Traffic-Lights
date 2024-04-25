const red = document.querySelector('#red');
const yellow = document.querySelector('#yellow');
const green = document.querySelector('#green');

function changeLights() {
    setTimeout(() => {
        red.classList.add('active');
        yellow.classList.remove('active');
        green.classList.remove('active');
    }, 0);
    setTimeout(() => {
        red.classList.remove('active');
        yellow.classList.remove('active');
        green.classList.add('active');
    }, 6000);
    setTimeout(() => {
        red.classList.remove('active');
        yellow.classList.add('active');
        green.classList.remove('active');
    }, 9000);
}

setInterval(changeLights, 12000);
