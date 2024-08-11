const display = document.querySelector("#display")
const ac = document.querySelector(".AC")
const plusMinus = document.querySelector(".plus-minus")
const modules = document.querySelector(".modules")
const divides = document.querySelector(".divide")
const seven = document.querySelector(".seven")
const eight = document.querySelector(".eight")
const nine = document.querySelector(".nine")
const multiplyer = document.querySelector(".multiply")
const four = document.querySelector(".four")
const five = document.querySelector(".five")
const six = document.querySelector(".six")
const minus = document.querySelector(".minus")
const one = document.querySelector(".one")
const two = document.querySelector(".two")
const three = document.querySelector(".three")
const plus = document.querySelector(".plus")
const zer0 = document.querySelector(".zer0")
const dot = document.querySelector(".dot")
const is = document.querySelector(".is")


ac.addEventListener("click", () => {
    display.innerHTML = " "
})

seven.addEventListener("click", () => {
    const sevenIn = 7;
    display.innerHTML += sevenIn; // This appends the number 7 to the existing content in display
});

console.log(modules)


const number1 = ""
const number2 = ""
const operator = ""

function add(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2
}

function operate (operator, number1, number2) {
    switch (operator) {
    case '+':
    return add(number1, number2)
    break;
    case '-':
    return subtract(number1, number2)
    break;
    case '*':
    return multiply(number1, number2)
    break;
    case '/':
    return divide(number1, number2)
    }
    }

    console.log(operate("+", 10, 15))
