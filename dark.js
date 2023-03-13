// Dark-Mode Start
let body = document.body;
let h1 = document.getElementById("h1");
let info = document.getElementById("info");
let mode1 = document.getElementById("dark");
let home = document.getElementById("home");

const darkLimit = 5;
let darkCounter = 0;
let modeRemainingLeft;
function darkMode() {
  if (modeRemainingLeft == 1) {
    info.textContent = `Kesempatan dark mode anda telah habis 😁`;
    home.textContent = `RESTART`;
    mode1.style.display = "none";
    return;
  } else if (mode1.textContent == "MODE - LIGHT") {
    mode1.textContent = "MODE - DARK";
  } else {
    mode1.textContent = "MODE - LIGHT";
  }

  darkCounter++;
  modeRemainingLeft = darkLimit - darkCounter;
  info.textContent = `Dark mode anda sudah terpakai ${darkCounter}x, sisa ${modeRemainingLeft}`;
  body.classList.toggle("dark");
}
function restart() {
  location.reload();
}
// Dark-Mode End
