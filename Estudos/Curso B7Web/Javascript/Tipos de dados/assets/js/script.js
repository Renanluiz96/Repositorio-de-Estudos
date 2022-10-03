//Dados tipo texto
let nome = "Renan luiz" // Tipo de variavel = "STRING" ; aceita textos usado sempre com aspas duplas 

// Dados tipo Numeros
let idade = 25 // Tipo de variavel = "INTEIRO" ; usada para numeros inteiros sem pontos e tambem para manipular o dado : soma adição ...
let dinheiro = 25.22 // Tipo de variavel = number ; que seria um numero pode ser usado com . mais nunca o divisor podera ser uma virgula , pois o padrão global é um ponto

// Dados boleanos (BOOLEAN) True e False
let logado = true // Tipo de variavel =  boleano ; que seria para mostra se algo é verdadeiro (True) como ta ali.
let deslogado = false // Tipo de variavel = Boleano ; Que tambem igual como ali de cima esse usa a condição falso (False) que seria o tipo de dado para algo negativo . 

// Dados tipo array (que pode conter varios dados dentro de uma variavel só) Voce Tem que colocar os dados ao inves de parenteses este voce coloca entre colchetes . e pode colocar dados tipos texto (usando aspas duplas) ou tipos numericos , tudo junto mais sempre separados por virgulas um item do outro
let lista = ["ovo", "massa", "corante"]
let numeros = [30, 20.37 , 0.58 , 1500]

//Dados tipos objetos (OBJECT) , que seriam parecidos com arrays só que ela consegue digamos ter uma referencia no caso dizer alguma coisa e algo sobre ela , no caso como um nome completo por exemplo voce pode passar a variavel nome e dizer o seu nome , a mesma coisa com a idade voce coloca uma variavel idade, e depois ao lado coloca o numero da idade , diferentemente da lista que voce só tem uma lista cheia de coisas normalmente sobre algo especifico , mais não com parametros igual o objeto . Para fazer isto voce coloca eles separando entre o produto e a informação sobre o produto colocando 2 pontos : . E sempre que for fazer uma variavel tipo objeto voce abre e fecha entre chaves {}
let nomeCompleto = {
   nome:"Renan", 
   idade: 25, 
}
console.log(typeof nome) // Aqui voce usa o comando typeof para ver que tipo é esta variavel ele vai mostrar inves do resultado , mostra o tipo que seria  string ou  number , bolean ...
console.log(idade)

console.log (typeof nomeCompleto)
console.log (typeof numeros) // Tanto os arrays quanto os objetos , sempre vão ser o tipo deles object , a unica diferenca é a maneira que usa um e outro. arrays como uma lista. objeto como item passando a referencia do item .

console.log (typeof logado)

/*

*/