const input = document.querySelector("input");
const clear = document.querySelector(".clear");
const decimal = document.querySelector(".decimal");

const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector(".equal-sign");

//Checks the number of times the button was clicked.
let clickCount = 0;
let sum = 0;
let numsForMath = [];

function pushNumber(e) {
    if (input.value === "0") {
        input.value = e.target.value;
        numsForMath.push(parseInt(input.value));
        console.log(e.target.value);
    }
}

function switchOperators(e) {
    if (numsForMath.length > 0) {
        switch (e.target.value) {
            case "+":
                for (let i = 0; i < numsForMath.length; i++) {
                    sum += numsForMath[i];
                }
                console.log(sum);
                break;
            case "-":
                for (let i = 0; i < numsForMath.length; i++) {
                    sum -= numsForMath[i];
                }
                console.log(numsForMath);
                console.log(sum);
                break;
            case "*":
                for (let i = 0; i < numsForMath.length; i++) {
                    sum *= numsForMath[i];
                }
                console.log(numsForMath);
                console.log(sum);
                break;
            case "/":
                for (let i = 0; i < numsForMath.length; i++) {
                    sum /= numsForMath[i];
                }
                console.log(sum);
                break;
            default:
                input.value = "Error";
                break;
        }
    }
}

function pushOperator(e) {
    switchOperators(e);
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
});

decimal.addEventListener("click", (e) => {
    clickCount++;

    if (clickCount < 2) {
        input.value = `${input.value}${e.target.value}`;
    }
});
