
const historia = document.getElementById("historia");
const mensagem = document.getElementById("mensagem");
const botaoVoltar = document.getElementById("voltar");
const botaoReiniciar = document.getElementById("reiniciar");

const historiaInicial = historia.innerHTML;
const caminhos = {
    castelo: `
        <p>🏰 Você chegou a um castelo misterioso!</p>
        <p>Uma porta dourada está entreaberta. O que você faz?</p>
        <button class="escolha" data-destino="tesouro">
            ✨ Entrar na sala dourada
        </button>
        <button class="escolha" data-destino="jardim">
            🌹 Explorar o jardim
        </button>
    `,
    rio: `
        <p>🌊 Você encontrou um rio brilhante!</p>
        <p>Uma ponte de madeira leva a uma caverna.</p>
        <button class="escolha" data-destino="caverna">
            🦇 Entrar na caverna
        </button>
        <button class="escolha" data-destino="jardim">
            🌹 Seguir até o jardim
        </button>
    `,
    tesouro: `
        <h2>💎 Você encontrou o tesouro!</h2>
        <p>Uma caixa mágica guarda os segredos da floresta. Final feliz!</p>
    `,
    jardim: `
        <h2>🌹 O jardim encantado</h2>
        <p>As flores mágicas mostram o caminho de volta para casa. Final feliz!</p>
    `,
    caverna: `
        <h2>🔮 A caverna secreta</h2>
        <p>Você encontrou um cristal mágico e descobriu um novo segredo!</p>
    `
};

let passoAtual = "inicio";
let passosAnteriores = [];

function mostrarPasso(destino) {
    passosAnteriores.push(passoAtual);
    passoAtual = destino;

    historia.innerHTML = caminhos[destino];
    mensagem.textContent = "";

    botaoVoltar.hidden = false;
    botaoVoltar.dataset.voltar = passosAnteriores.length - 1;
    botaoReiniciar.hidden = false;
}

function voltarPasso() {
    if (passosAnteriores.length === 0) return;

    passoAtual = passosAnteriores.pop();

    if (passoAtual === "inicio") {
        historia.innerHTML = historiaInicial;
    } else {
        historia.innerHTML = caminhos[passoAtual];
    }

    mensagem.textContent = "";
    botaoVoltar.hidden = passosAnteriores.length === 0;
    botaoVoltar.dataset.voltar = passosAnteriores.length - 1;
}

document.querySelectorAll(".escolha").forEach(function(botao) {
    botao.addEventListener("click", function() {
        const destino = this.dataset.destino;
        mostrarPasso(destino);
    });
});

historia.addEventListener("click", function(evento) {
    const botao = evento.target.closest(".escolha");
    if (!botao) return;

    const destino = botao.dataset.destino;
    mostrarPasso(destino);
});

botaoVoltar.addEventListener("click", voltarPasso);

botaoReiniciar.addEventListener("click", function() {
    passosAnteriores = [];
    passoAtual = "inicio";
    historia.innerHTML = historiaInicial;
    mensagem.textContent = "";
    botaoVoltar.hidden = true;
    botaoReiniciar.hidden = true;
});
