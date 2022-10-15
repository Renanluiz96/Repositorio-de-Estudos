// Introdução a Array
//Array é uma variavel onde voce pode guardar varias informações dentro de 1 variavel , só e é usado entre colchetes []  , e dentro dos colchetes cada item é separado por virgula.
//Normalmente usado para guardar "Listas" , ou seja uma lista de usuarios , uma lista de produtos , lista de ingredientes ...
// E nesta lista que digamos voce pode criar ela digamos com 3 itens e depois ir adicionando dinamicamente mais itens a sua lista , e pode tirar tambem itens da lista
//Os Arrays voce pode armazenar strings, numeros e boolean . E tambem se quiser os 3 juntos pode fazer 1 array que contenham strings numeros e boolean juntos se voce quiser
//Voce pode criar uma array dentro de outro array

/*O primeiro valor sempre comeca  por 0  , E não 1. Então se a variavel conter 3 itens:
    o primeiro é o item "0"
    segundo item é o "1" 
    e o terceiro item é o "2"

Sempre nesta ordem
*/

//Criando Array
let colors = ['blue', 'red', 'green']

//console.log(colors)

//Para mostrar somente o item do array que voce quer voce coloca a variavel e entre colchetes voce coloca qual item que voce quer ver
//console.log(colors[0])

//Criando array numeros 
let idades  = [10, 20,30]
//console.log(idades[2])

//Criando um array com strings e numeros
let misturado = ['Renan', 25 , 'Ano' , 1996, true, false]
//console.log(misturado[5])

//Crindo um array dentro de outro array
let nomes = ['Renan' , 'pedro', 'santos']

let lista  = ['Outro', nomes] // Aqui eu criei um array e dentro dele tem uma string e eu coloquei o nome da variavel que eu salvei o array de cima


let lista2 = [ // Voce pode tambem separar o array por item assim para ficar mais facil visualização do array
   'blabla',
   ['Meu nome','Meu sobrenome']
]
// Aqui eu criei um array que contem uma string e dentro mesmo do array eu criei outro fazendo outro colchetes e colocando dentro deste novo colchete os itens destr outro array 

//Para Acessar um item de um array que esteja dentro de outro array ?
//Voce tem que pensa que ele é igual uma matriz , e ir acessando ele . o segundo array esta em segundo item do array então voce vai acessar o item "1" pois ele é o segundo e o primeir é 0 e o segundo é 1
//Voce acessa o item 1 que esta o array ,e dentro do array dentro voce quer acessar o primeiro item do segundo array que seria o 0 , então voce acessa assim  \/ 
console.log(
   lista2[1] // Que é o array
         [0] // é que e o item dentro do array 
   )

//console.log(lista[1][0])

//Voce pode tambem joga o array que esta dentro de outro array , dentro de outra variavel e mostrar o item desta array como um outro array normal
let segundo = lista2[1]
console.log(segundo[1]) 
//ou da outra forma
console.log(lista2[1][1]) 