let display = document.getElementById('display');

             function appendToDisplay(value) {
                display.value += value;
}

             function clearDisplay() {
                display.value = '';
}
             function clearoneDisplay() {
                let currentDisplayValue= display.value;
                display.value = currentDisplayValue.toString().slice(0, -1);
             }

             function calculateResult() {

                try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error :(';
    }
}