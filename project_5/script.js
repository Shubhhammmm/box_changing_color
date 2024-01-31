var randomNum;

function makeBubble() {
  let clutter = " ";

  for (let i = 1; i <= 72; i++) {
    clutter += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
  }

  document.getElementById("panel-bottom").innerHTML = clutter;
}
makeBubble();

let timer = 60;

function countTimer() {
  let timeInt = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.getElementById("timerBegins").textContent = timer;
    } else {
      clearInterval(timeInt);
      document.getElementById('panel-bottom').innerHTML = `<h1>Game Over</h1>`;
    //   alert("Times Up..");
    }
  }, 1000);

  //   if (times === 0) {
  //     clearInterval(times);
  //     alert("Times Up ..!");
  //   }
}
countTimer();

function hitValue() {
  randomNum = Math.floor(Math.random() * 10);
  document.getElementById("hitVal").textContent = randomNum;
}
hitValue();

let score = 0;

function scoreValue() {
  score += 10;
  document.getElementById("scoreVal").textContent = score;
}
scoreValue();

document.getElementById("panel-bottom").addEventListener("click", (details) => {
  let clicked = Number(details.target.textContent);

  if (clicked === randomNum) {
    scoreValue();
    makeBubble();
    hitValue();
  }
});
