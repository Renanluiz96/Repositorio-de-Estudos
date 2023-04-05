import { Header } from './index';

//Usando as funções da lib testing-library para renderizar, e o screen para para verificar na tela , simulando uma pessoa mechendo no site.
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

//Quando for testar um componente, tem que renderizar ele primeiro na tela para depois testa-lo. Para isso voce tem que usar uma função "render" do  testing library .
//Screen é para acessar a tela que foi renderizado pelo render. colocando o screen. vai aparecer muita opções paraa verificar o que tiver na tela, para poder fazer o teste.

it('should have a "Cadastrar" button', () => {
    //Renderizando na tela  com a função render, e dentro dela voce passa o componente em si. Se caso ele for um link ou tiver dentro do react-router-dom ele vai ter que estar dentro de um contexto de router, vai ter que usar um componente da lib react-router-dom para simular para simular um router em um ambiente de teste, chamado memoryRouter que é um componente , e dentro dele voce passa o componente que estaria no contexto de router para renderiza-lo e testa-lo.
    render(
        <MemoryRouter>
            <Header />
        </MemoryRouter>
    );
    
    //usando o screen.getByText() e dentro dele voce coloca algo, que ele vai la na pagina e vai procurar por algo escrito por esse nome que foi passado por parametro. Depois de procurar , ele vai salvar em uma variavel.
    let button = screen.getByText('Cadastrar');

    //Depois de salvar a variavel , voce faz um expect testando , se o conteudo daquela variavel , vai estar no documento/pagina (toBeInTheDocument) que é uma função do expect para teste.
    expect(button).toBeInTheDocument();
});

//Quando tiver fazendo testes é bom testar para funcionar, e depois testar para não funcionar tambem, só para garantir que de fato esta correto o teste.