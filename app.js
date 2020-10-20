// wieviel zeit soll vergehen
let timeSet = 20;
let timerIntervall;

function countTimerDown(){
    console.log(timeSet);
    if (timeSet === 0) {
        timerStop();
        return;
    }
    timeSet = timeSet -1;
}

function timerStop () {
    clearInterval(timerIntervall);
    alert("Timer is over....");
}

function timer (){
    timerIntervall = window.setInterval(countTimerDown, 1000);
}

timer();