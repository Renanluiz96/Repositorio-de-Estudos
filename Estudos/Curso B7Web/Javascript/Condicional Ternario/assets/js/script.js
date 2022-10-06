//Condicional Ternario é basicamente um IF que voce faz em uma linha só .
//Reconhecido como um sinal de interrogação e depois o primeiro valor é caso ele der certo ele executa o que esta ao lado do ponto segundo o exemplo aqui o 2 .
//Depois da primeira condição que seria o if , voce coloca 2 pontos : e depois passa o segunda condição
//Que se caso não der certo que seria o else que ele executaria o final aqui no caso o 10
//Resumindo é um boolean que se der certo "IF" ele executa o 2 do resultado , e se der errado "ELSE" ele vai executar o 10

/*
let isMember = false; 
let shipping  = isMember ? 2 : 10;  // Aqui vai ver se a variavel isMember for true ele vai mostrar 2 , se for false ele vai mostrar 10
console.log(isMember ? "Voce é membro" : "Voce não é membro ") // Da pra usar condição ternaria tambem dentro do console log aqui estaria testando a condição acima e se a variavel isMember fosse true ele mostraria uma mensagem falando que é membro, caso desse false mostraria outra mensagem mostrando que voce não é membro
console.log("Frete: " + shipping)
*/

let age = 60;

let isAdult = ((age >= 18 && age <60) ? "Eu sou adulto" : "Eu não sou um adulto");

console.log(`${isAdult}, eu tenho ${age} de idade.`)

