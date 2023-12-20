let firstNum;
let secondNum;
let operator;

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
