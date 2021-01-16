const input = document.querySelector("input");
const clear = document.querySelector(".clear");
const decimal = document.querySelector(".decimal");

const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector(".equal-sign");

//Checks the number of times the button was clicked.
let clickCount = 0;
let calculation = [];

function pushNumber(e) {
    if (input.value === "0") {
        input.value = e.target.value;
    } else {
        input.value = e.target.value;
    }

    calculation.push(parseInt(e.target.value));
}


function pushOperator(e) {
    // alert(e.target.value);
    calculation.push(e.target.value);
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
    calculation = [];
    input.value = "0";
});

// Works if more than 1 number is allowed by the calculator.
decimal.addEventListener("click", (e) => {
    clickCount++;
    // Prevents more than one decimal from being added.
    if (clickCount < 2) {
        input.value = `${input.value}${e.target.value}`;
    }
});

function calculate(e) {
    let sum = 0;

    for (let i = 0; i < calculation.length; i++) {
        // Assumes that position 1 in the array will always be the operator.
        switch (calculation[1]) {
            case "+":
                if (calculation[i] !== "+")
                    console.log(sum += parseInt(calculation[i]));
                break;
            case "-":
                sum = calculation[0];

                if (calculation[i] !== "-")
                    console.log(sum -= calculation[i]);
                break;
            case "*":
                sum = 1;
                if (calculation[i] !== "*")
                    console.log(sum *= calculation[i]);
                break;
            case "/":
                sum = calculation[0];
                if (calculation[i] !== "/") {
                    console.log(sum /= calculation[i]);
                }
                break;
        }

        // if (calculation[i] !== "*") {
        //     sum = 1;
        //
        // }
    }
    console.log(sum);
    input.value = String(sum);
}

equals.addEventListener("click", calculate)
