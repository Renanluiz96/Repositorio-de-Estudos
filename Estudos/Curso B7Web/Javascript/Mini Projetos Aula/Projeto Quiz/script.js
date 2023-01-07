//INITIAL DATA
//Variavel que salva em qual questão atual para exibir na tela que comeca com 0 , ou seja depois ele vai alterando dinamicamente para pegar os itens do array.
let currentQuestion = 0;

//Variavel que vai salvar as alternativas corretas
let correctAnswers = 0;

showQuestion();

//EVENTS
document.querySelector('.scoreArea button').addEventListener('click', resetEvent)


//FUNCTIONS

//Função para mostrar as questões na tela.
function showQuestion() {
    //Faz uma verificação se existe ainda alguma questão para ser mostrada , existe a primeira , depois existe a segunda ...
    if(questions[currentQuestion]) {//Se existir a questão , exibe

        //Vai simplificar o nome da variavel, para acessar a questão atraves da variavel q.
        let q  = questions[currentQuestion];

        //Variavel para ir pegando a porcentagem do progresso de cada pergunta , até chegar o final. Para mostrar uma barrinha com o progresso na tela
        let pct =Math.floor((currentQuestion / questions.length) * 100); //Formula = (questão atual x total de questões ) dividido por 100 . Para pegar a porcentagem . Usa o math.floor para arredondar o numero para baixo(da problemas com alguns navegadores).
        //Depois de ter pegado a porcentagem das perguntas. Altera a barrinha de progressão na tela, selecionando a div , e alternado a largura dela em porcentagem(width %) na tela de acordo com a sua variavel que voce acobu de criar.
        document.querySelector('.progress--bar').style.width = `${pct}%` //Efeito que vai aumentando a barrinha , é o efeito "transition"(meio segundo) que esta la no css desta barrinha


        //Esconder a div scoreArea, que vai conter os acertos.
        document.querySelector('.scoreArea').style.display = 'none';
        //Mostra a div questionArea, que vai ser onde vai ficar as perguntas e alternativas na tela
        document.querySelector('.questionArea').style.display = 'block';

        //Exibindo a questão
        document.querySelector('.question').innerHTML = q.question;

        //Montando as questões na tela.
        let optionsHtml = '' //Cria uma variavel com as opções que comeca vazia
        for(let i in q.options) {//Faz um laço  e vai acrescentando as divs , com todas as opções dentro. preenche com todas as divs
            optionsHtml += `<div data-op="${i}" class="option"><span>${parseInt(i) + 1}</span>${q.options[i]}</div>`;
        }
        /*
        //Depois de preencher a variavel , que é mais performatico , do que fica manipulando o DOM varias vezes, voce acrescenta , esta variavel que vai ter todas as divs com as as opções certinhas ,no fim acrescenta a div no DOM. Fazendo isso voce vai manipular o DOM apenas uma vez , e economizar masi no processamento do codigo.
        */
        document.querySelector('.options').innerHTML = optionsHtml;

        //Adiciona um evento de click em cada uma das opções , acessando todas as opções com o forEach, e colocando o evento em cada item do array.
        document.querySelectorAll('.options .option').forEach(item => {
            item.addEventListener('click', optionClickEvent);
        })

    }else {
        //Se não existir , então acabou as questões. Roda a função finishQuiz() para finalizar as perguntas
        finishQuiz();
        
    }
}

//Função do click nas alternativas das perguntas
function optionClickEvent(e) {
    //Voce vai pegar o atributo do 'data-op', que voce crio para cada div com as opções. Depois de ter pego este atributo voce vai salvar ele em uma variavel, para fazer as verificações. Como ele é uma string , tem que transformar ele em numero .
    let clickedOption = parseInt(e.target.getAttribute('data-op'));

    //Faz uma verificação se a opção que voce selecionou , é a mesma que a resposta que esta salva tambem em uma variavel .
    if(questions[currentQuestion].answer === clickedOption) {
        //Depois que voce acertou uma questão ele incrementa a variavel correctAnswers para ir acumulando os acertos
        correctAnswers++;

    }

    //Depois independente se voce acertou ou errou, voce vai para a proxima questão , incrementando mais na variavel currentQuestion para ele ir avancando. 
    currentQuestion++;
    //Incrementa, e depois roda a função para exibir as questões novamente
    showQuestion();
}

//Função que finaliza as perguntas
function finishQuiz() {
    //Pegando a porcentagem de acertos - Acertos / Total * 100 
    let points = Math.floor((correctAnswers / questions.length) * 100);

    //Alterando o valor da porcentagem de acertos na tela dinamicamente
    document.querySelector('.scorePct').innerHTML = `Acertou ${points}%`;
    document.querySelector('.scoreText2').innerHTML = `Voce respondeu ${questions.length}, e acertou ${correctAnswers}`

    //Fazendo verificações para mostrar ,uma coisa quando chegar em 30% , outra de 30% até 70%, e a ultima que é de 70% em diante
    
    if(points < 30) {//Se for menor que 30 altera uma mensagem , e a cor na tela
        document.querySelector('.scoreText1').innerHTML = 'Ta ruim em?!'
        document.querySelector('.scorePct').style.color = '#FF0000'
    }else if (points >= 30 && points < 70) {
        document.querySelector('.scoreText1').innerHTML = 'Muito bom!'
        document.querySelector('.scorePct').style.color = '#FFFF00'
    } else if(points >= 70){
        document.querySelector('.scoreText1').innerHTML = 'Parabens'
        document.querySelector('.scorePct').style.color = '#03630d'
    }

    //Esconde as perguntas , e agora mostra o score das questões
    document.querySelector('.scoreArea').style.display = 'block';
    document.querySelector('.questionArea').style.display = 'none';

    //Vai preencher toda a barrinha de progresso , voce seta um valor fixo para 100%
    document.querySelector('.progress--bar').style.width = `100%`

}

//Função para resetar as questões na tela
function resetEvent() {
    //Reseta os acertos , e a variavel das questões volta para 0 novamente, Basicamente poisição inicial. E por fim Mostra as questões na tela rodando a função showQuestion()
    correctAnswers = 0;
    currentQuestion = 0;
    showQuestion();
}