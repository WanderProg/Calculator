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
const zero = document.querySelector(".zero")
const dot = document.querySelector(".dot")
const is = document.querySelector(".is")

ac.addEventListener("click", () => {
  display.value = ""
})

seven.addEventListener("click", () => {
  clearIfError()
  display.value += 7
})

eight.addEventListener("click", () => {
  clearIfError()
  display.value += 8
})

nine.addEventListener("click", () => {
  clearIfError()
  display.value += 9
})

six.addEventListener("click", () => {
  clearIfError()
  display.value += 6
})

five.addEventListener("click", () => {
  display.value += 5
})

four.addEventListener("click", () => {
  clearIfError()
  display.value += 4
})

three.addEventListener("click", () => {
  clearIfError()
  display.value += 3
})

two.addEventListener("click", () => {
  clearIfError()
  display.value += 2
})

one.addEventListener("click", () => {
  clearIfError()
  display.value += 1
})

zero.addEventListener("click", () => {
  clearIfError()
  display.value += 0
})
plus.addEventListener("click", () => {
  clearIfError()
  if (
    display.value.includes("+") ||
    display.value.includes("-") ||
    display.value.includes("*") ||
    display.value.includes("/")
  ) {
    display.value = calculateData(display.value)
  }
  display.value += "+"
})

minus.addEventListener("click", () => {
  clearIfError()
  if (
    display.value.includes("+") ||
    display.value.includes("-") ||
    display.value.includes("*") ||
    display.value.includes("/")
  ) {
    display.value = calculateData(display.value)
  }
  display.value += "-"
})

divides.addEventListener("click", () => {
  clearIfError()
  if (
    display.value.includes("+") ||
    display.value.includes("-") ||
    display.value.includes("*") ||
    display.value.includes("/")
  ) {
    display.value = calculateData(display.value)
  }
  display.value += "/"
})

multiplyer.addEventListener("click", () => {
  clearIfError()
  if (
    display.value.includes("+") ||
    display.value.includes("-") ||
    display.value.includes("*") ||
    display.value.includes("/")
  ) {
    display.value = calculateData(display.value)
  }
  display.value += "*"
})

is.addEventListener("click", () => {
  clearIfError()
  display.value = calculateData(display.value)
})

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

function operate(operator, number1, number2) {
  switch (operator) {
    case "+":
      return add(number1, number2)
      break
    case "-":
      return subtract(number1, number2)
      break
    case "*":
      return multiply(number1, number2)
      break
    case "/":
      return divide(number1, number2)
  }
}
function clearIfError() {
  if (
    display.value === "Error" ||
    display.value === "Infinity" ||
    display.value === "undefined" ||
    display.value === "NaN" ||
    display.value.includes("NaN/") ||
    display.value.includes("0*")
  ) {
    display.value = ""
    return ""
  }
}

function cantHandle() {
  return "Error"
}

function cantOperate() {

}

function calculateData(calculatorString) {
  let currentValue = calculatorString

  let firstValue = ""
  let operator = ""
  let secondValue = ""

  for (i = 0; i < currentValue.length; i++) {
  if (
      currentValue[i] === "+" ||
      currentValue[i] === "-" ||
      currentValue[i] === "*" ||
      currentValue[i] === "/"
    ) {
      operator = currentValue[i]
    } else {
      if (operator == "") {
        firstValue += currentValue[i]
      } else {
        secondValue += currentValue[i]
      }
    }
  if(operator === "-" && secondValue.includes("+")) {
    return "Error"
  }  
  if(operator == "*" && firstValue === "*" && secondValue === "*") {
    return cantHandle()
  } 
  if(operator === "-" && firstValue.includes("+")) {} 
  }

  if (
    (operator === "/" && secondValue.includes(0))
  ) {
    return cantHandle()
  }

  return operate(operator, Number(firstValue), Number(secondValue))
}

