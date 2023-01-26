import {useState} from 'react'

const App = () => {


    //Criei uma useState que vai ter uma variavel n , com o valor inicial como 0
    const [n , setN] = useState(0)

    //Função que vai setar o valo da variavel para menos
    const hundleMinus = () => {
        setN(n - 1)
    }


    //Função que vai setar o valor da variavel para mais
    const hundleMore = () => {
        setN(n + 1)
    }


    return (
        <div>
            {/* Botão que vai disparar a função que vai diminuir o valor na tela */}
            <button onClick={hundleMinus}> - </button>

            {/*Valor na tela que vai ser alterado com os botões. */}
            <div>{n}</div>


            {/* Botão que vai disparar a função que vai aumentar o valor na tela */}
            <button onClick={hundleMore}> +</button>
        </div>
    );
}

export default App;