document.addEventListener('DOMContentLoaded', function () {
    const ctaButton = document.getElementById('cta-button');
    const form = document.getElementById('formEndereco');
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    if (ctaButton) {
        ctaButton.addEventListener('click', function () {
            alert('Você será redirecionado para a página de compras!');
        });
    }

    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();

            const nome = document.getElementById('nome').value.trim();
            const endereco = document.getElementById('endereco').value.trim();
            const cidade = document.getElementById('cidade').value.trim();
            const cep = document.getElementById('cep').value.trim();

            if (!nome || !endereco || !cidade || !cep) {
                alert('Por favor, preencha todos os campos corretamente.');
                return;
            }

            alert(`Endereço confirmado:\n\nNome: ${nome}\nEndereço: ${endereco}\nCidade: ${cidade}\nCEP: ${cep}`);
        });
    }

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function () {
            nav.classList.toggle('active');
            menuToggle.classList.toggle('open');
        });
    }
});
