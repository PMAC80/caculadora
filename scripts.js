let display = document.getElementById('display');
let firstOperand = '';
let secondOperand = '';
let currentOperation = null;

function appendNumber(number) {
    if (currentOperation === null) {
        firstOperand += number;
        display.value = firstOperand;
    } else {
        secondOperand += number;
        display.value = secondOperand;
    }
}

function setOperation(operation) {
    if (firstOperand === '') return;
    currentOperation = operation;
    display.value = '';
}

function clearDisplay() {
    firstOperand = '';
    secondOperand = '';
    currentOperation = null;
    display.value = '';
}

function calculateResult() {
    let result;
    const num1 = parseFloat(firstOperand);
    const num2 = parseFloat(secondOperand);

    switch (currentOperation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            return;
    }
    display.value = result;
    firstOperand = result.toString();
    secondOperand = '';
    currentOperation = null;
}
