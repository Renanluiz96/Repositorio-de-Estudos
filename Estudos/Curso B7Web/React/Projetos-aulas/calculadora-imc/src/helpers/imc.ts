//Fazendo a parte logica do IMC

export type Level = {
    title: string;
    color: string;
    icon: 'down' | 'up';
    imc: number[];
    yourImc?: number; // Coloco este type como opcional , pois ele não vai estar dentro do objeto em si inicialmente , ele vai ser adicionado depois , quando achar o imc no final ,vai ser acrescentado o valor achado do imc neste type  para podermos pegar o resultado do imc e mostrar na tela atraves desta propriedade.
}

//Array onde vai conter os objetos com os dados de cada nivel do imc
export const levels: Level[] = [
    { title: 'Abaixo do peso', color: '#96a3ab', icon: 'down', imc: [0, 18.5] },
    { title: 'Peso ideal', color: '#0ead69', icon: 'up', imc: [18.6, 24.9] },
    { title: 'Acima do peso', color: '#E2B039', icon: 'down', imc: [25, 30] },
    { title: 'Obesidade', color: '#c3423f', icon: 'down', imc: [30.1, 99] }
];


//Função para calcular o peso e a altura e retornar em qual o nivel de imc que o usuario esta
export const calculateImc = (height: number, weight: number) => {
    //Fazendo o calculo e salvando em uma variavel
    const imc = weight / (height * height);


    //Faz um loop para ele ir verificando cada objeto do array levels. procurando o imc
    for(let i in levels) {

        //Verificação para ver ser o valor da variavel imc, é maior do que o primeiro item do array imc, e menor do que o segundo item do array imc. Ou seja se ele estiver entre um numero e outro , ele vai retornar este objeto inteiro seja o peso normal , obesidade ...
        if(imc >= levels[i].imc[0] && imc < levels[i].imc[1]) {

            //Criando uma copy do array levels para ele fazer uma copia do objeto que foi selecionado. para não alterar o original. Porque vai ser feito a modificação e quando ele adicionar o yourImc, ele não vai alterar no objeto em si ele altera na copia, que depois quando for limpar tudo ele só limpa a copia e a copia se perde , podendo assim refazer denovo , sem os dados ficarem aparecendo novamente dentro do griditem 
            let levelCopy:Level  = {...levels[i]};

            //Quando achar o objeto, acrescenta mais um atributo yourImc, que recebe o valor do proprio usuario , para poder mostrar na tela qual foi o valor imc do usuario
            levelCopy.yourImc = parseFloat(imc.toFixed(2)) // Fazer o imc retornar apenas com 2 casas decimais, mais o tofixed iria transformar-lo em uma string, ai voce usa o parseFloat para  transformar novamente ele em number
            return levelCopy; //Ele vai pega a copia adiciona o imc na copia e retornar ela , depois de eu retornar a copia ai sim acabo , voce se livra dela
        }
    }
    return null;
}
