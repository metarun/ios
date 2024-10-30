function calculateTerminalValue() {
    const terminalValue = parseFloat(document.getElementById('terminalValue').value);
    const rfrValue = parseFloat(document.getElementById('rfrValue').value);
    const earningsValue = parseFloat(document.getElementById('earningsValue').value);
    const resultContainer = document.getElementById('terminalResult');

    resultContainer.style.display = 'none';

    const enteredValues = [terminalValue, rfrValue, earningsValue].filter(value => !isNaN(value));
    if (enteredValues.length < 2) {
        resultContainer.textContent = 'Please enter at least two values for calculation.';
        resultContainer.style.display = 'block';
        return;
    }

    let result;
    if (!isNaN(terminalValue) && !isNaN(rfrValue)) {
        result = terminalValue / (1 + rfrValue / 100);
    } else if (!isNaN(rfrValue) && !isNaN(earningsValue)) {
        result = earningsValue / (rfrValue / 100);
    } else if (!isNaN(terminalValue) && !isNaN(earningsValue)) {
        result = (earningsValue / terminalValue) * 100;
    }

    if (result !== undefined) {
        resultContainer.textContent = `Calculated Value: ${result.toFixed(2)}`;
        resultContainer.style.display = 'block';
    }
}
