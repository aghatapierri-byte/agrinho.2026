
// Controle de fonte

let tamanhoFonte = 16;

function aumentarFonte(){
    tamanhoFonte += 2;
    document.body.style.fontSize = tamanhoFonte + "px";
}

function diminuirFonte(){
    tamanhoFonte -= 2;

    if(tamanhoFonte < 12){
        tamanhoFonte = 12;
    }

    document.body.style.fontSize = tamanhoFonte + "px";
}

function alternarContraste(){
    document.body.classList.toggle("alto-contraste");
}

// Dicas sustentáveis

const dicas = [
    "Separe corretamente os materiais recicláveis.",
    "Evite desperdício de água durante o banho.",
    "Plante árvores sempre que possível.",
    "Utilize sacolas reutilizáveis.",
    "Apague as luzes ao sair de um ambiente.",
    "Proteja os animais e seu habitat natural."
];

const botaoDica = document.getElementById("botaoDica");
const campoDica = document.getElementById("dica");

botaoDica.addEventListener("click", function(){

    const indice = Math.floor(Math.random() * dicas.length);

    campoDica.textContent = dicas[indice];

});

// Quiz

const perguntas = [
{
pergunta:"O que é desmatamento?",
opcoes:[
"Plantio de árvores",
"Retirada de vegetação",
"Economia de água"
],
correta:1
},

{
pergunta:"Qual atitude ajuda o meio ambiente?",
opcoes:[
"Jogar lixo no rio",
"Queimar lixo",
"Reciclar materiais"
],
correta:2
},

{
pergunta:"Por que devemos economizar água?",
opcoes:[
"Porque é um recurso importante",
"Porque aumenta a poluição",
"Porque destrói florestas"
],
correta:0
},

{
pergunta:"O desmatamento afeta:",
opcoes:[
"Apenas árvores",
"Animais e natureza",
"Apenas cidades"
],
correta:1
},

{
pergunta:"Qual ação reduz a poluição?",
opcoes:[
"Reciclagem",
"Queimadas",
"Descarte irregular"
],
correta:0
}
];

let perguntaAtual = 0;
let pontuacao = 0;

const elementoPergunta = document.getElementById("pergunta");
const elementoOpcoes = document.getElementById("opcoes");
const elementoResultado = document.getElementById("resultado");

function carregarPergunta(){

    elementoOpcoes.innerHTML = "";

    elementoPergunta.textContent =
    perguntas[perguntaAtual].pergunta;

    perguntas[perguntaAtual].opcoes.forEach(
        (opcao, indice)=>{

        const botao =
        document.createElement("button");

        botao.textContent = opcao;

        botao.onclick = function(){

            if(
                indice ===
                perguntas[perguntaAtual].correta
            ){
                pontuacao++;
            }

            document
            .getElementById("proximaPergunta")
            .disabled = false;

        };

        elementoOpcoes.appendChild(botao);

    });

}

document
.getElementById("proximaPergunta")
.addEventListener("click", function(){

    perguntaAtual++;

    if(perguntaAtual < perguntas.length){

        carregarPergunta();

    }else{

        elementoPergunta.textContent =
        "Quiz finalizado!";

        elementoOpcoes.innerHTML = "";

        elementoResultado.textContent =
        "Você acertou " +
        pontuacao +
        " de " +
        perguntas.length +
        " perguntas.";

        this.style.display = "none";
    }

});

carregarPergunta();
