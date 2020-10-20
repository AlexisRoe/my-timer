let timeSet;
let timerIntervall;
const inputFieldSec = document.querySelector('#sec');
const inputFieldMin = document.querySelector('#min');
const inputFieldHH = document.querySelector('#hour');
const buttonIcon = document.querySelector('.controllButton > img');
const alarm = new Audio("../sounds/alarm.mp3");

function countTimerDown() {
    inputFieldSec.value = showLeftTime();
    if (timeSet === 0) {
        timerStop();
        return;
    }
    timeSet = timeSet - 1;
}

const showLeftTime = () => {
    if (timeSet < 10) {
        return `0${timeSet}`;
    }
};

function timerStop() {
    clearInterval(timerIntervall);
    buttonIcon.src = './images/icon-play-circle-white.svg';
    inputFieldSec.value = `00`;
    alarm.play();
}

function timer() {
    timerIntervall = window.setInterval(countTimerDown, 1000);
}

function button() {
    if (!timerIntervall) {
        timeSet = parseInt(inputFieldSec.value);
        console.log(timeSet);
        timer();
        buttonIcon.src = './images/icon-stop-circle-white.svg';
    } else {
        timerStop();
        buttonIcon.src = './images/icon-play-circle-white.svg';
    }
}
