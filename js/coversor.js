document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('conversorForm');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Obtém os valores do formulário
        const value = parseFloat(form.value.value);
        const conversionType = form.conversionType.value;

        let result;

        // Realiza a conversão com base no tipo selecionado
        switch (conversionType) {
            case 'celsiusToFahrenheit':
                result = (value * 9/5) + 32; // Converte Celsius para Fahrenheit
                resultDiv.textContent = `${value} °C = ${result.toFixed(2)} °F`;
                break;
            case 'metersToCentimeters':
                result = value * 100; // Converte Metros para Centímetros
                resultDiv.textContent = `${value} metros = ${result.toFixed(2)} centímetros`;
                break;
            case 'kilosToPounds':
                result = value * 2.20462; // Converte Quilos para Libras
                resultDiv.textContent = `${value} kg = ${result.toFixed(2)} libras`;
                break;
            default:
                resultDiv.textContent = 'Tipo de conversão desconhecido.';
        }
    });
});
