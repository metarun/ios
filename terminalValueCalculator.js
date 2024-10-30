function calculateTerminalValue() {
    const terminalInput = document.getElementById('terminalValue');
    const rfrInput = document.getElementById('rfrValue');
    const earningsInput = document.getElementById('earningsValue');
    const resultDiv = document.getElementById('terminalResult');
    
    const tv = parseFloat(terminalInput.value);
    const rfr = parseFloat(rfrInput.value);
    const earnings = parseFloat(earningsInput.value);

    if (isNaN(tv) || isNaN(rfr) || isNaN(earnings)) {
        alert("Please enter valid numbers in all fields.");
        return;
    }

    const calculatedValue = tv / ((1 + rfr / 100) - earnings);
    document.getElementById('calculatedValue').textContent = calculatedValue.toFixed(2);
    resultDiv.style.display = 'block';
}
