const num1 = 1;
const num2 = 2;
const num3 = 3;

if (num1 && num2 && num3) {
  console.log(`they are all truthy`);
} ///really just returns third thing

const result = num1 || `i am returned`;

// && if true put this in the box
// || if this is false put this in the box
