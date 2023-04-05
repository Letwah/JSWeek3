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
