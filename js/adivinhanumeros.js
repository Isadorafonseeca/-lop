// Gera um número aleatório entre 1 e 100
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
// Variável para contar o número de tentativas
let tentativas = 0;

// Função que verifica o palpite do usuário
function checkGuess() {
    // Obtém o valor do palpite do usuário
    const guess = parseInt(document.getElementById('guess').value);

    // Verifica se o valor é válido
    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert('Por favor, insira um número entre 1 e 100.');
        return;
    }

    // Incrementa o contador de tentativas
    tentativas++;

    // Variável para armazenar a mensagem de retorno
    let mensagem = '';

    // Compara o palpite com o número aleatório
    if (guess < numeroAleatorio) {
        mensagem = 'Maior!';
    } else if (guess > numeroAleatorio) {
        mensagem = 'Menor!';
    } else {
        mensagem = `Parabéns! Você acertou o número ${numeroAleatorio} em ${tentativas} tentativas.`;
    }

    // Exibe a mensagem
    document.getElementById('result').textContent = mensagem;
}