$(document).ready(function () {
    var result = 0;
    var prevEntry = 0;
    var operation = null;
    var currentEntry = '0';
    updateScreen(result);

    $('.button').on('click', function (evt) {
        var buttonPressed = $(this).html();
        console.log(buttonPressed);

        if (buttonPressed === "C") {
            result = 0;
            currentEntry = '0';
        } else if (buttonPressed === "CE") {
            currentEntry = '0';
        } else if (buttonPressed === "back") {
            currentEntry = currentEntry.substring(0, currentEntry.length - 1);
        } else if (buttonPressed === "+/-") {
            currentEntry = -currentEntry;
        } else if (buttonPressed === '-') {
            currentEntry += '-';
        } else if (isNumber(buttonPressed)) {
            if (currentEntry === '0') {
                currentEntry = buttonPressed;
            } else {
                currentEntry += buttonPressed;
            }
        } else if (isOperator(buttonPressed)) {
            prevEntry = parseFloat(currentEntry);
            operation = buttonPressed;
            currentEntry = '';
        } else if (buttonPressed === "%") {
            currentEntry /= 100;
        } else if (buttonPressed === "sqrt") {
            currentEntry = Math.sqrt(parseFloat(currentEntry));
        } else if (buttonPressed === "1/x") {
            currentEntry = 1 / parseFloat(currentEntry);
        } else if (buttonPressed === "pi") {
            currentEntry = Math.PI;
        } else if (buttonPressed === "=") {
            currentEntry = operate(prevEntry, currentEntry, operation);
            operation = null;
        }

        updateScreen(currentEntry);
    });
});

var updateScreen = function (displayValue) {
    var displayValue = displayValue.toString();
    $('.screen').html(displayValue.substring(0, 10));
};

var isNumber = function (value) {
    return !isNaN(value);
};

var isOperator = function (value) {
    return value === '/' || value === '*' || value === '+' || value === '-';
};

var operate = function (a, b, operation) {
    a = parseFloat(a);
    b = parseFloat(b);
    console.log(a, b, operation);
    if (operation === '+') return a + b;
    if (operation === '-') return a - b;
    if (operation === '*') return a * b;
    if (operation === '/') return a / b;
};
