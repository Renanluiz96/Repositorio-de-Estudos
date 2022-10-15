//Função dentro de um objeto:

//Para criar uma função dentro de um objeto voce so coloca o function no lugar do valor da propriedade e não precisa colocar o nome da função ao lado , pois o nome desta função ja é o nome da "Propriedade" ja é o nome dela mesma

//A palavra this acessa o proprio objeto pai , por exemplo em uma função dentro do objeto voce pode acessar as outras propriedades do objeto com o this 
//Quando voce cria uma função dentro de um objeto "USANDO A FUNCTION" voce ganha acesso ao this para poder usar as outras propriedades deste objeto dentro da função apenas chamando por this. a propriedade que voce quiser usar deste objeto que a função esteja dentro.

//Quando voce cria uma função usando a arrow function => Voce não consegue usar o this . Pois a arrow function é considerado uma função anonima .


let pessoa = {
   nome: 'Renan',
   sobrenome: 'Luiz',
   idade: 90,
   nomeCompleto: function() {
      return `${this.nome} ${this.sobrenome}`; // Aqui a função é retorna o nome e sobrenome da pessoa, eu usei o this.nome e this.sobrenome , para "Mostrar" o valor da propriedade que como esta propriedade esta dentro do objeto pai eu posso acessar usando o this. a propriedade que eu quiser.
   }
}

//Para voce executar a função que esta dentro do objeto voce usa ela acessando como um objeto normal , e quando chegar na propriedade que contenha a função para usar ela voce usa como qualquer outra função que esteja como se fosse em um escopo global voce executa ela usando o nome da função seguido de parenteses para executar ela normal

console.log(pessoa.nomeCompleto())