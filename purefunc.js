// const obj = (age: 18);

// if (obj && obj.location) {
//   console.log(obj.location.postCode);
// }

// 100% purefunc

function add(x, y) {
  return x + y;
}

//impure function - promiscuous function
let answer;
function add(x, y) {
  answer = x + y;
}

// impure
let x = 2;

let y = 3;
function add() {
  return x + y;
}

//totally impure //totally impure
let x2 = 2;

let y3 = 3;

let answer3;
function add() {
  answer = x + y;
}

// impure
function getRandomString() {
  return Math.round(Math.random() * 10000);
}
