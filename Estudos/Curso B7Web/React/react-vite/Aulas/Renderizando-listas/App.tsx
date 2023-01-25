import { Pessoa } from "./components/Pessoa";

const App = () => {
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
                {list.map((item, index) => (
                    <Pessoa key={index} data={item} />
                ))}
            </ul>
        </div>
    );
}

export default App;