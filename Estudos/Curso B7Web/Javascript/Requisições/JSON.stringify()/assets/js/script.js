//JSON.stringify() = É uma função que faz o inverso da função parse 
// Na função parse a gente manda uma string e ele retorna um json
//Na função stringify voce vai mandar um json e ele vai retornar a string desse json

//JSON.stringify({nome: 'renan', idade: 90}) // Voce manda assim em json mesmo e ele vai retornar assim 
// '{"nome":"renan","idade":90}'

let pessoa = {nome: 'renan', idade: 90} // Criei um objeto e salvei na variavel pessoa
let pessoaString = JSON.stringify(pessoa) // Agora criei uma variavel nova e mandei aquel objeto que criei se transformar em uma string com a função stringify, e salvar na variavel nova
