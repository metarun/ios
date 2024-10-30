function calculatePercentage() {
    clearPercentageErrors();
    const xInput = document.getElementById('xValue');
    const yInput = document.getElementById('yValue');
    const resultDiv = document.getElementById('result');
    
    const x = parseFloat(xInput.value);
    const y = parseFloat(yInput.value);

    if (isNaN(x)) {
        showError('xError', 'Please enter a valid number');
        return;
    }
    if (isNaN(y)) {
        showError('yError', 'Please enter a valid number');
        return;
    }
    if (x === 0) {
        showError('xError', 'Initial value cannot be zero');
        return;
    }

    const yPercentOfX = (y / x) * 100;
    const absoluteChange = y - x;
    const percentageChange = (absoluteChange / Math.abs(x)) * 100;
    
    document.getElementById('yPercentOfX').textContent = `${yPercentOfX.toFixed(2)}%`;
    document.getElementById('percentageChange').textContent = `${percentageChange.toFixed(2)}%`;
    document.getElementById('absoluteChange').textContent = absoluteChange.toFixed(2);

    resultDiv.style.display = 'block';
    resultDiv.className = 'result ' + (percentageChange >= 0 ? 'positive' : 'negative');
}

function clearPercentageFields() {
    document.getElementById('xValue').value = '';
    document.getElementById('yValue').value = '';
    document.getElementById('result').style.display = 'none';
    clearPercentageErrors();
}

function clearPercentageErrors() {
    document.getElementById('xError').style.display = 'none';
    document.getElementById('yError').style.display = 'none';
}

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}
