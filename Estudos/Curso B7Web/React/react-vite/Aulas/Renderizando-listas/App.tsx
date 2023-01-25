import { Pessoa } from "./components/Pessoa";



const App = () => {
    //Criando uma lista com objetos
    let list = [
        {name: 'renan', age: 90},
        {name: 'joao', age: 25},
        {name: 'pedro', age: 20},
        {name: 'samanta', age: 50},
        {name: 'maria', age: 70}
    ];

    return(
        <div>
            <h2>Lista de presença</h2>
            <ul>

                {/* Criando um map , para ser exibido todos os itens da lista , e a função map , ela vai receber 2 parametros, primeiro o proprio item da lista aqui no caso o item do array , segundo o index - key(é a identificação do item , obrigatorio a ter esta key no segundo parametro)  para mostrar em qual numero o item da lista esta comecando 0 1 2 ... para identificar qual item é da lista se identifica por este index.
                
                E dentro deste map passe um component pessoa , passei como prop a key(obrigatorio) e o data é o proprio item que é o item do primeiro parametro, e la no componente que coloquei os type e como ele vai ser mostrado na tela dentro de um li
                */}
                {list.map((item, index) => (
                    <Pessoa key={index} data={item} />
                ))}
            </ul>
        </div>
    );
}

export default App;