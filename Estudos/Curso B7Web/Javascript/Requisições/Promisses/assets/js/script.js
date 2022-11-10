/*/Promisse(promessa) = Tradução literal é uma promessa e basicamente é isto que ela é . Quando voce vai fazer uma requisição assincrona ou um processo assincrono, quando isto ocorre a gente fica com uma "promessa de algum resultado" o promisso é basicamente um resultado temporario.

//Promisse é um objeto
//Promisse é um resultado "temporario" que a gente recebe ou  uma promessa   quando a gente recebe um objeto promisse , a gente recebe uma promessa que daqui algum eu vou ter 3 opções = 
   Nunca = nunca vai ter  o resultado pois nunca vai ter este retorno , é uma promessa mais ela pode ou não se cumprir.
   Resultado = Voce vai receber algum resultado
   Problema  = Pode acontecer algum problema e voce vai receber este problema

   Basicamente fica ai aguardando que daqui a algum momento vem ou não algum resultado.



//Dentro de uma promisse é obrigatorio ter a função resolve(callback) = para quando der certo voce usa o then para mostrar o resultado do resolve
// e a função reject(callback) = para quando der errado e o catch para mostrar o resultado do que foi rejeitado
*/

function pegarTemperatura() {// Criei esta função para pegar temperatura
   return new Promise(function(resolve, reject) { // E ela ja vai me retornar de cara uma promessa 
      console.log("pegando temperatura ..."); // A promessa que ela ta retornando é este console log

      setTimeout(function() { // Aqui eu vo simular o processo de set time out de 2 segundos , e quando ele finalizar os 2 segundos e ele vai executar a função "resolve" que esta função ele vai mostrar na tela a mensagem abaixo
         resolve('40 na sombra'); // Depois do processo de espera voce pode usar ou a função resolve , ou voce pode usar a função reject quando alguma coisa der errado
      }, 2000);
   })
}

//Usando a Promisse

//Aqui voce vai fazer a requisição e colocar ela em uma variavel
let temp = pegarTemperatura() // aqui eu peguei a função e salvei na variavel , e logo de cara ela ja me retorno a promisse. Então esta variavel vai ser uma promisse.Esta promisse tem 3 resultados o pendente , o resultado e o erro.

//E aqui voce vai fazer o mecanismo para quando der tudo certo a gente conseguir receber esta requisição . E quando der errado a gente tambem recebe um retorno tambem no caso ali do que foi o erro.
//Resultado do resolve
temp.then(function(resultado) {
   console.log(`Temperatura ${resultado}`)
}); //O then(então) é quando voce tiver o resultado la do resolve voce executa o resultado  que voce crio na function acima . E este then é um callback então ele só vai executar quando voce tiver o resultado la da promisse que é o resolve.

//Quando der algum problema
temp.catch(function(error) {
   console.log("Eita, deu erro")
})


//Então quando voce tiver uma promisse voce fica aqui com os 2 resultados o then para o resultado positivo , e o catch para o resultado negativo . Para isto voce crio 2 callbacks que vai espera algum resultado ou não para executar