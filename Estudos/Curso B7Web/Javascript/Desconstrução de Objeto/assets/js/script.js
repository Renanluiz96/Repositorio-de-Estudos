//Desconstrução/Desestruturação de objetos

//Desconstrução de um objeto seria voce acessar informação especificas desse objeto e transformar em uma variavel

//Cria um objeto que contem varios dados
let pessoa = {
   nome: 'Renan',
   sobrenome: 'luiz',
   idade: 26,
   social: {
      facebook: 'renanfacebook',
      instagram:{
         url: '@renan',
         seguidores: 1000
      }
   }
}

let pessoa2 = {
   nome: 'Renan',
   sobrenome: 'luiz',
   idade: 26,
   social: {
      facebook: 'renanfacebook',
      instagram:{
         seguidores: 1000
      }
   }
}


//Para desconstruir o objeto voce define ele em uma variavel

//let {} = pessoa // Voce faz assim coloca uma variavel depois uma chave e coloca um sinal de igual , depois do sinal de igual voce coloca qual é o objeto que vai ser desconstruido.

//let {nome , sobrenome, idade} = pessoa //Dentro do chaves voce vai pegar as informações especificas e ao pega-las voce vai transforma-las em propria variavel . Voce pego as 3 informações e elas ja são cada um uma variavel. se voce dar um console log em nome , sobrenome e idade voce ja vai ver que elas são variaveis.
//console.log(nome)
//console.log(sobrenome)
//console.log(idade)

//Se caso voce quer pegar a informação do objeto e por exemplo o nome automaticamente ao pegar o nome a variavel vai se chamar nome tambem. Mas caso voce queira mudar o nome da variavel mais pegando ela do objeto voce coloca dois pontos : e o nome da variavel nova que voce quiser
//let {nome:meuNome} = pessoa
//console.log(meuNome)

//Caso tambem voce por exemplo quer desconstruir o objeto e se voce alguma informação não tiver por exemplo "idade" voce desconstruiu e coloco a propriedade idade ,só que ela não tem no objeto , voce por exemplo pego um objeto de terceiros, e não tem a informação que voce quer voce pode setar um valor padrão para "caso não tiver a propriedade dentro do objeto" ele vai usar a que voce setou  se caso tiver ele vai usar a de dentro do objeto mesmo. Pra isso voce pega a propriedade coloca um sinal  de igual e o valor que voce queira setar
// let {idade = 0 } = pessoa // Aqui caso não tiver a propriedade idade ele vai setar a variavel idade com o valor padrão 0 se tiver ele vai pegar e salvar a variavel normal.

//Para voce pegar a informação de um objeto dentro de outro objeto Tem 2 formas : 
//    let {instagram , facebook} = pessoa.social // Voce coloca as variaveis com o nome que esta dentro do segundo objeto. e voce acessa o segundo objeto colocando um ponto depois do primeiro objeto -> pessoa.social ; pessoa era o primeiro objeto , e o social era o objeto dentro do objeto pessoa

//    let {nome , idade , social:{instagram}, social:{facebook} } = pessoa // Esta segunda maneira voce pega a informação do primeiro objeto junto com a informação do segundo objeto "social" desta forma voce acessa o objeto social: e entre as chaves voce coloca o nome da propriedade que voce quer pegar do segundo objeto.
//  console.log(instagram, facebook)

//Complicando um pouco mais para pegar o terceiro objeto que esta dentro de um segundo objeto que esta dentro do primeiro objeto, e ainda mais neste terceiro objeto quero trocar o nome dele e usar outro nome na variavel
//let {social:{instagram:{url:instagram}}} = pessoa
//console.log(instagram)


//Para voce fazer uma função que pegue as informações dos objetos , e voce quando chamar a função voce só passa em parametro o nome do objeto , e a função ja vai fazer esta desconstrução .
//Voce ja faz a desconstrução nos "parametros da função mesmo" colocando os em uma chaves {} dentro do parametro da função , assim ja vai entender que ja é para fazer a desconstrução ali mesmo.
//Inclusive se voce quer reutilizar esta função para desconstruir outros objetos, e por acaso o objeto não tenha alguma propriedade , por exemplo sobrenome , o outro objeto não tiver , voce pode setar uma por padrão  caso não tiver voce pode setar um valor ou um nome qualquer caso não tiver .
//Voce pode tambem acessar um objeto dentro de um objeto tambem
function pegarNomeCompleto ({nome, sobrenome = 'silva', social:{instagram:{url:instagram = 'não tem'}}}) {
   return `${nome} ${sobrenome}  siga-me no ${instagram}`
}


let nometodo = pegarNomeCompleto(pessoa2)

console.log(nometodo);