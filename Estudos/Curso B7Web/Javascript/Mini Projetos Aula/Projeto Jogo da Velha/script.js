// Dados iniciais
//Variavel que vai conter as informações de cada quadrinho do tabuleiro que inicialmente comecam vazia
let square  = {
    a1: '', a2: '', a3: '',
    b1: '', b2: '', b3: '',
    c1: '', c2: '', c3: ''
};

//Variavel para controlar o jogador da vez.
let player = '';


//Variavel de aviso na tela para mostrar o resultado dos jogos
let warning = '';

//Variavel para controlar se o jogo esta rodando  ou não que inicialmente comeca como false , pois tem que esperar alguma ação na tela para ai sim o jogo comecar. Para manipular ela e depois trocar para true caso alguem ganha ou empate para parar o jogo
let playing = false;
reset()
//Eventos

//Evento do botão de reset ao clicar nele
document.querySelector('.reset').addEventListener('click', reset);

//Evento de click no quadrado que voce quer, selecionando todo os itens com o querySelectorAll . Usa um forEach para percorrer "cada um dos itens" e para cada um deles eu adiciono um evento de clique em cada um deles
document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', itemClick);
});


// Funções

//Função de click no item
function itemClick (event) {
    //Para pegar o atributo do item que voce clico voce pega o atributo "dele mesmo usando o target" que ele vai selecionar ele mesmo atraves do proprop evento.
    let item = event.target.getAttribute('data-item') //Seleciona o atributo data-item do elemento que voce clico
    
    //Faz uma verificação se o item do square tiver vazio , ele adiciona o player =  x ou o , naquele lugar e depois mostra na tela, e no fim troca o jogador usando a função togglePlayer()
    if(playing && square[item] === '') {
        square[item] = player;
        renderSquare()
        togglePlayer()
    }

}

//Função para limpar todo o jogo na tela
function reset() {
    warning  = '' //Limpar o aviso 

    //Escolhe aleatoriamente um jogador , entre 0(x) e 1(o) ele vai escolher.
    let random = Math.floor(Math.random() * 2) 
    /*
    Ele vai escolher um numero aleatorio entre 0 e 1 , multiplicar por 2 se passar de 1 ele arredonda para baixo com o floor escolhendo 1 , se não passsar de 1 ele vai arredondar para baixo escolhendo 0.
    */

    //Faz uma expressão ternario para verificar os numeros do random para escolher o jogador  ; se for 0 ele é o "x" , se não for 0 , ele é "o"
    player = (random === 0) ? 'X' : 'O';

    //Faz um loop for , que vai percorrer cada item do objeto square e vai zerar eles .
    for(let i in square) {
        square[i] = ''
    }

    //Depois de ele resetar ele inicia o jogo , trocando o playing para true agora
    playing = true;

    renderSquare();
    renderInfo();
}


//RenderSquare ele vai percorrer o quadro e vai verificar se tem algo preenchido , ele preenche la no html, se não tiver não coloca nada
function renderSquare() {
    for(let i in square) {
        //Pegando os itens atraves do data-item de cada div, e dinamicamente colocando a variavel i que vai selecionando cada um por vez
        let item = document.querySelector(`div[data-item=${i}]`)

        //Ele vai preenchendo o item na tela se tive com alguma coisa no objeto ou o 'x', ou 'o' , se tiver vazio ele não preenche nada
        item.innerHTML = square[i];

        //Depois de cada vez que for renderizado na tela , roda uma função para verificar , se alguem ganho o jogo , ou seja ele checa o jogo toda vez que acontece algo na tela
        checkGame();
    }
}


//
function renderInfo() {
    //Ele vai mostrar na  tela os avisos, e colocar na tela quem é o jogador da vez tambem, e ir alternando

    //Voce coloca o player na variavel vez mandando o player , que vai transformar esta div em 'x' ou 'o'
    document.querySelector('.vez').innerHTML = player;

    //Mensagem na tela , se tiver algo ela aparece
    document.querySelector('.resultado').innerHTML = warning;
}

//Função para alternar o jogador na tela
function togglePlayer() {
    //Faz uma verificação se o player for X ele troca ele para o O, se ele for O ele troca pelo X
    player = (player === 'X') ? 'O' : 'X';
    renderInfo(); // Toda vez que troca de player tem que dar um renderInfo para trocar na tela
}

//Função para checar o jogo a cada jogada feita
function checkGame() {
    //Fazer as verificações se alguem ganhou , virificar se deu empate, ou so o jogo ainda esta sendo jogado
    if(checkWinnerFor('X')) {//Verifica se foi o x que ganhou
        warning = 'O "X" venceu' //Mostra a mensagem que ele ganhou
        playing = false; //Depois eu paro o jogo
    } else if(checkWinnerFor('O')){//Verifica se o "O" ganhou
        warning = 'O "O" venceu'
        playing = false;
    } else if(isFull()) { // Verifica se deu empate
        //Se caso eu rodei esta função então deu empate
        warning = 'Deu empate';
        playing = false;
    }
}

//Função para checar o vencedor da partida
function checkWinnerFor(player) {
    //Tem que ter um array com todas as possibilidades de vitorias, que são 8. Cada uma das possibilidades separadas para cada item do array
    let pos = [
        //Linha
        'a1,a2,a3',
        'b1,b2,b3',
        'c1,c2,c3',
        //Coluna
        'a1,b1,c1',
        'a2,b2,c2',
        'a3,b3,c3',
        //Transversais
        'a1,b2,c3',
        'a3,b2,c1'
    ];


    //Fazer um loop nessas possibilidade para ver se o player esta com estas posições aqui preenchidas
    for(let w in pos){
        //Faz um novo array , com cada possibilidade ser um array diferente, dando um split nas virgulas separando cada possibilidade um array sendo a separação dos itens destes array as virgulas que coloquei dentro.
        //E ai eu verifico cada uma dessas possibilidades individualmente
        let pArray = pos[w].split(',') //Fiz um array novo separando cada item na virgula ficando assim a1, a2, a3 . e na proxima laço um array com b1, b2, e b3  e assim cada uma das possibilidades...


        //Rodo uma função every no array para ver se todas as vezes que eu rodar aqui ele retornar como true quer dizer que em todas os itens do array aquela condição foi satisfeita , ai ele me retorna um true . Se qualquer uma não me retornar como true , ele vai me retornar como false. Ou seja todas tem que estar True
        let hasWon = pArray.every(option => square[option] === player);
        if(hasWon) {//Se ele achar um vencedor  ele retorna um true
            return true
        }

    }
    //Caso ele passe pelo for inteiro e não acho um vencedor no for inteiro, ele retorna um false , e vai para o empate
    return false
}

//Função para verificar se deu empate 
function isFull() {
    //Faz uma vericação se tiver algum lugar vazio no tabuleiro quer dizer que  esta cheio
    for(let i in square) {
        if(square[i] === '') {
            return false;//Se tiver vazio
        }
    }
    return true; //Ta tudo preenchido então retorna true
    
}