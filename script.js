const number1 = ""
const number2 = ""
const operator = ""

function sum(num1, num2) {
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
    return sum(number1, number2)
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
