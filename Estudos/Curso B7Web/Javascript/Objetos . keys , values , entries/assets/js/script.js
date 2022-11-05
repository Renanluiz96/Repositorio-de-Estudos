//Obejeto : Key, Values e Entries
//Funciona tanto para objetos quanto para arrays. 
//Para voce usar estes funções voce tem que usar o object + o ponto + ou keys ou values ou entries
   // Keys = as keys vai mostar em um array quantas itens tem no array vai mostrar o total de index. E em um objeto ele vai mostrar qual são as chaves que tem nome objeto que seria o item antes dos :

   // Values = values é os valores que em um array vai basicamente mostrar o array porque o array é um conjunto de valores. e em um objeto ele vai mostrar o valor das chaves ou seja o valor do lado direito dos : que tem no objeto.

   // Entries = e o entries ele vai montar arrays dentro do proprio array ou do proprio objeto , e dentro de cada array ele vai mostra a chave e valor de cada item separadamente por arrays separados.

//let lista = ['ovo', 'macarrao', 'feijao', 'pipoca']
//console.log(Object.keys(lista))

let pessoa = {
   nome:'renan',
   sobrenome:'luiz',
   idade: 26
}
console.log(Object.values(pessoa))