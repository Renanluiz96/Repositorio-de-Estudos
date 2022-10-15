//Condicionais == e === diferencas
// O igual == ele aceita o valor mesmo se for number ou string mais elas tem o mesmo valor no caso o 20 se ele for 20 em string ou em numero ele vai aceitar pois tem o numero 20 em ambos
// O igual === ele so vai aceitar se for a variavel numero ou string igualzinhas , no caso mesmo se for uma string com numero 20  e voce quer verificar se é igual a um numero ele não vai aceitar , pois e um igual bem restrito , so vai aceitar se for um number 20 com number 20 , ou uma string 20 com outra string 20
//o igual === serve para tambem quando voce quer verificar alem do valor da variavel o tipo dela tambem string , number ...
let idade = 20
if(idade == 20) {
  idade = idade + 20
  console.log(idade)
} // Nem  sempre um if precisa ter um else , quando voce tem certeza que a condicional vai ser satisfeita