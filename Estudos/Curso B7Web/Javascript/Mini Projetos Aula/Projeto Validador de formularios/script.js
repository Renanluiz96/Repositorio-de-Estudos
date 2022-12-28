//Cria uma variavel com um objeto  com varias funções dentro
let validator = {
    //Função para parar o evento de submit
    handleSubmit:(event) => {
        //Evento para parar o evento de submit , previna o comportamento padrão do navegador
        event.preventDefault();

        let send = true; //Inicialmente comeca como true para enviar o formulario

        //Pegando os inputs dos campos de texto que estão dentro do formulario voce usa um queryselector dentro da variavel form , porque la esta o formulario
        let inputs = form.querySelectorAll(input);
        
        //Depois de pegar os inputs , vai fazer um loop para fazer uma verificação em cada um deles
        for(let i=0; i<inputs.length; i++) {
            //Variavel onde vai ficar cada input no laço for
            let input = inputs[i]
            let check = validator.checkInput(input); //Fazer uma função para checar cada input que depois de ele fazer a checagem ele vai retornar este input ja checado

            //Se a variavel check que é o retorno de cada input checado não retornar true , significa que deu um erro naquele campo
            if(check !== true) {
                //Então como deu um erro , voce tem que passar o send para false para que ele não envie o formulario
                send = false;

                //Exibir o erro                
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

                    break;
                }
            }
        }

        return true; //Caso não tiver regra , passa direto pelo if e da um retorno true dizendo que não tem nenhuma regra
    }
}

let form = document.querySelector('.validator');
//Vai monitorar quando o formulario tiver um clique no input submit ele vai dispara a função handleSubmit que esta dentro da variavel de funções
form.addEventListener('submit', validator.handleSubmit)
