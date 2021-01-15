const input = document.querySelector("input");
const clear = document.querySelector(".clear");
const decimal = document.querySelector(".decimal");

const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

//Checks the number of times the button was clicked.
let clickCount = 0;
let numsForMath = [];

function pushNumber(e) {
    //Removes the 0 if it is the first number, else it just adds
    // whatever is next.
    if (input.value === "0") {
        input.value = e.target.value;
        numsForMath.push(e.target.value);
    } else {
        input.value += e.target.value;
        numsForMath.push(e.target.value);
    }
}

function pushOperator(e) {
    //Will perform mathematics based on the target operator.
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
            input.value = "0";
            console.log(numsForMath);
            break;
        default:
            console.log(`${e.target.value} is not an operator.`);
    }
}

//Selects all of the buttons based on the query selector.
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", pushNumber);
}

for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", pushOperator);
}

clear.addEventListener("click", (e) => {
    clickCount = 0;
    numsForMath = [];
    input.value = "0";
    console.log(numsForMath);
});

decimal.addEventListener("click", (e) => {
    clickCount++;

    if (clickCount < 2) {
        input.value = `${input.value}${e.target.value}`;
    }
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
