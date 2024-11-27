 // Função para atualizar a pré-visualização dos dados
 function updatePreview() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const avaliacao = document.querySelector('input[name="avaliacao"]:checked');
    const feedbacks = Array.from(document.querySelectorAll('input[name="opcao"]:checked')).map(input => input.value);
    const comentarios = document.getElementById("add").value;

    const preview = {
        "Nome": nome,
        "Email": email,
        "Avaliação": avaliacao ? avaliacao.value : "",
        "Feedback": feedbacks,
        "Comentários": comentarios
    };

    // Exibir a pré-visualização
    document.getElementById("dados").textContent = JSON.stringify(preview, null, 2);
}

// Função para validar o formulário
function validateForm(event) {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const avaliacao = document.querySelector('input[name="avaliacao"]:checked');
    const feedbacks = document.querySelectorAll('input[name="opcao"]:checked');
    
    if (!nome || !email || !avaliacao || feedbacks.length === 0) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        event.preventDefault(); // Impede o envio do formulário
    }
}

// Adicionar ouvintes de eventos
document.getElementById("feedbackForm").addEventListener("submit", validateForm);
document.getElementById("feedbackForm").addEventListener("input", updatePreview);  // Atualiza a pré-visualização ao digitar