const jogo = {
    jogadores: [
        {
            id: 0,
            tabuleiro: [[]],
            pontuacao:[]
        },
        {
            id: 1,
            tabuleiro: [[]],
            pontuacao: []
        }
    ],
    'turno': 0
}


function rodar() {
    iniciarJogo();
    iniciarRodada();
}

function iniciarJogo() {
    // Iniciar os tabuleiros
    for(i=0;i<3;i++){
        for(j=0;j<3;j++){
            jogo.jogadores[0].tabuleiro[i][j] = 0;
            jogo.jogadores[1].tabuleiro[i][j] = 0;
        }
        jogo.jogadores[0].pontuacao[i] = 0;
        jogo.jogadores[1].pontuacao[i] = 0;
    }
    // Definir quem vai primeiro
    iniciarRodada();
}

function iniciarRodada () {
    // Rolar um dado
    let valorSorteado = getRandomInt(1, 6);
    // Mostrar colunas disponíveis
}

//id > funcao passar a coluna como parametro

function fazerJogada(coluna) {
    // atualiza os valores do tabuleiro
    // Atualiza tabuleiro de adversário
    // Ao fim, calcula pontuacao
    // Verifica fim de jogo
    if(verificarFimJogo())
        return;
    // Muda vez -  mudar o turno e chamar iniciar Rodada
    if(jogo.turno == 0)
        jogo.turno = 1;
    else
        jogo.turno = 0;
}

function verificarFimJogo() {
    return false;
}

// Atualiza dados no tabuleiro
function atualizaTabuleiro () {

}


function calcularPontuacao(id) {
    let total = 0;
    let soma = 0;
    for(i=0;i<3;i++){
        for(j=0;j<3;j++){
            soma += jogo.jogadores[id].tabuleiro[i][j] = 0;
        }
        jogo.jogadores[id].pontuacao[i] = soma;
        total = total + soma;
        soma = 0;
    }
    return total;
}

