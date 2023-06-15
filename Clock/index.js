const Seconds =  document.querySelector('#Seconds'); 
const Minute = document.querySelector('#Minutes');
const Hour = document.querySelector('#Hour');
const nHour = document.querySelector('.hour span');
const nSec = document.querySelector('.seconds span');
const nMin = document.querySelector('.minute span');
const dTime = document.querySelector('.dayTime');
setInterval(()=> {
  
    const now = new Date();
    const seconds = now.getSeconds();
    nSec.innerHTML = seconds;
    const secDeg = (((seconds / 60) * 360) + 90);
    Seconds.style.transform = `rotate(${secDeg}deg)`;
    
    const min = now.getMinutes();
    nMin.innerHTML = min; 
    const minDeg = (((min / 60) * 360) + 90);
    Minute.style.transform = `rotate(${minDeg}deg)`;
    
    const hour = now.getHours();
    nHour.innerHTML = hour%12||12;
    const hourDeg = (((hour / 12) * 360) + 90);
    Hour.style.transform = `rotate(${hourDeg}deg)`;

    const dayTime = hour >= 12 ? 'PM' : 'AM';
    dTime.innerHTML = dayTime;

},1000)
