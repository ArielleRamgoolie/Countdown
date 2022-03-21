var date = '21 February 2022';

const daysE = document.getElementById('days');
const hoursE = document.getElementById('hours');
const minsE = document.getElementById('minutes');
const secsE = document.getElementById('seconds');
const headingE = document.getElementById('heading');

function countdown(){

    const countdownDay = new Date(date);
    const today = new Date();

    const totalMSeconds = (countdownDay - today);
    const totalSeconds = totalMSeconds / 1000;
    const days = Math.floor((totalSeconds / 3600) / 24);
    const hours = Math.floor((totalSeconds / 3600) % 24);
    const mins = Math.floor((totalSeconds / 60) % 60);
    const secs = Math.floor(totalSeconds % 60);

    daysE.innerHTML = days;
    hoursE.innerHTML = hours;
    minsE.innerHTML = mins;
    secsE.innerHTML = secs;
}


const input = prompt("Enter the date you want to count down to in the form Day Month Year EG: 17 April 2021");
date = input;
countdown();
setInterval(countdown, 1000);