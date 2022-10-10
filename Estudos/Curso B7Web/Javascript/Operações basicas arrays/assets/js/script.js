//Operações basicas em arrays = Não é operações matematicas
/*Manipulação de arrays = para manipular o item voce usa a variavel que esta o item junto com o . voce coloca o que voce quer fazer ex : ingredients.length. Abaixo vou falar algumas manipulações e o que eles fazem
   .length = Mostra a quantidade de itens tem no array
   .push = Para adicionar um item novo no array , ele ira ser colocado em ultimo lugar do array
   .pop = Remove o ultimo item da sua lista
   .shift = Remove o primeiro item da sua lista

*/
let ingredientes = [
   'agua',
   'farinha',
   'ovo',
   'corante',
   'açucar'
]

//Adicionando itens dentro do array , Quando eu ja sei a quantidade de itens que ja tem dentro do array

//ingredientes[6] = 'cebola' 
// Aqui eu coloquei o item cebola na posição 5 . lembrando que o array tem 5 itens , mais o primeiro item é o 0 então antes os itens tinham até o numero 4 , então sabendo disto eu coloquei o novo item na posição 5 que "Não existia nada antes"
//Se eu boto digamos que este mesmo item na posição 6, o item que esta na posição 5 fica vazio e ira marcar como empty no console log 

//Colocando um item em ultimo lugar usando o push
//ingredientes.push('cebola')1

//Removendo o "ULTIMO" item da sua lista usando o pop
//ingredientes.pop();

//Removendo o "PRIMEIRO" item da sua lista usando o shift
//ingredientes.shift();


//Mostrando a quantidade de itens dentro do array
console.log(`Total de ingredientes: ${ingredientes.length}`)

console.log(ingredientes)