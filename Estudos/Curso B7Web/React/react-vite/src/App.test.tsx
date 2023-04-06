import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import { act } from "react-dom/test-utils";

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

/*Teste de integração.
- Teste de integração é quando voce quer fazer um teste dentro de um componente dentro de outro componente.
- Ex : Quando voce tenta acessar alguma pagina que não existe ou seja uma rota que não tenha nada. Normalmente tem um componente que criamos que seria para isso , ao tentar acessar alguma rota que não existe ele renderiza algo como "pagina não encontrada" e isto pode ser chamado de teste de integração pois é dentro do componente app , ele vai renderizar este componente de rota não encontrada , ai voce faz um teste para ver no caso se ao acessar algum link ele acho a mensagem de pagina não encontrada. 

- Ex : Tenho a pagina home , e tenho um botão cadastrar , que ao clica-lo ira ser renderizado um outro componente ou ira trocar algum outro componente , ao acionar deste click. Então eu faço um teste de integração onde eu simulo um click neste botão , e faco um teste procurando algum ou texto ou pode ser uma class de uma div, algo que iria renderizar na tela ou algo que iria mudar ao click ai faco um teste ve se apareceu algo do outro conteudo na tela.

 */

/*
it('should render NotFound component when entering a non existing route', ()=> {
    //Tem que renderizar o componente notFound quando ele entrar em uma rota não existente.


    // Ao usar o initialEntries - ele vai renderizar na tela aquela rota ali ou seja ele tenta acessar o App pela aquela rota ali, aqui coloquei uma rota inexistete pois, ai ele vai renderizar o componente notFound para poder fazer o teste. 
     const { container } = render(
        <MemoryRouter initialEntries={['/paginainexistente']}>
            <App />
        </MemoryRouter>

)
    const h2 = container.getElementsByTagName('h2')[0]
    expect(h2.innerHTML).toBe('Página não encontrada')
})
*/

it('should go to the registration page when clicking on the register button', () => {
    const { container } = render(
        <MemoryRouter>
            <App />
        </MemoryRouter>
    );

    //Função act para fazer a ação de click em teste, então voce seleciona o lugar que voce quer clicar em uma variavel , vai fazendo o caminho
    act(() => {
        //Aqui acessei o caminho acessando o html da tela com o container, e depois acessei uma class que dentro da div desta class na posição do array 0 ou seja o primeiro e unico item do array, teria uma tag a e depois de salvar em uma variavel , pegui o valor da variavel e usei a função click para clicar no botão para trocar de pagina ali no caso.
        let registerButton = container
        .getElementsByClassName('headerRight')[0]
        .getElementsByTagName('a')[0];

        registerButton.click();
    });

    
    //Depois de acessar a pagina nova ja clicada, fiz uma verificação se na pagina nova existia um texto com o screen.getByText para pegar um texto basico que estaria na tela. Depois de salvar esta verificação de texto na tela. 
    const registrationTitle = screen.getByText('Cadastro de carro');
    //Faz um except para ver se o valor da variavel estaria no documento . Se passar no teste quer dizer que ele acesso o botão , fez o click e testo um texto na pagina nova renderizada
    expect(registrationTitle).toBeInTheDocument();


})