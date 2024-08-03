alert("Hello! Welcome to my CALCULATOR...now you can proceed");

let display = document.getElementById('display');
let currentOperand = '';
let previousOperand = '';
let operation = undefined;

function clearDisplay() {
    display.value = '';
    currentOperand = '';
    previousOperand = '';
    operation = undefined;
}

function appendNumber(number) {
    currentOperand = currentOperand.toString() + number.toString();
    updateDisplay();
}

function setOperation(op) {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        calculate();
    }
    operation = op;
    previousOperand = currentOperand;
    currentOperand = '';
}

function calculate() {
    let computation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;

    switch (operation) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '/':
            computation = prev / current;
            break;
        default:
            return;
    }
    currentOperand = computation;
    operation = undefined;
    previousOperand = '';
    updateDisplay();
}

function updateDisplay() {
    display.value = currentOperand;
}
