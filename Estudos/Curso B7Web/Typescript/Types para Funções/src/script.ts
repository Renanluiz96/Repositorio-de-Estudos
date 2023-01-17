// Type para função = É quase como um Interface, por exemplo voce quer criar algumas funções para fazer coisas parecidas,que digamos vai usar alguns dados parecidos, então voce pode criar um type que vai digamos "padronizar" algumas propriedades . Criando basicamente a estruturas de uma função para ser reutilizada , só que nos moldes de uma função anonima.


//Criando um type especifico para ser reutulizado em funções. Este type estou padronizando que toda vez que eu usar ele , ele vai receber um n1: number , um n2:number . e o retorno desta função voce coloca depois do => que tambem vai ser um number
type MathFunction = (n1: number, n2: number) => number

// Então pode-se ver que somente de utilizar o type MathFunction , ele vai entender a padronização , eu não preciso ficar repetindo em todas elas que o n1 e n2 vai ser number, e o retorno vai ser number tambem. 
const subtrair: MathFunction = (n1, n2) => {
    return n1 - n2;
}

// Como no exemplo abaixo
const somar: MathFunction = (n1:number, n2: number): number => {
    return n1 + n2;
}

const multiplicar: MathFunction = (n1, n2) => {
    return n1 * n2;
}

const dividir: MathFunction = (n1, n2) => {
    return n1 / n2;
}