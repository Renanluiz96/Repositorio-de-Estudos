//String padStart, padEnd = São funções de manipulação de sting

//O padEnd e padStart é uma função de string que vai colocar um caractere que voce estipular ou qualquer outra coisa  para digamos esconder a sua string .
//Voce passa 2 parametros , o primeiro é a a quantidade de caracterers que voce quer que tenha sua string. O segundo parametro voce coloca que tipo de caractere que vai colocar no lugar  caso não atingir a quantidade de sting que voce passar no primeiro parametro.
   //let cartao  = '5' // Aqui por exemplo criei uma string que só tem 1 caractere

   //console.log(cartao.padEnd(9, '*')) // Aqui estou usando a função padEnd na string que eu criei acima , então como a variavel tem apenas 1 caractere , ele vai colocar uma string com 9 caracteres , e como só tem 1 caractere a string vai ficar mostrando o primeiro caracter e os outros 8 ira ficar mostrando o sinal de * que eu passei como segundo parametro .
   // Ficara assim = 5******** . se caso tivesse apenas 8 caractere , e tivesse faltando 1 e ele colocaria somente 1 caractere = 12345678* . Agora se passar da quantidade ele não acrescentara caractere .

// E a diferenca do padEnd para o padStart é o lado que ele comeca no caso o padEnd vai comecar com a sting pela esquerda e ira colocar o caractere a direita da sting até onde voce estipular = 5********
//O padStart ele comecara da direita e ira acrescentar o caractere para a esquerda = ********5. 

//Muito usado para mostrar o usuario alguns digitos do cartão dele. Para ele confirmar se realmente é o cartão dele.

//Voce tem o numero do cartão do usuario por exemplo
let cartao  = '1234123412341234'

//Pegando os ultimos 4 digitos do cartão do usuario usando o slice negativo para pegar os item de tras para frente
let lastDigits = cartao.slice(-4)

//Aqui voce faz um cartão mascarado usando a função ou padStart ou padEnd . Aqui nesta variavel eu vo pega os 4 digitos do cartão do usuario que eu vo usar o padStart para colocar os 4 digitos la pro final do lado direito . e preencher com asteristico os outros 12 espaços . Tou fazendo isto somente para mostrar na tel ao cliente. para não mostrar o numero do cartão em si.
let cartaoMascarado  = lastDigits.padStart(16 , '*')

console.log(`Este é o seu cartão ? ${cartaoMascarado}`)