const operators = ["+", "-", "*", "/"];

const calculatorShell = document.querySelector("#calculatorShell");
const screen = document.querySelector("#screen");
const clearButton = document.querySelector("#clearButton");

screen.textContent = "";
let operationText = "";

let ongoingCalculation = {
  firstNumber: "",
  firstOperator: "",
  secondNumber: "",
  secondOperator: "",
  operatorCount: 0
};


calculatorShell.addEventListener("click", (event) => {
  let buttonClicked = event.target;
  const buttonClickedValue = buttonClicked.textContent;

  if (buttonClickedValue === "Clear") {
    screen.textContent = "";
    operationText = "";
    ongoingCalculation = {
      firstNumber: "",
      firstOperator: "",
      secondNumber: "",
      secondOperator: "",
      operatorCount: 0
    };
    return;
  }

  operationText += buttonClickedValue;
  if (buttonClicked.classList[0] !== "operator") {
    screen.textContent += buttonClickedValue;
  }

  if (buttonClicked.classList[0] === "operator") {
    ongoingCalculation.operatorCount++;
    if (ongoingCalculation.operatorCount === 2) {
      let secondNumberWithOperator = operationText.split(ongoingCalculation.firstOperator)[1];
      ongoingCalculation.secondNumber = secondNumberWithOperator.split(buttonClickedValue)[0];
      ongoingCalculation.secondOperator = buttonClickedValue;
    }
    else {
      ongoingCalculation.firstNumber = operationText.split(buttonClickedValue, maxsplit = 1)[0];
      ongoingCalculation.firstOperator = buttonClickedValue;
    }
    screen.textContent = "";
    console.log(ongoingCalculation);
  }

  if (ongoingCalculation.operatorCount == 2) {
    ongoingCalculation.operatorCount = 0;
    ongoingCalculation.firstNumber = operate(ongoingCalculation.firstOperator, ongoingCalculation.firstNumber, ongoingCalculation.secondNumber, ongoingCalculation)
    ongoingCalculation.firstOperator = ongoingCalculation.secondOperator;

    operationText = ongoingCalculation.firstNumber;
    screen.textContent = ongoingCalculation.firstNumber;

    console.log(operationText);
  }
})






// Logic
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
  a = parseInt(a);
  b = parseInt(b);
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