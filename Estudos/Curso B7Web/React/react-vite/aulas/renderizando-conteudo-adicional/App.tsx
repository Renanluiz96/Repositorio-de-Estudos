import { useState } from "react";
//Criando uma renderização condicional na tela


const App = () => {
    //Usa uma state que vai comecar como false
    const [show, setShow] = useState(false);


    //Função que vai ser disparada ao click no botão
    const handleClick = () => {

        //Que ao ser clicada no botão ela vai setar o valor de setShow como true , e como false fazendo um toggle trocando de true para false cada vez ao ser clicada , voce pode coloca um if e else para verificar se quando estiver true mudar para false e vice e versa . Ou pode fazer um show com ! antes = !show - que ele vai invertendo toda vez que for acionado
        setShow ( !show );
    }

    return (
        <div>

            {/*Toda vez que for clicado , ele vai dispara a função pra alternar o valor da state para true e false.
            Vai fazer uma condição ternario, para que quando show tiver true, vai mostrar a string "oculta" , e caso o state show tiver false ele vai trocar o valor do texto do botão para "mostrar" */}
            <button onClick={handleClick}> {show ? 'Ocultar' : 'Mostrar'} </button>


            {/* Uma div com  uma condicional , aqui no caso  , a state show tiver , como true ele vai mostrar na tela uma div, se caso tiver false , não mostra. Fiz com uma div, mais voce pode colocar um site inteiro se quiser
            Usado a state o valor de && e depois o conteudo que voce quiser mostrar caso a condição for verdadeira. Pode ser uma string , uma div , um site inteiro se quiser. */}
            {show && 
                <div>
                    Bla Bla Bla
                </div>
            }
        </div>
    )
}

export default App