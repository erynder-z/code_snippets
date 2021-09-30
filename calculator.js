// adds 
const add = function(num1, num2) {
	let sum = parseInt(num1) + parseInt(num2);
  return sum;
};

// substracts
const subtract = function(num1, num2) {
	let result = parseInt(num1) - parseInt(num2);
  return result;
};

// computes sum of an array
const sum = function(someArray) {
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
	let arraySum = someArray.reduce(reducer, 0); //needs a default value to work! =0
  return arraySum;
};

// computes two numbers in array
const multiply = function(someArray) {
  const reducer = (previousValue, currentValue) => previousValue * currentValue;
  let arrayProduct = someArray.reduce(reducer, 1);
  return arrayProduct;
};

// raises one number to the power of another number
const power = function(x, n) {
	let result = x;
    for (let i = 1; i < n; i++) {
      result *= x;
    }
    return result;
};

// computes factorials
const factorial = function(num) {
	if (num < 0) {
    return undefined;
  }

  if (num === 0) {
    return 1;
  }

  let x = num -1;
  while (x > 1) {
    num *= x;
    x--;
  }
  return num;
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
