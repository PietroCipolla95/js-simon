/* 

Traccia
Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!

*/

let countDate = new Date("September 6, 2023 09:57:00").getTime();

let countdown = setInterval(function() {

    let now = new Date().getTime();
    let timeRemaining = (countDate - now)

    let hours = Math.floor((timeRemaining % (1000 * 3600 * 24)) / (1000 * 3600));
    let minutes = Math.floor((timeRemaining % (1000 * 3600)) / (1000 * 60));
    let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById('hourglass').innerHTML = 
        hours.toLocaleString(undefined,{minimumIntegerDigits: 2}) + ':' 
        + minutes.toLocaleString(undefined,{minimumIntegerDigits: 2}) + ':' 
        + seconds.toLocaleString(undefined,{minimumIntegerDigits: 2})

    if (timeRemaining < 0) {

        clearInterval(countdown)
        document.getElementById('hourglass').innerHTML = '00:00:00'
        document.getElementById('class').innerHTML = 'Class Time!'        
        
    }
  
}, 1000);



