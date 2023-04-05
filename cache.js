const cache = {};

function work(question) {
  //if the cache has the answer
  if (cache[question]) {
    return cache[question];
  }

  //otherwise caluclate and store the answer

  let answer = 0;
  for (let i = 0; i < 10000000000; i++) {
    answer += 1;
  }

  cache[question] = answer;
  return cache[question];
}

const start = Date.now();
work(1);
console.log(Date.now() - start);

const start2 = Date.now();
work(2);
console.log(Date.now() - start2);
