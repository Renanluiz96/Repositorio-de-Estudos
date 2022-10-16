/*Selecionando Elementos no DOM
//Para selecionar os elementos(que seriam todas as tags html) que estão na tela

Para ter acesso aos elementos na tela , voce pode acessar ele pelo comando "document" pelo javascript e atraves do javascript voce vai navegar no DOM , para entender e achar este elemento
    Document = é um objeto para voce navegar pelo conteudo visual do seu site pelo dom ,  que basicamente voce vai ter todo o acesso as funções e coisas relacionadas ao dom para modificar o "Documento(documento é a tela visual do usuario)" e por ai voce pode "acessar" e "alterar" coisas especificas na sua tela , um h1 uma tag qualquer por exemplo... quando voce quer fazer isto voce sempre acessa pelo document via javascript.

    Window = Janela , é um objeto que tem propriedades e ações e etc... relacionadas a janela inteira, por exemplo =  Barra de endereço(URL) , na opção de volta , ou avancar a pagina , ou seja onde voce faz alguma ação e isto vai modificar a tela inteira , por exemplo voltar ou avancar a pagina e alterar o endereço do site, isto ira visualmente modificar "A tela inteira do usuario".

Quando for tratar do document(Responsavel pelo "Conteudo" da tela) voce usa ela junto com um ponto "." para ter acesso as funções que voce pode executar dentro do documento . 
Dica = Funções que terminam em plural como elements , elas sempre irão retornar um array no final , por ter mais de um item

   getElementsByTagName() = Para selecionar um elemento pela sua tag ,elements usa no plural por que voce pode ter esta tag varias vezes , varios h1 na minha pagina . E entre os parenteses voce coloca o nome desta tag entre aspas duplas .
      //document.getElementsByTagName("h1")

   getElementById() = Para selecionar um elemento pela sua id
      //document.getElementById("teste")

   getElementsByClassName()= Para selecionar um elemento pela sua class.
      //document.getElementsByClassName("botao")

   querySelector() = a queryselector é diferente ela é uma digamos uma universal voce pode pegar qualquer coisa por ela seja tag , id ou class. Mais voce vai escrever como um css para procura-las = id pelo # , class pelo , e pela tag voce somente usa a tag mesmo.
   document.querySelector("#teste")
   document.querySelector(".botao")
   document.querySelector("h1")

   querySelectorAll() = Se voce precisa pegar por exemplo mais de uma tag com o queryselector , ai voce tem que usar o queryselectorall , para selecionar todos os itens por exemplo uma lista que tem varios li . E por exemplo que voce queira navegar entre as tags e buscar por exemplo as tags li que tem em um local especifico, dentro dos parenteses voce vai navegando como um css mesmo vai acessando elas.
   document.querySelectorAll("#teste ul li") -> Aqui voce vai ter acesso a todos os li que estão dentro da tag ul que esta dentro do id teste
   O querySelectorAll sempre vai retornar um array , ja o querySelector normal ele vai retornar o proprio item como ele é usado para somente 1 elemento só


Todas as funções elas a grosso modo elas retornam um array  contendo as informações , ex quer usar selecionar os elementos atraves da tag , tag h1 , ele vai retornar um array com todos os h1 da tela
Voce tambem pode salvar estes elementos em variaveis para ter acesso a elas pela variavel
*/

//let elementos = document.getElementsByTagName("h1")

//document.getElementById("teste")
//document.getElementsByClassName("botao")
document.querySelector("#teste")
document.querySelector(".botao")
document.querySelector("h1")
document.querySelectorAll("#teste2 ul li")