class Person {
    
    //Variaveis Comuns
    altura = 1.90
    steps = 0 //Cria uma variavel por exemplo de passos , depois cria uma função que vai criar uma ação que a cada passo que ele der ele vai incrementando esta variavel .  


    //Logo após o Construtor
    constructor(name, age) { 
        this.name = name;
        this.age = age;
    }


    //Funções aqui na classe voce não coloca o nome function
    takeAStep() {
        //Voce usa o this para se referir ao proprio objeto , e não todos os objetos , e voce incrementa o contador de passos a cada vez que esta função for chamada
        this.steps++;
    }
    //Criar uma função para setar uma altura , e que nela contem um verificador(if) que vai ver se o que voce colocou é um numero , se não for numero ele não altera o valor da altura
    setHeight(newHeight) {
        if(typeof newHeight == 'number') {//Vai fazer a verificação se a nova altura que eu vo adicionar for do tipo numero , ele vai e seta a altura nova
            this.altura = newHeight;
        } else {
            //Voce pode até tambem colocar um aviso de um erro , que o valor inserido não é um numero
            console.log('Valor inserido não é um numero')
        }
    }

}

let p1 = new Person('joao', 20)
let p2 = new Person('maria', 25)
let p3 = new Person('pedro', 29)

//Executando a função de alterar o tamanho(variavel comum) de um objeto especifico
p1.setHeight(1.50)

//Executando a função de dar um passo e incrementando "apenas na variavel p1 " onde contem uma pessoa(um objeto) apenas nele. Incrementei 3 vezes no caso o contador subir 3 vezes
p1.takeAStep()
p1.takeAStep()
p1.takeAStep()
//Colocar em um segundo objeto
p2.takeAStep()
p2.takeAStep()


//Mostrando no console para ver o resultado
console.log(`Passos de ${p1.name} : ${p1.steps} passos`)
console.log(`Passos de ${p2.name} : ${p2.steps} passos`)

console.log(`Passos de ${p1.name} tem ${p1.altura.toFixed(2)} metros`)
//Voce pode tambem por exemplo criar um botão que a cada clique neste botão ele vai executando a função takeAStep. 