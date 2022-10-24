//Metodos para manipular strings
//Metodos que as proprias strings elas ja vem nativamente com esses metodos

let nome = 'Renan luiz andrade'

//Quantos caracteres / qual o tamanho tem a string usa o .length
//console.log(nome.length)

/* //Para voce procurar algo dentro de uma string voce usa a função indexOf('') e dentro de parenteses o que voce esta procurando . o resultado vai mostrar onde ele comeca por exemplo aqui a primeira letra esta no 6º lugar da string. Caso ele não ache nada ele vai retornar -1 . Bem usado com if para fazer uma verificação se tem algo dentro da string
   if (nome.indexOf('luiz') > -1) {
      console.log('Achou!')
   } else {
      console.log('Não achou!')
   }
*/

/*//Para extrair informações dentro de uma string , pegar informações dela . São 2 metodos que voce pode fazer isso
   // 1º .slice voce passa 2 parametros , a primeira é obrigatoria = primeiro parametro é a posição inicial que voce quer comecar a pegar as informações , e o segundo parametro é até onde voce quer pegar as informações . Se voce deixa somente o primeiro parametro ele vai pegar a partir dali até o final da string . O slice tambem pode usar o numero negativo que ele comeca de tras para frente por exemplo -10 ele vai comecar do final , mais ele vai pegar da esquerda para a direita normal
   //console.log(nome.slice(5))

   // 2º Tem o .substring que ele é igual o slice só que ele não tem a opção de pegar numero negativo e comecar do final igual o slice , ele só vai da maneira padrão usando numeros positivos
   //console.log(nome.substring(5, 10))
*/

//Como substituir o conteudo da string ou uma parte do conteudo da string usando o replace , ele recebe 2 parametros, o primeiro = voce coloca o conteudo que voce quer trocar . E o segundo parametro = voce coloca o conteudo novo que voce quer trocar . Resumindo ('velho' , 'novo') . Mais a frase com o conteudo antigo vai estar la então se voce quer salvar como um conteudo novo voce pode salvar na mesma variavel , ou em outra . pois se não vai ter a variavel com o conteudo antigo
// nome = nome.replace('andrade' , 'santos')
// let outroNome  = nome.replace('andrade' , 'santos')


//Para deixar todos os caracteres de uma string em MAIUSCULO voce usa a função .toUpperCase() , e minusculo voce usa o toLowerCase();
//console.log(nome.toUpperCase())
//console.log(nome.toLowerCase())

//Para voce tirar todos os espaços em brancos / excessos de espaços do comeco e do fim  da sua string voce usa a função .trim , sem parametros somente ela na variavel da string que voce quer colocar 
//console.log(nome.trim())

//Para voce saber qual caractere esta em tal posição voce usa o .charAt pasando 1 parametro que é de qual lugar da string voce quer saber
//console.log(nome.charAt(0))
// ou voce pode usar o console.log(nome[1]) colocar o valor do caractere entre colchetes

//Para transformar uma string em um array voce usa o .split e ele passa 1 parametro , que seria ele vai dividir a sua string em array em cada caractere daquele que voce coloca nos parenteses , Pode ser bem usado um espaço , que onde ele ve um espaço ele vai dividir e fazer um array . Se voce tem um nome completo por exemplo e quer dividir cada palavra do nome em um array voce usa o split com espaco em branco ' ' . Ou pode usar cortando por virgula ',' se caso for varias informações salvas por virgulas
console.log(nome.split(' '))