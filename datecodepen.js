// const dayjs = require("dayjs");
// //import dayjs from 'dayjs' // ES 2015
// dayjs().format();

/*****************************************************************
 *
 * Vanilla Date Exercises
 ******************************************************************/

// 1. Write a function that tests if something is a Date object or not.
//(Hint: Remember that Date is a class, so this would have to be an instance of that class...)

let myDate = new Date();
console.log(myDate instanceof Date);

// 2. Create today's date
let currentDate = new Date();

console.log(currentDate);

// 3. Get the current timestamp (using a static method of Date)

let time =
  currentDate.getHours() +
  ":" +
  currentDate.getMinutes() +
  ":" +
  currentDate.getSeconds();
console.log(time);

// 4. Create a date to represent next Christmas Day
const nextChristmas = new Date(2023, 11, 25);
const ukTime = new Intl.DateTimeFormat("en-UK");
console.log(ukTime.format(nextChristmas));
// 25/12/2023

// 5. Work out how many days it is until christmas

var xmas = new Date(currentDate.getFullYear(), 11, 25);
if (currentDate.getMonth() == 11 && currentDate.getDate() > 25) {
  xmas.setFullYear(xmas.getFullYear() + 1);
}
var one_day = 1000 * 60 * 60 * 24;
console.log(
  Math.ceil((xmas.getTime() - currentDate.getTime()) / one_day) +
    " - this many days till Christmas"
);

// Get difference between now and xmas

var difference = function (now, xmas) {
  dt1 = new Date(now);
  dt2 = new Date(xmas);
  return Math.floor(
    (Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) -
      Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) /
      (1000 * 60 * 60 * 24)
  );
};
console.log(difference("04/10/2023", "12/25/2023"));

// Divide by number of ms in 1 day:
// milliseconds per day = 24 hrs/day * 60 minutes/hour * 60 seconds/minute * 1000 msecs/second

var one_day = 24 * 60 * 60 * 1000;

console.log(one_day);

// 6. I'm going to make 2 random dates. I want you to log out which one is earlier (or if they are the same?!)
// Math.floor for whole days; Math.ceil to include today

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

const date1 = new Date(
  new Date().getFullYear(),
  getRandomIntInclusive(0, 1),
  getRandomIntInclusive(1, 27)
);

console.log("date1", date1);

const date2 = new Date(
  new Date().getFullYear(),
  getRandomIntInclusive(0, 1),
  getRandomIntInclusive(1, 27)
);

console.log("date2", date2);

if (date1 < date2) {
  console.log("Date one is earlier");
} else {
  console.log("Date two is earlier");
}

// 7. How do I test if a date is valid? ****

const testDate = "2023-04-25";
const dateObject = new Date(); /////NOT SURE WHY THIS WORKS>>>>>ASK ABOUT THIS

if (dateObject.toString() === "Date is Invalid") {
  console.log("date string is invalid");
} else {
  console.log("date string is valid");
}

// 8. Output today in the following format: MM-DD-YYYY - using the getter methods on the date object

let date = new Date().toLocaleDateString();
console.log(date); //

// 9. Now output it using toLocaleDateString in english ('en-GB') and in german ('de-DE')

let dateGB = new Date().toLocaleDateString("en-GB");
console.log(dateGB); // 10/4/2023

let dateDE = new Date().toLocaleDateString("de-DE");
console.log(dateDE); // 10.4.2023

// 10. Output the current time in hours, mins & seconds

const now = new Date();

const hoursAndMinutesAndSeconds = now.toLocaleTimeString("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});

console.log(hoursAndMinutesAndSeconds); // 12:49:36

// 11. Make a clock by starting with the current time and then every second adds a second to the date and prints it.

function currentTime() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";

  if (hh == 0) {
    hh = 12;
  }
  if (hh > 12) {
    hh = hh - 12;
    session = "PM";
  }

  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;

  let time = hh + ":" + mm + ":" + ss + " " + session;
}
currentTime();

// 12. Create a copy of today

var copiedDate = new Date(currentDate.getTime());

console.log(copiedDate);

// 13. Use the setter methods to find out what is 3years, 2months and 1 day from now

// dayjs("2023-03-10").add(1, "day").add(2, "month").add(1, "day").toString();

// 14. Get your timezone from today (remember it's in mins and the sign is inverted)
// let woodbridgetime = new Date().toLocaleString("en-GB", {
//   timeZone: "UK/GMT",
// });

// console.log(woodbridgetime);

// console.log(woodbridgetime); ////??????????????????????????????

// 15. Use the Intl module formatter (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format) to get the time in Sydney (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)

const ausDate = new Date();
const formatOption = {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  timeZone: "Australia/Sydney",
  timeZoneName: "short",
};
console.log(new Intl.DateTimeFormat("en-AU", formatOption).format(ausDate));

// 16. Write a function that creates a years/months/days/hours/mins/secs/ms duration in ms.

var dateMill = new Date("10/13/2000 12:00:00");
var milliseconds = dateMill.getTime();

console.log(milliseconds);

// 17. Write a function that returns an object with the years/months/days/hours/mins/secs/ms between 2 dates

var diff = Date.now() - Date.parse("June 10, 1981");
var seconds = Math.floor(diff * 1000),
  minutes = Math.floor(seconds / 60),
  hours = Math.floor(minutes / 60),
  days = Math.floor(hours / 24),
  months = Math.floor(days / 30),
  years = Math.floor(days / 365);

seconds %= 60;
minutes %= 60;
hours %= 24;
days %= 30;
months %= 12;

console.log("Years:", years);
console.log("Months:", months);
console.log("Days:", days);
console.log("Hours:", hours);
console.log("Minutes:", minutes);
console.log("Seconds:", seconds);

/*****************************************************************
 * For date-fns Exercises follow link on page
 ******************************************************************/
