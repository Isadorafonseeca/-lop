document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o formulário pelo seu ID
    const form = document.getElementById('contactForm');

    // Adiciona um evento de 'submit' ao formulário
    form.addEventListener('submit', function(event) {
        // Previne o comportamento padrão do formulário (não recarregar a página)
        event.preventDefault();

        // Validação do e-mail
        const emailInput = form.email.value;
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(emailInput)) {
            // Mostra um alerta se o e-mail não for válido
            alert('Por favor, insira um e-mail válido.');
            return; // Sai da função se a validação falhar
        }

        // Validação do WhatsApp (apenas números)
        const whatsappInput = form.whatsapp.value;
        const whatsappPattern = /^[0-9]+$/;
        if (!whatsappPattern.test(whatsappInput)) {
            // Mostra um alerta se o número do WhatsApp não for válido
            alert('Por favor, insira um número de WhatsApp válido (apenas números).');
            return; // Sai da função se a validação falhar
        }
        form.reset(); // Reseta o formulário para os valores iniciais
    });
});
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const whatsapp = document.getElementById('whatsapp').value;
    const message = document.getElementById('message').value;
    
    const queryString = `?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&whatsapp=${encodeURIComponent(whatsapp)}&message=${encodeURIComponent(message)}`;
    
    window.location.href = 'resposta.html' + queryString;
});

