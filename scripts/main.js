const input = document.querySelector("input");
const clear = document.querySelector(".clear");
const decimal = document.querySelector(".decimal");

const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

function pushNumber(e) {
    if (input.value === "0") {
        input.value = e.target.value;
    } else {
        input.value += e.target.value;
    }
}

function pushOperator(e) {
    switch (e.target.value) {
        case "/":
            console.log(`Pushed ${e.target.value}`);
            break;
        case "*":
            console.log(`Pushed ${e.target.value}`);
            break;
        case "-":
            console.log(`Pushed ${e.target.value}`);
            break;
        case "+":
            console.log(`Pushed ${e.target.value}`);
            break;
        default:
            console.log(`${e.target.value} is not an operator.`);
    }
}

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", pushNumber);
}

for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", pushOperator);
}

clear.addEventListener("click", (e) => {
    input.value = "0";
});

//Checks the number of times the button was clicked.
let clickCount = 0;
decimal.addEventListener("click", (e) => {
    clickCount++;

    if (clickCount < 2) {
        input.value = `${input.value}${e.target.value}`;
    }
    clickCount = 0;
});

// Math functions
const add = function (x, y) {
    return x + y;
}

const subtract = function (x, y) {
    return x - y;
}

const multiply = function (x, y) {
    return x * y;
}

const divide = function (x, y) {
    return x / y;
}
