//Javascript Orientado a objetos (POO - OOP)

//Codar guiado a um objeto onde voce cria um objeto e dentro deste objeto voce agrupa uma quantidade especifica de informações que aquele objeto pode ter e que vai podendo "reutilizar" as caracteristicas deste objeto apenas alterando um detalhe ou outro .

//Por exemplo voce cria um objeto que seria uma pessoa(sim objeto pessoa). Cada pessoa não tem caracteriticas diferentes? nomes , idades , cor ... enfim varias informações diferentes . Então é basicamente isto voce cria digamos um esqueleto , e depois usa este esqueleto como uma "base" e vai reutilizando e em cada lugar que voce reutilizar , vai alterando as informações por exemplo quer criar um objeto de uma pessoa e quer criar um homem com caracteristicas especificas, depois cria outro homem com outras caracteristicas especificas diferentes, e por ai vai. 
//Todo objeto sempre vai ter caracteristicas , e ele vai ter ações que ele pode executar , são 2 conceitos que sempre vai existir no conceito de orientação a objetos "PROPRIEDADE" / "AÇÕES"

//Criando uma "classe" de uma pessoa que voce vai usar esta classe como uma base para usar ela depois (detalhe por criar uma classe como base ela não funciona , voce tem que usar ela colocando informações quando for usar) aqui voce vai só criar a base para usa-la depois . Geralmente uma class usa-se a primeira letra como letra maiuscula

class Person {
    //Constructor é uma função que vai ser executada sempre que voce criar um objeto novo ele vai ser o primeiro a ser executado sendo assim podendo criar varios objetos com espeçificações diferentes. Voce usa o this para criar a propriedade no proprio objeto que voce esta criando , ou seja ela mesma vai criar uma propriedade e voce usa um ponto e coloca o nome da propriedade. Cada objeto vai ter a sua propriedade , por isso pode se dizer que cada um objeto vai ter o seu proprio this , pois this é uma referencia ao proprio objeto.

    //por exemplo quer que todos os objetos tenham o mesmo tamanho no exemplo aqui do objeto pessoa. então voce somente coloca o nome da variavel "sem declarar ela com let nada" somente o nome  

    tamanho = 1.90 //Aqui todos os objetos criados terão esta propriedade tamanho por padrão . Se voce quiser alterar este valor , voce pode alterar este valor de cada objeto se quiser
    constructor(name, age) { //E nos parametros do construtor voce coloca as variaveis que voce quer usar nas propriedades this. voce armazena as variaveis nas propriedades this em cada uma em especifico
        this.name = name;
        this.age = age;
    }
}

//Instancia é o nome tecnico de quando voce quer usar a class que voce crio em sim agora em um objeto , ou seja voce vai pegar aquela base da class e vai utilizar ela . Voce cria uma variavel , e dentro dela voce coloca a propriedade new(que significa que voce ira criar um novo objeto) e ao lado voce coloca o nome da classe do objeto que vai usar e dentro dos parameteros , voce coloca as informações que voce coloco la dentro do parametro do construtor. 
//Se voce quiser que por exemplo todo os objeto tenham a mesma propriedade em especifico ai voce tem que criar a propriedade fora do construtor mas dentro ainda da class . por exemplo quer que todos os objetos tenham o mesmo tamanho no exemplo aqui do objeto pessoa. então voce somente coloca o nome da variavel "sem declarar ela com let nada" somente o nome  

let p1 = new Person('joao', 20)
let p2 = new Person('maria', 25)
let p3 = new Person('pedro', 29)

p1.tamanho = 2.10 //Aqui alterei o valor de uma propriedade de apenas um objeto os outros continuarão com a propriedade que estava padrão.
p2.tamanho = 1.55

console.log(`${p1.name} tem ${p1.age} anos e tem o tamanho de ${p1.tamanho} metros`)
console.log(`${p2.name} tem ${p2.age} anos e tem o tamanho de ${p2.tamanho.toFixed(2)} metros`)
console.log(`${p3.name} tem ${p3.age} anos e tem o tamanho de ${p3.tamanho} metros`)
