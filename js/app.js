let timeLeft;
let intervalID;
let hour;
let min;
let sec;

const inputFieldSec = document.querySelector('#sec');
const inputFieldMin = document.querySelector('#min');
const inputFieldHH = document.querySelector('#hour');

const buttonIcon = document.querySelector('.controllButton > img');

const alarm = new Audio('../sounds/alarm.mp3');

function countTimerDown() {
    showTimeLeft();
    if (timeLeft === 0) {
        timerStop();
        return;
    }
    timeLeft--;
}

function showTimeLeft() {
    hour = Math.floor(timeLeft / 3600);
    min = Math.floor((timeLeft - hour * 3600) / 60);
    sec = timeLeft - hour * 3600 - min * 60;

    inputFieldHH.value = hour;
    inputFieldMin.value = min;
    inputFieldSec.value = sec;
}

function setTimer() {
    if (inputFieldSec.value === '') {
        sec = 0;
    } else {
        sec = parseInt(inputFieldSec.value);
    }

    if (inputFieldMin.value === '') {
        min = 0;
    } else {
        min = parseInt(inputFieldMin.value) * 60;
    }

    if (inputFieldHH.value === '') {
        hour = 0;
    } else {
        hour = parseInt(inputFieldHH.value) * 3600;
    }

    timeLeft = sec + min + hour;
}

function timerStop() {
    clearInterval(intervalID);
    buttonIcon.src = './images/icon-play-circle-white.svg';
    inputFieldHH.value = '0';
    inputFieldMin.value = '0';
    inputFieldSec.value = `0`;
    alarm.play();
}

function button() {
    if (!intervalID) {
        setTimer();
        buttonIcon.src = './images/icon-stop-circle-white.svg';
        intervalID = window.setInterval(countTimerDown, 1000);
    } else {
        buttonIcon.src = './images/icon-play-circle-white.svg';
        clearInterval(intervalID);
    }
}