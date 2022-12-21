//Função auxiliar para pegar as variaveis da urna
const c = (item) => document.querySelector(item)

//Variaveis de controle da interface
let seuVotoPara = c('.d-1-1 span')
let cargo = c('.d-1-2 span')
let descricao = c('.d-1-4')
let aviso = c('.d-2')
let lateral = c('.d-1-right')
let numeros = c('.d-1-3')


//Variaveis de ambiente

//EtapaAtual esta 0 para que ele comece pegando as informações do primeiro "objeto " do array do json e depois ele vai pulando para o proximo  objeto onde esta contendo as informações de outros candidatos
let etapaAtual = 0;

//Variavel para saber qual é o numero que voce esta digitando no exato momento quando voce clica ele comeca vazio. Conforme voce for preenchendo ele vai preenchendo nesta variavel aqui e vai mostrando na tela os numeros. nos quadrados 
let numero = '' ;


function comecarEtapa() {
    //Variavel para controlar as etapas la do json que contem as informações dos candidatos . e depois de salvar esta variavel voce vai preenchendo as informações dos candidatos atraves desta variavel que vai pegando as informações la do json
    
    //Para ir pegando as informações la do objeto json do candidato atual que começa no 0 ou seja o objeto 0 do array
    let etapa = etapas[etapaAtual];

    //Aqui voce vai montar os quadrados html na tela. e depois vai incrementando mais quadrados de acordo com o for abaixo que vai incrmentar no html divs com o quadrado de acordo com o quantidade de numeros que o candidato precisa
    let numeroHtml = '';

    //Fazer um laço de repetição para mostrar na tela os quadrados de numeros de candidato. Que cada candidato contem um numero especifico tem alguns que contem 5 numeros e outros contem 2 . e voce vai fazer o for de acordo com o valor que estiver dentro da variavel numero do objeto
    for (let i =0; i < etapa.numeros ; i++) {

        if(i === 0) { //O primeiro numero vai conter a classe pisca 
            numeroHtml += '<div class="numero pisca"></div>'
        } else { //Os outros numero vão ser mostrado normal sem o pisca
            //Aqui voce vai incrementar adicionando divs com o quadrado de acordo com a quantidade que o candidato precise ser votado
        numeroHtml += '<div class="numero"></div>'
        }

        
    }

    //Vai limpar as informações na tela e preenchendo com as informações la do json(etapas) que esta salvo na variavel etapa
    seuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo
    descricao.innerHTML = '';
    aviso.style.display = 'none'
    lateral.innerHTML = ''

    //No final de voce incrementar a quantidade de divs html com o for depois de voce incrementar as divs certinha quando tiver todas mostrando de acordo com o que o candidato precisa . porque voce preencheu elas ja com o for . voce joga ela aqui nesta variavel numeros para mostrar na tela
    numeros.innerHTML = numeroHtml

}

//Sempre que voce fizer uma ação , voce digito um numero ele vai preencher o numero la na variavel numero de ambiente  e depois ele atualiza a interface . E depois de completar de digitar , ele vai verificar quem é o candidato e as informações dele na tela.
function atualizaInterface() {

}

function clicou(n) {
    //Ao clicar voce vai verificar se tem algum quadrado com o pisca ativado ou seja a classe que tenha o numero com a classe que contenha tambem o pisca. Voce vai pegar este numero
    let elNumero  = c('.numero.pisca');

    //Quando ele pega esta classe ele vai retornar um valor null  e isto quer dizer que voce pode preencher os dados pois ele esta com valor vazio. Ai voce faz uma verificação
    if (elNumero !== null) { //Se elNumero for diferente de null quer dizer que ao apertar no botão ele pode preencher neste numero
        elNumero.innerHTML = n; //Depois de ter verificado se estiver vazio ele vai preencher com o numero que voce clicou.

        //Depois de voce ter clicado ele vai salvar la na variavel ambiente numero que voce crio que começo vazia , ou seja ele vai adicionar o numero e vai "concatenar as informações" com o numero que voce digito e salvo, com o numero que voce vai digitar .
        numero = `${numero}${n}`

        //Depois de ter adicionado o numero no quadrado em especifico ele vai retirar o a classe pisca do quadrado que voce digito
        elNumero.classList.remove('pisca');

        //Aqui voce faz uma verificação se o proximo item tem o valor diferente de null , então quer dizer que tem um valor que pode ser preenchido , ai ele vai continuar preenchendo.
        if(elNumero.nextElementSibling !== null) {
            // Depois de ter removido a classe do quadrado que voce ja digito . Voce vai acessar o quadrado e pegar o proximo quadrado usando o nextElementSibling , e depois de ter pego o proximo quadrado (o do lado dele), voce vai adicionar a classe pisca neste outro quadrado
        elNumero.nextElementSibling.classList.add('pisca')
        } else{ //Se ao chegar no ultimo numero e o valor de null não for mais diferente quer dizer que ele chego no ultimo item . Ai ele executa a função atualiza interface , para mostrar as informações dos candidatos na tela.
            atualizaInterface()
        }
        
    }
}

function branco() {
    alert('Clicou em Branco!')
}
function corrige() {
    alert('Clicou em Corrige!')
}
function confirma() {
    alert('Clicou em Confirma!')
}

comecarEtapa()