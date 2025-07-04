const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
    enunciado: "Quando o professor avisa que haverá uma avaliação na próxima semana, o que você faz?",
    alternativas: [
        "Começo a revisar o conteúdo aos poucos, organizando meu tempo.",
        "Deixo para estudar apenas na véspera da prova."
    ]
},
{
    enunciado: "Como você reage ao saber que a avaliação será em grupo?",
    alternativas: [
        "Fico tranquilo, pois gosto de colaborar com os colegas.",
        "Fico preocupado, pois prefiro trabalhar sozinho."
    ]
},
   {
    enunciado: "Se a avaliação for surpresa, como você costuma se sentir?",
    alternativas: [
        "Confiante, porque tento manter o conteúdo em dia.",
        "Nervoso, porque não costumo revisar com frequência"
    ]
},
{
    enunciado: "O que você costuma fazer se não entende bem o conteúdo antes da avaliação?",
    alternativas: [
        "Procuro ajuda com o professor ou colegas.",
        "Tento decorar sem realmente entender."
    ]
},
{
    enunciado: "Quando recebe a data da avaliação, qual é sua primeira reação?",
    alternativas: [
        "Anoto no caderno ou agenda para me planejar.",
        "Esqueço e lembro só quando o professor avisa de novo."
    ]
}
]