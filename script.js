let firstNum = '';
let secondNum = '';
let operator;
const screenTxt = document.querySelector('.screenTxt');
let displayVal = '';
let operatorCount = 0;
let dotPressed = false;
let operatorPressed = false;

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
    if(y === 0){
        return 'Huh?';
    }else{
        return Math.round(((x / y) + Number.EPSILON) * 100) / 100;
    }
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
    if(screenTxt.textContent === 'Huh?') clearScreen()

    if(operatorPressed === false){
        operatorCount++;
    }
    if(operatorCount > 1){
        equal(false);
        firstNum = Number(displayVal);
    }else{
        firstNum = Number(screenTxt.textContent);
    }
    displayVal = '';
    dotPressed = false;
    operatorPressed = true;
    operator = _operator;
}

function renderScreen(num){
    if(screenTxt.textContent === 'Huh?') clearScreen()
    //checks if number has already a dot in it 
    if(num === '.' && screenTxt.textContent.includes('.')){
    }else if(displayVal.length < 11){
            displayVal += num;
            screenTxt.textContent = displayVal; 
            if(num === '.') dotPressed = true;
            operatorPressed = false;
    }
}

function equal(pressed){
    if(screenTxt.textContent === 'Huh?') clearScreen()

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
    screenTxt.textContent = '';
}