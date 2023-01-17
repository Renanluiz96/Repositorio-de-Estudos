//Types Void = Seria quando uma função não retorna nada, ela somente executa um script para fazer algo em especifico, mais ela não chega a retornar nada, bem usado para modificar algum html, ou css na tela.

//Função do tipo void não ira retornar nada , então se voce colocar algum return(com algum conteudo) então ele vai dar problema.  Ao colocar type void voce esta "afirmando" que esta função vai ser void então obrigatoriamente se voce retornar algo vai dar erro.
const blabla = ():void => {
    // Se voce coloca o return , vai ser ineficaz. mais se voce coloca algum conteudo depois dela, isto vai ocasionar um erro. Pois eu tipei ela para receber nada(void)
    return

    let algo = ''
    //Quando voce usa um if e coloca um return , ele somete serve para parar a execução naquele momento em que o if for satisfeito. por exemplo se tiver  alguma classe no css então é true , e ele para a execução .
    if (algo) {
        return
    }
    return
} 


//Agora ao criar um type proprio que tem um retorno de função void. Então "sim" ele pode receber um retorno , mais somente em type para funções. Pois ele recebe um void . Mas se ele receber um return o typescript vai entender como um "extra" e vai aceitar, ele não espera nada , mais se receber pra ele ta bom tambem
type QualquerFuncao = () => void

// Pode ver que ao receber o type criado , que dentro dele tem um void, ele não reclama .
const algo: QualquerFuncao = () => {
    return 12;
}

//Ele ate pode retornar algo na variavel , mais lembre que retorna algo somente em type criado .
let retorno = algo()

