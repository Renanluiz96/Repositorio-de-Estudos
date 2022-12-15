class Person {
   

    age = 0;

    constructor(name) { 
        this.name = name;
    }

    sayHi() {
        console.log(`${this.name} diz Oi`)
    }
}

//Conceito de herança na orientaçã a objetos, e como o proprio nome ja diz , ele vai herdar alguma coisa de outra . Ou seja é uma classe que pode herdar propriedades de outra classe . Por exemplo voce tem uma classe que define uma pessoa e la tem as propriedades de uma pessoa caracteristicas e enfim... , mais voce quer criar por exemplo uma classe para digamos um estudante , um estudante é uma pessoa então voce não precisa estar le "reescrevendo" todas as propriedades de uma pessoa novamente na classe estudante. Voce pode "Herdar" as propriedades de uma pessoa , e nesta class de estudante voce coloca as propriedades do proprio estudante em si.


//Para voce herdar uma classe de outra classe voce usa "extends" , aqui então a classe Student esta heradando as propriedade da classe Person
class Student extends Person {
    
    //Aqui no construtor voce passa as propriedades da propria classe , e passa tambem a propriedade da classe que esta herdando tambem
    constructor(name, id) {
        //Super aqui é uma função onde voce esta se referindo a classe que voce esta herdadando(ou seja a classe "pai" dela) pois para usar o construtor do pai voce usa o super e dentro dela voce coloca a propriedade que voce quer usar aqui . Basicamente o super vai usar a função construtora do pai
        super(name);

        //Porque o this se refere a esta classe aqui
        this.id = id;
    }

    //Voce pode criar uma função tambem para usar a função da classe pai dela
    sayHello() {
        //Usando o super ponto e o nome da função do pai voce usa a função do pai.
        
        super.sayHi();
    }

}

let p1 = new Student('renan', 1)

//Voce pode setar uma propriedade no objeto que voce crio com a propriedade da classe pai , ou seja criei uma variavel generica la na classe pai . Ao herdar o filho automaticamente vai ter a mesma variavel generica , então voce pode alterar diretamente no objeto que tiver a classe do filho.
p1.age = 20;

//Aqui voce vai estar mostrando no console.log todas uma frase com todas as propriedades da classe pai e classe filho juntas
console.log(`${p1.name} tem ${p1.age} anos e matricula #${p1.id}`)

//E aqui voce esta executando uma função que dentro dela tem uma função da classe pai .
p1.sayHello()






