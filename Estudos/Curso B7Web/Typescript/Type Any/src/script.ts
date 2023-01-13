//Type Any = Type any vai auxiliar no processo de verificação dos types, ele não é um type que vai ser entendido pelo javascript, ele é exclusivo do typescript. Onde voce pode receber qualquer dado any(qualquer) em ingles. Ou seja voce precisa de uma variavel que pode receber qualquer dado , seja ele string ou number boolean . Se fica reclamando da tipagem no erro , de definir que tipo de variavel é . Coloca um type:any que ele aceita qualquer tipo.
//Sempre usado em ultimo caso , quando não da de fazer de outra forma.

let nomes:any = ['fulano', 'ciclano', 'beutrano']

nomes.push(556)
// Quer dar um push em uma variavel , onde ja tem alguns dados string , mais quer acrescentar um numero , ele vai reclamar. Então voce coloca um any que ele ira aceitar sem reclamar mais