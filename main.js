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
    renderClock();
    setInterval(renderClock, 1000);
}

/** Updates the page with current time and weekday */
function renderClock() {
    const date = new Date();

    const timeElement = document.getElementById('time');
    timeElement.innerHTML = getCurrectTimeString(date);

    const weekdayElement = document.getElementById('weekday');
    weekdayElement.innerHTML = getCurrentWeekday(date);

}
/**
 * Takes a date returns the date
 * @param {Date} date 
 * @returns {string} 
 */

function getCurrentWeekday(date) {
    const weekday = date.getDay();

    switch (weekday) {
        case 0: return 'Sunday';
        case 1: return 'Monday';
        case 2: return 'Tueday';
        case 3: return 'Wednesday';
        case 4: return 'Thursday';
        case 5: return 'Friday';
        case 6: return 'Saturday';
        
    }
}
/**
 * Constructs the time string from a date, includes seconds.
 * @param {Date} date 
 * @returns {String} in format HH:mm:ss
 */
function getCurrectTimeString(date) {
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
    return hours + ":" + minutes + ":" + seconds;
}