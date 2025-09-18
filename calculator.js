function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "ERROR";
  }
  const result = a / b;
  if (Number.isInteger(result)) {
    return result;
  }
  return (result).toFixed(2);
  
}


function operate(operator, a, b) {
  let result;
  switch(operator) {
    case "+":
      result = add(a, b);
      break;
    case "-":
      result = subtract(a, b);
      break;
    case "*":
      result = multiply(a, b);
      break;
    case "/":
      result = divide(a, b);
      break;
    default:
      return "Something went really wrong! Use + , - , * or /";
  }
  return result;
}



module.exports = {
  add,
  subtract,
  multiply,
  divide,
  operate
};