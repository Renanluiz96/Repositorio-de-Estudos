//Variavel tipo "LET" = Voce atribui uma valor em especifico , e depois voce pode alterar o valor desta variavel , somente usando onome dela e logo depois passando outro parametro .
let nome = "renan"
console.log(nome)
// Antes a let nome tinha o valor renan , apartir do codigo abaixo o let nome vai passar a ter outro valor -> luiz
nome = "luiz"
console.log(nome)

//Variavel tipo "VAR" = Voce pode fazer a mesma coisa que o tipo let dar um valor e modifica-lo depois da mesma forma, a diferença dos 2 é que o "var" pode ser usado em qualquer contexto . E a "let" só pode usar no contexto em que ela foi criada .
var nome1 = "Ele"
console.log(nome1)
nome1 = "Ela"
console.log(nome1)

// Variavel tipo "CONST" (constant) = Este tipo de variavel não pode fazer modificação nela , o que voce determinou quando crio vai ser imutavel. Normalmente ele mostra um erro ao tentar mudar o valor dela. 
const nome2 = "Primeiro"
console.log(nome2)
nome2 = "Segundo"
console.log(nome2)