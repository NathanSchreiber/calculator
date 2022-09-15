const container = document.querySelector('#container');
const screen = document.querySelector('#screen');
const clearButton = document.querySelector('#clear-button');
const equal = document.querySelector('#equal');
const add = document.querySelector('#add');
const subtract = document.querySelector('#subtract');
const multiply = document.querySelector('#multiply');
const divide = document.querySelector('#divide');
const operatorButtons = document.querySelectorAll('.operator');

const inputs = document.querySelectorAll('.inputs');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const zero = document.querySelector('#zero');
const decimal = document.querySelector('#decimal');

let newInput = 0;
let total = 0;
let firstNumber = "";
let secondNumber = "";
let nextNumber = "";
let operator = "";
// Makes numbers/decimal appear on screen as one "number" (string)
for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('click', function(e) {
        if (screen.textContent == 0) {
            x = e.target.textContent;
            if (x == ".") { // Disallows multiple decimal points
                decimal.style.pointerEvents = "none";
            };
            newInput = x;
        } else {
            screen.textContent = newInput;
            x = e.target.textContent;
            currentInput = screen.textContent;
            if (x == ".") { // Disallows multiple decimal points
                decimal.style.pointerEvents = "none";
            };
            newInput = currentInput + x;
        }
        screen.textContent = `${newInput}`.substring(0, 16);
        });
};

// Stores first input in variable after operator is pressed / stores operator
// while also enabling use of multiple operators
operatorButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        decimal.style.pointerEvents = "auto";
        if (firstNumber == "") {
            firstNumber = newInput;
            operator = e.target.textContent;
            newInput = "";
        } else if (firstNumber !== "" && operator !== "" ) {
            secondNumber = newInput;
            operate(firstNumber, secondNumber);
            operator = e.target.textContent;
            
            newInput = ""
        } else if (firstNumber !== "") {
            secondNumber = newInput;
            operate(firstNumber, secondNumber);
            operator = e.target.textContent;
            newInput = "";
        } else {
            operator = e.target.textContent;
            newInput = "";
        };   
    });
});

equal.addEventListener('click', (e) => {
    secondNumber = newInput;
    operate(firstNumber, secondNumber);
    decimal.style.pointerEvents = "auto";
    operator = "";
});

// Functions to use specific operator depending on what's clicked first / second
const operate = function(x, y) {
    x = Number(firstNumber);
    y = Number(secondNumber);
    if (x == 0 && y == 0 && operator == "/") {
        screen.textContent = "Nice try!";
    } else if (operator == "x") {
        result = x * y;
    } else if (operator == "/") {
        result = x / y;
    } else if (operator == "+") {
        result = x + y;
    } else if (operator == "-") {
        result = x - y;
    };
    total = Number(result.toFixed(2));
    firstNumber = total;
    secondNumber = "";
    newInput = "";
    screen.textContent = `${total}`;
};

// Function to clear screen and total. Resets decimal point button
const clearFunction = () => {
    total = 0;
    screen.textContent = "";
    decimal.style.pointerEvents = "auto";
    firstNumber = "";
    secondNumber = "";
    newInput = "";
    operator = "";
};

clearButton.addEventListener('click', () => clearFunction());