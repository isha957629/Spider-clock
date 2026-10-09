
const hourHand = document.getElementById("hour");
const minuteHand = document.getElementById("minute");
const secondHand = document.getElementById("second");

function updateClock() {
  const now = new Date();

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondAngle = seconds * 6;
  const minuteAngle = minutes * 6 + seconds * 0.1;
  const hourAngle = (hours % 12) * 30
                  + minutes * 0.5;

  secondHand.style.transform =
    `translateX(-50%) rotate(${secondAngle}deg)`;

  minuteHand.style.transform =
    `translateX(-50%) rotate(${minuteAngle}deg)`;

  hourHand.style.transform =
    `translateX(-50%) rotate(${hourAngle}deg)`;
}

updateClock();
setInterval(updateClock, 1000);
