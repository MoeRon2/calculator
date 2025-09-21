const operators = ["+", "-", "*", "/"];

const calculatorShell = document.querySelector("#calculatorShell");
const screen = document.querySelector("#screen");
const clearButton = document.querySelector("#clearButton");

let firstNumber;
let secondNumber = "" ;
let operator;
let operatorClicked = false;

let lastCharacter = "";

screen.textContent = "";



calculatorShell.addEventListener("click", (event) => {
  let buttonClicked = event.target;
  console.log(buttonClicked.textContent);
  
  if (buttonClicked.classList[0] === "operator" && lastCharacter === buttonClicked.textContent) {
    return;
  }
  
  lastCharacter = buttonClicked.textContent;

  

  writeToDisplay(buttonClicked);


 
  if (operatorClicked && buttonClicked.classList[0] !== "operator") {
    secondNumber += buttonClicked.innerText;
  }

  else if (buttonClicked.innerText === "=") {
    let result = operate(operator, Number.parseFloat(firstNumber), Number.parseFloat(secondNumber));
    screen.innerText = result;
    firstNumber = result;
    secondNumber = "";
    operatorClicked = false;
  }


  else if (operatorClicked && buttonClicked.classList[0] === "operator") {
    let result = operate(operator, Number.parseFloat(firstNumber), Number.parseFloat(secondNumber));
    screen.innerText = result;
    operator = buttonClicked.innerText;
    firstNumber = result;
    secondNumber = "";
    console.log(result);

  }

  else if (buttonClicked.classList[0] === "operator") {
    captureValues(buttonClicked);
  }
  
  else {
    return
  }
  

});


function writeToDisplay(buttonClicked) {
  if (buttonClicked.textContent === "AC") {
    screen.textContent = 0;
    firstNumber = "";
    secondNumber = "";
    operatorClicked = false;
  }
  else if (operatorClicked) {
    return;
  }
  // When starting from 0, clear everything and add the button value
  else if (screen.textContent === "0") {
    screen.textContent = "";
    screen.textContent += buttonClicked.textContent;
  }
  else if (buttonClicked.classList[0] === "operator") {
    return;
  }
  else {
    screen.textContent += buttonClicked.textContent;
  }

}


function captureValues(buttonClicked) {
  operator = buttonClicked.textContent;
  firstNumber = screen.textContent.split(operator)[0];
  operatorClicked = true;
  console.log(`${operator} ${firstNumber}`);
}


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
    return "Can't divide by 0";
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