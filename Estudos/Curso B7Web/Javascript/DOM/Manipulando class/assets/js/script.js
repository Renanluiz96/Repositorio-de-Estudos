//Manipulando classes com javascript

//Como Faz para manipular, adicionar, remover classes em uma div , ou em qualquer elemento.

//classlist ele pode controlar as classes no caso voce pode adicionar com o .add voce pode remover com o.remove

//Para adicionar uma class ao seu item  por exemplo . Voce ja tem que ter a sua class criada ja la no css e voce só vai inserir ela em um item

//Vamos colocar um exemplo que voce tem uma div com um texto  , e voce faz 3 botões abaixo que ao clicar em cada botão ele vai alterar a cor da sua div colocando um background collor nela, para isto 
   // Voce vai ter que criar os botões normal la no seu html 

   //Vai ter que criar por exemplo 3 class que cada 1 tenha as propriedades que voce quer adicionar , por exemplo aqui a cor de fundo . Então uma class para cada cor


   // Depois la no seu botão voce usa a propriedade onclick"" e entre as aspas voce coloca as funções , que voce crio sendo cada uma delas ao clicar ela vai acrescentar a class a div da função igual voce especifico ali



//classlist ele pode controlar as classes no caso voce pode adicionar com o .add voce pode remover com o .remove a classe em especifico por exemplo aqui eu quero add uma class a div com o id exemplo. 
//Cada função eu vo adicionar a classe que eu ja criei la no css, e ao clicar no botão a função vai adicionar a class em especifica com a cor em especifico. E remover a class da outra cor se caso voce ja ter add as outras classes , voce vai ter que remover elas e add a cor que voce quer
function verde() {
   //A função vai fazer o que vai acessar o id com o queryselector , ela vai remover a class de cor que voce vai especificar aqui no verde por exemplo ela vai remover a class vermelho e a class azul , e vai adicionar a class verde no elemento que tem o id exemplo
   document.querySelector('#exemplo').classList.remove('vermelho')
   document.querySelector('#exemplo').classList.remove('azul')
   document.querySelector('#exemplo').classList.add('verde')
}
function vermelho() {
   //Aqui mesma coisa ele vai remover a class verde e azul e vai adicionar a class vermelho
   document.querySelector('#exemplo').classList.remove('verde')
   document.querySelector('#exemplo').classList.remove('azul')
   document.querySelector('#exemplo').classList.add('vermelho')
}
function azul() {
   //Removeu a class verde e vermelho, e acrescentou azul
   document.querySelector('#exemplo').classList.remove('verde')
   document.querySelector('#exemplo').classList.remove('vermelho')
   document.querySelector('#exemplo').classList.add('azul')
}

//Agora a função "CONTAINS" dp classlist serve para fazer uma verificação para verificar se existe a class em alguma tag ou id , até mesmo na propria class , ela verifica ai voce pode fazer um if que se caso ela  tiver voce faz tal coisa 
function trocar() { 
   //aqui o que eu fiz eu add esta função em um botão e ao clicar neste botão
   //Ele fez uma verificação com o if se o id exemplo tinha a class preto.
         //Se ele tivesse a class preto ele iria executar o if , o if ira remover a class preto com o classlist.remove('preto'), e iria adicionar a class verde  com o classlist.add('verde') que esta class ja iria estar estilizada la no css
         //Se não tivesse a class preto , ele iria executar o else  que ja estaria com a class verde, que seria remover o verde , e acrescentar o preto.
   // Aqui ele ficaria fazendo esta verificação e trocando as class , por isto o nome da função trocar, pois ele iria só trocar as classes removendo e adicionando outra ao click no botão 
   if(document.querySelector('#exemplo').classList.contains('preto')) {
      document.querySelector('#exemplo').classList.remove('preto')
      document.querySelector('#exemplo').classList.add('verde')
   }else {
      document.querySelector('#exemplo').classList.remove('verde')
      document.querySelector('#exemplo').classList.add('preto')
   }
}