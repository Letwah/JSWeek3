// function demo(value) {
//   //a reason to quit
//   if (typeof value !== `string`) {
//     console.log(`i need a strin`);
//     return;
//   }

//   if (value === ``) {
//     console.log(`string empty`);
//     return;
//   }
//   console.log(value.repeat(5));
// }

// demo("100");

function demo(value) {
  if (typeof value !== "string") {
    console.log("I need a string");
    return;
  }
  console.log(value.repeat(5));
}
demo("100");
