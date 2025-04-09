document.addEventListener("DOMContentLoaded", () => {
    // Botão de Call-To-Action
    const ctaButton = document.getElementById('cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            alert('Você será redirecionado para a página de compras!');
        });
    }

    // Validação e envio do formulário
    const form = document.getElementById('formEndereco');
    if (form) {
        form.addEventListener('submit', (event) => {
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
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            const isOpen = nav.classList.toggle('active');
            menuToggle.classList.toggle('open');
            menuToggle.setAttribute('aria-expanded', isOpen);
        });
    }

    // Toggle de categorias
    const categorias = document.querySelectorAll(".categoria");
    categorias.forEach(categoria => {
        const titulo = categoria.querySelector("h3");
        const grid = categoria.querySelector(".grid-container");

        titulo.style.cursor = "pointer";

        const arrow = titulo.querySelector(".arrow");

        // Verifica se é a categoria de pizzas
        const isPizza = titulo.textContent.toLowerCase().includes("pizza");

        if (isPizza) {
            // Garante que pizzas esteja visível
            grid.classList.remove("hidden");
            if (arrow) arrow.classList.remove("rotated");
        } else {
            // Oculta as outras
            grid.classList.add("hidden");
            if (arrow) arrow.classList.remove("rotated");
        }

        // Evento de clique para abrir/fechar
        titulo.addEventListener("click", () => {
            grid.classList.toggle("hidden");
            if (arrow) {
                arrow.classList.toggle("rotated");
            }
        });
    });
});
