import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { CarList } from './index';

it('should have a list of cars', () => {
    const { container } = render(
        //Renderiza o componente CarList do reactrouter e pega o html deste componente
        <MemoryRouter>
            <CarList />
        </MemoryRouter>
    );
    //Dentro html do componente ele vai pegar se tiver algum item com a class name e vai retornar se é maior que 0 . Pois como é um renderização condicional , então se caso ele mostrar que tem alguma classe dessa na tela, então quer dizer que vai ter a lista  , se caso tiver 0 não vai ter a lista na tela e então o teste não vai passar
    const listEl = container.getElementsByClassName('list');
    expect(listEl.length).toBeGreaterThan(0);
});

it('should have 5 cars in the list', () => {
    const { container } = render(
        <MemoryRouter>
            <CarList />
        </MemoryRouter>
    );
    
    //Para testar se tem uma quantidade de itens na tela pela class , no caso um map que tem uma quantidade de itens na tela, voce pega pela class que esta a div dentro do map , e verifica se tem a quantidade de class , ai voce verifica por quantos voce acha que tiver , pode ser uma lista de 1 item ,10 ,100 ... por ai vai , pode verifica um map desta forma .Aqui testei se a quantidade de itens do map tinha uma lista ja com 5 itens que eu salvei em uma constante.
    const carsList = container.getElementsByClassName('carItem');
    expect(carsList.length).toEqual(5);
});