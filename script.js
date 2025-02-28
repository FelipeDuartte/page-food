document.addEventListener('DOMContentLoaded', function () {
    const ctaButton = document.getElementById('cta-button');
    const form = document.getElementById('formEndereco');
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    // Botão de Call-To-Action (se existir)
    if (ctaButton) {
        ctaButton.addEventListener('click', function () {
            alert('Você será redirecionado para a página de compras!');
        });
    }

    // Validação e envio do formulário
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();

            const nome = document.getElementById('nome').value.trim();
            const endereco = document.getElementById('endereco').value.trim();
            const cidade = document.getElementById('cidade').value.trim();
            const cep = document.getElementById('cep').value.trim();
            const cepRegex = /^\d{5}-\d{3}$/; // Formato 00000-000

            if (!nome || !endereco || !cidade || !cep) {
                alert('Por favor, preencha todos os campos corretamente.');
                return;
            }

            if (!cepRegex.test(cep)) {
                alert('Por favor, insira um CEP válido no formato 00000-000.');
                return;
            }

            alert(`Endereço confirmado:\n\nNome: ${nome}\nEndereço: ${endereco}\nCidade: ${cidade}\nCEP: ${cep}`);
        });
    }

    // Menu responsivo
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function () {
            const isOpen = nav.classList.toggle('active');
            menuToggle.classList.toggle('open');
            menuToggle.setAttribute('aria-expanded', isOpen);
        });
    }
});
