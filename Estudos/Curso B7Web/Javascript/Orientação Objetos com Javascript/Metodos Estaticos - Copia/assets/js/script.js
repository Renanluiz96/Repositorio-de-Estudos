class Person {
    
    age = 0

    constructor(name) { 
        this.name = name;

    }
}


//Factory(Fabrica) Factory é um conceito de fabrica onde voce cria uma função que dentro desta função voce ira criar aqui no caso um  objeto, com apenas usando a função e passando as propriedades dela como parametro. 
//Para um objeto só isto , não tem muita utilidade . Mais quando voce quer criar muitos objeto através da mesma classe , isto facilita muito


//Aqui basicamente voce cria a function e passa os parametros dela com as propriedades que voce quer inserir no seu objeto em si
function createPerson(name, age) {

    //Vai cria um objeto , usando o nome que voce citou como no primeiro parametro
    let p = new Person(name);

    //Depois ele pega o objeto que voce crio , e ele vai setar uma idade , que seria o que citou como o segundo parametro
    p.age = age;

    //Depois ele pega este objeto e retorna ele em alguma variavel que voce quiser utilizar ja com o objeto criado
    return p;
}
//Detalhe voce pode colocar mais parametro para ele ir acrescentando mais propriedade ao seu objeto , para facilitar sua criação


//Usando esta função. Que quando ele me retornar o resultado da função , ela vai ser salva na variavel p1 .
let p1 = createPerson('Renan', 26);
let p2 = createPerson('pedro', 34)

console.log(`${p1.name} tem ${p1.age} anos`)
console.log(`${p2.name} tem ${p2.age} anos`)

