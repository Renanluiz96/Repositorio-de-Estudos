/*
Função ;
Oque é uma função :
   A função é um trecho de codigo que a gente cria  para fazer uma determinada coisa.

   É um codigo independente ele não depende de outras partes do meu codigo.

   Em uma função tem 3 funcionamentos = Entrada -> Processamento -> Saida .

   Por exemplo um motor de um carro dentro de um motor de um carro tem por exemplo um bocado de coisas que o motor faz para que o carro ande seja para frente ou para tras .

   Na programação é a mesma coisa uma função dentro da função eu tenho alguns codigos para que façaa esta função função funcionar que esta função ira fazer uma determinada coisa.

   E depois eu pego esta função este bocado de codigo que eu criei deixo ele quietinho em algum lugar , para que quando eu precisar de algo que esta função fassa eu vou la e uso ele.

   E esta função sempre tem uma entrada de dados e uma saida de dados , por exemplo do motor a entrada é eu botar gasolina , e a saida vai ser eu sair com um movimento mecanico.

   No javascript eu vou dar algum dado ou alguns dados de entrada  , e eu recebo em retorno algum resultado destes dados que eu dei entrada.
   

   RETURN :

   E depois de processado toda a função ela executa e fazer o que ela tem que fazer . Ela pode ter que ter um return que seria no caso voce salva o resultado destas parametros , se voce usar o console log ele so vai mostrar o resultado dos parametros na tela . Mas se voce usar o return e do lado voce colocar o que ela vai retornar por exemplo.
      Digamos que voce quer fazer uma função que faça a soma por exemplo de 2 parametros ou seja o parametro vai ter que ser 2 numeros.

      Ai nesta função voce coloca que na função os numeros vão ser trocados por n1 e n2 e dentro voce coloca que o retorno vai ser o n1 + o n2 , pronto ele vai salvar. e o que voce faz depois voce pega e cria uma variavel e nesta variavel voce coloca que esta variavel vai ser o resultado que vai "Retornar" desta função por exemplo . voce fez uma função que vai somar 2 + 5 por exemplo

      function somar(n1 , n2){
          return n1 + n2 
      } Aqui voce cria a formula

      let resultado = somar(2, 5);
      console.log(resultado)
      

      Então o resultado no final que der que no caso vai ser o 7 ja que eu passei o parametro 2 e 5 .

      Então ele só vai salvar , caso voce queira mostrar na tela ai voce da um console.log(resultado), que ai ele mostra  .  
      Mesma coisa voce quer criar outra variavel , que seja a soma de 10 + 10 por exemplo voce vai e faz a mesma coisa só que com o parametro que voce quer .
      let resultado2 = somar(10, 10);
      Vai fazer a mesma coisa vai executar a função que seria somar e entregar o resultado dentro desta variavel

   EX : Pode criar digamos uma função que pega um texto e transforme este texto todo em minusculo.
       Reparo voce "entrego" um texto normal ; que foi o dado de entrada.
       E recebeu o "Retorno" que foi este texto só que todo em minusculo.
       Só que neste processo voce fez algo dentro desta função que pegasse o texto e o transformasse .
       E voce pode reutilizar esta função quando digamos quiser pegar qualquer outro texto e coloca-los em minusculos.

   
   Para voce usar uma função voce tem que colocar um nome nela , e nela não pode haver caractere especiais , acentos , espaços;
   Normalmente para colocar o nome em uma função voce coloca o nome todo minusculo, e se caso a função tiver 2 nomes que voce vai ter que usar tudo junto as 2 palavras voce usa o camelcase.
   Camelcase: Seria voce coloca a primeira palavra minuscula e a primeira letra da segunda palavra com a letra maiuscula = textoMaiusculo

*/

function gravidade() { // Voce declara a função pelo nome function o segundo nome normalmente é o nome desta função que voce vai usa-la depois por este nome . E depois entre os parenteses vai ser os parametros que voce vai passar que seria o dado de entrada , para que ela faça o que a função tem que fazer neste dado que voce determino.

   // E aqui dentro fica o que a função ira fazer , aqui no exemplo esta função basicamente só vai mostrar algo no console log
   console.log("A gravidade do planeta é:") 
   console.log(9.8)

}

/*
gravidade(); // Para voce usar a função voce tem que chamar ele pelo nome dela e mesmo que ela não tenha nenhum dado de entrada voce somente abre e fecha o parenteses , para que o javascript entenda que isto é uma função e ele possa rodar ela.
*/

function somar(n1 , n2) { // Aqui nos parenteses , eu vou passar 2 parametros que seria  variaveis por exemplo 
   let resultado = n1 + n2 // Depois de substituir os dados do parametro por as variaveis n1 e n2 que só existem aqui dentro , voce pode usa-las aqui dentro. 
   //Por exemplo aqui voce só quer fazer uma soma dos parametros que voce passo la fora e transforma-los em variaveis e somar e mostrar no console log o resultado
   console.log("Resultado: " + resultado)
}

//somar(10, 15); // Quando voce for usar a função e passar o parametro , estes numeros que estão aqui eles automaticamente , se transformão naquelas variaveis que estão dentro da função somar ou seja o 10 vai se tornar o n1 . e o 15 vai se tornar o n2 . e estas variaveis n1 e n2 somente existem ali dentro da função , fora não existe

function nomeCompleto(nome, sobrenome) {// Aqui criei uma função para que pegue 2 parametros , e mostre na tela o nome e sobrenome um ao lado do outro

   console.log(`${nome} ${sobrenome}`)

}

//nomeCompleto("Renan" , "Luiz") // Aqui usei 2 strings que seriam os parametros, que foram transformados la dentro da função por 2 variaveis a primeira string aqui foi a primeira variavel do parametro, a segunda string é a segunda variavel do parametro

//nomeCompleto("Joao", "Silva") // Aqui eu só usei a mesma função só que com parametros diferentes, para voce ver que voce pode usar a mesma função diversas vezes , que no final ele me mostro o resultado da primeira função e esta aqui na tela .

function somar(n1 , n2){// Aqui voce monta a função 
   return n1 + n2 // e com o return voce pede para salvar retornando a soma de n1 + n2
}

let resultado = somar(10, 5); // E para usar a função voce cria uma variavel dizendo que o valor da variavel vai ser o resultado desta função somar e ao lado da função entre parenteses voce coloca os parametros que voce quer somar. se for 2 numeros voce coloca 2 numeros separando por virgulas, se a função  conter 3 numeros voce usa 3 numeros  , que o processo dela é somente salvar o resultado.
console.log(resultado) // Ai para mostrar o resultado na tela voce usa o console log com a variavel que voce armazeno com o resulado daquela função

function multi(n1, n2) {
   return n1 * n2
}

let multiplicacao = multi(4, 15);
console.log(multiplicacao)


function nomeCompleto(nome, sobrenome) {
   return `${nome} ${sobrenome}`;
}

let nome = nomeCompleto("Renan" , "Luiz");
console.log(nome)