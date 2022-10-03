let nome = "renan"
let sobrenome = "Luiz"

//Diferença entre string e template string
//string = voce usa o aspas ou aspas duplas para dizer que é uma string. E nele voce faz as expressões usando a concatenação para juntar uma variavel em outra usando o + como a seguir .

let nomeCompleto = nome + ' ' + sobrenome 
console.log("Nome: "  + nomeCompleto)


//Template String = Seria digamos uma string turbinada , para identifica-la voce usa 2 hifens `` e entre elas voce pode colocar o valor da sua variavel , e dentro delas fazer expressões matematicas , usar outras variaveis  juntas usando ${} e dentro das chaves a expressão pode ser uma variavel ou uma operação matematica .  e nelas colocar um espaço que tudo dentro desta template string no final vira uma só string com tudo que tiver dentro . Outra maneira de fazer o codigo acima com a concatenação das string , só que agora com template string

let idade = 25
let NomeCompleto = `Nome : ${nome} ${sobrenome} , ${idade} anos de idade` // Tudo isto vai ser uma string só vou juntar tudo isto e vai tornar ela em uma string só
console.log(NomeCompleto)

let n1 = 10
let n2 = 15
let soma = n1 + n2
let resutado = `A soma do valor ${n1} com o valor ${n2} deu o resultado de ${soma} `
console.log(resutado)