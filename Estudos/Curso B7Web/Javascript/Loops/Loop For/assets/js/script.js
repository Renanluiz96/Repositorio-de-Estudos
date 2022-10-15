//Laço de repetição "for" é um dos LOOPs
//Quando voce quer que o codigo se repita diversas vezes , ou quantas vezes voce quiser .

//O codigo vai ser repetido enquanto a condicional for verdadeira

/* Um Loop for precisa de 3 coisas que voce precisa passar como parametros dentro dos parenteses
      1º - Inicio do contador
      2º - a Condicional para que o codigo continue executando (Voce pode colocar para que o codigo rode para sempre , ou colocar uma quantidade = Quero que o codigo rode 10 vezes ou seja o codigo vai se repetir 10 vezes) 
      3º - 
*/

//Dentro do for criei uma variavel que o inicio dela é 0 , depois passei a condição que enquanto o valor dessa variavel for menor que 10 ele vai continuar executando até chegar o 10 . E por fim eu dei uma encrementada então ao chegar no final da repetição a variavel "n" vai somar 1 numero e a partir dai a variavel "n" vai ser 1 e ai , vai "aumentando" até chegar o 10 , e ele parar a execução
for(let n = 0 ;  n <= 10;  n++) {
   console.log('Frase qualquer ' + n) // Aqui vai aparecer a frase + o valor da variavel n , que coloquei para mudar a frase , que o navegador caso ele detecte que a mesma frase esta se repetindo ele vai colocar um numero ao lado da frase.
}