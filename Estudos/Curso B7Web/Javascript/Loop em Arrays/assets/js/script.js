let cores = [
   {nome:'preto', qt: 10},
   {nome:'azul', qt: 5},
   {nome:'vemelho', qt: 15}
 ]


// Criei um loop que ele vai mostrar na tela os itens do array então ele vai pegar o array e vai mostrando item por item até o final do array usando a condicional cores.length que o length é a quantidade de itens que esse array tem ,então ele vai executa ate enquanto o array ainda estiver item , se ele tiver 5 vai executar 5 vezes.
//Para isso criei uma variavel que comeca com 0 , e eu coloquei essa variavel que comeca com 0 para mostrar o item 0 do array , depois ele somou no final e foi para o 1 então ele mostro no console log o item 1 que tem dentro do array , e assim em diante até ele mostra o ultimo item do array , que é o final do length
for (let n = 0; n < cores.length; n++) {
   //console.log(cores[n] + ' Item ' +
   //n)
}

// Outra forma de mostrar a lista de array na tela igual o de cima
// Uma das formas usadas quando se quer fazer loop em array

for (let i in cores) { // Aqui ele vai criar uma variavel "i" que enquanto tiver item dentro do array ele vai mostrando,  como no for acima  voce tem que colocar o console log com o i dentro de colchetes para ele ir mostrando o valor do array, Essa forma bem usada para loops em array pois com o "in" ele faz isso de forma mais inteligente
      console.log(cores[i].nome + cores[i].qt)
}


// Antes eu criava uma chave que seria um numero na variavel que comecava com 0 e ia no console log mostrando o valor da chave dentro do array para ir mostrando na tela os itens do array 
// Agora voce cria uma variavel que ela mesmo ja é o item do array usando junto com "of" e neste console log voce não precisa passar o array e a chave que voce criava antes que ia encrementando e mostrava na tela , agora voce mostra a variavel que ja vai ser os itens do array
for(let cor of cores) {
    // console.log(`Nome: ${cor.nome} - ${cor.qt}`)
}