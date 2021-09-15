let result = document.getElementById("result");
let prev = document.getElementById("num");
let operator = document.getElementById("operator-sign");;

const defaultResult = "0"
const defaultPrev = ""
const defaultOperator = ""
const numberButtons = document.querySelectorAll('button[type=number]')
const deleteButton = document.getElementById('delete')
const clearButton = document.getElementById('clear')
const equalsButton = document.querySelector('button[type=equals]')
const operatorButtons = document.querySelectorAll('button[type=operator]')

numberButtons.forEach(element => element.addEventListener('click', () => {
    updateResult(element.textContent)
}))

operatorButtons.forEach(element => element.addEventListener('click', () => {

    operator.textContent = element.textContent;
    prev.textContent = result.textContent
}))

equalsButton.addEventListener('click', () => equals())

clearButton.addEventListener('click', () => clear())



function updateResult(number) {
    if ((result.textContent === defaultResult)) {
        result.textContent = number;
        return
    } 
    result.textContent += number;
}

function clear() {
    result.textContent = defaultResult
    prev.textContent = defaultPrev
    operator.textContent = defaultOperator
}

function add(first, last) {
    return first + last;
}

function subtract(first, last) {
    return first - last;
}

function multiply(first, last) {
    let result = first * last;
    if (isNaN(result)) {
        result = 0
    }
    return result
}

function divide(first, last) {
    if (result)
    let result = first / last;
    if (isNaN(result)) {
        result = 0
    }
    return result
}

function equals() {
    if(prev.textContent !== defaultPrev || 0) {
        console.log(operate(operator.textContent, Number(prev.textContent),
        Number(result.textContent)));
        prev.textContent = operate(operator.textContent, Number(prev.textContent),
            Number(result.textContent));
        
    } else {
        prev.textContent = result.textContent
    }
    
    result.textContent = defaultResult
}

function operate(operator, first, last) {
    switch (operator) {
        case "+":
            return add(first, last);
            break;
        case "-":
            return subtract(first, last)
            break;
        case "x":
            return multiply(first, last)
            break;
        case "÷":
            return divide(first, last)
            break;
        default:
            return equals();
            break;
    }
}

