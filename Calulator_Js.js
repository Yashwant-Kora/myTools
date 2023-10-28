let display = document.getElementById('display');
let currentInput = '';
let operator = '';

function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    display.value = '';
}

function calculateResult() {
    if (currentInput === '') {
        return;
    }

    let result;
    try {
        result = eval(currentInput);
    } catch (error) {
        result = 'Error';
    }

    display.value = result;
    currentInput = result.toString();
}


