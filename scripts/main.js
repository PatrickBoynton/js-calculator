const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

function pushNumber(e) {
    alert(e.target.value);
}

function pushOperator(e) {
    alert(e.target.value);
}

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", pushNumber);
}

for (let i = 0; i < numbers.length; i++) {
    operators[i].addEventListener("click", pushOperator);
}
