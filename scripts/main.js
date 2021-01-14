const input = document.querySelector("input");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const clear = document.querySelector(".clear");

function pushNumber(e) {
    if (e.target.value === 0) {
        input.value = e.target.value;
    } else {
        input.value += e.target.value;
    }
}

function pushOperator(e) {
    alert(e.target.value);
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
