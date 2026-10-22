
const fases = {
  1: {
    titulo: "A carta sem remetente",
    fundo: "photo-1518709268805-4e9042af9f23",
    historia: "À meia-noite, uma carta chega à sua casa. O papel cheira a rosas antigas. Dentro, uma frase: 'A Mansão Vallerie guarda a resposta que você procura. Venha sozinha.' Você chega aos portões quando a névoa cobre a estrada.",
    escolhas: [
      { texto: "Entrar pelo portão principal", destino: 2 },
      { texto: "Seguir uma trilha entre as árvores", destino: 3 }
    ]
  },

  2: {
    titulo: "O portão de ferro",
    fundo: "photo-1519608487953-e999c86e7455",
    historia: "O portão se abre sem que você o toque. Do outro lado, a mansão parece observar cada movimento seu. Uma luz aparece numa janela do segundo andar. Você ouve três batidas vindas de dentro.",
    escolhas: [
      { texto: "Bater à porta da mansão", destino: 4 },
      { texto: "Contornar a casa até uma janela aberta", destino: 5 }
    ]
  },

  3: {
    titulo: "A trilha das lanternas",
    fundo: "photo-1448375240586-882707db888b",
    historia: "Entre as árvores, pequenas lanternas se acendem sozinhas. Você encontra um medalhão com o símbolo de uma rosa negra. Ao longe, uma porta de serviço range com o vento.",
    escolhas: [
      { texto: "Guardar o medalhão e ir à porta", destino: 5 },
      { texto: "Seguir as lanternas até o mausoléu", destino: 6 }
    ]
  },

  4: {
    titulo: "O salão dos retratos",
    fundo: "photo-1511818966892-d7d671e672a2",
    historia: "O salão está iluminado por velas. Os retratos da família Vallerie cobrem as paredes. Em um deles, uma jovem segura o mesmo medalhão que você encontrou. Atrás do quadro, há um corredor estreito.",
    escolhas: [
      { texto: "Examinar o quadro e entrar no corredor", destino: 7 },
      { texto: "Procurar pistas nas gavetas do salão", destino: 8 }
    ]
  },

  5: {
    titulo: "A cozinha abandonada",
    fundo: "photo-1517248135467-4c7edcad34c4",
    historia: "Você entra numa cozinha empoeirada. Um relógio parado marca 00h05. Sobre a mesa há uma chave de prata e um diário molhado. Passos ecoam no andar de cima.",
    escolhas: [
      { texto: "Pegar a chave e subir as escadas", destino: 8 },
      { texto: "Ler o diário antes de sair", destino: 9 }
    ]
  },

  6: {
    titulo: "O mausoléu",
    fundo: "photo-1500530855697-b586d89ba3ee",
    historia: "O mausoléu está coberto de hera. Uma inscrição diz: 'A verdade descansa onde a memória termina.' O medalhão vibra suavemente perto de uma pequena porta lateral.",
    escolhas: [
      { texto: "Usar o medalhão na porta", destino: 9 },
      { texto: "Procurar uma passagem no jardim", destino: 10 }
    ]
  },

  7: {
    titulo: "O corredor invisível",
    fundo: "photo-1519710164239-da123dc03ef4",
    historia: "O corredor parece mais comprido a cada passo. No fim, você encontra duas portas: uma marcada com uma lua e outra com uma rosa. Um sussurro diz seu nome, mas não há ninguém ali.",
    escolhas: [
      { texto: "Abrir a porta com a lua", destino: 11 },
      { texto: "Abrir a porta com a rosa", destino: 12 }
    ]
  },

  8: {
    titulo: "A biblioteca proibida",
    fundo: "photo-1507842217343-583bb7270b66",
    historia: "Livros antigos cobrem as estantes até o teto. Você encontra um registro da família: a última herdeira desapareceu na noite em que todos os relógios pararam. Uma página foi arrancada.",
    escolhas: [
      { texto: "Investigar a estante atrás da mesa", destino: 11 },
      { texto: "Descer a escada para o arquivo secreto", destino: 12 }
    ]
  },

  9: {
    titulo: "O diário da herdeira",
    fundo: "photo-1455390582262-044cdead277a",
    historia: "A tinta revela uma história terrível: a herdeira tentou esconder um segredo da própria família. A última página menciona um espelho no sótão e uma chave guardada sob o relógio.",
    escolhas: [
      { texto: "Subir ao sótão", destino: 12 },
      { texto: "Buscar a chave perto do relógio", destino: 10 }
    ]
  },

  10: {
    titulo: "O jardim sem amanhecer",
    fundo: "photo-1470252649378-9c29740c9fa8",
    historia: "O jardim parece preso numa noite eterna. No centro, uma fonte seca exibe três símbolos: lua, rosa e corvo. O medalhão brilha diante deles. Você precisa escolher um símbolo.",
    escolhas: [
      { texto: "Escolher a lua", destino: 11 },
      { texto: "Escolher o corvo", destino: 13 }
    ]
  },

  11: {
    titulo: "A sala dos espelhos",
    fundo: "photo-1513519245088-0e12902e5a38",
    historia: "Os espelhos mostram versões diferentes da mansão. Em um deles, a herdeira aparece segurando uma chave. Em outro, uma escadaria desce para a escuridão. O último espelho não reflete você.",
    escolhas: [
      { texto: "Seguir a imagem da herdeira", destino: 13 },
      { texto: "Descer pela escadaria", destino: 14 }
    ]
  },

  12: {
    titulo: "O sótão das memórias",
    fundo: "photo-1518709594023-6eab9bab7b23",
    historia: "Caixas antigas guardam cartas e fotografias. Você descobre que o segredo da família está ligado a uma promessa quebrada. Uma passagem atrás de um armário leva ao coração da mansão.",
    escolhas: [
      { texto: "Abrir a passagem secreta", destino: 14 },
      { texto: "Levar as cartas e procurar a saída", destino: 15 }
    ]
  },

  13: {
    titulo: "Final I — A verdade revelada",
    fundo: "photo-1518709268805-4e9042af9f23",
    final: true,
    historia: "Você reúne as pistas e revela o segredo da herdeira: ela tentou proteger a família de uma antiga mentira. Quando a primeira luz da manhã toca os vitrais, os relógios voltam a funcionar. A mansão finalmente fica em silêncio.\n\nFINAL: A VERDADE REVELADA."
  },

  14: {
    titulo: "Final II — A guardiã da mansão",
    fundo: "photo-1519608487953-e999c86e7455",
    final: true,
    historia: "No coração da mansão, você encontra o último retrato da herdeira e compreende a promessa que manteve aquele lugar preso no tempo. Você decide ficar para proteger o segredo e impedir que ele seja usado novamente.\n\nFINAL: A GUARDIÃ DA MANSÃO."
  },

  15: {
    titulo: "Final III — A última visita",
    fundo: "photo-1448375240586-882707db888b",
    final: true,
    historia: "Você escapa da mansão levando as cartas. A estrada parece normal outra vez, e o céu começa a clarear. Mas, ao chegar em casa, encontra um novo envelope sobre a mesa. Na frente, uma única frase: 'Obrigada por voltar.'\n\nFINAL: A ÚLTIMA VISITA."
  }
};

const cena = document.querySelector("#cena");
const progresso = document.querySelector("#progresso");
const titulo = document.querySelector("#titulo");
const historia = document.querySelector("#historia");
const escolhas = document.querySelector("#escolhas");
const aviso = document.querySelector("#aviso");
const voltar = document.querySelector("#voltar");
const reiniciar = document.querySelector("#reiniciar");

let faseAtual = 1;
let historico = [];

function mostrarFase(numero) {
  const fase = fases[numero];

  if (!fase) return;

  faseAtual = numero;

  progresso.textContent = fase.final
    ? "DESFECHO DA HISTÓRIA"
    : `FASE ${numero} DE 15`;

  titulo.textContent = fase.titulo;
  historia.textContent = fase.historia;
  aviso.textContent = "";

  cena.style.backgroundImage =
    `linear-gradient(rgba(0,0,0,.18), rgba(0,0,0,.18)), url("https://images.unsplash.com/${fase.fundo}?auto=format&fit=crop&w=1400&q=85")`;

  escolhas.replaceChildren();

  if (fase.final) {
    const botao = document.createElement("button");
    botao.className = "escolha";
    botao.textContent = "↻ Jogar novamente";
    botao.addEventListener("click", reiniciarJogo);
    escolhas.appendChild(botao);
  } else {
    fase.escolhas.forEach((opcao) => {
      const botao = document.createElement("button");
      botao.className = "escolha";
      botao.textContent = "✦ " + opcao.texto;

      botao.addEventListener("click", () => {
        historico.push(faseAtual);
        mostrarFase(opcao.destino);
      });

      escolhas.appendChild(botao);
    });
  }

  voltar.hidden = historico.length === 0;
}

voltar.addEventListener("click", () => {
  if (historico.length === 0) return;

  const anterior = historico.pop();
  mostrarFase(anterior);
});

function reiniciarJogo() {
  historico = [];
  mostrarFase(1);
}

reiniciar.addEventListener("click", reiniciarJogo);

mostrarFase(1);
