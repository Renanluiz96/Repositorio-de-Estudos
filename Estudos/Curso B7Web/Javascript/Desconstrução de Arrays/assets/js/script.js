//Desconstrução de arrays 
//Processo para desconstruir um array é muito similar a desconstruir um objeto.
//Só que para desconstruir um array voce coloca a variavel em colchetes , no objeto voce desconstruia em chaves agora no array vai ser em colchetes voce vai criar um "let [] = nome do array""

let info = ['renan luiz' , 'renan' , 'luiz' , '@renan'];

//Para um array como, o objeto ja tinha uma chave e esta chave ja se tornava a variavel , no array como é em index o primeiro item do array é o numero 0 e assim em diante até acabar o array.
//Aqui voce vai ter que dizer o nome da variavel, e estas variavel elas vão seguindo a ordem então o primeira variavel que voce declarar vai ser do index 0 ou seja do primeiro item do seu array, a segunda variavel da mesma maneira vai seguindo em ordem  até onde voce querer desconstruir voce vai ter que ir dando nome de variaveis aos indexs. Resumindo no array voce vai ter que obrigatoriamente dar o nome da variavel como um array não tem nome de variavel voce vai ter que dizer qual é
//    let [nomeCompleto, nome, sobrenome, instagram] = info

//    console.log(nomeCompleto, nome, sobrenome, instagram)

//Para voce digamos pular um item do array e pegar digamos o segundo item  e quer pular e pegar o quarto item  voce utiliza uma virgula nos itens que voce quer pular 
//let [, nome, , instagram] = info
//console.log(nome, instagram)

//Voce pode tambem criar um array ja desconstruindo , bem usado para quando tiver fazendo talvez algum jogo para que quando voce tiver montando um array voce ja vai esta atribuindo variavel a elas ja descontruindo.
//    let [nome, sobrenome , idade = 90] = ['renan', 'luiz' ] // Aqui eu ja vou estar criando a variavel junto com o array , o primeiro item do array ja posso dizer que é a variavel nome , o segundo item é a variavel sobrenome , e assim voce vai criando o array e ja desconstruindo em variaveis.
//Voce tambem pode criar um valor padrão para se caso o item não existir ele cria automatico , e caso tiver ele vai usar o valor que ja existe.


//Voce pode igual o objeto criar uma função que vai criar um array e retorna os valores dela.

function criar() {//Aqui criei uma função que vai me retornar um array com os 3 valores
   return ['meu nome', 'meu sobrenome', 25] 
}

let [a,b,c] = criar() // Aqui eu ja estou desconstruindo salvando em variaveis o que ele me retornar da função criar ele vai me retornar um array com 3 valores , ai  aqui ele ja vai pegar esses valores que ele retornou , e vai desconstruir nas 3 variaveis

console.log(a, b ,c) //Aqui voce da um console log nas 3 variaveis que voce desconstruiu do retorno da função criar()