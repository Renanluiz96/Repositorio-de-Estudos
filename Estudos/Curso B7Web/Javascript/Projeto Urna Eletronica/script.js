//Função auxiliar para pegar as variaveis da urna
const c = (item) => document.querySelector(item)

//Variaveis de controle da interface
let seuVotoPara = c('.d-1-1 span')
let cargo = c('.d-1-2 span')
let descricao = c('.d-1-4')
let aviso = c('.d-2')
let lateral = c('.d-1-right')
let numeros = c('.d-1-3')


//VARIAVEIS DE AMBIENTE

//EtapaAtual esta 0 para que ele comece pegando as informações do primeiro "objeto " do array do json e depois ele vai pulando para o proximo  objeto onde esta contendo as informações de outros candidatos
let etapaAtual = 0;

//Variavel para saber qual é o numero que voce esta digitando no exato momento quando voce clica ele comeca vazio. Conforme voce for preenchendo ele vai preenchendo nesta variavel aqui e vai mostrando na tela os numeros. nos quadrados 
let numero = '' ;

//Variavel para controlar o voto em branco , que comeca como um false , e depois vai fazendo a verificação para trocar ele par true mais para frente
let votoBranco = false;

//Cria um array onde voce pode salvar os votos. onde salva o titulo(vereador ou prefeito), e o numero que voce digito ou se for branco salva em branco
let votos = []



function comecarEtapa() {
    //Variavel para controlar as etapas la do json que contem as informações dos candidatos . e depois de salvar esta variavel voce vai preenchendo as informações dos candidatos atraves desta variavel que vai pegando as informações la do json
    
    //Para ir pegando as informações la do objeto json do candidato atual que começa no 0 ou seja o objeto 0 do array
    let etapa = etapas[etapaAtual];

    //Toda vez que rodar a função comecar etapas para votar novamente, ou na ação de corrigir um voto , ou para votar em outro candidato , automaticamente os numeros que voce preencheu digitando vão ter que ser reiniciado e comecar de novo então no inicio desta função voce zera os numeros passando uma string vazia.
    numero = ''

    votoBranco = false ;

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
    //Depois de digitar os numeros do candidato , tem que aparecer as informações dos candidatos na tela . 
    //Tem que fazer uma procurar pelo numero do candidato
    let etapa = etapas[etapaAtual] //Para pegar o numero e as informações dos objetos do array de candidatos e conseguir usar eles para pegar as informações

    //Usa um filter , para filtrar o candidato que voce digito , se os numeros forem o mesmo que os numeros do candidato que esta salvo no array , e ele vai retornar true e vai salvar os numeros do candidato. ou vai retornar false e não vai salvar os numeros do candidato. E vai pegar as informações todas que conter dentro do objeto candidatos mesmo
    let candidato = etapa.candidatos.filter((item)=> {
        //Voce faz uma verificação se o numero do candidato que voce digito é igual ao numero que esta la salvo nele no array. se for voce mostra as informações na tela
        if(item.numero === numero) {
            return true
        } else {
            return false
        }
    }) //Depois de ter pego o candidato certo , e os dados dele que agora esta salvo na variavel candidato. Se ele não conseguir achar um candidato ele vai retornar um array vazio.

    //Faz uma verificação se ele acho um candidato ou seja se o array candidato for maior do que 0 quer dizer que ele achou
    if (candidato.length > 0) {
        candidato = candidato[0]; // Que seria o proprio candidato mesmo

        //Agora depois de ter achado o candidato voce vai preencher as informações na tela
        seuVotoPara.style.display = 'block';
        //Colocar as descrições dos candidatos usando as informações do array que esta salva na variavel candidato que voce digito e pego as informações
        descricao.innerHTML = `Nome: ${candidato.nome} <br/>Partido: ${candidato.partido}`
        aviso.style.display = 'block'
        //Cada candidato tem um array de fotos , então tem que monta esta estrutura pois ele pode ter varias fotos
        let fotosHtml = '';//Monta a estrutura onde vai ser inserida a foto
        for( let i in candidato.fotos) {
            //Faz um for para cada uma das fotos do candidato voce vai preenchendo aquela estrutura que comeco vazia , voce coloca a div html da foto ,e nela voce preenche as fotos de acordo com o propriedade do objeto
            //Cada foto que tiver voce vai preenchendo com a div que contem a foto voce vai la pega a div onde esta o candidato , e no src da imagem voce altera a foto pela foto que esta dentro do array

            //Voce faz uma verificação extra para caso tiver as duas fotos do vereador e prefeito , ai a segunda imagem que seria a do vice prefeito , ela tem uma classe small na segunda div . Então se tiver as 2 div e uma delas contendo a classe small  , voce coloca a classe small nas fotos ,ficando pequena , se não mantem sem a classe small normalmente
            if(candidato.fotos[i].url.small){
                fotosHtml += `<div class="d-1-image small"><img src="images/${candidato.fotos[i].url}" alt="">${candidato.fotos[i].legenda}</div>`;
            }else{
                fotosHtml += `<div class="d-1-image"><img src="images/${candidato.fotos[i].url}" alt="">${candidato.fotos[i].legenda}</div>`;
            }


        }
        lateral.innerHTML = fotosHtml //Depois de preenchido a estrutura voce inseri ela na lateral

    } else { //Agora fazer o preenchimento do voto nulo ou caso voce erro de digitar o numero do candidato
        seuVotoPara.style.display = 'block';
        aviso.style.display = 'block'
        //Agora na descrição voce coloca a mensagem do erro , e usa tambem a classe aviso grande e no css voce altera esta propriedade , e usa tambem a class pisca para fazer piscar a frase
        descricao.innerHTML = '<div class="aviso--grande pisca">VOTO NULO</div>'
    }

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
    numero = '' //Zera os numeros.
    //Ao clicar no botão branco , ai a variavel que comeco como false, agora vira true
    votoBranco = true;
    //Depois disso voce tem que fazer igual o voto nulo , colocar apenas algumas informações e uma div onde diz Voto em branco igual o voto nulo
    seuVotoPara.style.display = 'block';
    aviso.style.display = 'block';
    numeros.innerHTML = '' // Tirar todo os quadrados dos numeros da tela tambem 
    descricao.innerHTML = '<div class="aviso--grande pisca">VOTO EM BRANCO</div>';
    //Caso voce tenha digitado e apareceu o candidato na tela ao lado , e depois voce decidiu votar em branco , ele vai aparecer la . Voce zera o conteudo da lateral para que isto não aconteca
    lateral.innerHTML = ''


}
function corrige() {
    //Ao clicar no botão corrige ele vai reinicia e vai somente executar  o comecaretapas() de novo.
    comecarEtapa()
}
function confirma() {
    //Comeca com a etapa da votação como a etapa atua ou seja o 0 para poder votar nos vereadores, e depois ao final do voto ,ele vai encrementar esta variavel , e onde voce vota no prefeito.
    let etapa = etapas[etapaAtual]; 

    //Botão funcionar somente funciona em 2 ocasiões ; 1ª se o voto for branco , 2º ou se os numeros estiverem todos digitados
    
    //Cria uma variavel para o voto se estiver confimado, comecando ele como false. e depois que fizer a ação de verificação do voto branco ou digitado . voce transforma esta variavel para true
    let votoConfirmado = false;

    //Fazer uma verificação se o voto for branco
    if (votoBranco === true) {
        votoConfirmado = true; // Depois de votado em branco , então voce ja votou e pode clicar em confirma

        //Quando votar em branco ele vai salvar o voto em branco la no array  mandando um objeto com o candidato e o voto em branco que voce crio onde vai ficar salvo os votos totais
        votos.push({
            etapa: etapas[etapaAtual].titulo, //Mandando o titulo do voto
            voto: 'branco' //Manda a propriedade voto como branco
        })
    } else if(numero.length === etapa.numeros) { //ou então se a quantidade de numeros digitados , for a mesma da quantidade total de numeros que precisa votar .

        votoConfirmado = true; // Depois de ter digitado todos os numeros , voce ja votou e pode clicar no botão de confirmar
        
        //Depois de ter digitado voce vai mandar la para o array onde contem os votos , a mesma coisa que voce mando no voto branco o titulo , e aqui vai manda o numero que voce digito do candidato
        votos.push({
            titulo: etapas[etapaAtual].titulo,
            voto: numero
        })
    }

    //Depois de fazer o voto voce faz uma verificação la na sua variavel votoConfirmado , se ela ja estiver como true quer dizer que ja foi votado , então voce incrementa a variavel etapa, para poder votar no proximo candidato(prefeito)
    if(votoConfirmado) {
        etapaAtual++;
        //Voce faz uma verificação para ver se chego ao fim da votação . Voce faz um if para ver se a etapaAtual que voce incremento , se a etapa atual for diferente de undefined . se ela existir voce roda a a função comecarEtapa() para comecar novamente, se caso tiver undefined voce mostra dizendo que chegou ao fim
        if(etapas[etapaAtual] !== undefined) {
            comecarEtapa()
        } else {
            //Colocando aviso de fim na tela grande. 
            document.querySelector('.tela').innerHTML = '<div class="aviso--gigante pisca">FIM</div>';;
            console.log(votos)
        }
    }
}

comecarEtapa()