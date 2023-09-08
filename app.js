const currentDay = document.querySelector(".currentDay");
const currentUTCTime = document.querySelector(".currentUTCTime");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Insert current day
currentDay.textContent = days[new Date().getDay()];
// Insert UTC time
currentUTCTime.textContent = Date.now();
