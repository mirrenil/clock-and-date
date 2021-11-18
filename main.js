// eventListener/handlers är bara ett namn 
// på en funktion som anropas av ett event
//window.onload = main;
window.addEventListener('load', main);


/** Start of the program, runs after page is loaded */
function main() {
    startClock();
}

/** Starts the time on the page */
function startClock() {
    setInterval(renderClock, 1000);
}

/** Updates the page with current time */
function renderClock() {
    const h2 = document.getElementById('time');

    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    } 

    h2.innerHTML = hours + ":" + minutes + ":" + seconds;
}