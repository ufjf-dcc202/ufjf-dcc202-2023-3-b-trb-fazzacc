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
    'turno': 0,
    'colNumb' : -1
}

document.getElementById('novoJogoBtn').addEventListener('click', formatarJogo);

document.getElementById('sorteio-0-btn').addEventListener('click', iniciarRodada);
document.getElementById('sorteio-1-btn').addEventListener('click', iniciarRodada);

document.getElementById('button-left').addEventListener('click', function(){~
    alteraColuna('e');
});
document.getElementById('button-right').addEventListener('click', function(){
    alteraColuna('d');
});
document.getElementById('button-select').addEventListener('click',fazerJogada);

function rodar() {
    iniciarJogo();
    iniciarRodada();
}

function formatarJogo(){
    jogo.turno = 0;
    jogo.colNumb = -1;
    iniciarJogo();
}

function iniciarJogo(){
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

    alteraBtn();
}

function alteraBtn(){
    // if(jogo.turno)
    //     jogo.turno = 0;
    // else
    //     jogo.turno = 1;
    let sorteioBtnId = 'sorteio-' + jogo.turno + '-btn';
    let btnSorteio = document.getElementById(sorteioBtnId);
    if(btnSorteio.hasAttribute('hidden'))
        btnSorteio.removeAttribute('hidden');  
    else
        btnSorteio.setAttribute('hidden', 'true');
}

function alteraColuna(sentido){


    var col = jogo.colNumb;

    if(col == 0){
        if(sentido === 'd'){
            limparColuna(col);
            jogo.colNumb = 1;
            escolherColuna(jogo.colNumb);
        }
    }
    if(col == 1){
        if(sentido === 'e'){
            limparColuna(col);
            jogo.colNumb = 0;
            escolherColuna(jogo.colNumb);
        }
        if(sentido === 'd'){
            limparColuna(col);
            jogo.colNumb = 2;
            escolherColuna(jogo.colNumb);
        }
    }
    if(col == 2){
        if(sentido === 'e'){
            limparColuna(col);
            jogo.colNumb = 1;
            escolherColuna(jogo.colNumb);
        }
    }
}

function iniciarRodada () {
    let valorSorteado = Math.floor((Math.random() * 6) + 1);
    let idBoxJogador = "player" + jogo.turno + "box";
    var boxJogador = document.getElementById(idBoxJogador);
    boxJogador.innerHTML = '<p class="sorted-number">' + valorSorteado + '</p>';
    alteraBtn();
    document.getElementById("col-buttons").removeAttribute('hidden');
    jogo.colNumb = 0;
    escolherColuna(jogo.colNumb);  
}

function escolherColuna(col){
    let colClassName = "coluna" + col + jogo.turno;
    var coluna = document.getElementsByClassName(colClassName);
    for (var i = 0; i < coluna.length; i++) {
        coluna[i].style.border = '3px solid red';
    }
    
}

function limparColuna(col){
    let colClassName = "coluna" + col + jogo.turno;
    var coluna = document.getElementsByClassName(colClassName);
    for (var i = 0; i < coluna.length; i++) {
        coluna[i].style.border = 'none';
    }
    
}


function fazerJogada() {
    var coluna = jogo.colNumb;
    limparColuna(coluna);
    document.getElementById("col-buttons").setAttribute('hidden', 'true');
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