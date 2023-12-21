let firstNum = '';
let secondNum = '';
let operator;
const screenTxt = document.querySelector('.screenTxt');
let displayVal = '';
let operatorCount = 0;
let dotPressed = false;

function add(x, y) {
    return Math.round(((x + y) + Number.EPSILON) * 100) / 100;
};
function subtract(x, y) {
    return Math.round(((x - y) + Number.EPSILON) * 100) / 100;
};
function multiply(x, y) {
  return Math.round(((x * y) + Number.EPSILON) * 100) / 100;
};
function divide(x, y) {
    return Math.round(((x / y) + Number.EPSILON) * 100) / 100;
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
    operatorCount++;
    if(operatorCount > 1){
        equal(false);
        firstNum = Number(displayVal);
    }else{
        firstNum = Number(displayVal);
    }
    displayVal = '';
    dotPressed = false;
    operator = _operator;
}

function renderScreen(num){
    if(num === '.' && dotPressed === true){
    }else if(displayVal.length < 11){
            displayVal += num;
            screenTxt.textContent = displayVal; 
            if(num === '.') dotPressed = true;
    }
}

function equal(pressed){
    if(displayVal !== '' && operator !== ''){
        secondNum = Number(displayVal);
        displayVal = '';
        renderScreen(operate(firstNum, secondNum, operator));
        operator = '';
        pressed ? operatorCount = 0 : operatorCount = 1;
    }
}
    

function clearScreen(){
    displayVal = '';
    firstNum = '';
    operator = '';
    operatorCount = 0;
    dotPressed = false;
    renderScreen('')
}