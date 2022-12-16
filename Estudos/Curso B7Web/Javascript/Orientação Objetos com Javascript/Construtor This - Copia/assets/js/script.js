class Person {
    
    //Variaveis / Metodos estaticos . são variaveis ou funções que tem a "static" antes , que ela não vão ser criada junto com o objeto quando ele for criado . Ou seja a hora que voce instanciar algum objeto , e quiser usar ele voce não  vai conseguir usar , porque ele fica de uma forma "independente do objeto"
    static hands = 2;

    age = 0

    constructor(name) { 
        this.name = name;

    }
    
    //Função estatica
    static sayHi() {
        console.log('Oi')
    }
}


let p1 = new Person('joao')

//E se voce quiser usar a função ou a variavel static que voce crio la na classe , voce vai ter que usar com o nome da class antes , antes de usar a função .
Person.sayHi()

//Se voce usar com um objeto que voce crio e usar a variavel estatica pelo objeto vai dar objeto indefinido.
p1.sayHi()
