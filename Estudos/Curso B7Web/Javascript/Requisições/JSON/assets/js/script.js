//O que significa JSON ? - na grande maioria das vezes quando falar em requisições javascript vai ser feito em JSON.
//JSON = JAVASCRIPT OBJECT NOTATION
//É uma sintaxe de objeto , é um objeto javascript que a gente usa para fazer a comunicação entre requisições , tanto para "guardar" informações  , quanto para "enviar" e "receber" informações nas requisições.
//Nele voce pode guardar 1 ou mais informações, infinitas na verdade .

//Para voce criar um JSON voce cria uma variavel e coloca um objeto dentro dela e no objeto voce coloca as informaçõs do objeto por exemplo um objeto voce quer colocar nome de alguem voce coloca a "chave" nome , e o "valor" seria o nome da pessoa, depois "chave" idade , depois "valor" a idade da pessoa ... sempre assim colocando chave e valor , e separando cada chave e valor por 2 pontos, e separando cara chave e valor de outra chave e valor colocando uma virgula.
//Voce pode tambem colocar um objeto dentro de outro objeto , voce vai criar um outro objeto usando chaves tambem , no lugar do valor da chave , ou um array para colocar algumas coisas de algum tipo de lista.
let pessoa = {
   nome:'Renan',
   idade: 90,
   caracteristicas: ['sorridente','maravilhoso', 'top'],
   estetica: {
      altura:1.70,
      peso: 82
   }
}

// para voce pegar um dador de um objeto voce coloca o nome da variavel do objeto e a chave deste objeto que  ele vai te mostrar o valor desta chave.
console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa.caracteristicas[1])//Pegando informacoes de um array dentro do objeto
console.log(pessoa.estetica.peso)//Pegando informações de um objeto que esta dentro de um objeto.

