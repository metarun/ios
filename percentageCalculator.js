function calculatePercentage() {
    const xValue = parseFloat(document.getElementById('xValue').value);
    const yValue = parseFloat(document.getElementById('yValue').value);
    const xError = document.getElementById('xError');
    const yError = document.getElementById('yError');
    const resultContainer = document.getElementById('percentageResult');

    xError.style.display = 'none';
    yError.style.display = 'none';
    resultContainer.style.display = 'none';

    if (isNaN(xValue) || isNaN(yValue)) {
        if (isNaN(xValue)) {
            xError.textContent = 'Please enter a valid number for X.';
            xError.style.display = 'block';
        }
        if (isNaN(yValue)) {
            yError.textContent = 'Please enter a valid number for Y.';
            yError.style.display = 'block';
        }
        return;
    }

    const percentageChange = ((yValue - xValue) / xValue) * 100;
    resultContainer.textContent = `Percentage Change: ${percentageChange.toFixed(2)}%`;
    resultContainer.style.display = 'block';
}
