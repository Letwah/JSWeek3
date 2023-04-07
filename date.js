// const myDate1 = new Date("Mon Oct 14 2019 14:48:26 GMT+0100");

// console.log(myDate1 instanceof Date);

/**********get date **********/
// const d = new Date();

// const months = ["Jan", "Feb", "Mar", "Apr"];

// console.log(
//   `The date is: ${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`
// );

/**********get date based on local **********/
// const d = new Date();

// const months = ["Jan", "Feb", "Mar", "Apr"];

// console.log();

// if (navigator.languages[0] === "en-US") {
//   console.log(
//     `The date is: ${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`
//   );
// } else {
//   console.log(
//     `The date is: ${months[d.getMonth()]} ${d.getDate()} ${d.getFullYear()}`
//   );
// }

//OR

// const d = new Date();

// console.log(d.toLocaleString("fr"));

// /**********formats **********/
// const d = new Date();

// console.log(
//   d.toLocaleString(navigator.languages[0], {
//     day: "numeric",
//     month: "long",
//     year: "2-digit",
//   })
// );

/********In the past */

// const d = new Date();

// d.setTime(d.getTime() + 300 * 1000);
// d.setFullYear(1982);

// console.log(d.toLocaleString());

/****BRING IN THIRPARTY _ DAY.JS ** WONT WORK IN NODE view in browser*/

// const d = new Date();

// console.log(d.toLocaleString());

// const a = dayjs();
// const b = a.add(7, "day");

// console.log(b);

/**   Next one - what to send when - like an email * */

function shouldISend(wakeUpHour, sleepHour) {
  const now = new Date();

  const wakeUpTime = new Date();
  wakeUpTime.setHours(wakeUpHour);
  wakeUpTime.setMinutes(0);
  const sleepTime = new Date();
  sleepTime.setHours(sleepHour);
  sleepTime.setMinutes(0);

  if (
    wakeUpTime.getTime() < now.getTime() &&
    sleepTime.getTime() > now.getTime()
  ) {
    console.log("Send the spam!");
  } else {
    console.log(
      "Wait to send spam, next awake at",
      wakeUpTime.toLocaleTimeString()
    );
  }
}

shouldISend(10, 16);

//for buying tickets - runs=down timer (WON"T WORK WITH NODE )

// const countdown = document.getElementById("countdown");

// const future = Date.now() + 7 * 1000;

// const timer = setinterval(function () {
//   const now = Date.now();
//   const result = Math.round((future - now) / 1000);

//   if (result < 1) {
//     clearInterval(timer);
//     countdown.innerHTML = "Sorry, you did not buy the tickets fast enough! ";
//   } else {
//     //convert into days hours minutes and seconds
//     const days = Math.floor(result / (60 * 60 * 24));
//     const hours = Math.floor((result % (60 * 60 * 24)) / (60 * 60));
//     const minutes = Math.floor((result % (60 * 60)) / 60);
//     const seconds = Math.floor(result % 60);

//     countdown.innerHTML = "${days}d, ${hours}h, ${minutes}m, ${seconds}s";
//   }
// }, 100);

//WAKE UP TIMER

function shouldISend(wakeUpHour, sleepHour) {
  const now = new Date();

  const wakeUpTime = new Date();
  wakeUpTime.setHours(wakeUpHour);
  wakeUpTime.setMinutes(0);

  const sleepTime = new Date();
  sleepTime.setHours(sleepHour);
  sleepTime.setMinutes(0);

  if (
    wakeUpTime.getTime() < now.getTime() &&
    sleepTime.getTime() > now.getTime()
  ) {
    console.log("Send the spam!");
  } else {
    console.log(
      "Wait to send spam, next awake at",
      wakeUpTime.toLocaleString()
    );
  }
}

shouldISend(20, 5);
