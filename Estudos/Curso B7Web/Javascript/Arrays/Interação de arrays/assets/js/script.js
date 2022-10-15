//Interação de arrays

let fruits = ['Banana', 'Laranja', 'Maca', 'Pera']

//Usar o array como referencia para fazer algumas coisas

/*
Para voce filtrar os itens voce usa o filter , a função filter ele gera um novo array então voce tem que salvar este array em um lugar ou seja varivel , esta função filter vem com 3 itens para ser usado.
   1º - value : Que seria o item o nome é value , mais voce pode colocar o nome que voce quiser
   2º - index : Que vai mostrar em qual index que o item esta
   3º - array : Que ele ja tem o proprio array completo
*/

//Para voce filtrar os itens do array que por exemplo tenham mais de 4 letras , ele vai criar um array novo com os itens que voce especifico ou seja um array novo com os itens que tem itens com mais de 4 letras

let bigFruits = fruits.filter((value) => { // Aqui voce vai criar um novo array filtrando o array que voce ja tem
   return value.length > 4 // Aqui voce crio uma função dentro da função filter que ele só vai retornar os  item do array que tem um tamanho maior que 4
})

console.log(bigFruits)


//Função every para fazer uma verificação por exemplo every ele vai fazer uma verificação em todos os itens dentro do array

let ok = fruits.every((value) => {
   return value.length > 3 ; // Aqui eu quero fazer uma verificação que se "todos"(every) os itens do meu array forem maior do que 3 uma string com mais de 3 letras , ele vai criar uma variavel retornando um valor true . e voce pode fazer uma condição que se caso existir o true voce faz tal coisa
})

if (ok) {// Como eu fiz ali em cima se eu fiz a verificação e ele crio a variavel eu coloco uma mensagem , caso não tenha criado eu retorno outra mensagem
   console.log('Todos os itens são maior que 3')
} else {
   console.log('Nenhum item é maior que 3')
}


//Para fazer uma verifiação se tem algum item especifico dentro do seu array voce usa a função includes que ele ira fazer uma procura pelo item que voce quer dentro do array
if (fruits.includes('Banana')) { // Faz um if dentro do array se tem o item que voce quer voce da um console log por exemplo aqui ver se tinha o item banana dentro do array . ele me mostro uma mensagem , se não tivesse ele iria me mostrar outra mensagem. 
   console.log('Tem banana sim!')
} else {
   console.log ('Não tem banana...')
}