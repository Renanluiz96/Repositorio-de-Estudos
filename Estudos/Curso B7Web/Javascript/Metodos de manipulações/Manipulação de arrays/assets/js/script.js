// Metodos para manipulação de Arrays

let lista = [45, 20, 9, 16, 21]


//let res = lista




//Tem o toString que transforma o array em string
//let res = lista.toString()

//Join parecido com o split(onde transforma todos os conteudos string em array separado pelo que voce colocar de parametro). O join faz a mesma coisa só que ele transforma o array em string separado pelo que voce colocar de parametro seja um espaço , virgula ponto ...
//let res = lista.join(',')//Vai separar cada conteudo do array em uma string com virgula em cada item


//Para voce procurar em que posição esta tal item dentro de um array voce usa o indexOf para localizar . Se ele não achar ele vai retornar o resultado -1
//let res = lista.indexOf('Corante') //Vai procurar o item corante dentro do array e vai me retornar a posição dele.


//Para remover o ultimo item do array voce usa a função pop para retirar o "ULTIMO" item do array.
//Remover o primeiro item do array voce usa o "SHIFT"
//lista.pop() // ultimo
//lista.shift() // Primeiro

//Para adicionar um item no seu array voce usa a função push e passa no parametro o item que voce quer  adicionar
//lista.push('açucar')

//Para voce alterar o conteudo do item do array voce usa o proprio index dele usando o colchetes. Se voce colocar um index que não existe = ele vai criar o item . Exemplo voce tem uma lista com 3 itens , e atribui um item ao index[3] como ele não vai ter nada , ele vai ser criado.
//lista[0] = 'Ovos' // Voce vai alterar o primeiro item para Ovos
//lista[4] = 'Açucar' // voce adiciono um item novo pois o index 4 não existia

//Para remover um item especifico dentro do array usa a função splice()e dentro dela voce passa 2 parametros , qual o item voce quer remover, e o segundo é quantos itens comecando dali voce quer remover. 
//lista.splice(0, 1) // Removi o primeiro objeto que foi o index 0 . e o segundo parametro que tem 1 foi só pra remover ele mesmo , se eu usa-se 2 no segundo parametro ele removeria 2 itens a partir do index 1. 

//Para ordenar o seu array em ordem alfabetica voce usa o sort().Para ordenar ao contrario voce usa o reverse , mais primeiro voce tem que ordenar com o sort, e depois usar o reverse .
//lista.sort()
//lista.reverse()

lista2 = []//Aqui voce crio um array novo zerado

/* //Função map() ela vai mapear o array percorrer todos os itens do array e vai executar uma função em cada item deste array
   /* lista2 = lista.map(function(item) {
      return item * 2;
   }) 
// E aqui voce pego o array novo e crio um map do antigo array e dentro do parametro map voce uso uma função que retorna o item do array 1 vezes 2 . Então em cada item do array 1 ele vai pegar multiplicar por 2 e retornar ,e quando ele retornar ele vai retornar para o array 2 o numero dobrado 
//Ou voce pode usar um for para ir dando um push la no array 2
   for(let i in lista) { 
      lista2.push(lista[i] * 2)
   }
// Aqui voce vai fazer a mesma coisa que o map só que criando um loop for e pegando item por item do array 1 e dando um push no array 2 multiplicando por 2
*/

/*//Tem a função filter que ele vai filtar o seu array , o filter basicamente ele vai retornar um valor booleano ou true ou false , e ele é igual o map ele pega cada um item do array e executa uma função. 
//Voce usa o filter com um if para executar uma condição e ele retornar ou true ou false 
//Exemplo quero fazer uma segunda lista e quero pegar os itens maiores que 20 da lista 1 e adicionar . 
lista2 = lista.filter(function(item) {
   if (item > 20){
      return true;
   }else {
      return false
   }
});
//Este filter é muito usado para voce filtra varias coisas e fazer uma condição para pegar itens em especifico e colocar em outro array para mostra na tela. Por exemplo quero pegar uma postagem que tem mais de 10 comentarios por exemplos , voce pode usar o filter para isto passando a condição no if e ir pegando os itens ... */

/* //Função every e some , every = todos , some = alguns . estas funções elas vão retornar um valor booleando true ou false. Every ele vai pegar todos os itens do array e fazer uma verificação de acordo com a condição que voce colocar, ele vai verificar se todos os itens baterem certo com a condição ele vai retornar true se caso algum não corresponder a condição ele vai retornar false. Agora  o some não se algum item ja corresponder a condição ele ja retorna o true, se caso nenhum dos itens corresponderem ele retorna false . Esta função é igual a função map voce tem que criar uma função dentro do parametro. 
  /ista2 = lista.every(function(item) {
      if (item > 2 ) {
         return true
      } else {
         return false
      }
   })
   lista2 = lista.some(function(item) {
      return(item < 20)? true: false // Operador ternario
   })
*/


//Função find e findIndex. find =  ele vai fazer uma procura e vai retornar o conteudo do item que ele acho. E a função findIndex ele vai me retornar a posição do index que ele esta , se por exemplo ele tiver na primeira posição ele vai retornar a informação que o item esta na posição 0. E igual a função map voce pode rodar uma função dentro deste parametro

let lista3 = [
   {id:1, nome:'Renan', sobrenome:'Luiz'},
   {id:2, nome:'luiz', sobrenome:'joao'},
   {id:3, nome:'outro', sobrenome:'xyz'}
]

let pessoa = lista3.find(function(item) { // Aqui eu criei uma variavel que ela vai pegar uma informação  ela vai la no array lista3 e vai executar a função find . 
   return (item.id == 3) ? true : false ;  //Ele vai dentro de cada item da lista de objetos , e vai procurar dentro dos objetos a propriedade id de cada objeto um resultado igual a 3 se ele achar algum que a propriedade id seja igual o 3 ,ele vai retornar true e vai jogar todo o item no caso o objeto dentro da variavel ..
} )
let res = pessoa









console.log(res)