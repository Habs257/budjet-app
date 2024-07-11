const myTimer = document.querySelector(".timer");
const boutonUn = document.querySelector(".but1");
const boutDeux = document.querySelector(".but2");
const boutTroi = document.querySelector(".but3");
const bouQuatre = document.querySelector(".but4");
const boutCinq = document.querySelector(".but5");
const afficher =  document.querySelector(".afficher");
const textAficher =  document.querySelector(".textAficher");
let activeInterval; 
function startTimer(seconds) {
  clearInterval(activeInterval); 
let presentHour = new Date();
let texto = new Date(presentHour.getTime() + seconds * 1000)
  activeInterval = setInterval(() => {
    timer(seconds);
    seconds--;

    if (seconds === 0) {
      clearInterval(activeInterval);
    }
    else{
      tempsSouhaiter(texto)
    } 
  }, 1000);

}
function tempsSouhaiter(time) {
  const jour = time.toLocaleTimeString();
  textAficher.textContent =`Be back at : ${jour}`
}
boutonUn.addEventListener("click", () => {
  startTimer(20);
  
});

boutDeux.addEventListener("click", () => {
  startTimer(300);
});

boutTroi.addEventListener("click", () => {
  startTimer(900);
});

bouQuatre.addEventListener("click", () => {
  startTimer(1200);
});

boutCinq.addEventListener("click", () => {
  startTimer(1800);
});

let input = document.getElementById("impTime");
input.addEventListener("change", (event) => {
  let value = parseInt(event.target.value);
  startTimer(value);
});

function timer(seconds) {
  let heures = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds / 60) % 60);
  let secondes = Math.floor(seconds % 60);
  myTimer.innerHTML = `${heures}:${minutes}:${secondes}`;
  if (seconds < 10) {
    secondes.innerHTML = `0${seconds}`;
  }
  else{
    secondes.innerHTML = `${seconds}`;
  }
}
