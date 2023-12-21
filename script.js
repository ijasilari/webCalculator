let firstNum;
let secondNum;
let operator;
const screenTxt = document.querySelector('.screenTxt');
let displayVal = '';

function add(x, y) {
    return x + y;
};
function subtract(x, y) {
    return x - y;
};
function multiply(x, y) {
  return x * y;
};
function divide(x, y) {
    return x / y;
}

function operate(_firstNum, _secondNum, _operator) {
    switch(_operator) {
        case "+":
            return add(_firstNum, _secondNum);
        case "-":
            return subtract(_firstNum, _secondNum);
        case "*":
            return multiply(_firstNum, _secondNum);
        case "/":
            return divide(_firstNum, _secondNum);
    }
}

function saveOperator(_operator){
    operator = _operator;
    firstNum = Number(displayVal);
    displayVal = '';
}

function renderScreen(num){
    displayVal += num;
    screenTxt.textContent = displayVal;
}

function equal(){
    secondNum = Number(displayVal);
    displayVal = '';
    renderScreen(operate(firstNum, secondNum, operator));
}