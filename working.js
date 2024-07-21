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
        alert("Invalid")
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