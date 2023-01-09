//INITIAL DATA

//Variavel que vai armazena as informações das caixinhas dropaveis, e vai ser alterada ao dropar elas , vai ser preenchida uma string com a informação de qual caixinha é.
let areas = {
    a: null,
    b: null,
    c: null
}



//EVENTS

//Colocando evento de dragstar e dragend em cada div do quadrado.
document.querySelectorAll('.item').forEach(item  => {
    //Faz algo quando comeca a arrastar.
    item.addEventListener('dragstart', dragStart); 
    //Faz algo quando eu paro de arrasta , solto o botão do mouse
    item.addEventListener('dragend', dragEnd); 
})

//Colocando eventos nas areas onde vai ser dropado os itens.
document.querySelectorAll('.area').forEach(area => {
    //Para voce criar uma area onde voce pode soltar coisas dentro dela voce precisa de 3 eventos para isto.

    //Dragover -- vai ser o evento que vai ser disparado quando o item que voce estiver arrastando "passar por cima" da area onde estiver este evento, ou seja a hora que o item entrar na div que vai ser dropado com esse evento . Este evendo dispara
    area.addEventListener('dragover', dragOver);

    //DragLeave -- O evento dragLeave vai ser executado quando , voce esta em uma area dropavel , e depois sai dela( retira o mouse ou a div que voce esta arrastando ,voce arrasta para fora)
    area.addEventListener('dragleave', dragLeave);

    //Drop
    area.addEventListener('drop', drop);
    
})


//Colocando evento de drag na area  neutra , onde vai poder voltar as divs que voce arrasto para baixo , agora vai retornar para cima(posição inicial)
document.querySelector('.neutralArea').addEventListener('dragover', dragOverNeutral);
document.querySelector('.neutralArea').addEventListener('dragleave', dragLeaveNeutral);
document.querySelector('.neutralArea').addEventListener('drop', dropNeutral);
//FUNCTIONS

//Functions Item -- Funções relacionadas ao item 'arrastavel'
function dragStart(e) {
    //Colocando uma classe , no currentTarget  = Que seria basicamente onde voce coloco o evento , se voce coloco em um item que tem varios outros itens dentro , ao clicar em qualquer item dentro quem vai ser selecionado é o item que tem o evento , se for a div pai, vai ser selecionado a div pai
    e.currentTarget.classList.add('dragging');
}

function dragEnd(e) {
    //Remove a classe dragging
    e.currentTarget.classList.remove('dragging');
}

//Functions Area -- Funções relacionadas a area onde vai ser dropado estes itens 

function dragOver(e) {
    //Só vai permitir liberar o campo , caso fazer uma verificação e não tiver nenhum item dentro . Caso tenha, ele não vai liberar para dropar o item
    if(e.currentTarget.querySelector('.item') === null) {
        //Para voce conseguir fazer um drop na area , tem que parar o comportamento padrão do dragover . Tem que dar um preventDefault para isto, para poder dropar o item. ( ou seja ele esta liberando para que o drop possa acontecer)
        e.preventDefault();

        //Adiciona uma class no item que voce entrou
        e.currentTarget.classList.add('hover')
    }
}

function dragLeave(e) {
    //Remove a class do item que voce entrou
    e.currentTarget.classList.remove('hover')
}

function drop(e) {
    //Tira o hover peto
    e.currentTarget.classList.remove('hover')

    //Seleciona um item que tem as class item, e dragging . e vai selecionar ela . Para identificar quem voce esta arrastando
    let dragItem = document.querySelector('.item.dragging');
    

    //Faz uma verificação para que no quadrado onde esta tentando fazer o drop , ja não exista algo dentro ou seja algum outro item ja dropado.
    if(e.currentTarget.querySelector('.item') === null) {
        //Se o valor for null , então quer dizer que não tem nada dentro, então voce ja pode fazer o drop
        
        //Voce vai fazer um appendChild do item que esta em cima voce esta acrescentando ele dentro desta div com o appendChild, ou seja ele vai tirar de la  e botar aqui onde voce quer , com todas as propriedades juntas.
        e.currentTarget.appendChild(dragItem)

        //Quando de fato der um drop o item for arrastado , roda a função updateAreas() para atualizar
        updateAreas()
    }
}

//Functions Neutral Area -- Funções relavionadas a area onde voce vai dropar de volta os quadrados

function dragOverNeutral(e) {
    e.preventDefault(); //Liberando a ação padrão dele
    //Add a classe hover , para visualmente ver a area dropavel
    e.currentTarget.classList.add('hover');
}
function dragLeaveNeutral(e) {
    //Retira a classe hover
    e.currentTarget.classList.remove('hover');
}
function dropNeutral(e) {
    //Remove o hover
    e.currentTarget.classList.add('hover');

    //Vai pegar o item que voce esta arrastando .
    let dragItem = document.querySelector('.item.dragging');

    //E vai colocar ele de volta onde soltar o botão
    e.currentTarget.appendChild(dragItem)

    updateAreas()
}

//LOGIC FUNCTIONS

//Esta função vai ser rodada nos 2 drops , para ir atualizando
function updateAreas() {
    //Pegar todos os item dentro da area dropavel. Selecionar elas
    document.querySelectorAll('.area').forEach(area => {
        //Pegando o atributo do data-name de cada div da .area. Pra mim saber o nome de cada div.
        let name = area.getAttribute('data-name');

        //Verificar se tem algum item dentro desta area. Ou seja voce clico no item , e tem alguma div la dentro. !== null ; esta diferente de nulo , ou seja tem algo dentro
        if(area.querySelector('.item') !== null) {

            //Voce seleciona a variavel que dentro dela vai ter o nome do atributo que voce pego ali no comeco . E voce preenche ela com o html que tiver dentro desta div que vai ter ou o 1 ,2 ou 3
            areas[name] = area.querySelector('.item').innerHTML;
            //Depois voce pega o html , voce salva dentro do objeto , que comeco como null.

        } else {
            //Caso não achar nada , voce preenche como null de volta
            areas[name] = null ; 
        }

        
    });

    if(areas.a === '1' && areas.b === '2' && areas.c === '3') {
        document.querySelector('.areas').classList.add('correct')
    }else {
        document.querySelector('.areas').classList.remove('correct')
    }

}