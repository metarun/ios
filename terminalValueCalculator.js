function calculateTerminalValue() {
    const terminalInput = document.getElementById('terminalValue');
    const rfrInput = document.getElementById('rfrValue');
    const earningsInput = document.getElementById('earningsValue');
    const resultDiv = document.getElementById('terminalResult');
    
    const tv = parseFloat(terminalInput.value);
    const rfr = parseFloat(rfrInput.value) / 100;  // Convert RFR to decimal for calculation
    const earnings = parseFloat(earningsInput.value);

    const filledFields = [!isNaN(tv), !isNaN(rfr), !isNaN(earnings)].filter(Boolean).length;

    // Check if exactly two fields are filled
    if (filledFields !== 2) {
        alert("Please fill exactly two of the three fields.");
        return;
    }

    let calculatedValue;

    // Calculate the missing value based on which two fields are filled
    if (isNaN(tv)) {
        // Calculate Terminal Value (TV) when RFR and Earnings are provided
        calculatedValue = earnings / (1 + rfr);
        document.getElementById('calculatedValue').textContent = `Calculated Terminal Value: ${calculatedValue.toFixed(2)}`;
    } else if (isNaN(rfr)) {
        // Calculate Risk-Free Rate (RFR) when TV and Earnings are provided
        calculatedValue = (earnings / tv) - 1;
        document.getElementById('calculatedValue').textContent = `Calculated Risk-Free Rate: ${(calculatedValue * 100).toFixed(2)}%`;
    } else if (isNaN(earnings)) {
        // Calculate Earnings when TV and RFR are provided
        calculatedValue = tv * (1 + rfr);
        document.getElementById('calculatedValue').textContent = `Calculated Earnings: ${calculatedValue.toFixed(2)}`;
    }

    resultDiv.style.display = 'block';
}
