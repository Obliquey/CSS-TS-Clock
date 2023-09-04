function moveSecHand(degree: number) {
    const secondHand: HTMLDivElement  = document.querySelector('.sec-hand');
    secondHand.style.transform = `rotate(${degree + 90}deg)`;
}

function moveMinHand(degree: number) {
    const minHand: HTMLDivElement = document.querySelector('.min-hand');
    minHand.style.transform = `rotate(${degree + 90}deg)`;
}

function moveHourHand(degree:number) {
    const hourHand:HTMLDivElement = document.querySelector('.hour-hand');
    hourHand.style.transform = `rotate(${degree + 90}deg)`;
}

function setClock() {
    let date: Date = new Date;
    let seconds: number = date.getSeconds();
    let hour: number = date.getHours();
    let min: number = date.getMinutes();

    // need to figure out how to map each hand to the times I get from date constructor.
    // I need to translate each of these numbers to the 360deg's of the clock.
    const secondsDeg: number = (seconds / 60) * 360;
    const minDeg: number = (min / 60) * 360;
    const hourDeg: number = (hour / 12) * 360;
    moveSecHand(secondsDeg);
    moveMinHand(minDeg);
    moveHourHand(hourDeg);

    console.log('This is our date:', seconds);

}


setInterval(setClock, 1000);