//Callbacks = é uma função que voce cria  e voce manda esta função para uma outra execução geralmente uma execução assincrona . Quando determinada coisa acontecer voce executa esta função aqui  , que ela ja ta aqui prontinha e ela serve para isso ... que quando voce tiver um resultado voce executa a função que ela lida com o processo.

function alertar() { // Aqui crio a função que vou usar dentro da função timeout
   console.log('Opa, tudo bem?')
}

let nome = 'renan'
setTimeout(alertar, 3000) // Aqui eu criei primeiro a função timeout que ela vai me mostrar o conteudo ali da função depois de 3 segundos.
let sobrenome = 'luiz'
console.log(`Nome completo  = ${nome} ${sobrenome}`) // E deixei este console.log por ultimo para voce ver o momento da execução .

// No final da execução ele vai executar primeiro o timeout porque ele esta primeiro  , mais como ele é uma função que tem que esperar para ele poder mostrar a outra função li ... , ele basicamente vai demorar um pouco para ser executada , então como um codigo assincrono ele não vai esperar para ir para a proxima linha ele vai executar os outros enquanto isto.
// Ai o console.log que eu deixei ali por ultimo vai ser mostrado na tela primeiro , pois ele esta executando as outras linhas de codigo "enquanto" aquela função do timeout que foi executada la em cima esta sendo carregada . ai depois quando ele esperar o tempo ele vai mostrar o resultado da função do timeout .
//set timeout é um exemplo de callback pois enquanto ele estava esperando um tempo para executar uma outra função que ja estava la pronta para uso.
