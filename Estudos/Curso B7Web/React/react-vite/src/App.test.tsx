//Testes unitatios - onde se cria teste para cada componente ou função dentro do sistema.

//Se usa o it(isso deve) e ele é uma função , que dentro dele se passa 2 parametros, o primeiro uma descrição do que é o teste , normalmente usa em ingles sempre coloca o should(deve) para que fique exemplo it should = isso deve(é um padrão para teste.) . e o segundo parametro é uma função onde vai ser feito o teste em si.
//Usa o expect que é uma função , e dentro dela voce passa o que voce quer testar seja ela uma variavel ou função ... depois coloca um ponto , e vai aparecer uma lista de coisa para testar o que voce passo dentro do expect. aqui usei o toBe. então fico assim expect(result).toBe(15) - espere(resultado).seja(15) , se der true ele passa. 
//Para rodar o teste vai no terminal e digite npm run test.

it('should add 1 to 1 and return 2', () => {
    let result = 1 + 2 ;
    expect(result).toBe(3)
})
it('should multiply 5 by 3 and return 15', () => {
    let result = 5 * 3;
    expect(result).toBe(15)
})