let personagem = {
   nome: 'Renan',
   idade: 26,
   pais: 'Brasil',
   olhos: ['preto', 'azul'],
   status: {
      forca: 20,
      magia: 28,
      stamina: 50
   }
}

//Alterando um dado do objeto igual um array voce acessa e depois do sinal de igual voce coloca o novo valor daquela propriedade
personagem.nome = 'Luiz'
console.log(personagem.nome) // Aqui ja vai ter alterado o valor da propriedade

//Aqui vou alterar o valor da chave mais no caso eu vou aumentar em 5 o valor de uma propriedade usando o += não estou definindo um novo valor estou "AUMENTANDO" o valor que ja continha nesta propriedade
personagem .status.forca += 5
console.log('Força: ' + personagem.status.forca)// Antes era 20 agora é 25

// Para voce fazer modificações de um array dentro de um objeto , por exemplo adicionar mais um valor no objeto , voce pode usar os comandos de array dentro do objeto
personagem.olhos.push('Terceiro')//Aqui estou adicionando um valor a mais no array dentro do objeto personagem , que tem a propriedade chamada olhos
console.log(personagem.olhos)


// Voce pode tambem fazer um objeto e nele conter um array , e dentro deste array voce pode criar um objeto ou mais dentro separando cada elemento deste array que seria objeto , um array que contenha varios objetos , para definir os itens dentro . Por exemplo voce quer criar um objeto e nele voce cria um array por exemplo carros , e dentro deste objeto carros voce faz ele ser um array , e dentro deste array voce coloca a informação de cada carro

let personagem2 = {
   nome: 'Renan',
   idade: 26 ,
   carros: [//Aqui voce faz um arraya para colocar seus carros digamos assim,
      {modelo: 'Fiat', cor: 'preto'},//Agora cada objeto deste array é uma valor 
      {modelo: 'Ferrari' , cor: 'vermelho'} // outro valor do array sendo um objeto
   ]
}
/*
Acessando esses objetos dentro do array carros voce vai acessando item por item .
   Personagem2 > Objeto usa o ponto
   carros > ele é um array agora para acessar um array voce tem que acessar por colchetes.
   [1] > Para voce acessar o valor 1 do array que seria o primeiro objeto
   cor > é a propriedade do objeto do array então voce usa o ponto
*/  
console.log(personagem2.carros[1].cor)