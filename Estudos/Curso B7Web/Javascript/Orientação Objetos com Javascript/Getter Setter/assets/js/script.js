class Person {
    
    //Variaveis Comuns
    
    _age = 10 //Normalmente se declara uma variavel getter e setter usando um underline antes da variavel
    steps = 0   



    //Logo após o Construtor

    
    constructor(firstName, lastName) { 
        this.firstName = firstName;
        this.lastName = lastName;
    }

    //Funções aqui na classe voce não coloca o nome function
    takeAStep() {
        this.steps++;
    }
    
  
    //Voce pode usar um getter e setter para fazer calculos matematicos , quando voce quer juntar 2 variaveis e mostrar na tela . Pois o resultado vai ser sempre o "retorno" da função
    //Fazendo um get para pegar o nome todo que esta la no construtor nas variaveis
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    //Aqui basicamente ele pega a idade e retorna ela
    get age() {
        return this._age
    }

    // Aqui voce vai fazer uma verificação se é numero ou não o valor da variavel que voce esta setando . e sempre seta pelo nome da função , para poder usar
    set _age(x) {
        if (typeof x == 'number') {
            this._age = x
        }
    }
}



let p1 = new Person('joao', 20)
let p2 = new Person('maria', 25)
let p3 = new Person('pedro', 29)

p1.age = 20;

//Aqui estou usando as duas funções de getter e setter que criei uma la em cima , uma usando apenas para juntar os 2 nome em uma função só , e a outra para pegar a idade.
console.log(`${p1.fullName} tem ${p1.age} anos`)

