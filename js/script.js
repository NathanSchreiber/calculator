const container = document.querySelector('#container');
const screen = document.querySelector('#screen');
const clearButton = document.querySelector('#clear-button');
const equal = document.querySelector('#equal');
const add = document.querySelector('#add');
const subtract = document.querySelector('#subtract');
const multiply = document.querySelector('#multiply');
const divide = document.querySelector('#divide');

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

// Function to clear screen and total. Resets decimal point button
clearButton.addEventListener('click', () => {
    total = 0;
    screen.textContent = 0;
    decimal.style.pointerEvents = "auto";
});

// Function to use specific operator depending on what's clicked
const operate = function(x, y) {
    add.addEventListener('click', () => {
        total = x + y;
    });
    subtract.addEventListener('click', () => {
        total = x - y;
    });
    multiply.addEventListener('click', () => {
        total = x * y;
    });
    divide.addEventListener('click', () => {
        total = x / y;
    });
    equal.addEventListener('click', () => {
        screen.textContent = `${total}`;
    });
};

// one.addEventListener('click', (e) => {
//     x = e.target.textContent;
//     screen.textContent = `${x}`;
// });

// Makes numbers/decimal appear on screen as one "number" (string)
for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("click", function(e) {
      if (screen.textContent == 0) {
        x = e.target.textContent;
        if (x == ".") { // Disallows multiple decimal points
            decimal.style.pointerEvents = "none";
        };
        newInput = x;
      } else {
        x = e.target.textContent;
        currentInput = screen.textContent;
        if (x == ".") { // Disallows multiple decimal points
            decimal.style.pointerEvents = "none";
        };
        newInput = currentInput + x;
      }
      screen.textContent = `${newInput}`;
    });
};