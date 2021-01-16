const input = document.querySelector("input");
const clear = document.querySelector(".clear");
const decimal = document.querySelector(".decimal");

const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector(".equal-sign");

//Checks the number of times the button was clicked.
let clickCount = 0;

function pushNumber(e) {
    if (input.value === "0") {
        input.value = e.target.value;
    } else {
        input.value = e.target.value;
    }
}


function pushOperator(e) {
    alert(e.target.value);
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

equals.addEventListener("click", (e) => {
    console.log("Clicked!");
})
