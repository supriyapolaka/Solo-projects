
let homeCount = 0;
let guestCount = 0;

let scoreHomeEl = document.getElementById("scoreHome");
let scoreGuestEl = document.getElementById("scoreGuest");

scoreHomeEl.textContent = homeCount;
scoreGuestEl.textContent = guestCount;

function addOneHome() {
  homeCount += 1;
  scoreHomeEl.textContent = homeCount;
}
function addTwoHome() {
  homeCount += 2;
  scoreHomeEl.textContent = homeCount;
}
function addThreeHome() {
  homeCount += 3;
  scoreHomeEl.textContent = homeCount;
}

// for guest score
function addOneGuest() {
  guestCount += 1;
  scoreGuestEl.textContent = guestCount;
}
function addTwoGuest() {
  guestCount += 2;
  scoreGuestEl.textContent = guestCount;
}
function addThreeGuest() {
  guestCount += 3;  scoreGuestEl.textContent = guestCount;
}