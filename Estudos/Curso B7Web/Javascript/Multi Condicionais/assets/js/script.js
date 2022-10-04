let idade = 55;

// Multi Condicionais && e || 
// Usamos a && para quando queremos usar 2 condições juntas , e o if so vai executar caso as 2 condições sejam satisfeita , um exemplo pode ser a idade , a idade  seja entre um e outro ou seja voce quer que digamos a idade de alguem seja maior que 18 e menor que 60 voce pode colocar as 2 condiçoes juntas separada somente pelo &&
if (idade >= 18 && idade < 60) { // Se caso voce quer verificar entre um e outro e se a condição estiver entre os 2 ela vai executar. lembre se de usar a variavel e o valor junto em ambas as condições idade 18 e idade 60 sempre bota as variaveis e os valores , se caso voce colocar somente o valor sem a variavel vai dar erro
   console.log("Voce é um adulto")
}
/*
if (idade >= 18) {
   if (idade < 60) {
      console.log("Voce é um adulto")
   }
}
*/

// Usamos a condicional || para tambem quando for usar 2 condição juntas , no caso do && as 2 condições tem que estar sendo satisfeita para executar, como no exemplo acima maior de 18 e menor de 60 ele executa. 
// No caso do || pode ter 2 condição e se caso qualquer 1 estiver correta ele vai execultar

if (idade >= 18 || idade < 60) { // Se qualquer uma no caso se for maior de 18 executa , "ou" se a idade for menor que 60 tambem  executa.
   console.log ("Voce é um adulto")
}
// && As 2 condiçoes precisam ser satisfeita para ser executada
// || Pode ter 2 condições mas se 1 for satisfeita ja pode estar executando


