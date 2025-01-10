// Aguarda o carregamento da página
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona o formulário de login
    const form = document.getElementById('loginForm');

    // Adiciona um evento "submit" ao formulário
    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Evita o comportamento padrão (recarregar a página)

        // Captura os dados do formulário
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Codifica as credenciais em Base64
        const credentials = btoa(`${username}:${password}`);

        // Faz uma requisição POST ao servidor
        try {
            const response = await fetch('/auth', {
                method: 'POST',
                headers: {
                    'Authorization': `Basic ${credentials}`
                }
            });

            // Redireciona com base na resposta do servidor
            if (response.redirected) {
                window.location.href = response.url;
            } else {
                alert('Erro na autenticação.');
            }
        } catch (error) {
            console.error('Erro na autenticação:', error);
        }
    });
});
