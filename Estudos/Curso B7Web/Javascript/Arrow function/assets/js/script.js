/*
Arrow Function basicamente é uma forma diferente de eu definir uma função ela vai funcionar ,e ser usada do mesmo jeito que uma função normal , a unica diferença é que agora eu consigo criar minha função de forma diferente
Foi feita pensando em fazer uma função só que utilizando o mesmo codigo


*/

/*
Jeito tradicional de fazer a função

function somar(x, y) { 
   return x + y;
}
*/

//Função agora usando a arrow function =>
// 1º = voce cria como se fosse uma variavel colocando em uma const e depois o nome da função , não precisa escrever function
// 2º = Voce coloca o = e depois entre os parenteses coloca os parametros como voce faz la na função tradicional
// 3º = Depois voce coloca a arrow function que seria como um sinal de flecha  "=>" 
// 4 º = Depois voce abre a chave e escreve a sua função normal como voce faz da forma tradicional

const somar = (x, y) => {
   return x + y;
}

// Da para simplificar ainda mais a arrow function , caso a sua função seja apenas 1 linha que no caso somente mostraria o return , voce pode colocar tudo em 1 unica linha direto , sem precisar colocar o return, e somente colocar a arrow function e o resultado que seria no caso o retorno ja direto na linha. 
const multiplicar = (x, y) => x * y;

// Da para simplificar mais ainda , se no caso a função "Somente tiver 1 parametro" voce pode coloca tudo na mesma linha e sem parenteses no parametro , OBS : isto apensa funciona se a função tiver somente 1 parametro só 
const sobrenome = sob => 'Meu sobrenome é ' + sob  

console.log(somar(10,25))
console.log(multiplicar(10, 4))
console.log(sobrenome('Luiz'))

// OBS : se voce abrir chaves é obrigatorio a ter o return se não a função não ira funcionar .
// ObS : sempre ficar atentos nas const pois observar se tiver uma arrow function nela ja ira dizer que esta const é uma função .