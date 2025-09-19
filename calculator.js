const calculatorShell = document.querySelector("#calculatorShell");
const screen = document.querySelector("#screen");
let operation = "";
const operators = ["+", "-", "*", "/"];


calculatorShell.addEventListener("click", (event) => {
  const target = event.target;
  const text = target.textContent;
  let checkOperator = operators.includes(text) ? text : "";

  if (checkOperator) {
    operation += ` ${checkOperator} `;
  }
  else if (text === "Clear") {
    operation = "";
  }
  else if (text === "=") {
    checkOperation(operation);
  }
  else {
    operation += target.textContent;
  }

  console.log(`Button pressed ${text}`);
  console.log(`Current operation ${operation}`);
  screen.textContent = operation;
})


function checkOperation(operationText) {
  const operationSplit = operationText.split(" ");
  if (operationSplit.length !== 3) {
    return "ERROR"; 
  }
  const [firstNumber, operator, secondNumber] = operationSplit;
  if (operators.includes(operator)) {
    let result = operate(operator, parseInt(firstNumber), parseInt(secondNumber));
    console.log(result);
  }
  else {
    return "ERROR";
  }
  
}



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
  switch (operator) {
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







// export default {
//   add,
//   subtract,
//   multiply,
//   divide,
//   operate
// };