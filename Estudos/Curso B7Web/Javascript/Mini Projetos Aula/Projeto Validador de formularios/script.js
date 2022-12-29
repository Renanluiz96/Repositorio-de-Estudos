//Cria uma variavel com um objeto  com varias funções dentro
let validator = {
    //Função para parar o evento de submit
    handleSubmit:(event) => {
        //Evento para parar o evento de submit , previna o comportamento padrão do navegador
        event.preventDefault();

        let send = true; //Inicialmente comeca como true para enviar o formulario

        //Pegando os inputs dos campos de texto que estão dentro do formulario voce usa um queryselector dentro da variavel form , porque la esta o formulario
        let inputs = form.querySelectorAll('input');

        //Ao clicar no submit , se tiver algum erro no input , voce ja limpa os erros que ja estão na tela , para não ficar aparecendo com a função clearErrors
        validator.clearErrors()
        
        //Depois de pegar os inputs , vai fazer um loop para fazer uma verificação em cada um deles
        for(let i=0; i<inputs.length; i++) {
            //Variavel onde vai ficar cada input no laço for
            let input = inputs[i]
            let check = validator.checkInput(input); //Fazer uma função para checar cada input que depois de ele fazer a checagem ele vai retornar este input ja checado

            //Se a variavel check que é o retorno de cada input checado não retornar true , significa que deu um erro naquele campo
            if(check !== true) {
                //Então como deu um erro , voce tem que passar o send para false para que ele não envie o formulario
                send = false;

                //Depois de checar os erros voce mostra ele na tela com uma função ShowError() mandando o input em qual o erro esta acontecendo e o erro em si , que no caso seria uma mensagem de erro.
                validator.showError(input, check)
                             
            }

        }


        if(send) {
            form.submit(); //Se send for true então envia o formulario
        }
    },

    //FUNÇÃO PARA CHECAR OS INPUTS
    checkInput:(input) => {
        //Esta função serve para verificar as regras especificas de cada input

        //Vai pegar os inputs que tiverem as propriedades data-rules nela , que se tiver esta propriedade ela vai ter uma regra , e aqui voce trata de cada uma delas
        let rules = input.getAttribute('data-rules');
        //Se rules for diferente de null ,então quer dizer que tem alguma regra la
        if(rules !== null) {
            //as regras com a barrinha '|'  quer dizer que é uma separação das regras , se não tiver barrinha , ele vai criar um array com 1 item só
            rules = rules.split('|');
            //Faz um for em cada uma das regras para verificar
            for(let k in rules) {

                //Faz um for para verificar cada uma das regras . Partindo tambem alem da barrinha que divide as regras , voce parte ela agora atraves do =, se caso tiver um min = 2 . Então min=[0] e o 2=[2] no outro array . Ai voce pode tratar ,os erros pelo numero 0 do array novo , required e o min vai ser um array na posição 0 e a cada item na posição 0 voce pode tratar o erro especifico.
                let rDetails  = rules[k].split('=');
                switch(rDetails[0]) {
                    case 'required':
                        //Se o valor do input onde tem o requird estiver vazio '' el mostra um erro
                        if(input.value == '') {//Ele vai me retornar uma string com um texto
                            return 'Campo obrigatório'
                        }
                    break;
                    case 'min':
                        //Se a quantidade de caracteres tiver menor que o rdetails[1] que seria o que voce estipulo depois do = no min ou seja min=2 , então se for digitado menos que 2 caracteres ele vai mostrar este erro
                        if(input.value.length < rDetails[1]) {
                            return 'Campo tem que ter pelo menos ' +rDetails[1] + ' caracteres' 
                        }
                    break;
                    case 'email':
                        //Se o input estiver diferente de vazio , ou seja se tiver preenchido
                        if(input.value != '') {
                            //Para verificar se o campo digitado é um email voce usa expressão regular para verificar o email, se o email bate com um padrão que voce crio la na "expressão regular".
                            let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // Expressão regular para verificação de email.

                            //Ai voce faz um teste da sua expressão
                            if(!regex.test(input.value.toLowerCase())) {
                              return 'E-mail digitado não é valido'  
                            }
                        }
                    break;
                }
            }
        }

        return true; //Caso não tiver regra , passa direto pelo if e da um retorno true dizendo que não tem nenhuma regra
    },
    //FUNÇÃO PARA MOSTRAR ERROS NA TELA
    showError:(input, error) => {
        //Mostra uma mensagem de erro logo apos o campo de input.

        //Trocar a cor da borda do input para vermelho
        input.style.borderColor = 'red'

        //Colocando uma mensagem na tela , abaixo do input. Voce vai ter que criar o elemento pois , não existe no html , então sera criado a partir do javascript e colocado acima do label de baixo pois pelo javascript , voce não pode colocar ele em baixo somente em cima . Então usa-se uma propriedade para ele colocar acima do proximo item ,e visualmente fica parecendo que esta abaixo do input que voce quer
        let errorElement = document.createElement('div');
        errorElement.classList.add('error')
        errorElement.innerHTML = error; //Voce vai inserir nesta div criada o seu erro , que no caso seria aquela frase da string

        //Colocando na posição certa o erro . Voce usa o parentElement = para voltar um item acima ou seja ele esta dentro do label , então ele volta para este label. insertBefore = função do javascript que vai inserir "antes" alguma coisa , que no caso seria a div que eu criei via javascript. elementSibling = Vai acrescentar ao proxima tag html ou seja vai acrescentar antes do proximo label. Que visualmente fica abaixo do label de cima.
        input.parentElement.insertBefore(errorElement, input.ElementSibling);
    },
    //FUNÇÃO PARA LIMPAR OS ERRORS NA TELA
    clearErrors:() => {
        //Tirar a borda vermelha dos inputs
        let inputs = form.querySelectorAll('input');
        for(let i=0;i<inputs.length; i++) {
            inputs[i].style = ''
        }
        //Todas as divs que tiverem a classlist error, ele vai remover esta classe
        let errorElements  = document.querySelectorAll('.error');
        for(let i = 0; i<errorElements.length;i++) {
            errorElements[i].remove()
        }
    }
}

let form = document.querySelector('.validator');
//Vai monitorar quando o formulario tiver um clique no input submit ele vai dispara a função handleSubmit que esta dentro da variavel de funções
form.addEventListener('submit', validator.handleSubmit)
