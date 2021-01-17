const input = document.querySelector("input");
const clear = document.querySelector(".clear");
const decimal = document.querySelector(".decimal");
const minus = document.querySelector(".plus-minus");
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

    calculation.push(parseFloat(input.value));
    console.log(input.value);
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
                if (calculation[i] !== "+") {
                    sum += parseFloat(calculation[i]);
                }
                break;
            case "-":
                sum = calculation[0];

                if (calculation[i] !== "-")
                    sum -= calculation[i];
                break;
            case "*":
                sum = 1;
                if (calculation[i] !== "*")
                    sum = calculation[i] * calculation[i]
                break;
            case "/":
                sum = calculation[0];
                if (calculation[i] !== "/") {
                    sum /= calculation[i];
                }
                break;
        }
    }
    console.log(calculation);
    input.value = String(sum);
}

equals.addEventListener("click", calculate);

minus.addEventListener("click", (e) => {
    // So that zero won't be made negative.
    if (input.value.indexOf("-") < 0 && input.value !== "0") {
        input.value = `${parseFloat(input.value )* -1}`;
        console.log(input.value);
    } else {
        input.value = `${parseFloat(input.value )* -1}`;
    }
});
