//Tipos primitivos , pode declarar qual vai ser o "tipo" da variavel que vai ser declarada colocando ':' depois da variavel e colocando o tipo logo depois, se voce declarar que aquela variavel vai ser de um tipo especifico, e voce colocar algum outro dado que não seja da mesma tipagem, vai acusar erro.
let nome: string = 'renan'; //Vai aceitar somente string

let idade: number = 90; // Somente tipo number, aceita float tambem

let programador: boolean = true; // Tipo Boolean para true ou false

//OBS : Na documentação do proprio typescript, se recomenda não sair colocando tipagem , em "todas" as  variaveis , pois por exemplo uma variavel nome = se supoem que vai ser colocado um nome de alguem , que vai ser do tipo string. Mesma coisa de uma variavel idade = Se propoem que vai ser colocado , um numero que seria a idade de uma pessoa.
//Então se recomenda em voce colocar uma tipagem em alguma variavel que vai ser manipulada , ou que pode receber algum dado de input por exemplo , que ai voce vai ter que manipula-la.