let homeCount = 0;
let changeCount = document.getElementById("home-btn");

const plusOne = () => {
  homeCount += 1;
  changeCount.textContent = homeCount;
};
const PlusTwo = () => {
  homeCount += 2;
  changeCount.textContent = homeCount;
};
const plusThree = () => {
  homeCount += 3;
  changeCount.textContent = homeCount;
};

let guestCount = 0;
let changeCount1 = document.getElementById("guest-btn");

const guestPlusOne = () => {
  guestCount += 1;
  changeCount1.textContent = guestCount;
};
const guestPlusTwo = () => {
  guestCount += 2;
  changeCount1.textContent = guestCount;
};
const guestPlusThree = () => {
  guestCount += 3;
  changeCount1.textContent = guestCount;
};

// save

let saveCountHome;
let saveCountGuest;

let domHome = document.getElementById("home-count");
let domGuest = document.getElementById("guest-count");

const saveClick = () => {
  saveCountHome = homeCount + "--";
  domHome.textContent += saveCountHome;

  saveCountGuest = guestCount + "--";
  domGuest.textContent += saveCountGuest;

  changeCount.textContent = 0;

  homeCount = 0;

  changeCount1.textContent = 0;
  guestCount = 0;

 
};
