import React, { useState } from 'react';



const App = () => {
    /*Faz cada uma state para cada campo de input , para cada valor digitado for salvo separadamente. Para ter varias states com cada coisa que o usuario digito*/
    const [name, setName] = useState('');



    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {//Este é um type de "modificação (ChangeEvent) " de formularios . e o input entre as tags serve para dizer que este é um type input de formulario


        /*Associo state ao value , fez uma função que muda essa state */

        //Ao usar a função para trocar o valor do target que voce esta digitando.
        setName( event.target.value);

    }

    return (
        <div>
            <div>
            {/*Criando formulario , associando com uma state especifica , que voce esta digitando algo em um formulario , e este valor esta sendo salvo em uma state*/}

                Nome:
                <input type="text" value={name} onChange={handleInput} />
                <hr />
                Seu nome é: {name}
            </div>
        </div>
    );
}

export default App



//Fez uma ação indireta, que alterou um campo no caso a state , e alterou em outros locais , que usavam esta state fazendo a comunicação um com o outro. 
