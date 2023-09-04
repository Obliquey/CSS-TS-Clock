"use strict";
function moveSecHand(degree) {
    const secondHand = document.querySelector('.sec-hand');
    secondHand.style.transform = `rotate(${degree + 90}deg)`;
}
function moveMinHand(degree) {
    const minHand = document.querySelector('.min-hand');
    minHand.style.transform = `rotate(${degree + 90}deg)`;
}
function moveHourHand(degree) {
    const hourHand = document.querySelector('.hour-hand');
    hourHand.style.transform = `rotate(${degree + 90}deg)`;
}
function setClock() {
    let date = new Date;
    let seconds = date.getSeconds();
    let hour = date.getHours();
    let min = date.getMinutes();
    // need to figure out how to map each hand to the times I get from date constructor.
    // I need to translate each of these numbers to the 360deg's of the clock.
    const secondsDeg = (seconds / 60) * 360;
    const minDeg = (min / 60) * 360;
    const hourDeg = (hour / 12) * 360;
    moveSecHand(secondsDeg);
    moveMinHand(minDeg);
    moveHourHand(hourDeg);
    console.log('This is our date:', seconds);
}
setInterval(setClock, 1000);
