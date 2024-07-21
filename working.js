let Display = document.getElementById("Display");
let result = 0;

function display(num) {
    Display.value += num;
}
function calculate() {
    try {
        result = eval(Display.value);
        Display.value = result;
    }
    catch (error) {
        alert("Invalid");
    }
}

function clearDisplay() {
    Display.value = "";
    result = 0;
}
function backspace() {
    Display.value = Display.value.toString().slice(0, -1);
}
function addPercent() {
    Display.value += "%";
}
document.addEventListener('keydown', function(event) {
    const key = event.key;

    if (key === 'Backspace') {
        backspace();
    } else if (key === 'Enter' || key === '=') {
        calculate();
    } else if (key === 'Escape') {
        clearDisplay();
    } else if (key === '%') {
        addPercent();
    } else if ((key >= '0' && key <= '9') || key === '.' || key === '+' || key === '-' || key === '*' || key === '/') {
        display(key);
    }
});
