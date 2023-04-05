// let balance = 0;

// function credit(value) {
//   balance += value;
// }

// function debit(value) {
//   balance -= value;
// }

// credit(100);

// balance += 5000;

// console.log(balance);

//garbage collection - https://slides.com/jmsherry/functions#/0/42
//CLOSURES ARE ABSTRACT AS FUCK

function closure() {
  let balance = 0;

  return {
    getBalance: function () {
      return balance;
    },
    credit: function (value) {
      if (value < 0 || value > 4000 || typeof value !== "number") return;
      balance += value;
    },
    debit: function (value) {
      if (value < 0 || value > 4000 || typeof value !== "number") return;
      balance -= value;
    },
    closeAccount: function () {
      balance = null;
    },
  };
}

const bank = closure();

bank.balance = 5000;
bank.credit(100);
bank.debit(50);
console.log(bank.getBalance());
