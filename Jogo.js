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

document.getElementById('novoJogoBtn').addEventListener('click', formatarJogo);
document.getElementById('sorteio-0-btn').addEventListener('click', iniciarRodada);
document.getElementById('sorteio-1-btn').addEventListener('click', iniciarRodada);

function rodar() {
    iniciarJogo();
    iniciarRodada();
}

function formatarJogo(){
    jogo.turno = 0;
    iniciarJogo();
}

function iniciarJogo() {
    // Iniciar os tabuleiros
    for(i=0;i<3;i++){

        jogo.jogadores[0].tabuleiro[i] = [];
        jogo.jogadores[1].tabuleiro[i] = [];
        
        for(j=0;j<3;j++){
            jogo.jogadores[0].tabuleiro[i][j] = 0;
            jogo.jogadores[1].tabuleiro[i][j] = 0;
        }
        jogo.jogadores[0].pontuacao[i] = 0;
        jogo.jogadores[1].pontuacao[i] = 0;
    }

    passarAVez();
}

function passarAVez(){
    if(jogo.turno)
        jogo.turno = 0;
    else
        jogo.turno = 1;
    let sorteioBtnId = 'sorteio-' + jogo.turno + '-btn';
    //tornar o botão disponivel para o jogador certo
    let btnSorteio = document.getElementById(sorteioBtnId);
    btnSorteio.removeAttribute('hidden');
}

function iniciarRodada () {
    let valorSorteado = Math.floor((Math.random() * 6) + 1);
    let idBoxJogador = "player" + jogo.turno + "box";
    var boxJogador = document.getElementById(idBoxJogador);
    boxJogador.innerHTML = '<p class="sorted-number">' + valorSorteado + '</p>';
    //escolher coluna
    //fazer jogada
    
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

// export { iniciarJogo, formatarJogo };