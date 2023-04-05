function memorise(func) {
  const obj = {};

  return (value, value2) => {
    if (obj[value + value2]) {
      return obj[value + value2];
    } else {
      const result = func(value, value2);
      obj[value + value2] = result;
      return result;
    }
  };
}

function square(value) {
  return value * value;
}

function add(value) {
  return value * value;
}

const optimisedVersionOfSquare = memorise(square);
const optimisedVersionOfAdd = memorise(add);

console.log((optimisedVersionOfSquare = memorise(square)));

//RUssells one
function square(value) {
  return value * value;
}

function memorise(func) {
  var obj = {};

  return (value) => {
    if (obj[value]) {
      return "DONE - " + obj[value];
    } else {
      var result = func(value);
      obj[value] = result;
      return "NEW - " + result;
    }
  };
}

var optimised = memorise(square);
console.log(optimised(20));
console.log(optimised(10));
console.log(optimised(10));
console.log(optimised(40));
console.log(optimised(40));
