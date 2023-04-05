// const str = "*";
// for (let i = 0; i < 6; i++) {
//   console.log("*".repeat(i));
// } // expected outcome * ** *** **** ***** Kiearns way

// console.log(`*
// **
// ***
// ****
// *****`); // expected outcome * ** *** **** ***** Russells Way

//like fizzbuzz

// for (let i = 0; i < 20; i++) {
//   console.log(i, i % 3 === 0); //i modulo 3
// }

// for (let i = 1; i < 16; i++) {
//   if (i % 3 === 0 && i % 5 !== 0) {
//     console.log("fizz");
//   } else {
//     console.log(i);
//   }
// }

// for (let i = 1; i < 16; i++) {
//   if (i % 3 === 0 && i % 5 !== 0) {
//     console.log("fizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Buzz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

//use two ternaroes

// for (let i = 1; i < 16; i++) {
//   let result = "";

//   result += i % 3 === 0 ? "fizz" : "";
//   result += i % 5 === 0 ? "fizz" : "";

//   console.log(result || i);
// }

// /// too clever
// for (let i = 0; i < 16; )
//   console.log(++i % 3 ? "" : "fizz") + (++i % 5 ? "" : "buzz" || i);

const cache = {};

function work(input) {
  //if the cache has the answer
  if (cache[question]) {
    return cache[question];
  }

  const answer = question * question;
  // store the answer
  console.log("the question was calculated");

  cache[question] = answer;

  // console.log('cache', cache);

  return cache[question];
  // return answer;
  //   return input * input;
}

// console.log(work(99));

const start = Date.now();
work(1);
console.log(Date.now() - start);
