import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

/*Testes unitatios - onde se cria teste para cada componente ou função dentro do sistema.


//Se usa o it(isso deve) e ele é uma função , que dentro dele se passa 2 parametros, o primeiro uma descrição do que é o teste , normalmente usa em ingles sempre coloca o should(deve) para que fique exemplo it should = isso deve(é um padrão para teste.) . e o segundo parametro é uma função onde vai ser feito o teste em si.
//Usa o expect que é uma função , e dentro dela voce passa o que voce quer testar seja ela uma variavel ou função ... depois coloca um ponto , e vai aparecer uma lista de coisa para testar o que voce passo dentro do expect. aqui usei o toBe. então fico assim expect(result).toBe(15) - espere(resultado).seja(15) , se der true ele passa. 
//Para rodar o teste vai no terminal e digite npm run test.
*/

it('should add 1 to 1 and return 2', () => {
    let result = 1 + 2 ;
    expect(result).toBe(3)
})
it('should multiply 5 by 3 and return 15', () => {
    let result = 5 * 3;
    expect(result).toBe(15)
})

it('should have a container div', () => {
    //Acessando imformações dentro da html da pagina do App. voce renderiza a tela e salva ela em uma constante que é um objeto chamado container. Para ter acesso ao html daquele componente que esta sendo renderizado. 
    const { container } = render(
        <MemoryRouter>
            <App />
        </MemoryRouter>
    );

    //Depois de pegar o container html da pagina voce vai ter acesso ao DOM e todas as funções de manipulação de DOM normal. ai ali pode usar o getElementsByClassname(detalhe tem que usar o getElements no plural mesmo para ele retornar um array , nem que seja um array de 1 item só) para pegar uma classe em especifico , e poder testar se tem esta class em especifico na pagina. ai voce pega a quantidade de class que ele retorno pelo length , então se ele acho uma class que voce esta procurando ele vai ter o length 1 ou pode ter mais. Ai voce testa no caso se tiver um numero maior que 0 como o toBeGreaterThan(0) se ele retornar um array maior que 0 então o teste vai passar, se ele falhar é que o teste retorno 0 e não tem a class.
    expect(container.getElementsByClassName('container').length)
        .toBeGreaterThan(0)
})
