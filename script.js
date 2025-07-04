const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Se a IA pode ajudar em uma tarefa difícil, como você reage?",
        alternativas: [
            "Uso a IA como apoio para facilitar meu trabalho.",
            "Prefiro fazer tudo sozinho, mesmo que demore mais."
        ]
    },
    {
        enunciado: "Como você se sente em relação à IA no ambiente de trabalho ou estudo?",
        alternativas: [
            "Acredito que pode aumentar minha produtividade.",
            "Acho que pode ser uma ameaça ao meu desempenho."
        ]
    },
    {
        enunciado: "Quando ouve que a IA está sendo usada em diversas áreas, o que pensa?",
        alternativas: [
            "É uma oportunidade de inovação e avanço.",
            "É um risco que pode substituir pessoas."
        ]
    },
    {
        enunciado: "Como você age diante de uma IA que responde perguntas ou gera textos?",
        alternativas: [
            "Testo e vejo como ela pode me ajudar.",
            "Não confio e duvido da precisão das respostas."
        ]
    },
    {
        enunciado: "Como você enxerga o uso da IA na educação?",
        alternativas: [
            "Um recurso que pode melhorar o aprendizado.",
            "Algo que pode prejudicar o desenvolvimento dos alunos."
        ]
    },
];

let atual = 0;
let pergunta atual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta();