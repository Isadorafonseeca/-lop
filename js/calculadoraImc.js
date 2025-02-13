// Função que calcula o IMC
function calcularIMC() {
    // Obtém os valores de peso e altura do formulário
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value) / 100; // Converte cm para metros

    // Verifica se os valores são válidos
    if (isNaN(peso) || isNaN(altura)) {
        alert('Por favor, insira valores válidos para peso e altura.');
        return;
    }

    // Calcula o IMC
    const imc = peso / (altura * altura);

    // Determina a classificação do IMC
    let classificacao = '';

    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc <= 24.9) {
        classificacao = 'Peso normal';
    } else if (imc >= 24.91 && imc <= 29.9) {
        classificacao = 'Sobrepeso';
    } else {
        classificacao = 'Obesidade';
    }

    // Exibe o resultado
    const resultado = `Seu IMC é ${imc.toFixed(2)} (${classificacao}).`;
    document.getElementById('result').textContent = resultado;
}
