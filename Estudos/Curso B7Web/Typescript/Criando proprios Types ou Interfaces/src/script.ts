// Criando os proprios Types usando o Type ou Interface . 
// Coloca a maneira que voce quer criar o seu proprio type , e depois o nome dele e o nome do type vai ser sempre em pascalCase(Primeira letra maiuscula).

//Recomenda-se usar types proprios em 2 situações, quando voce quiser simplificar e organizar o codigo: geralmente quando ta utilizando objeto. E quando o type ele é replicado em outros lugares do meu codigo.

//Type = tem uma sintaxe parecida como uma variavel. Com o type depois de criado "ele não pode ser alterado"
/*
type User = {
    nome: string,
    idade: number
}*/


// Interface = tem uma sintaxe parecida como uma função. Ja com o Interface voce consegue alterar o conteudo dentro
//Declarei primeira vez o interface apenas com um tipo
interface User {
    nome: string;
}
//E por exemplo em alguma outra parte do meu codigo eu quero adicionar outra propriedade no meu interface . Eu declaro ela denovo e passando somente a propriedade nova - pois ela vai pegar a propriedade que ja tinha , e acrescentar uma propriedade nova (Como se tivesse extendendo uma classe)
interface User {
    idade: number;
}

//Função onde vou usar o meu proprio type User
function resumo(usuario: User) {
    return `Ola ${usuario.nome}, voce tem ${usuario.idade} anos`
}

resumo({
    nome: 'renan',
    idade: 90
})