//Operador Spread = é um sinal de 3 pontos ...
//Pode ser usado em objetos e arrays 
//Se usa o spread operator quando voce quer complementar alguma coisa ; usar algo que voce ja tem e adicionar mais alguma coisa .
//Por exemplo voce tem 1 array com algumas informações, e quer criar um segundo array e usar as informações do primeiro array e completar com mais algumas informações .
//No segundo array voce usa ... + o nome do array que voce quer as informações e separando por virgulas , voce coloca mais outras informações.
/*
   let numeros = [1,2,3,4]// Primeiro array criado
   let outros = [...numeros , 5,6,7,8] //Usando o operador spread "..."  + o nome do outro array que voce quer copiar as informações e separando por virgula e colocando mais informações no array novo
   console.log(numeros)
   console.log(outros)
*/

/*
//Criando um objeto  e atribuindo as informações do primeiro objeto no segundo objeto com o operador spread "..."
let info = {
   nome:"renan",
   sobrenome:"luiz",
   idade: 26
}
let novaInfo = {
   ...info,
   pais:"brasil",
   estado:"santa catarina",
   lugar:"qualquer"
}
console.log(info)
console.log(novaInfo)
*/


//Usando o operador spread em função.

function adicionarInfo(info) { //Aqui voce faz uma função , que esta função vai criar um novo objeto , e adicionando novas informações , junto com o que voce mandar de informação que voce vai mandar no parametro dela quando chamar a função , ela vai pegar as informações que voce mando e parametro , vai bota dentro de um objeto , adicionar mais algumas informações no objeto, e vai retornar este objeto novo no final , com todas as informações ja adicionadas.
   let novasInfo = {
      ...info,
      status:0,
      toker:'sdsadsdascacdas',
      data_cadastro:'....'
   }
   return novasInfo
}

console.log(adicionarInfo({nome:'Renan',sobrenome:'luiz'}))