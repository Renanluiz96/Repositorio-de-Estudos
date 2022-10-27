//Funções relacionadas  a operações matematicas

//Javascript tem uma classe especifica para processos matematicos chamada "Math"


//Numero do Pi
//let novoValor = Math.PI

//Arredondando os valores para cima e para baixo , valores quebrados  existe 3 funções
//let novoValor = Math.round(3.67)  // a função round ele vai arredondar dependendo do numero ou seja se for um valor maior que 50 ele arredonda para cima , menor que 50 ele arredonda para baixo.
//let novoValor = Math.floor(3.72) // Ele arredonda o valor para baixo
//let novoValor = Math.ceil(3.58) // Ele vai arredondar para cima

//Mostrar o numero absoluto dele mesmo voce usa o .abs
//let novoValor = Math.abs(9.511521)

//Min e max ele vai te retornar o numero com o valor menor para o "min" , e o "max" o maior valor
//let novoValor = Math.min(7, 10 ,566, 5510) // Ele vai me dizer qual é o menor numero desses que eu passei nos parametros
//let novoValor = Math.max(7, 10 ,566, 5510) // Ele vai me dizer qual é  o maior numero desses que eu passei como parametro

//Para retornar um numero aleatorio entre 0 e 1 , voce usa o random
//let novoValor = Math.random()


//Voce pode usar uma tecnica que usa em conjunto 2 funções para que voce use o numero aleatorio para o numero que voce desejar , por exemplo voce quer um numero aleatorio entre 0 e 100 . 
//Voce usa a função math.random()
//Voce pega esta função e multiplica pelo valor que voce quer que ele faca o processo de escolher o numero aleatorio que no caso aqui o 100 de 0 a 100.
//Depois de voce multiplicar o valor voce pega isso tudo e coloca dentro da  função Math.floor()  para ele arredondar o numero para baixo . Para garantir que o numero nunca ultrapasse o numero que voce quer fazer o processo por isso sempre arredondar para baixo.
let novoValor = Math.floor(Math.random()  * 100)

console.log(novoValor)