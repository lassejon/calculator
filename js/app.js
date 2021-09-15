function add(first, last) {
    return first + last;
}

function subtract(first, last) {
    return first - last;
}

function multiply(first, last) {
    return first * last;
}

function divide(first, last) {
    return first / last;
}

function modulus(first, last) {
    return first % last;
}

function operate(operator, first, last) {
    switch (operator) {
        case "+":
            add(first, last);
            break;
        case "-":
            subtract(first, last)
            break;
        case "*":
            multiply(first, last)
            break;
        case "/":
            divide(first, last)
            break;
        default:
            break;
    }
}

