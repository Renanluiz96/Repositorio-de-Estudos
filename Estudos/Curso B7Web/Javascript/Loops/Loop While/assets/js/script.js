//Loop While é a mesma coisa que o laço de repetição for só que feita de uma forma difetente . Tem momentos que vai ser interessante voce fazer com o while , e outras vezes que vai ser interessante voce fazer com o for. Mais na maioria das vezes voce vai usar o laço for, poucas vezes  voce vai utilizar o while.
// O while tem um perigo que ele pode rodar para sempre até parar ou travar o navegador
// Quando eu faço um while que ele depende de uma variavel que ela tem que ser ou maior ou menor ou igual em algum momento dentro do proprio while eu tenho que trocar essa variavel ou seja emcrementar somando um numero a mais ...

//Processo usando o while
/*
let numero = //0 Criei uma variavel fora
while(numero < 10) { //Criei um laco de repetição que se até a variavel numero chegar até 10 ele ira rodar este laço
   console.log(`O numero da vez é ${numero}`)
   numero++ // Voce coloca um emcremento no final do laço para ele ir alterando o valor da variavel até que ela chege o valor 10 e termine este laço , pois se não estiver este encremento , este laço vai rodar infinitamente
}
*/

//Mesmo processo usando o for 

for(let numero = 0 ; numero <= 10 ; numero++) {
   console.log(`O numero da vez é ${numero}`)
}