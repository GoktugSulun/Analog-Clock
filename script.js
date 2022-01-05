let hoursEl = document.querySelector('.hours');
let minutesEl = document.querySelector('.minutes');
let secondsEl = document.querySelector('.seconds');

let counterSec = 0;
let counterMin = 0;
let counterHours = 0;

window.addEventListener('load', () => {

   setInterval(tiktak, 1000);

});

function tiktak(){

   let hours = new Date().getHours();
   let minutes = new Date().getMinutes();
   let seconds = new Date().getSeconds();

   (seconds == 0) && counterSec++
   (minutes == 0) && counterMin++
   (hours == 0) && counterHours++

   secondsEl.style.transform = `rotate(${360*counterSec + (seconds * 6)}deg)`;
   minutesEl.style.transform = `rotate(${360*counterMin + (minutes * 6)}deg)`;
   hoursEl.style.transform = `rotate(${360*counterHours + ((hours * 30) + (minutes * 6 / 12))}deg)`;


   console.log(counterHours, counterMin, counterSec);

}
