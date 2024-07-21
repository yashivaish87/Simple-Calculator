let Display = document.getElementById("Display");
let result = 0;

// update display
function display(num) {
    Display.value += num;
}

//calculate the result
function calculate() {
    try {
        result = eval(Display.value);
        Display.value = result;
    } catch (error) {
        Display.value = "Invalid input";
    }
}

// clear the display
function clearDisplay() {
    Display.value = "";
    result = 0;
}

// backspace (delete last character)
function backspace() {
    Display.value = Display.value.toString().slice(0, -1);
}

// perform modulus
function addPercent() {
    Display.value += "%";
}

// Handle keyboard input
document.addEventListener('keydown', function(event) {
    const key = event.key;

    // Define allowed keys
    const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '+', '-', '*', '/', '%'];

    // Handle special keys
    if (key === 'Backspace') {
        backspace();
    } else if (key === 'Enter' || key === '=') {
        calculate();
    } else if (key === 'Escape') {
        clearDisplay();
    } else if (validKeys.includes(key)) {
        display(key);
    } else {
        // Do nothing for irrelevant keys
        event.preventDefault();
    }
});
