window.entrar = function() {
    console.log("Botão clicado!");

    // Tentamos achar os IDs (aceita tanto o nome novo quanto o antigo)
    const login = document.getElementById('loginScreen');
    const app = document.getElementById('appContainer') || document.getElementById('appScreen');

    if (login && app) {
        // Salva o login com a nova chave do projeto Ppl
        localStorage.setItem("@ReclamePpl:logado", "true");

        // TROCA AS TELAS
        login.style.display = 'none';
        app.style.display = 'block';
        
        // Se a função de carregar o feed existir, executa ela
        if (typeof loadComplaints === "function") {
            loadComplaints();
        }
        
        console.log("Entrou com sucesso!");
    } else {
        // Se der erro, ele vai te dizer exatamente qual nome está faltando
        alert("Erro de IDs:\nLogin encontrado: " + (!!login) + "\nApp encontrado: " + (!!app));
        console.log("Verifique se no HTML existe id='loginScreen' e id='appContainer'");
    }
};

// Mantendo o resto das funções que já funcionam
window.logout = function() {
    localStorage.removeItem("@ReclamePpl:logado");
    location.reload();
};

window.onload = function() {
    // Verifica a sessão usando a nova chave Ppl
    if (localStorage.getItem("@ReclamePpl:logado") === "true") {
        const login = document.getElementById('loginScreen');
        const app = document.getElementById('appContainer') || document.getElementById('appScreen');
        if (login && app) {
            login.style.display = 'none';
            app.style.display = 'block';
        }
    }
};
