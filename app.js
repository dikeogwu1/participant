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
currentDay.textContent = `Current Day of the Week: ${
  days[new Date().getDay()]
}`;

// Get UTC time
function getUTC() {
  const UTC = new Date();
  // Calculate milliseconds
  const utcOffset = 1 * 60 * 60 * 1000; // UTC+1
  // Apply the UTC+1 offset
  const time = new Date(UTC.getTime() + utcOffset);
  // create UTC time
  const hours = time.getUTCHours().toString().padStart(2, "0");
  const minutes = time.getUTCMinutes().toString().padStart(2, "0");
  const seconds = time.getUTCSeconds().toString().padStart(2, "0");
  // insert UTC time
  currentUTCTime.textContent = `UTC Time: ${hours}:${minutes}:${seconds}`;
}

setInterval(getUTC, 1000);
