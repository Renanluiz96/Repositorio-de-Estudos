//Objetos: Objetos são bem similares ao array , eles tem o mesmo principio de armazenar varias informações em uma unica variavel.
//Para criar um objeto diferente do array que voce abre ele em colchetes . O objeto voce abre e fecha ele em chaves {} 

//Só que o objetivo dele é diferente do array , no objeto ele tem propriedade e valor .

// Por exemplo Voce Cria um perfil seu digamos. E neste perfil seu voce coloca seu nome , sua idade , sua nacionalidade... Essas informações são atibuidos de Propriedades E VALOR que todo objeto precisa ter , digamos que o nome , idade, pais sejam uma Propriedades . E o VALOR é o que voce coloca seu nome sua idade.

//Isso que define um objeto , ele pode conter informações especificas. Cada objeto pode ter Propriedade e Valor especifica dele . 
//Um objeto é quando voce tem um grupo de informações especificas de algum objeto.

//Todos as Propriedades tem que ter dois pontos depois das Propriedades , e a cada propriedade voce tem que separa-las por virgula uma propriedade-valor de outra
  

//Objeto
let personagem = {
   nome: 'Renan', // Nome = Propriedade / Valor = Renan
   idade : 26, //Propriedade = Idade / Valor = 26
   pais: 'Brasil',
   olhos: ['preto','azul'], //Voce tambem pode colocar um array dentro de um objeto
   status: { // Voce tambem pode criar um objeto dentro de outro objeto como no array .
      forca: 20,
      magia: 25,
      stamina: 40
   }

}

//Para mostrar na tela um objeto voce coloca um console log na variavel que ele foi armazenada.
console.log(personagem)

//E se quiser mostrar algum valor de alguma chave especifica voce coloca a variavel um ponto , e a propriedade que voce quer ver o valor.
console.log(personagem.idade) // Para ver o valor da propriedade idade
console.log(personagem.nome)
console.log(personagem.pais)


// Para voce acessar um objeto dentro de outro objeto é como o array voce tem que ir acessando um a um até chegar a propriedade dentro do segundo objeto , voce só vai colocando o ponto a cada propriedade acessada 
console.log(personagem.status.magia)

//Acessando as propriedades de um array dentro de um objeto , voce acessa com o ponto no objeto , e quando for querer mostrar a informação do array voce faz igual uma array normal mostra pela numeração em que a informação deste array esta encontrada .
console.log(personagem.olhos[1])